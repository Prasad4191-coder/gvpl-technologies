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

      <div className="relative z-20 mt-[50vh] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Get in Touch */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">Get in Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {/* Left Column: Phone Numbers */}
              <div className="space-y-8">
                {/* Managing Director */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-300 rounded-lg flex items-center justify-center text-white shadow-sm">
                    <FaPhoneAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-0.5">Managing Director</p>
                    <a href="tel:+919011141896" className="text-lg font-bold text-gray-900 hover:text-emerald-500 transition-colors">(+91) 90111 41896</a>
                  </div>
                </div>

                {/* Business Head */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-300 rounded-lg flex items-center justify-center text-white shadow-sm">
                    <FaPhoneAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-0.5">Business Head</p>
                    <a href="tel:+918983456429" className="text-lg font-bold text-gray-900 hover:text-purple-500 transition-colors">(+91) 8983456429</a>
                  </div>
                </div>

                {/* Technical Manager */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center text-white shadow-sm">
                    <FaPhoneAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-0.5">Technical Manager</p>
                    <a href="tel:+918308828188" className="text-lg font-bold text-gray-900 hover:text-blue-500 transition-colors">(+91) 8308828188</a>
                  </div>
                </div>
              </div>

              {/* Right Column: Email & Address */}
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-300 rounded-lg flex items-center justify-center text-white shadow-sm">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-0.5">Email</p>
                    <a href="mailto:info@gvpltechnologies.com" className="text-lg font-bold text-gray-900 hover:text-yellow-500 transition-colors break-all">info@gvpltechnologies.com</a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-400 rounded-lg flex items-center justify-center text-white shadow-sm mt-1">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-medium mb-0.5">Map Street</p>
                    <p className="text-base font-bold text-gray-900 leading-snug">
                      Office No, 612, Platinum Square, Near Hyatt Regency, Viman nagar, Pune, MH, India 411014
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-sm h-64 border border-gray-100">
              <iframe
                title="GVPL Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.019370685764!2d73.9112393153687!3d18.5679426873897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c12e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sPlatinum%20Square!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Us Form */}
          <div className="bg-sky-50/50 rounded-2xl p-8 md:p-12 shadow-sm">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact Us</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#00D0B0] focus:border-transparent transition-all"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#00D0B0] focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#00D0B0] focus:border-transparent transition-all"
                  placeholder="Enter your message"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-auto inline-block bg-[#00D0B0] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#0EC2B1] transition-colors shadow-lg shadow-teal-200/50"
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