
import { useEffect, useState } from 'react';

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  image?: string;
  tags: string[];
}

const API_URL = '/api/blogs';

const BlogManager = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [form, setForm] = useState<{ title: string; content: string; author: string; image: string; tags: string }>({ title: '', content: '', author: '', image: '', tags: '' });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState('');

  const token = localStorage.getItem('admin_token');

  const fetchBlogs = async () => {
    const res = await fetch(API_URL, { headers: { Authorization: `Bearer ${token}` } });
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => { fetchBlogs(); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        body: JSON.stringify({ ...form, tags: form.tags.split(',').map(t => t.trim()) })
      });
      if (!res.ok) throw new Error('Failed to save blog');
      setForm({ title: '', content: '', author: '', image: '', tags: '' });
      setEditingId(null);
      fetchBlogs();
    } catch (err) {
      setError('Error saving blog');
    }
  };

  const handleEdit = (blog: Blog) => {
    setForm({
      title: blog.title,
      content: blog.content,
      author: blog.author,
      image: blog.image || '',
      tags: blog.tags.join(', ')
    });
    setEditingId(blog._id);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this blog post?')) return;
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchBlogs();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>
      <form className="mb-6 space-y-3 admin-card" onSubmit={handleSubmit}>
        <div className="admin-card-body space-y-3">
          {error && <div className="text-red-600">{error}</div>}
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="admin-input" required />
          <input name="author" value={form.author} onChange={handleChange} placeholder="Author" className="admin-input" required />
          <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="admin-input" />
          <input name="tags" value={form.tags} onChange={handleChange} placeholder="Tags (comma separated)" className="admin-input" />
          <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" className="admin-input" rows={5} required />
          <div>
            <button type="submit" className="admin-btn-primary">{editingId ? 'Update' : 'Create'} Blog</button>
            {editingId && <button type="button" className="admin-btn-secondary ml-3" onClick={() => { setEditingId(null); setForm({ title: '', content: '', author: '', image: '', tags: '' }); }}>Cancel</button>}
          </div>
        </div>
      </form>
      <div className="grid gap-4">
        {blogs.map(blog => (
          <div key={blog._id} className="admin-card">
            <div className="admin-card-body">
              <h2 className="text-lg font-semibold mb-1">{blog.title}</h2>
              <p className="text-sm text-gray-600 mb-2">By {blog.author}</p>
              {blog.image && <img src={blog.image} alt="Blog" className="mb-2 max-h-40" />}
              <div className="mb-2 text-gray-700 text-sm">{blog.content}</div>
              <div className="mb-3 text-xs text-gray-500">Tags: {blog.tags.join(', ')}</div>
              <button className="admin-btn-secondary mr-2" onClick={() => handleEdit(blog)}>Edit</button>
              <button className="admin-btn-secondary" onClick={() => handleDelete(blog._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManager;
