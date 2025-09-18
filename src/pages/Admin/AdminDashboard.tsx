import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/admin/content" className="admin-card hover:shadow transition-shadow">
          <div className="admin-card-body">
            <h2 className="text-lg font-semibold mb-1">Website Content</h2>
            <p className="text-sm text-gray-600">Edit home, about, contact, services, industries.</p>
          </div>
        </Link>
        <Link to="/admin/blogs" className="admin-card hover:shadow transition-shadow">
          <div className="admin-card-body">
            <h2 className="text-lg font-semibold mb-1">Blogs</h2>
            <p className="text-sm text-gray-600">Create, edit, and delete blog posts.</p>
          </div>
        </Link>
        <Link to="/admin/careers" className="admin-card hover:shadow transition-shadow">
          <div className="admin-card-body">
            <h2 className="text-lg font-semibold mb-1">Careers</h2>
            <p className="text-sm text-gray-600">Add, update, or remove jobs.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
