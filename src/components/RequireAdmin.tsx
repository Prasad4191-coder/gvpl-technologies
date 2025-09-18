import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RequireAdmin = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
    }
  }, [navigate]);

  return <>{children}</>;
};

export default RequireAdmin;
