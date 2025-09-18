import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const navItems = [
  { to: '/admin', label: 'Dashboard' },
  { to: '/admin/content', label: 'Content' },
  { to: '/admin/blogs', label: 'Blogs' },
  { to: '/admin/careers', label: 'Careers' }
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token && location.pathname !== '/admin/login') {
      navigate('/admin/login');
    }
  }, [location.pathname, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  return (
    <div className="admin-shell flex">
      <aside className="admin-aside">
        <div className="admin-aside-header">Admin CMS</div>
        <nav className="flex-1 p-2 space-y-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `${isActive ? 'admin-nav-link admin-nav-link-active text-[#009DFF]' : 'admin-nav-link'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button onClick={handleLogout} className="admin-btn-secondary m-3 text-sm">Logout</button>
        <Link to="/" className="mx-3 mb-4 text-xs text-gray-500">← Back to site</Link>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="admin-header">
          <div className="md:hidden font-semibold">Admin CMS</div>
          <div className="text-sm text-gray-500">{location.pathname}</div>
        </header>
        <main className="admin-main">
          {children}
        </main>
      </div>
    </div>
  );
}


