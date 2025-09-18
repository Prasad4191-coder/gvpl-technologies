const Partners = () => {
  const partners = [
    { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" },
    { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" },
    { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" },
    { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" },
    { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" },
    { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" },
    { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-center text-5xl font-semibold mb-4">We work with some of the best in the industry</h2>
          <p className="text-gray-600">
            Learn how People leaders everywhere transform their approach to performance, engagement, and development.
          </p>
        </div>
        <div className="slider h-[100px] mx-auto overflow-hidden relative w-auto ">
          <div className="slide-track flex animate-scroll" style={{ width: 'calc(250px * 14)' }}>
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className="slide h-[100px] w-[250px]">
                <img
                  src={partner.src}
                  alt=""
                  className="h-[100px] w-[250px] object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="slide h-[100px] w-[250px]">
                <img
                  src={partner.src}
                  alt=""
                  className="h-[100px] w-[250px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 