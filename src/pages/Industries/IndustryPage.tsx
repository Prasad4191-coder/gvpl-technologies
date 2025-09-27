import IndustryHero from '../../components/IndustryHero';
import IndustryExpertise from '../../components/IndustryExpertise';
import Benefits from '../../components/Benefits';
import IndustriesWeServe from '../../components/IndustriesWeServe';
import CTA from '../../components/CTA';

const IndustryPage = ({
    hero,
    expertise,
    benefits,
    industriesWeServe,
    industriesWeServeTitle,
    overView
}: any) => (
    <div className="bg-white">
        <IndustryHero {...hero} />
        <div className="relative z-20 mt-[50vh]">
            <IndustryExpertise {...expertise} />
            <Benefits {...benefits} />
            {industriesWeServe && industriesWeServe.length > 0 && (
                <IndustriesWeServe
                    industries={industriesWeServe}
                    title={industriesWeServeTitle || 'Industries We Serve'}
                />
            )}
            {overView && (
                <section className="max-w-6xl mx-auto px-2 py-6 mb-2 text-center">
                    <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4">{overView.title}</h2>
                    <p className="text-gray-700 ">{overView.description}</p>
                </section>
            )}
            <CTA />
        </div>
    </div>
);

export default IndustryPage; 