import React from 'react';
import Benefits from './Benefits';
import CTA from './CTA';

interface Feature {
    image: string;
    title: string;
    bullets: string[];
}

interface HeroProps {
    image: string;
    title: string;
    subtitle: string;
}

interface BenefitsProps {
    title: string;
    benefits: { icon: string; title: string; desc: string }[];
    image: string;
}

interface ServicePageProps {
    hero: HeroProps;
    intro: string | string[];
    features: Feature[];
    featuresTitle: string;
    featuresDescription: string;
    benefits?: BenefitsProps;
    capabilitiesSection?: React.ReactNode;
}

const ServicePage: React.FC<ServicePageProps> = ({ hero, intro, features, featuresTitle, featuresDescription, benefits, capabilitiesSection }) => (
    <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-12 text-white text-center rounded-2xl mx-6 mt-5 mb-4 overflow-hidden min-h-[260px] flex items-center justify-center">
            <img
                src={hero.image}
                alt="Hero"
                className="absolute inset-0 w-full h-full object-cover rounded-b-2xl"
            />
            <div className="absolute inset-0 bg-black/40 rounded-b-2xl" />
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow">{hero.title}</h1>
                <p className="text-lg md:text-2xl font-medium drop-shadow">{hero.subtitle}</p>
            </div>
        </section>

        {/* Intro Paragraph */}
        <div className="max-w-4xl mx-auto px-2 mb-12 text-center md:text-left">
            {Array.isArray(intro) ? (
                intro.map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-700 mb-4 last:mb-0">
                        {paragraph}
                    </p>
                ))
            ) : (
                <p className="text-lg text-gray-700">{intro}</p>
            )}
        </div>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 mb-16">
            <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#05DF72] to-[#00BCFF] bg-clip-text text-transparent">{featuresTitle}</h2>
            <p className="text-center text-gray-500 mb-10">{featuresDescription}</p>
            <div className="flex flex-col gap-10 mb-10">
                {features.map((feature) => (
                    <div key={feature.title} className={`bg-white p-6 flex flex-col md:flex-row gap-8 items-center`}>
                        <img src={feature.image} alt={feature.title} className="w-full md:w-96 h-64 object-contain rounded-lg" />
                        <div className="w-full md:w-3/5">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-semibold">{feature.title}</h3>
                            </div>
                            {feature.bullets.length === 1 ? (
                                <p className="text-gray-700 text-base">{feature.bullets[0]}</p>
                            ) : (
                                <ul className="list-disc pl-5 text-gray-700 text-base space-y-1">
                                    {feature.bullets.map((b, i) => <li key={i} className='pb-2'>{b}</li>)}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Capabilities Section (optional) */}
        {capabilitiesSection}

        {/* Benefits Section (optional) */}
        {benefits && <Benefits benefits={benefits.benefits} title={benefits.title} image={benefits.image} />}

        {/* Call to Action */}
        <CTA />
    </div>
);

export default ServicePage; 