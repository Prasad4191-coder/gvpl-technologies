import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaCube, FaClock, FaCheckCircle } from 'react-icons/fa';
import CTA from '../../components/CTA';

const ProductAnimation = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="absolute top-0 left-0 w-full h-[60vh] flex items-center justify-center text-center text-white overflow-hidden z-10">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
                    alt="Product Animation Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Product Animation & Visualization
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200"
                    >
                        Bring your concepts to life with high-fidelity 3D animations and visualizations.
                    </motion.p>
                </div>
            </section>

            {/* Introduction */}
            <section className="relative z-20 mt-[60vh] py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visual Storytelling for Engineering</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-12">
                            In the complex world of engineering and manufacturing, static images often fall short of explaining intricate processes.
                            Our Product Animation services bridge the gap between technical data and visual understanding. We help you demonstrate functionality,
                            installation procedures, and inner workings of machinery that are impossible to capture with traditional video.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                                <FaCube className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">3D Product Demos</h3>
                            <p className="text-gray-600">Showcase your product from every angle. perfect for marketing launches, trade shows, and investor presentations.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                                <FaPlay className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Process Simulation</h3>
                            <p className="text-gray-600">Visualize complex industrial processes, fluid flows, and assembly lines to identify bottlenecks and improve efficiency.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-6">
                                <FaClock className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Training & Safety</h3>
                            <p className="text-gray-600">Create immersive training modules for your workforce, demonstrating safe operation procedures without risking equipment or personnel.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Showcase */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose 3D Animation?</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <FaCheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Simplify Complexity</h4>
                                        <p className="text-gray-400">Break down complex mechanical movements into clear, understandable visuals.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <FaCheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Internal Views</h4>
                                        <p className="text-gray-400">See inside your machines. Visualize internal flows, components, and hidden mechanisms.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <FaCheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Cost-Effective Prototyping</h4>
                                        <p className="text-gray-400">Visualize and refine your designs before physical manufacturing begins.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1974"
                                alt="3D Analysis Visual"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                                <p className="text-white font-medium">High-fidelity rendering for engineering applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default ProductAnimation;
