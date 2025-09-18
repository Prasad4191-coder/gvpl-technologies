import React from 'react';

interface Benefit {
  icon: string;
  title: string;
  desc: string;
}

interface BenefitsProps {
  benefits: Benefit[];
  title: string;
  image: string;
}

const Benefits: React.FC<BenefitsProps> = ({ benefits, title, image }) => (
  <section className="mx-auto px-4 sm:px-8 md:px-12 lg:px-16 mb-16 rounded-2xl bg-[#F4FCFF] py-8 md:py-10 flex flex-col md:flex-row gap-10 items-center">
    <div className="flex-1 w-full">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900">{title}</h2>
      <ul className="space-y-6 md:space-y-7">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-start gap-4">
            <img src={b.icon} alt="icon" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            <div>
              <div className="font-semibold text-base md:text-lg text-gray-900 mb-1">{b.title}</div>
              <div className="text-gray-600 text-sm md:text-base leading-snug">{b.desc}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="flex-1 flex justify-center items-center w-full">
      <img src={image} alt="Benefits Visual" className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[420px] xl:max-w-[691px] h-auto object-cover rounded-2xl shadow" />
    </div>
  </section>
);

export default Benefits; 