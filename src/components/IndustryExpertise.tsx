import React from 'react';

interface Feature {
    title: string;
    description?: string;
    image?: string;
    images?: string[];
    bullets: string[];
    extraSections?: {
        title: string;
        bullets: string[];
    }[];
}

interface IndustryExpertiseProps {
    title: string;
    features: Feature[];
}

const IndustryExpertise: React.FC<IndustryExpertiseProps> = ({ title, features }) => {
    // State to keep track of current image index for each feature
    const [currentImageIndices, setCurrentImageIndices] = React.useState<number[]>(
        new Array(features.length).fill(0)
    );

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndices((prevIndices) =>
                prevIndices.map((currentindex, i) => {
                    const feature = features[i];
                    const imageCount = feature.images ? feature.images.length : 1;
                    return imageCount > 1 ? (currentindex + 1) % imageCount : 0;
                })
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(timer);
    }, [features]);

    return (
        <section className="max-w-7xl mx-auto px-4 mb-16">
            <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-[#05DF72] to-[#00BCFF] bg-clip-text text-transparent">{title}</h2>
            <div className="flex flex-col gap-10">
                {features.map((feature, index) => {
                    const images = feature.images || (feature.image ? [feature.image] : []);
                    const currentImage = images.length > 0 ? images[currentImageIndices[index] % images.length] : '';

                    return (
                        <div key={feature.title} className="bg-white p-6 flex flex-col md:flex-row gap-8 items-center rounded-lg shadow-sm">
                            <div className="w-full md:w-80 h-48 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                                {currentImage && (
                                    <img
                                        src={currentImage}
                                        alt={feature.title}
                                        className="w-full h-full object-contain"
                                    />
                                )}
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                                {feature.description && <p className="text-gray-500 text-base mb-2">{feature.description}</p>}
                                <ul className="list-disc pl-5 text-gray-700 text-base space-y-1">
                                    {feature.bullets.map((b, i) => {
                                        const [bold, ...rest] = b.split(':');
                                        return (
                                            <li key={i}>
                                                <span className="font-semibold">{bold}{rest.length ? ':' : ''}</span>{rest.length ? rest.join(':') : ''}
                                            </li>
                                        );
                                    })}
                                </ul>
                                {feature.extraSections && feature.extraSections.map((section, idx) => (
                                    <div className="mt-4" key={idx}>
                                        <h4 className="font-semibold text-gray-700 mb-1">{section.title}</h4>
                                        <ul className="list-disc pl-5 text-gray-700 text-base space-y-1">
                                            {section.bullets.map((outcome, i) => (
                                                <li key={i}>{outcome}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default IndustryExpertise; 