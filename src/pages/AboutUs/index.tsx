import Hero from './Hero';

export default function AboutUs() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <section className="max-w-4xl mx-auto px-4 mb-16 mt-8">
                <h2 className="text-3xl font-bold text-center mb-2">About Us</h2>
                <p className="text-center text-gray-500 mb-8">Learn how People leaders everywhere transform their approach to performance, engagement, and development.</p>
                <div className="space-y-6 text-lg text-gray-700">
                    <p>At GVPL Technologies, we use Finite Element Analysis (FEA) to improve product quality and functionality as part of our manufacturing projects. Our FEA tests utilize advanced software to evaluate stresses, deformation, and strain rate temperature under various external and internal loading conditions.</p>
                    <p>If initial results are undesirable, FEA enables us to redesign products to meet your exact specifications. We provide detailed analysis reports for precise product optimization. Our experienced team conducts thorough testing under diverse loading conditions, including structural, fatigue, thermal, dynamic, cyclic, and seismic, to identify critical failure points and ensure product integrity.</p>
                    <p>GVPL Technologies specializes in FEA virtual analysis for comprehensive product evaluation, ensuring high-quality, reliable outcomes for all your manufacturing needs.</p>
                </div>
            </section>


        </div>
    );
} 