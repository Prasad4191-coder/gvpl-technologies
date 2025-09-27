import CAD from '@/assets/gvpl website images/Services/S - CAD/3D.png';

const Services = () => {
  const services = [
    {
      title: "Computer Aided Design",
      description: "Computer-Aided Design (CAD) is a powerful tool widely used for creating, modifying, updating, and analysing designs. This sophisticated software is essential for manufacturers, enabling them to efficiently update designs during large-scale production. CAD allows engineers to draft precise technical drawings, facilitating accurate 2D and 3D renderings of product designs. At GVPL, we specialise in enhancing your manufacturing process with CAD for optimal design accuracy and efficiency.",
      image: CAD
    },
    {
      title: "Finite Element Analysis",
      description: "Advanced structural analysis for optimizing product design and performance through detailed simulation and testing.",
      image: "https://placehold.co/800x600/333333/FFFFFF/png?text=FEA"
    },
    {
      title: "Computational Fluid Dynamics",
      description: "Sophisticated fluid flow analysis and simulation for enhanced product performance and efficiency.",
      image: "https://placehold.co/800x600/333333/FFFFFF/png?text=CFD"
    },
    {
      title: "Reverse Engineering",
      description: "Precise digital reconstruction and analysis of existing products for optimization and improvement.",
      image: "https://placehold.co/800x600/333333/FFFFFF/png?text=Reverse+Engineering"
    },
    {
      title: "Project Management & Consultation",
      description: "Expert guidance and management for successful project execution and optimal results.",
      image: "https://placehold.co/800x600/333333/FFFFFF/png?text=Project+Management"
    },
    {
      title: "Product Development",
      description: "End-to-end product development solutions from concept to manufacturing.",
      image: "https://placehold.co/800x600/333333/FFFFFF/png?text=Product+Development"
    }
  ];

  return (
    <section className="py-16 bg-white mt-[100vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <button className="text-[#00B1FF] border border-[#00B1FF] px-6 py-2 rounded-lg hover:bg-[#00B1FF] hover:text-white transition-all">
            See All Services
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-[300px]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {/* Blue gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00B1FF] to-transparent opacity-90" />

              {/* Description overlay - visible on hover */}
              <div className="absolute inset-0 bg-[#00B1FF]/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-base line-clamp-5">
                  {service.description}
                </p>
              </div>

              {/* Title container - always visible */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#00B1FF] to-transparent">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-2xl font-semibold">
                    {service.title}
                  </h3>
                  <svg
                    className="w-6 h-6 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14m0 0l-7-7m7 7l-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
