import { useState } from 'react';



const IndustryCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="text-center p-6">
    <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Industries = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const industries = [
    {
      icon: 'https://placehold.co/100x100/009DFF/FFFFFF/png?text=Chemical',
      title: 'Chemical',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'https://placehold.co/100x100/009DFF/FFFFFF/png?text=Construction',
      title: 'Constructions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'https://placehold.co/100x100/009DFF/FFFFFF/png?text=Data+Center',
      title: 'Data Center',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'https://placehold.co/100x100/009DFF/FFFFFF/png?text=Defence',
      title: 'Defence',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'https://placehold.co/100x100/009DFF/FFFFFF/png?text=EV',
      title: 'Electric Vehicle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'https://placehold.co/100x100/009DFF/FFFFFF/png?text=Electronics',
      title: 'Electronics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'https://placehold.co/100x100/009DFF/FFFFFF/png?text=Electronics',
      title: 'Electronics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'https://placehold.co/100x100/009DFF/FFFFFF/png?text=Electronics',
      title: 'Electronics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'https://placehold.co/100x100/009DFF/FFFFFF/png?text=Electronics',
      title: 'Electronics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    {
      icon: 'https://placehold.co/100x100/009DFF/FFFFFF/png?text=Electronics',
      title: 'Electronics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    },
    // Add more industries for carousel
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(industries.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const visibleIndustries = industries.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-16" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Industries We Serve</h2>
          <div className="flex gap-2">
            <button 
              onClick={handlePrevPage}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              ←
            </button>
            <button 
              onClick={handleNextPage}
              className="w-10 h-10 rounded-full bg-[#009DFF] text-white flex items-center justify-center hover:bg-[#007BCE]"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {visibleIndustries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentPage === index ? 'w-4 bg-[#009DFF]' : 'bg-gray-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
