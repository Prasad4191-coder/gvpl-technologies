import { FaLinkedin, FaYoutube, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[linear-gradient(90deg,_#595959_0%,_#3C3C3C_100%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Company Info */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">GVPL Technologies</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Suspendisse eget pharetra lorem. In a posuere libero, vitae pretium leo. Class aptent taciti sociosqu .
            </p>
            <div className="flex space-x-4 mt-6 justify-center md:justify-start">
              <a href="#" aria-label="LinkedIn" className="text-white/80 hover:text-white text-2xl"><FaLinkedin /></a>
              <a href="#" aria-label="YouTube" className="text-white/80 hover:text-white text-2xl"><FaYoutube /></a>
              <a href="#" aria-label="Instagram" className="text-white/80 hover:text-white text-2xl"><FaInstagram /></a>
            </div>
          </div>

          {/* Right: Company and Contact Columns */}
          <div className="flex flex-col sm:flex-row md:justify-end md:space-x-16 w-full items-center md:items-start text-center sm:text-left">
          {/* Company Links */}
            <div className="mb-8 sm:mb-0 min-w-[140px]">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            {/* Contact Info */}
            <div className="min-w-[280px]">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                  <FaMapMarkerAlt className="text-xl" />
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">Office Address:</span>
                    <span>612, Platinum Square, Viman Nagar, Pune, Maharashtra, India, 411014</span>
                  </div>
                </li>
                {/* <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                  <FaMapMarkerAlt className="text-xl" />
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">Registered Office:</span>
                    <span>Sr. No. 39/4/2, Jay Bhavani Nagar, Vadgaonsheri, near Kharadi, Pune, Maharashtra 411014</span>
                  </div>
                </li> */}
                <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                  <FaEnvelope className="text-xl" />
                  <span>info@gvpltechnologies.com</span>
                </li>
                <li className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
                  <FaPhone className="text-xl" />
                  <span>+91–9011141896 | 8308828188</span>
                </li>
            </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center gap-2">
          <p className="text-white/80 text-sm">©2024 GVPL Technologies . All right reserved</p>
          <a href="#" className="text-white/80 hover:text-white text-sm">Terms of Services</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 