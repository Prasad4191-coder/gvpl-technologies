import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Placeholder: handle form submission here
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="absolute top-0 left-0 w-full h-[50vh] text-white text-center overflow-hidden z-10 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow">Get In Touch</h1>
          <p className="text-lg md:text-2xl font-medium drop-shadow">Let's discuss your engineering needs</p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="relative z-20 mt-[50vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Get in Touch */}
        <div>
          <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="bg-[#009DFF] text-white rounded-full p-2"><FaPhoneAlt className="h-5 w-5" /></span>
                <span className="font-medium text-gray-700">Managing Director</span>
              </div>
              <a href="tel:+919011141896" className="text-[#009DFF] font-semibold whitespace-nowrap">(+91) 90111 41896</a>
            </div>
            <div className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="bg-[#009DFF] text-white rounded-full p-2"><FaPhoneAlt className="h-5 w-5" /></span>
                <span className="font-medium text-gray-700">Business Head</span>
              </div>
              <a href="tel:+918983456429" className="text-[#009DFF] font-semibold whitespace-nowrap">(+91) 8983456429</a>
            </div>
            <div className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="bg-[#009DFF] text-white rounded-full p-2"><FaPhoneAlt className="h-5 w-5" /></span>
                <span className="font-medium text-gray-700">Technical Manager</span>
              </div>
              <a href="tel:+918308828188" className="text-[#009DFF] font-semibold whitespace-nowrap">(+91) 8308828188</a>
            </div>
            <div className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="bg-[#009DFF] text-white rounded-full p-2"><FaEnvelope className="h-5 w-5" /></span>
                <span className="font-medium text-gray-700">Email</span>
              </div>
              <a href="mailto:info@gvpltechnologies.com" className="text-[#009DFF] font-semibold whitespace-nowrap">info@gvpltechnologies.com</a>
            </div>
            <div className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="bg-[#009DFF] text-white rounded-full p-2"><FaMapMarkerAlt className="h-5 w-5" /></span>
                <span className="font-medium text-gray-700">Map Street</span>
              </div>
              <span className="text-gray-600 text-sm text-right max-w-xs">Office No. 612, Platinum Square, Near Hyatt Regency, Viman nagar, Pune, MH, India 411014</span>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="GVPL Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.019370685764!2d73.9112393153687!3d18.5679426873897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sPlatinum%20Square!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Right: Contact Us Form */}
        <div className="bg-blue-50 rounded-xl p-8 shadow-md">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009DFF]"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009DFF]"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009DFF]"
                placeholder="Enter your message"
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#009DFF] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              disabled={submitted}
            >
              {submitted ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 