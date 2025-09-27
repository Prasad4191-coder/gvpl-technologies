import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="absolute top-0 left-0 w-full h-[50vh] text-white text-center overflow-hidden z-10 flex items-center justify-center">
                <img
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Privacy Policy Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow">Privacy Policy</h1>
                    <p className="text-lg md:text-2xl font-medium drop-shadow">Your Privacy Matters to Us</p>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <div className="relative z-20 mt-[50vh] py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-none">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold text-center mb-4">Privacy Policy</h2>
                        <p className="text-center text-gray-500 text-xl mb-8">Learn how we protect and handle your personal information.</p>
                    </div>

                    <div className="space-y-8 text-xl text-gray-700">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">YOUR PRIVACY MATTERS</h2>

                        <p>
                            GVPL Technologies Pvt Ltd (herein referred as <strong>GVPL Technologies, we or Us</strong>) with its Head Office in Pune, Maharashtra – India, is a leading provider of engineering simulation services. With expertise in system design validation & optimization using numerical tools like CFD and FEM simulations for varied applications and projects. We respect your privacy and we are committed to protecting the personal information that you share with us.
                        </p>

                        <p>
                            This Privacy Policy describes the privacy practices of GVPL Technologies with respect to the information we collect from you, including information collected via our products, services, and the websites and apps that link to the Privacy Policy. In this Privacy Policy, we discuss the types of information GVPL Technologies collects, how we collect it, how we use it, and the options you have to manage or restrict the collection and use of your personal information.
                        </p>

                        <p>
                            Please note that when we talk about "personal information" in this Privacy Policy, we mean information that relates to an identified or identifiable natural person.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">COLLECTION OF INFORMATION</h2>
                        <p>
                            GVPL Technologies may collect information about you any time you are in contact with GVPL Technologies, its products, services, or Sites, as further described below. GVPL Technologies may share this personal information with our subsidiaries and data processors (and vice versa) but only for purposes consistent with this Privacy Policy.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Information You Provide</h2>
                        <p>
                            We may ask you to provide personal information when you visit our Sites, use our products, register for a program or service, subscribe to a newsletter, respond to a survey, fill out a form, or in connection with other resources or services we make available to you from time to time. We do not intentionally collect any sensitive personal information relating to your health or medical history, racial or ethnic origins, political or religious beliefs, or sexuality; we don't believe that any of these types of information are necessary to any aspect of our relationship.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Collected Automatically</h2>
                        <p>
                            To track how users are interacting with our Sites and improve performance, we may collect information during your visits to our Sites through our automatic data collection tools, which may include web beacons, cookies, embedded web links, pixel tags, and other commonly used information-gathering tools, as further described below. Some of these tools are necessary to the functionality of our Sites, while others help us make your visit to our Sites more efficient by providing you with a customized experience and recognizing you when you return.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Use of Cookies and Other Web Tracking Technologies</h2>
                        <p>
                            A "cookie" is a small piece of data stored on a user's device. When you visit the Sites, GVPL Technologies may place "cookies" on your device which allows us to compile information about Sites usage and to recognize you when you visit the Sites again. In addition, we use pixel tags "tiny graphic images" to tell us what parts of our Sites our users have visited, or to measure the effectiveness of searches performed on our Sites.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">HOW THE PERSONAL INFORMATION IS USED</h2>
                        <p>GVPL Technologies may collect and use your information for the following purposes:</p>
                        <ul className="list-disc pl-8 space-y-3 text-lg">
                            <li>To provide you with the products and services you purchase</li>
                            <li>To provide you the content on our Sites</li>
                            <li>To improve customer service and respond to requests</li>
                            <li>To improve our products and services</li>
                            <li>To process orders, warranty claims and payments from our users, dealers, and distributors</li>
                            <li>To run promotions, contests, surveys, or similar features</li>
                            <li>To conduct market research about our users to improve our marketing campaigns</li>
                            <li>To send you periodic emails regarding our services and updates</li>
                            <li>For other purposes based on your consent</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">HOW WE PROTECT YOUR PERSONAL INFORMATION</h2>
                        <p>
                            Your personal information and project data files are stored on GVPL Technologies' servers and the dedicated servers of companies we hire to provide us with processing and storage services. GVPL Technologies takes precautions including industry-standard administrative, technical, and physical measures that are designed to safeguard the personal information collected from visitors and customers against loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">WHEN WE DISCLOSE YOUR PERSONAL INFORMATION</h2>
                        <p>
                            Your personal information may be shared with our agents, subsidiaries, and affiliates who are obligated to safeguard it in accordance with this Privacy Policy. There are also times when GVPL Technologies makes certain personal information about you available to companies that help support our business or that provide products and services to you on our behalf.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">ACCESSING, MANAGING, AND UPDATING THE COLLECTION AND USE OF YOUR PERSONAL INFORMATION</h2>
                        <p>
                            GVPL Technologies takes reasonable steps to ensure that your personal information we process is accurate, complete and current by using the most recent information provided to us. We respect the rights you have under certain laws and circumstances to:
                        </p>
                        <ul className="list-disc pl-8 space-y-3 text-lg">
                            <li>Obtain a copy of your personal information held by us</li>
                            <li>Request the correction or deletion of your personal information held by us</li>
                            <li>Request that your personal information be transferred to a third party</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">OPTING OUT OF COMMUNICATIONS FROM GVPL TECHNOLOGIES</h2>
                        <p>
                            At various locations on our Sites or social media pages, you have the option to opt-in to receive general communications from GVPL Technologies. If you opt-in, you may change your mind at any time and tell us that you do not wish to receive these general messages by sending an email to info@gvpltechnologies.com
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">CHANGES</h2>
                        <p>
                            Our Privacy Policy may change from time to time, but we will not reduce the level of protection of your personal information collected pursuant to a previous version of this Privacy Policy without your consent. We will post any changes to our Privacy Policy on this page, changing the effective date. We encourage you to periodically review our Privacy Policy for the latest information on our privacy practices.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6">QUESTIONS OR CONCERNS</h2>
                        <p>
                            If you have any questions or concerns about this Privacy Policy or your information, please email us at <strong>info@gvpltechnologies.com</strong>
                        </p>

                        <div className="mt-12 p-8 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                            <p className="text-gray-700 text-lg">
                                <strong className="text-xl">Contact Information:</strong><br />
                                GVPL Technologies Pvt. Ltd<br />
                                612, Platinum Square, Viman Nagar<br />
                                Pune, Maharashtra, India, 411014<br />
                                Email: info@gvpltechnologies.com<br />
                                Phone: +91–9011141896 | 8308828188
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
