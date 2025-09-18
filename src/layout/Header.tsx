const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-[#009DFF]">GVPL Technologies</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#009DFF]">Home</a>
            <a href="#" className="text-gray-700 hover:text-[#009DFF]">Services</a>
            <a href="#" className="text-gray-700 hover:text-[#009DFF]">Industries</a>
            <a href="#" className="text-gray-700 hover:text-[#009DFF]">About</a>
            <a href="#" className="text-gray-700 hover:text-[#009DFF]">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 