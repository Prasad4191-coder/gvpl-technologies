import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">Home Content</h2>
          <p className="text-gray-600 mb-4">Manage hero, services, industries, partners, stats, and contact info.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">Blogs</h2>
          <p className="text-gray-600 mb-4">Create, edit, and delete blog posts.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Manage</button>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">Careers</h2>
          <p className="text-gray-600 mb-4">Post and update career opportunities.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Manage</button>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">Services</h2>
          <p className="text-gray-600 mb-4">Add, edit, and remove service details.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Manage</button>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-2">Industries</h2>
          <p className="text-gray-600 mb-4">Update industry information and images.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Manage</button>
        </div>
      </div>
    </div>
  );
}
