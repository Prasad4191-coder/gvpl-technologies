
import { useEffect, useState } from 'react';

interface Career {
  _id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  requirements: string[];
  active: boolean;
}

const API_URL = '/api/careers';

const CareerManager = () => {
  const [careers, setCareers] = useState<Career[]>([]);
  const [form, setForm] = useState<{ title: string; description: string; location: string; type: string; requirements: string; active: boolean }>({ title: '', description: '', location: '', type: '', requirements: '', active: true });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState('');

  const token = localStorage.getItem('admin_token');

  const fetchCareers = async () => {
    const res = await fetch(API_URL, { headers: { Authorization: `Bearer ${token}` } });
    const data = await res.json();
    setCareers(data);
  };

  useEffect(() => { fetchCareers(); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm({ ...form, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `${API_URL}/${editingId}` : API_URL;
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ ...form, requirements: form.requirements.split(',').map(r => r.trim()) })
      });
      if (!res.ok) throw new Error('Failed to save career');
      setForm({ title: '', description: '', location: '', type: '', requirements: '', active: true });
      setEditingId(null);
      fetchCareers();
    } catch (err) {
      setError('Error saving career');
    }
  };

  const handleEdit = (career: Career) => {
    setForm({
      title: career.title,
      description: career.description,
      location: career.location,
      type: career.type,
      requirements: career.requirements.join(', '),
      active: career.active
    });
    setEditingId(career._id);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this career opportunity?')) return;
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchCareers();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Careers</h1>
      <form className="mb-6 space-y-3 admin-card" onSubmit={handleSubmit}>
        <div className="admin-card-body space-y-3">
          {error && <div className="text-red-600">{error}</div>}
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="admin-input" required />
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="admin-input" required />
          <input name="type" value={form.type} onChange={handleChange} placeholder="Type (Full-time, Contract, etc.)" className="admin-input" required />
          <input name="requirements" value={form.requirements} onChange={handleChange} placeholder="Requirements (comma separated)" className="admin-input" />
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="admin-input" rows={4} required />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="active" checked={form.active} onChange={handleChange} />
            Active
          </label>
          <div>
            <button type="submit" className="admin-btn-primary">{editingId ? 'Update' : 'Create'} Career</button>
            {editingId && <button type="button" className="admin-btn-secondary ml-3" onClick={() => { setEditingId(null); setForm({ title: '', description: '', location: '', type: '', requirements: '', active: true }); }}>Cancel</button>}
          </div>
        </div>
      </form>
      <div className="grid gap-4">
        {careers.map(career => (
          <div key={career._id} className="admin-card">
            <div className="admin-card-body">
              <h2 className="text-lg font-semibold mb-1">{career.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{career.location} | {career.type}</p>
              <div className="mb-2 text-gray-700 text-sm">{career.description}</div>
              <div className="mb-2 text-xs text-gray-500">Requirements: {career.requirements.join(', ')}</div>
              <div className="mb-3 text-xs {career.active ? 'text-green-600' : 'text-gray-500'}">{career.active ? 'Active' : 'Inactive'}</div>
              <button className="admin-btn-secondary mr-2" onClick={() => handleEdit(career)}>Edit</button>
              <button className="admin-btn-secondary" onClick={() => handleDelete(career._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerManager;
