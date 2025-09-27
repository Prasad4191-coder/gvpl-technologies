import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/gvpl_logo.png';
import Button from './Button';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const servicesLinks = [
  { label: 'CAD Services', href: '/services/cad', description: 'Computer Aided Design (CAD) services.' },
  { label: 'FEA Services', href: '/services/fea', description: 'Finite Element Analysis (FEA) for engineering.' },
  { label: 'NPD Services', href: '/services/npd', description: 'New Product Development (NPD) solutions.' },
  { label: 'PMC Services', href: '/services/pmc', description: 'Project Management & Consultation (PMC).' },
  { label: 'RE Services', href: '/services/re', description: 'Reverse Engineering (RE) services.' },
  { label: 'CFD Services', href: '/services/cfd', description: 'Computational Fluid Dynamics (CFD) solutions.' },
];

const industriesLinks = [
  { label: 'Aerospace Engineering', href: '/industries/aerospace-engineering', description: 'Aerospace Engineering for various industries.' },
  { label: 'Automotive', href: '/industries/automotive', description: 'Automotive for various industries.' },
  { label: 'Chemical', href: '/industries/chemical', description: 'Chemical for various industries.' },
  { label: 'Defence', href: '/industries/defence', description: 'Defence for various industries.' },
  { label: 'Diesel Generator', href: '/industries/diesel-generator', description: 'Diesel Generator for various industries.' },
  { label: 'Electronics', href: '/industries/electronics', description: 'Electronics for various industries.' },
  { label: 'Food', href: '/industries/food', description: 'Food for various industries.' },
  { label: 'HVAC', href: '/industries/hvac', description: 'HVAC for various industries.' },
  { label: 'Marine', href: '/industries/marine', description: 'Marine for various industries.' },
  { label: 'Pharma', href: '/industries/pharma', description: 'Pharma for various industries.' },
  { label: 'Process', href: '/industries/process', description: 'Process for various industries.' },
  { label: 'Real Estate', href: '/industries/real-estate', description: 'Real Estate for various industries.' }
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

  const isHomePage = location.pathname === '/';

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isHomePage
        ? (isScrolled
          ? 'bg-black/20 backdrop-blur-xl border-b border-white/10'
          : 'navbar-transparent border-b border-transparent')
        : 'bg-white/90 backdrop-blur-sm border-b border-gray-200'
      }`}>
      <div className={`max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 ${isHomePage && !isScrolled ? 'navbar-transparent' : ''
        }`}>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="GVPL Technologies"
            className={`w-auto transition-all duration-300 ${isHomePage && !isScrolled ? 'h-16' : 'h-12'
              }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 relative">
          <Link to="/" className={`px-3 py-2 font-medium transition-colors ${isActive('/') ? 'text-[#009DFF] font-bold pointer-events-none' : (isHomePage ? 'text-white hover:text-[#009DFF]' : 'text-gray-700 hover:text-[#009DFF]')}`}>Home</Link>
          <Link to="/about" className={`px-3 py-2 font-medium transition-colors ${isActive('/about') ? 'text-[#009DFF] font-bold pointer-events-none' : (isHomePage ? 'text-white hover:text-[#009DFF]' : 'text-gray-700 hover:text-[#009DFF]')}`}>About</Link>
          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setHoverDropdown('services')} onMouseLeave={() => setHoverDropdown('')}>
            <button type="button" className={`px-3 py-2 flex items-center gap-1 font-medium transition-colors ${location.pathname.startsWith('/services') ? 'text-[#009DFF] font-bold pointer-events-none' : (isHomePage ? 'text-white hover:text-[#009DFF]' : 'text-gray-700 hover:text-[#009DFF]')}`}>
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
          {/* Industries Dropdown */}
          <div className="relative" onMouseEnter={() => setHoverDropdown('industries')} onMouseLeave={() => setHoverDropdown('')}>
            <button type="button" className={`px-3 py-2 flex items-center gap-1 font-medium transition-colors ${location.pathname.startsWith('/industries') ? 'text-[#009DFF] font-bold pointer-events-none' : (isHomePage ? 'text-white hover:text-[#009DFF]' : 'text-gray-700 hover:text-[#009DFF]')}`}>
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
          <Link to="/animation" className={`px-3 py-2 font-medium transition-colors ${isActive('/animation') ? 'text-[#009DFF] font-bold pointer-events-none' : (isHomePage ? 'text-white hover:text-[#009DFF]' : 'text-gray-700 hover:text-[#009DFF]')}`}>Animation Studio</Link>
          <Link to="/contact" className={`px-3 py-2 font-medium transition-colors ${isActive('/contact') ? 'text-[#009DFF] font-bold pointer-events-none' : (isHomePage ? 'text-white hover:text-[#009DFF]' : 'text-gray-700 hover:text-[#009DFF]')}`}>Contact Us</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-2">
          <Button variant="primary" onClick={() => window.location.href = '/join-us'}>Join Us</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#009DFF]"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <FaBars className={`h-6 w-6 ${isHomePage ? 'text-white' : 'text-[#009DFF]'}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="mobile-menu fixed inset-0 z-50 bg-white flex w-full min-h-screen"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="mobile-menu w-full max-w-sm bg-white h-full shadow-2xl p-6 flex flex-col animate-slide-in-right mx-auto border-l border-gray-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img
                  src={logo}
                  alt="GVPL Technologies"
                  className={`w-auto transition-all duration-300 ${isHomePage && !isScrolled ? 'h-12' : 'h-10'
                    }`}
                />
              </Link>
              <button
                className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#009DFF]"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes className="h-6 w-6 text-[#009DFF]" />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              <Link to="/" className={isActive('/') ? 'text-[#009DFF] font-bold pointer-events-none py-2' : 'text-gray-700 hover:text-[#009DFF] py-2'} onClick={() => setMobileOpen(false)}>Home</Link>
              <Link to="/about" className={isActive('/about') ? 'text-[#009DFF] font-bold pointer-events-none py-2' : 'text-gray-700 hover:text-[#009DFF] py-2'} onClick={() => setMobileOpen(false)}>About</Link>
              <MobileDropdown title="Services" items={servicesLinks} />
              <MobileDropdown title="Industries" items={industriesLinks} />
              <Link to="/animation" className={isActive('/animation') ? 'text-[#009DFF] font-bold pointer-events-none py-2' : 'text-gray-700 hover:text-[#009DFF] py-2'} onClick={() => setMobileOpen(false)}>Animation Studio</Link>
              <Link to="/contact" className={isActive('/contact') ? 'text-[#009DFF] font-bold pointer-events-none py-2' : 'text-gray-700 hover:text-[#009DFF] py-2'} onClick={() => setMobileOpen(false)}>Contact Us</Link>
            </nav>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.18s cubic-bezier(.4,0,.2,1); }
      `}</style>
    </header>
  );
};

export default Navbar;
