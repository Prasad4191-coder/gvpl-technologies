const CTA = () => (
  <section className="w-full bg-gradient-to-r from-[#05DF72] to-[#00BCFF] py-8 md:py-10 mb-16 rounded-2xl max-w-7xl mx-auto px-4 md:pl-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
    {/* Background black circle with phone icon */}
    <div className="block absolute right-[-60px] top-1/2 -translate-y-1/2 z-0">
      <div className="relative w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]">
        <div className="absolute inset-0 rounded-full bg-[#222]" style={{ opacity: 0.1 }} />
        <svg
          className="absolute inset-0 m-auto"
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"
            fill="#fff"
            opacity="0.3"
          />
        </svg>
      </div>
    </div>
    {/* CTA Content */}
    <div className="flex-1 z-10 flex flex-col items-start justify-center text-center md:text-left">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Get in touch with us</h3>
      <p className="text-white/90 mb-4 text-base md:text-lg max-w-xl">Learn how People leaders everywhere transform their approach to performance, engagement, and development.</p>
      <button className="bg-[#444343] text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-800 transition">Start Consultation</button>
    </div>
  </section>
);

export default CTA; 