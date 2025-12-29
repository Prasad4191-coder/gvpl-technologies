import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home';
import CAD from './pages/Services/CAD';
import FEA from './pages/Services/FEA';
import NPD from './pages/Services/NPD';
import PMC from './pages/Services/PMC';
import RE from './pages/Services/RE';
import ServiceCFD from './pages/Services/CFD';
import ProductAnimation from './pages/Services/ProductAnimation';
import AnimationStudio from './pages/Services/AnimationStudio';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Careers from './pages/Careers';
import IndustryDynamic from './pages/Industries/[slug]';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Login from './pages/Admin/Login';
import ContentManager from './pages/Admin/ContentManager';
import BlogManager from './pages/Admin/BlogManager';
import CareerManager from './pages/Admin/CareerManager';
import RequireAdmin from './components/RequireAdmin';
import AdminLayout from './layout/AdminLayout';


function AppContent() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');
  return (
    <div className="min-h-screen">
      {!isAdminRoute && <Navbar />}
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="/admin/login" element={
            <PageTransition>
              <Login />
            </PageTransition>
          } />
          <Route path="/admin" element={
            <RequireAdmin>
              <AdminLayout>
                <PageTransition>
                  <AdminDashboard />
                </PageTransition>
              </AdminLayout>
            </RequireAdmin>
          } />
          <Route path="/admin/content" element={
            <RequireAdmin>
              <AdminLayout>
                <PageTransition>
                  <ContentManager />
                </PageTransition>
              </AdminLayout>
            </RequireAdmin>
          } />
          <Route path="/admin/blogs" element={
            <RequireAdmin>
              <AdminLayout>
                <PageTransition>
                  <BlogManager />
                </PageTransition>
              </AdminLayout>
            </RequireAdmin>
          } />
          <Route path="/admin/careers" element={
            <RequireAdmin>
              <AdminLayout>
                <PageTransition>
                  <CareerManager />
                </PageTransition>
              </AdminLayout>
            </RequireAdmin>
          } />
          <Route path="/industries/:slug" element={
            <PageTransition>
              <IndustryDynamic />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } />
          <Route path="/join-us" element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } />
          <Route path="/services/cad" element={
            <PageTransition>
              <CAD />
            </PageTransition>
          } />
          <Route path="/services/fea" element={
            <PageTransition>
              <FEA />
            </PageTransition>
          } />
          <Route path="/services/npd" element={
            <PageTransition>
              <NPD />
            </PageTransition>
          } />
          <Route path="/services/pmc" element={
            <PageTransition>
              <PMC />
            </PageTransition>
          } />
          <Route path="/services/re" element={
            <PageTransition>
              <RE />
            </PageTransition>
          } />
          <Route path="/services/cfd" element={
            <PageTransition>
              <ServiceCFD />
            </PageTransition>
          } />
          <Route path="/services/product-animation" element={
            <PageTransition>
              <ProductAnimation />
            </PageTransition>
          } />
          <Route path="/services/animation-studio" element={
            <PageTransition>
              <AnimationStudio />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <AboutUs />
            </PageTransition>
          } />
          <Route path="/privacy-policy" element={
            <PageTransition>
              <PrivacyPolicy />
            </PageTransition>
          } />
          <Route path="/careers" element={
            <PageTransition>
              <Careers />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
