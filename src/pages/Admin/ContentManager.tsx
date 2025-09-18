
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';
import ConfirmDialog from '../../components/ConfirmDialog';

interface HomeContent {
  heroSlides: { title: string; description: string; image: string }[];
  services: { title: string; description: string; image: string }[];
  industries: { image: string; title: string; description: string }[];
  partners: { name?: string; logo: string; url?: string }[];
  stats: { value: number; suffix: string; label: string }[];
  aboutHeroSlides: { title: string; description: string; image: string }[];
  contactInfo: {
    phones: { role: string; number: string }[];
    email: string;
    address: string;
    mapEmbed: string;
  };
}

const API_URL = '/api/home';

type TabKey = 'home' | 'services' | 'industries' | 'contact' | 'about';

const ContentManager = () => {
  const [content, setContent] = useState<HomeContent | null>(null);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'hero' | 'service' | 'industry' | 'partner' | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [modalData, setModalData] = useState<any>({});
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState<() => void>(() => {});

  // Services editor state
  const [services, setServices] = useState<any[]>([]);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [serviceDraft, setServiceDraft] = useState<any | null>(null);

  // Industries editor state
  const [industries, setIndustries] = useState<any[]>([]);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('');
  const [industryDraft, setIndustryDraft] = useState<any | null>(null);

  const token = localStorage.getItem('admin_token');

  const defaultContent: HomeContent = {
    heroSlides: [{ title: '', description: '', image: '' }],
    services: [],
    industries: [],
    partners: [],
    stats: [],
    aboutHeroSlides: [],
    contactInfo: { phones: [], email: '', address: '', mapEmbed: '' },
  };

  const normalizeContent = (data: Partial<HomeContent> | null): HomeContent => {
    return {
      ...defaultContent,
      ...(data || {}),
      heroSlides: data?.heroSlides ?? defaultContent.heroSlides,
      services: data?.services ?? defaultContent.services,
      industries: data?.industries ?? defaultContent.industries,
      partners: data?.partners ?? defaultContent.partners,
      stats: data?.stats ?? defaultContent.stats,
      aboutHeroSlides: data?.aboutHeroSlides ?? defaultContent.aboutHeroSlides,
      contactInfo: { ...defaultContent.contactInfo, ...(data?.contactInfo || {}) },
    };
  };

  const fetchContent = async () => {
    const res = await fetch(API_URL, { headers: { Authorization: `Bearer ${token}` } });
    if (!res.ok) throw new Error('Failed to load content');
    const data = (await res.json()) as Partial<HomeContent> | null;
    setContent(normalizeContent(data));
  };

  const fetchServices = async () => {
    const res = await fetch('/api/services', { headers: { Authorization: `Bearer ${token}` } });
    const list = await res.json();
    setServices(list);
    if (list.length && !selectedServiceId) {
      setSelectedServiceId(list[0]._id);
      setServiceDraft(list[0]);
    }
  };

  const fetchIndustries = async () => {
    const res = await fetch('/api/industries', { headers: { Authorization: `Bearer ${token}` } });
    const list = await res.json();
    setIndustries(list);
    if (list.length && !selectedIndustryId) {
      setSelectedIndustryId(list[0]._id);
      setIndustryDraft(list[0]);
    }
  };

  useEffect(() => { fetchContent(); fetchServices(); fetchIndustries(); }, []);


  const handleContactChange = (field: string, value: string) => {
    if (!content) return;
    setContent({ ...content, contactInfo: { ...content.contactInfo, [field]: value } });
  };

  const handleSaveHome = async () => {
    setSaving(true);
    setError('');
    try {
      const res = await fetch(API_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(content)
      });
      if (!res.ok) throw new Error('Failed to save content');
      setSaving(false);
    } catch (err) {
      setError('Error saving content');
      setSaving(false);
    }
  };


  const handleSaveService = async () => {
    if (!serviceDraft?._id) return;
    setSaving(true);
    setError('');
    const res = await fetch(`/api/services/${serviceDraft._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(serviceDraft)
    });
    if (!res.ok) setError('Failed to save service');
    setSaving(false);
  };

  const handleSaveIndustry = async () => {
    if (!industryDraft?._id) return;
    setSaving(true);
    setError('');
    const res = await fetch(`/api/industries/${industryDraft._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(industryDraft)
    });
    if (!res.ok) setError('Failed to save industry');
    setSaving(false);
  };

  const openModal = (type: 'hero' | 'service' | 'industry' | 'partner', index?: number) => {
    setModalType(type);
    setEditingIndex(index ?? null);
    if (index !== undefined) {
      // Editing existing item
      const items = content?.[type === 'hero' ? 'heroSlides' : type === 'service' ? 'services' : type === 'industry' ? 'industries' : 'partners'] || [];
      setModalData(items[index] || {});
    } else {
      // Adding new item
      setModalData(type === 'partner' ? { name: '', logo: '', url: '' } : { title: '', description: '', image: '' });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
    setEditingIndex(null);
    setModalData({});
  };

  const saveModalData = () => {
    if (!content || !modalType) return;
    
    const items = [...(content[modalType === 'hero' ? 'heroSlides' : modalType === 'service' ? 'services' : modalType === 'industry' ? 'industries' : 'partners'] || [])];
    
    if (editingIndex !== null) {
      // Update existing
      items[editingIndex] = modalData;
    } else {
      // Add new
      items.push(modalData);
    }
    
    setContent({
      ...content,
      [modalType === 'hero' ? 'heroSlides' : modalType === 'service' ? 'services' : modalType === 'industry' ? 'industries' : 'partners']: items
    });
    closeModal();
  };

  const confirmRemove = (type: 'hero' | 'service' | 'industry' | 'partner', index: number) => {
    setConfirmAction(() => () => {
      if (!content) return;
      const items = [...(content[type === 'hero' ? 'heroSlides' : type === 'service' ? 'services' : type === 'industry' ? 'industries' : 'partners'] || [])];
      items.splice(index, 1);
      setContent({
        ...content,
        [type === 'hero' ? 'heroSlides' : type === 'service' ? 'services' : type === 'industry' ? 'industries' : 'partners']: items
      });
    });
    setConfirmOpen(true);
  };

  if (!content) return <div className="admin-card"><div className="admin-card-body">Loading...</div></div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Website Content</h1>
      {error && <div className="admin-card mb-4"><div className="admin-card-body text-red-600">{error}</div></div>}

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b">
        {(['home','services','industries','contact','about'] as TabKey[]).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 -mb-px ${activeTab===tab? 'border-b-2 border-[#009DFF] font-semibold text-[#009DFF]' : 'text-gray-500'}`}
          >{tab.toUpperCase()}</button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <label className="text-sm text-gray-600">Preview</label>
          <input type="checkbox" checked={showPreview} onChange={e=>setShowPreview(e.target.checked)} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* PREVIEW PANE */}
      {showPreview && (
        <div className="admin-card overflow-auto">
          <div className="admin-card-body">
          {activeTab === 'home' && (
            <div>
              <div className="relative h-64 mb-4">
                {/* Hero Preview */}
                <img src={content.heroSlides[0]?.image || ''} alt="hero" className="w-full h-full object-cover rounded" />
                <div className="absolute inset-0 bg-black/40 rounded" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{content.heroSlides[0]?.title}</h3>
                  <p className="text-sm opacity-90">{content.heroSlides[0]?.description}</p>
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <div className="font-semibold">Contact</div>
                <div>Email: {content.contactInfo?.email}</div>
                <div>Address: {content.contactInfo?.address}</div>
              </div>
            </div>
          )}
          {activeTab === 'services' && serviceDraft && (
            <div className="space-y-3">
              <div className="relative h-48">
                <img src={serviceDraft.hero?.image || ''} alt="svc" className="w-full h-full object-cover rounded" />
                <div className="absolute bottom-3 left-3 text-white drop-shadow">
                  <div className="text-lg font-bold">{serviceDraft.hero?.title}</div>
                  <div className="text-sm opacity-90">{serviceDraft.hero?.subtitle}</div>
                </div>
              </div>
              <div className="text-sm"><span className="font-semibold">Name:</span> {serviceDraft.name}</div>
            </div>
          )}
          {activeTab === 'industries' && industryDraft && (
            <div className="space-y-3">
              <img src={industryDraft.image || ''} className="w-full h-48 object-cover rounded" />
              <div className="text-lg font-bold">{industryDraft.name}</div>
              <div className="text-sm text-gray-500">/{industryDraft.slug}</div>
            </div>
          )}
          {activeTab === 'contact' && (
            <div className="space-y-2 text-sm">
              <div className="font-semibold">Contact Preview</div>
              <div>Email: {content.contactInfo?.email}</div>
              <div>Address: {content.contactInfo?.address}</div>
              <div>Phones: {(content.contactInfo?.phones||[]).map(p=>p.number).join(', ')}</div>
            </div>
          )}
          {activeTab === 'about' && (
            <div className="text-sm text-gray-500">About preview placeholder</div>
          )}
          </div>
        </div>
      )}

      {/* EDITOR PANE */}
      <div>
      {activeTab === 'home' && (
      <div className="space-y-6">
        <div className="admin-card">
          <div className="admin-card-body">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Hero Slides</h2>
              <button className="admin-btn-secondary" onClick={() => openModal('hero')}>Add slide</button>
            </div>
            <div className="space-y-3">
              {content.heroSlides.map((slide, i) => (
                <div key={i} className="border rounded-md p-3 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium">{slide.title || `Slide ${i+1}`}</div>
                    <div className="text-sm text-gray-500 truncate">{slide.description}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="admin-btn-secondary text-xs" onClick={() => openModal('hero', i)}>Edit</button>
                    <button className="text-xs text-red-600" onClick={() => confirmRemove('hero', i)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-body">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Home Services</h2>
              <button className="admin-btn-secondary" onClick={() => openModal('service')}>Add service</button>
            </div>
            <div className="space-y-3">
              {content.services.map((svc, i) => (
                <div key={i} className="border rounded-md p-3 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium">{svc.title || `Service ${i+1}`}</div>
                    <div className="text-sm text-gray-500 line-clamp-2">{svc.description}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="admin-btn-secondary text-xs" onClick={() => openModal('service', i)}>Edit</button>
                    <button className="text-xs text-red-600" onClick={() => confirmRemove('service', i)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-body">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Industries</h2>
              <button className="admin-btn-secondary" onClick={() => openModal('industry')}>Add industry</button>
            </div>
            <div className="space-y-3">
              {content.industries.map((ind, i) => (
                <div key={i} className="border rounded-md p-3 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium">{ind.title || `Industry ${i+1}`}</div>
                    <div className="text-sm text-gray-500">{ind.description}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="admin-btn-secondary text-xs" onClick={() => openModal('industry', i)}>Edit</button>
                    <button className="text-xs text-red-600" onClick={() => confirmRemove('industry', i)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="admin-card">
          <div className="admin-card-body">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Partners</h2>
              <button className="admin-btn-secondary" onClick={() => openModal('partner')}>Add partner</button>
            </div>
            <div className="space-y-3">
              {content.partners.map((p, i) => (
                <div key={i} className="border rounded-md p-3 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="font-medium">{p.name || `Partner ${i+1}`}</div>
                    <div className="text-sm text-gray-500">{p.url}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="admin-btn-secondary text-xs" onClick={() => openModal('partner', i)}>Edit</button>
                    <button className="text-xs text-red-600" onClick={() => confirmRemove('partner', i)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}

      {activeTab === 'contact' && (
      <div className="mb-8 admin-card">
        <div className="admin-card-body">
          <h2 className="text-lg font-semibold mb-3">Contact Info</h2>
          <label className="admin-label">Email</label>
          <input value={content.contactInfo?.email ?? ''} onChange={e => handleContactChange('email', e.target.value)} placeholder="Email" className="admin-input mb-2" />
          <label className="admin-label">Address</label>
          <input value={content.contactInfo?.address ?? ''} onChange={e => handleContactChange('address', e.target.value)} placeholder="Address" className="admin-input mb-2" />
          <label className="admin-label">Map Embed URL</label>
          <input value={content.contactInfo?.mapEmbed ?? ''} onChange={e => handleContactChange('mapEmbed', e.target.value)} placeholder="Map Embed URL" className="admin-input mb-2" />
        </div>
      </div>
      )}

      {activeTab === 'services' && (
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <label className="admin-label m-0">Select Service</label>
            <select className="admin-input max-w-xs" value={selectedServiceId} onChange={e => {
              const id = e.target.value; setSelectedServiceId(id); setServiceDraft(services.find(s=>s._id===id) || null);
            }}>
              {services.map(s => <option key={s._id} value={s._id}>{s.name}</option>)}
            </select>
          </div>
          {serviceDraft && (
            <div className="admin-card">
              <div className="admin-card-body space-y-3">
                <input className="admin-input" value={serviceDraft.name || ''} onChange={e=>setServiceDraft({...serviceDraft, name:e.target.value})} placeholder="Service name" />
                <input className="admin-input" value={serviceDraft.hero?.title || ''} onChange={e=>setServiceDraft({...serviceDraft, hero:{...serviceDraft.hero, title:e.target.value}})} placeholder="Hero title" />
                <input className="admin-input" value={serviceDraft.hero?.subtitle || ''} onChange={e=>setServiceDraft({...serviceDraft, hero:{...serviceDraft.hero, subtitle:e.target.value}})} placeholder="Hero subtitle" />
                <input className="admin-input" value={serviceDraft.hero?.image || ''} onChange={e=>setServiceDraft({...serviceDraft, hero:{...serviceDraft.hero, image:e.target.value}})} placeholder="Hero image URL" />
                <button onClick={handleSaveService} className="admin-btn-primary" disabled={saving}>{saving? 'Saving...' : 'Save Service'}</button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'industries' && (
        <div className="space-y-4">
          <div className="flex gap-2 items-center">
            <label className="admin-label m-0">Select Industry</label>
            <select className="admin-input max-w-xs" value={selectedIndustryId} onChange={e => {
              const id = e.target.value; setSelectedIndustryId(id); setIndustryDraft(industries.find(s=>s._id===id) || null);
            }}>
              {industries.map(s => <option key={s._id} value={s._id}>{s.name}</option>)}
            </select>
          </div>
          {industryDraft && (
            <div className="admin-card">
              <div className="admin-card-body space-y-3">
                <input className="admin-input" value={industryDraft.name || ''} onChange={e=>setIndustryDraft({...industryDraft, name:e.target.value})} placeholder="Industry name" />
                <input className="admin-input" value={industryDraft.slug || ''} onChange={e=>setIndustryDraft({...industryDraft, slug:e.target.value})} placeholder="Slug" />
                <input className="admin-input" value={industryDraft.image || ''} onChange={e=>setIndustryDraft({...industryDraft, image:e.target.value})} placeholder="Image URL" />
                <button onClick={handleSaveIndustry} className="admin-btn-primary" disabled={saving}>{saving? 'Saving...' : 'Save Industry'}</button>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'home' && (
        <button onClick={handleSaveHome} className="admin-btn-primary" disabled={saving}>{saving ? 'Saving...' : 'Save Home Content'}</button>
      )}
      </div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        onSave={saveModalData}
        title={modalType ? `Edit ${modalType.charAt(0).toUpperCase() + modalType.slice(1)}` : ''}
      >
        {modalType === 'hero' && (
          <div className="space-y-4">
            <div>
              <label className="admin-label">Title</label>
              <input
                value={modalData.title || ''}
                onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
                className="admin-input"
                placeholder="Slide title"
              />
            </div>
            <div>
              <label className="admin-label">Description</label>
              <input
                value={modalData.description || ''}
                onChange={(e) => setModalData({ ...modalData, description: e.target.value })}
                className="admin-input"
                placeholder="Slide description"
              />
            </div>
            <div>
              <label className="admin-label">Image</label>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  value={modalData.image || ''}
                  onChange={(e) => setModalData({ ...modalData, image: e.target.value })}
                  className="admin-input"
                  placeholder="Paste image URL"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = () => {
                      setModalData({ ...modalData, image: String(reader.result || '') });
                    };
                    reader.readAsDataURL(file);
                  }}
                  className="admin-input"
                />
              </div>
            </div>
          </div>
        )}

        {modalType === 'service' && (
          <div className="space-y-4">
            <div>
              <label className="admin-label">Title</label>
              <input
                value={modalData.title || ''}
                onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
                className="admin-input"
                placeholder="Service title"
              />
            </div>
            <div>
              <label className="admin-label">Description</label>
              <textarea
                value={modalData.description || ''}
                onChange={(e) => setModalData({ ...modalData, description: e.target.value })}
                className="admin-input"
                rows={3}
                placeholder="Service description"
              />
            </div>
            <div>
              <label className="admin-label">Image</label>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  value={modalData.image || ''}
                  onChange={(e) => setModalData({ ...modalData, image: e.target.value })}
                  className="admin-input"
                  placeholder="Paste image URL"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = () => {
                      setModalData({ ...modalData, image: String(reader.result || '') });
                    };
                    reader.readAsDataURL(file);
                  }}
                  className="admin-input"
                />
              </div>
            </div>
          </div>
        )}

        {modalType === 'industry' && (
          <div className="space-y-4">
            <div>
              <label className="admin-label">Title</label>
              <input
                value={modalData.title || ''}
                onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
                className="admin-input"
                placeholder="Industry title"
              />
            </div>
            <div>
              <label className="admin-label">Description</label>
              <input
                value={modalData.description || ''}
                onChange={(e) => setModalData({ ...modalData, description: e.target.value })}
                className="admin-input"
                placeholder="Industry description"
              />
            </div>
            <div>
              <label className="admin-label">Icon/Image</label>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  value={modalData.image || ''}
                  onChange={(e) => setModalData({ ...modalData, image: e.target.value })}
                  className="admin-input"
                  placeholder="Paste image URL"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = () => {
                      setModalData({ ...modalData, image: String(reader.result || '') });
                    };
                    reader.readAsDataURL(file);
                  }}
                  className="admin-input"
                />
              </div>
            </div>
          </div>
        )}

        {modalType === 'partner' && (
          <div className="space-y-4">
            <div>
              <label className="admin-label">Name</label>
              <input
                value={modalData.name || ''}
                onChange={(e) => setModalData({ ...modalData, name: e.target.value })}
                className="admin-input"
                placeholder="Partner name"
              />
            </div>
            <div>
              <label className="admin-label">Website URL</label>
              <input
                value={modalData.url || ''}
                onChange={(e) => setModalData({ ...modalData, url: e.target.value })}
                className="admin-input"
                placeholder="https://example.com"
              />
            </div>
            <div>
              <label className="admin-label">Logo</label>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  value={modalData.logo || ''}
                  onChange={(e) => setModalData({ ...modalData, logo: e.target.value })}
                  className="admin-input"
                  placeholder="Paste logo URL"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = () => {
                      setModalData({ ...modalData, logo: String(reader.result || '') });
                    };
                    reader.readAsDataURL(file);
                  }}
                  className="admin-input"
                />
              </div>
            </div>
          </div>
        )}
      </Modal>

      <ConfirmDialog
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={confirmAction}
        title="Confirm Delete"
        message="Are you sure you want to delete this item? This action cannot be undone."
      />
    </div>
  );
};

export default ContentManager;
