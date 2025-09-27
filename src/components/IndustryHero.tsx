import React from 'react';

interface IndustryHeroProps {
    title: string;
    subtitle: string;
    image: string;
    overlayText?: string;
}

const IndustryHero: React.FC<IndustryHeroProps> = ({ title, subtitle, image, overlayText }) => (
    <section className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden z-10">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col justify-center h-full px-4 py-12 items-center text-center md:items-start md:text-left md:pl-12">
            {overlayText && <div className="text-7xl font-bold text-white/10 absolute inset-0 flex items-center justify-center pointer-events-none select-none">{overlayText}</div>}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow max-w-2xl">{title}</h1>
            <p className="text-lg md:text-xl text-white drop-shadow max-w-2xl">{subtitle}</p>
        </div>
    </section>
);

export default IndustryHero; 