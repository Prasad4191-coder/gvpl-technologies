import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/gvpl_logo.png';
import Button from './Button';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const servicesLinks = [
  { label: 'CFD Services', href: '/services/cfd', description: 'Computational Fluid Dynamics (CFD) solutions.' },
  { label: 'FEA Services', href: '/services/fea', description: 'Finite Element Analysis (FEA) for engineering.' },
  { label: 'CAD Services', href: '/services/cad', description: 'Computer Aided Design (CAD) services.' },
  { label: 'NPD Services', href: '/services/npd', description: 'New Product Development (NPD) solutions.' },
  { label: 'RE Services', href: '/services/re', description: 'Reverse Engineering (RE) services.' },
  { label: 'PMC Services', href: '/services/pmc', description: 'Project Management & Consultation (PMC).' },
];

const industriesLinks = [
  { label: 'HVAC', href: '/industries/hvac', description: 'HVAC for various industries.' },
  { label: 'Chemical', href: '/industries/chemical', description: 'Chemical for various industries.' },
  { label: 'Aerospace Engineering', href: '/industries/aerospace-engineering', description: 'Aerospace Engineering for various industries.' },
  { label: 'Automotive', href: '/industries/automotive', description: 'Automotive for various industries.' },
  { label: 'Process', href: '/industries/process', description: 'Process for various industries.' },
  { label: 'Real Estate', href: '/industries/real-estate', description: 'Real Estate for various industries.' },
  { label: 'Defence', href: '/industries/defence', description: 'Defence for various industries.' },
  { label: 'Electronics', href: '/industries/electronics', description: 'Electronics for various industries.' },
  { label: 'Diesel Generator', href: '/industries/diesel-generator', description: 'Diesel Generator for various industries.' },
  { label: 'Food', href: '/industries/food', description: 'Food for various industries.' },
  { label: 'Marine', href: '/industries/marine', description: 'Marine for various industries.' },
  { label: 'Pharma', href: '/industries/pharma', description: 'Pharma for various industries.' }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState('');
  const [hoverDropdown, setHoverDropdown] = useState('');
  const [visibleDropdown, setVisibleDropdown] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for custom event to show services dropdown
  useEffect(() => {
    const handleShowServicesDropdown = () => {
      setHoverDropdown('services');
      setVisibleDropdown('services');
      // Auto-hide after 5 seconds
      setTimeout(() => {
        setHoverDropdown('');
      }, 5000);
    };

    window.addEventListener('showServicesDropdown', handleShowServicesDropdown);
    return () => window.removeEventListener('showServicesDropdown', handleShowServicesDropdown);
  }, []);



  // Smooth transition for dropdown switching
  React.useEffect(() => {
    if (!hoverDropdown) {
      // Fade out
      const timeout = setTimeout(() => setVisibleDropdown(''), 120);
      return () => clearTimeout(timeout);
    } else {
      setVisibleDropdown(hoverDropdown);
    }
  }, [hoverDropdown]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  const DropdownMenu = ({ items, multiColumn, columnsCount }: { items: { label: string; href: string; description: string }[], multiColumn?: boolean, columnsCount?: number }) => {
    const handleDropdownClose = () => {
      setHoverDropdown('');
      setVisibleDropdown('');
    };
    if (multiColumn) {
      const count = columnsCount || 3;
      const colSize = Math.ceil(items.length / count);
      const columns = Array.from({ length: count }, (_, i) => items.slice(i * colSize, (i + 1) * colSize));
      return (
        <div className="dropdown-menu absolute left-1/2 top-full w-auto max-w-3xl mx-auto bg-white border border-gray-200 shadow-xl z-40 rounded-xl py-2 animate-fade-in overflow-hidden backdrop-blur-sm" style={{ transform: 'translateX(-50%)' }}>
          <div className={`flex gap-8 px-6 py-6`}>
            {columns.map((col, idx) => (
              <ul key={idx} className="flex-1 min-w-0 space-y-3">
                {col.map(({ label, href, description }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      onClick={handleDropdownClose}
                      className={`block rounded-md px-4 py-2 transition-colors duration-200 ${location.pathname === href
                        ? 'bg-[#f0f8ff] text-[#009DFF] font-bold pointer-events-none'
                        : 'hover:bg-[#f0f8ff] hover:text-[#009DFF] text-gray-700'
                        }`}
                    >
                      <div className="font-medium text-base truncate">{label}</div>
                      <div className="text-xs text-gray-500 leading-tight truncate">{description}</div>
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      );
    }
    // Default single column
    return (
      <div className="dropdown-menu absolute left-0 top-full min-w-[260px] bg-white border border-gray-200 shadow-xl z-40 rounded-xl py-2 animate-fade-in backdrop-blur-sm">
        <ul className="p-2">
          {items.map(({ label, href, description }) => (
            <li key={label}>
              <Link
                to={href}
                onClick={handleDropdownClose}
                className={`block rounded-md px-4 py-2 transition-colors duration-200 ${location.pathname === href
                  ? 'bg-[#f0f8ff] text-[#009DFF] font-bold pointer-events-none'
                  : 'hover:bg-[#f0f8ff] hover:text-[#009DFF] text-gray-700'
                  }`}
              >
                <div className="font-medium text-base">{label}</div>
                <div className="text-xs text-gray-500 leading-tight">{description}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const MobileDropdown = ({ title, items }: { title: string; items: { label: string; href: string }[] }) => (
    <div className="border-b border-gray-200 pb-2">
      <button
        className="flex w-full items-center justify-between py-2 font-medium text-gray-700"
        onClick={() => setMobileDropdown(mobileDropdown === title ? '' : title)}
      >
        <span>{title}</span>
        <FaChevronDown className={`h-4 w-4 ml-2 transition-transform ${mobileDropdown === title ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-300 ${mobileDropdown === title ? 'max-h-96 mt-1' : 'max-h-0 overflow-hidden'}`}>
        <ul className="flex flex-col">
          {items.map(({ label, href }) => (
            <li key={label}>
              <Link
                to={href}
                className={`block py-2 pl-6 text-sm ${location.pathname === href
                  ? 'text-[#009DFF] font-bold pointer-events-none'
                  : 'text-gray-700 hover:underline'
                  }`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );


  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm'
        : 'bg-white md:bg-transparent border-b border-gray-100 md:border-transparent'
        }`}>
        <div className={`max-w-7xl mx-auto flex h-16 items-center justify-center md:justify-between px-4 sm:px-6 lg:px-8 relative`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="GVPL Technologies"
              className={`w-auto transition-all duration-300 ${!isScrolled ? 'h-12 md:h-16' : 'h-10 md:h-12'
                }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 relative">
            <Link to="/" className={`px-3 py-2 font-medium transition-colors ${isActive('/') ? 'text-[#009DFF] font-bold pointer-events-none' : (isScrolled ? 'text-gray-700 hover:text-[#009DFF]' : 'text-white hover:text-[#009DFF]')}`}>Home</Link>
            <Link to="/about" className={`px-3 py-2 font-medium transition-colors ${isActive('/about') ? 'text-[#009DFF] font-bold pointer-events-none' : (isScrolled ? 'text-gray-700 hover:text-[#009DFF]' : 'text-white hover:text-[#009DFF]')}`}>About</Link>
            <Link to="/careers" className={`px-3 py-2 font-medium transition-colors ${isActive('/careers') ? 'text-[#009DFF] font-bold pointer-events-none' : (isScrolled ? 'text-gray-700 hover:text-[#009DFF]' : 'text-white hover:text-[#009DFF]')}`}>Career</Link>
            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => setHoverDropdown('services')} onMouseLeave={() => setHoverDropdown('')}>
              <button type="button" className={`px-3 py-2 flex items-center gap-1 font-medium transition-colors ${location.pathname.startsWith('/services') ? 'text-[#009DFF] font-bold pointer-events-none' : (isScrolled ? 'text-gray-700 hover:text-[#009DFF]' : 'text-white hover:text-[#009DFF]')}`}>
                Services <FaChevronDown className={`ml-1 h-3 w-3 transition-transform ${hoverDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`transition-all duration-200 ease-in-out ${visibleDropdown === 'services' && hoverDropdown === 'services'
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
                  }`}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '100%',
                  minWidth: 260,
                  zIndex: 40,
                  transform: `translateX(-50%) translateY(${visibleDropdown === 'services' && hoverDropdown === 'services' ? '0' : '-8px'})`,
                  transition: 'opacity 0.2s, transform 0.2s'
                }}
              >
                {visibleDropdown === 'services' && <DropdownMenu items={servicesLinks} multiColumn={servicesLinks.length > 4} columnsCount={2} />}
              </div>
            </div>
            <Link to="/services/animation-studio" className={`px-3 py-2 font-medium transition-colors ${isActive('/services/animation-studio') ? 'text-[#009DFF] font-bold pointer-events-none' : (isScrolled ? 'text-gray-700 hover:text-[#009DFF]' : 'text-white hover:text-[#009DFF]')}`}>Animation Studio</Link>
            {/* Industries Dropdown */}
            <div className="relative" onMouseEnter={() => setHoverDropdown('industries')} onMouseLeave={() => setHoverDropdown('')}>
              <button type="button" className={`px-3 py-2 flex items-center gap-1 font-medium transition-colors ${location.pathname.startsWith('/industries') ? 'text-[#009DFF] font-bold pointer-events-none' : (isScrolled ? 'text-gray-700 hover:text-[#009DFF]' : 'text-white hover:text-[#009DFF]')}`}>
                Industries <FaChevronDown className={`ml-1 h-3 w-3 transition-transform ${hoverDropdown === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`transition-all duration-200 ease-in-out ${visibleDropdown === 'industries' && hoverDropdown === 'industries'
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
                  }`}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '100%',
                  minWidth: 260,
                  zIndex: 40,
                  transform: `translateX(-50%) translateY(${visibleDropdown === 'industries' && hoverDropdown === 'industries' ? '0' : '-8px'})`,
                  transition: 'opacity 0.2s, transform 0.2s'
                }}
              >
                {visibleDropdown === 'industries' && <DropdownMenu items={industriesLinks} multiColumn={industriesLinks.length > 6} columnsCount={3} />}
              </div>
            </div>
            <Link to="/contact" className={`px-3 py-2 font-medium transition-colors ${isActive('/contact') ? 'text-[#009DFF] font-bold pointer-events-none' : (isScrolled ? 'text-gray-700 hover:text-[#009DFF]' : 'text-white hover:text-[#009DFF]')}`}>Contact Us</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-2">
            <Button variant="primary" onClick={() => window.location.href = '/join-us'}>Join Us</Button>
          </div>
        </div>

      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-all duration-500 ease-in-out ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Overlay Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-16 border-b border-gray-100 shrink-0">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img
                src={logo}
                alt="GVPL Technologies"
                className="h-12 w-auto"
              />
            </Link>
            <button
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#009DFF]"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes className="h-6 w-6 text-gray-900" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 flex flex-col overflow-y-auto pb-24 pt-8">
            <nav className="flex flex-col px-6 gap-6">
              <Link
                to="/"
                className={`text-3xl font-bold transition-colors ${isActive('/') ? 'text-[#009DFF]' : 'text-gray-900 hover:text-[#009DFF]'}`}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              <div className="border-b border-gray-100 pb-4">
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === 'services' ? '' : 'services')}
                  className={`flex items-center justify-between w-full text-3xl font-bold transition-colors ${location.pathname.startsWith('/services') ? 'text-[#009DFF]' : 'text-gray-900 hover:text-[#009DFF]'}`}
                >
                  <span>Services</span>
                  <FaChevronDown className={`h-6 w-6 transition-transform duration-300 ${mobileDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileDropdown === 'services' ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col gap-4 pl-4 border-l-2 border-gray-100 ml-2">
                    {servicesLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`text-lg font-medium transition-colors ${isActive(link.href) ? 'text-[#009DFF]' : 'text-gray-600 hover:text-[#009DFF]'}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/services/animation-studio"
                className={`text-3xl font-bold transition-colors ${isActive('/services/animation-studio') ? 'text-[#009DFF]' : 'text-gray-900 hover:text-[#009DFF]'}`}
                onClick={() => setMobileOpen(false)}
              >
                Animation Studio
              </Link>

              <div className="border-b border-gray-100 pb-4">
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === 'industries' ? '' : 'industries')}
                  className={`flex items-center justify-between w-full text-3xl font-bold transition-colors ${location.pathname.startsWith('/industries') ? 'text-[#009DFF]' : 'text-gray-900 hover:text-[#009DFF]'}`}
                >
                  <span>Industries</span>
                  <FaChevronDown className={`h-6 w-6 transition-transform duration-300 ${mobileDropdown === 'industries' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileDropdown === 'industries' ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col gap-4 pl-4 border-l-2 border-gray-100 ml-2">
                    {industriesLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`text-lg font-medium transition-colors ${isActive(link.href) ? 'text-[#009DFF]' : 'text-gray-600 hover:text-[#009DFF]'}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className={`text-3xl font-bold transition-colors ${isActive('/about') ? 'text-[#009DFF]' : 'text-gray-900 hover:text-[#009DFF]'}`}
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                to="/careers"
                className={`text-3xl font-bold transition-colors ${isActive('/careers') ? 'text-[#009DFF]' : 'text-gray-900 hover:text-[#009DFF]'}`}
                onClick={() => setMobileOpen(false)}
              >
                Career
              </Link>
              <Link
                to="/contact"
                className={`text-3xl font-bold transition-colors ${isActive('/contact') ? 'text-[#009DFF]' : 'text-gray-900 hover:text-[#009DFF]'}`}
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-4 py-3 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <Link to="/" className={`flex flex-col items-center gap-1 transition-colors ${isActive('/') ? 'text-[#009DFF]' : 'text-gray-600 hover:text-[#009DFF]'}`} onClick={() => setMobileOpen(false)}>
          <span className="text-xs font-medium">Home</span>
        </Link>
        <Link to="/careers" className={`flex flex-col items-center gap-1 transition-colors ${isActive('/careers') ? 'text-[#009DFF]' : 'text-gray-600 hover:text-[#009DFF]'}`} onClick={() => setMobileOpen(false)}>
          <span className="text-xs font-medium">Careers</span>
        </Link>
        <Link to="/contact" className={`flex flex-col items-center gap-1 transition-colors ${isActive('/contact') ? 'text-[#009DFF]' : 'text-gray-600 hover:text-[#009DFF]'}`} onClick={() => setMobileOpen(false)}>
          <span className="text-xs font-medium">Contact</span>
        </Link>
        <button
          className={`flex flex-col items-center gap-1 transition-colors ${mobileOpen ? 'text-[#009DFF]' : 'text-gray-600 hover:text-[#009DFF]'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <FaBars className="h-5 w-5" />
          <span className="text-xs font-medium">Menu</span>
        </button>
      </div>
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.18s cubic-bezier(.4,0,.2,1); }
      `}</style>
    </>
  );
};

export default Navbar;
