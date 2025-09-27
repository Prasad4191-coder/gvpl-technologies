import React from 'react';

const Careers = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="absolute top-0 left-0 w-full h-[50vh] text-white text-center overflow-hidden z-10 flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                    alt="Careers Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow">Join Our Team</h1>
                    <p className="text-lg md:text-2xl font-medium drop-shadow">Build Your Career with GVPL Technologies</p>
                </div>
            </section>

            {/* Job Listings Cards */}
            <div className="relative z-20 mt-[50vh] py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-none">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* CFD Analysis Engineer */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">CFD Analysis Engineer</h3>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Full-time</span>
                                    <span className="ml-3">Pune, Maharashtra</span>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6 text-lg">
                                Experienced in computational fluid dynamics analysis, thermal analysis, and multiphase flow simulations.
                            </p>
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• 3+ years experience in CFD software (ANSYS Fluent, CFX)</li>
                                    <li>• Strong background in fluid mechanics</li>
                                    <li>• Experience with meshing and post-processing</li>
                                    <li>• Bachelor's degree in Mechanical/Chemical Engineering</li>
                                </ul>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                                Apply Now
                            </button>
                        </div>

                        {/* FEA Analysis Engineer */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">FEA Analysis Engineer</h3>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Full-time</span>
                                    <span className="ml-3">Pune, Maharashtra</span>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6 text-lg">
                                Specialized in finite element analysis, structural analysis, and mechanical design validation.
                            </p>
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• 3+ years experience in FEA software (ANSYS, Abaqus)</li>
                                    <li>• Strong background in structural mechanics</li>
                                    <li>• Experience with fatigue and dynamic analysis</li>
                                    <li>• Bachelor's degree in Mechanical/Civil Engineering</li>
                                </ul>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                                Apply Now
                            </button>
                        </div>

                        {/* CAD Design Engineer */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">CAD Design Engineer</h3>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Full-time</span>
                                    <span className="ml-3">Pune, Maharashtra</span>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6 text-lg">
                                Expert in computer-aided design, 3D modeling, and technical documentation.
                            </p>
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• 2+ years experience in CAD software (SolidWorks, AutoCAD)</li>
                                    <li>• Strong technical drawing skills</li>
                                    <li>• Experience with GD&T and manufacturing processes</li>
                                    <li>• Diploma/Bachelor's in Mechanical Engineering</li>
                                </ul>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                                Apply Now
                            </button>
                        </div>

                        {/* Project Manager */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Project Manager</h3>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Full-time</span>
                                    <span className="ml-3">Pune, Maharashtra</span>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6 text-lg">
                                Lead engineering projects from conception to completion, ensuring quality and timely delivery.
                            </p>
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• 5+ years project management experience</li>
                                    <li>• PMP certification preferred</li>
                                    <li>• Strong communication and leadership skills</li>
                                    <li>• Bachelor's degree in Engineering</li>
                                </ul>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                                Apply Now
                            </button>
                        </div>

                        {/* Senior CFD Engineer */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Senior CFD Engineer</h3>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Senior Level</span>
                                    <span className="ml-3">Pune, Maharashtra</span>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6 text-lg">
                                Lead complex CFD projects and mentor junior engineers in advanced simulation techniques.
                            </p>
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• 7+ years experience in CFD analysis</li>
                                    <li>• Expertise in multiphase and combustion modeling</li>
                                    <li>• Strong programming skills (Python, C++)</li>
                                    <li>• Master's degree in Mechanical Engineering</li>
                                </ul>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                                Apply Now
                            </button>
                        </div>

                        {/* Software Developer */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Software Developer</h3>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Full-time</span>
                                    <span className="ml-3">Pune, Maharashtra</span>
                                </div>
                            </div>
                            <p className="text-gray-700 mb-6 text-lg">
                                Develop and maintain software tools for engineering simulation and data analysis.
                            </p>
                            <div className="mb-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                                <ul className="text-gray-600 space-y-2">
                                    <li>• 3+ years experience in web development</li>
                                    <li>• Proficiency in React, Node.js, Python</li>
                                    <li>• Experience with engineering software APIs</li>
                                    <li>• Bachelor's degree in Computer Science</li>
                                </ul>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {/* Application Info */}
                    <div className="mt-16 text-center">
                        <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-blue-500 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Team?</h3>
                            <p className="text-gray-700 text-lg mb-6">
                                Send your resume and cover letter to <strong>careers@gvpltechnologies.com</strong><br />
                                Or call us at <strong>+91–9011141896 | 8308828188</strong>
                            </p>
                            <p className="text-sm text-gray-500">
                                We are an equal opportunity employer committed to diversity and inclusion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
