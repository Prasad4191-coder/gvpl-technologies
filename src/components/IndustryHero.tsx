import React from 'react';

interface IndustryHeroProps {
    title: string;
    subtitle: string;
    image: string;
    overlayText?: string;
}

const IndustryHero: React.FC<IndustryHeroProps> = ({ title, subtitle, image, overlayText }) => (
    <section className="relative w-full min-h-[50vh] flex items-center overflow-hidden -mt-16">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex flex-col justify-center items-center text-center md:items-start md:text-left">
            {overlayText && <div className="text-7xl font-bold text-white/10 absolute inset-0 flex items-center justify-center pointer-events-none select-none">{overlayText}</div>}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg max-w-4xl">{title}</h1>
            <p className="text-lg md:text-xl text-white/90 drop-shadow-md max-w-3xl leading-relaxed">{subtitle}</p>
        </div>
    </section>
);

export default IndustryHero; 