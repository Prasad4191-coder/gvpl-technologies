import React, { useState } from 'react';

interface IndustryCard {
  title: string;
  description: string;
  image?: string;
  icon?: string;
}

interface IndustriesWeServeProps {
  industries: IndustryCard[];
  title?: string;
}

const IndustryCardComponent = ({ icon, image, title, description }: IndustryCard) => (
  <div className="text-center p-6">
    {icon || image ? (
      <img src={icon || image} alt={title} className="w-16 h-16 mx-auto mb-4" />
    ) : null}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const IndustriesWeServe: React.FC<IndustriesWeServeProps> = ({ industries, title }) => {
  const [currentPage, setCurrentPage] = useState(0);
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

  const getGridColsClass = (count: number) => {
    switch (count) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-4';
      case 5: return 'grid-cols-1 md:grid-cols-5';
      case 6: return 'grid-cols-1 md:grid-cols-6';
      default: return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
    }
  };

  return (
    <section className="py-12" id="industries-we-serve">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={
          industries.length <= itemsPerPage
            ? 'flex flex-col items-center mb-12'
            : 'flex justify-between items-center mb-12'
        }>
          <h2 className={
            industries.length <= itemsPerPage
              ? 'text-2xl md:text-3xl font-bold text-gray-900 text-center'
              : 'text-2xl md:text-3xl font-bold text-gray-900'
          }>{title || 'Industries We Serve'}</h2>
          {industries.length > itemsPerPage && (
            <div className="flex gap-2 mt-4 md:mt-0">
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
          )}
        </div>

        <div
          className={`grid justify-center gap-8 ${industries.length <= itemsPerPage
            ? getGridColsClass(industries.length)
            : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
            }`}
        >
          {visibleIndustries.map((industry, index) => (
            <IndustryCardComponent
              key={index}
              icon={industry.icon}
              image={industry.image}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>

        {industries.length > itemsPerPage && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentPage === index ? 'w-4 bg-[#009DFF]' : 'bg-gray-300'
                  }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default IndustriesWeServe; 