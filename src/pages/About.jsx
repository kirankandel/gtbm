
import React from 'react';

const About = () => {
    return (
        <React.Fragment>
            {/* Hero Section */}
            <section className="bg-primary text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-2 text-white">About Us</h1>
                    <p className="text-lg">Building Trust, Delivering Excellence.</p>
                </div>
            </section>

            {/* Profile Section */}
            <section id="profile" className="py-20 bg-background text-text">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-4 text-primary">Company Profile</h2>
                            <p className="mb-4 leading-relaxed">
                                GTBM (Gulmeli Three Brothers Multipurpose Pvt Ltd) is a premier Real Estate and Construction firm based in Kathmandu, Nepal. Established with a vision to revolutionize the property market, we bring transparency, reliability, and modern engineering to every project.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                Our expertise spans across land plotting, residential and commercial construction ("Thekka"), and architectural design. We are committed to delivering projects that stand the test of time, ensuring legal clarity (Naksha Pass) and structural integrity.
                            </p>
                            <ul className="mt-6 flex flex-col gap-2">
                                <li className="text-lg"><strong>Integrity:</strong> Transparent dealings in buying and selling land.</li>
                                <li className="text-lg"><strong>Quality:</strong> Premium materials and skilled craftsmanship.</li>
                                <li className="text-lg"><strong>Innovation:</strong> Modern 2D/3D designs and sustainable practices.</li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            {/* Placeholder for image */}
                            <div className="w-full h-80 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-gray-400">
                                [About Us Image]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Director Section */}
            <section id="director" className="py-20 bg-header-bg text-text">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary">Message from the Director</h2>
                    <div className="flex flex-col md:flex-row gap-12 items-start bg-white p-8 md:p-12 rounded-lg shadow-sm mt-8 max-w-5xl mx-auto">
                        <div className="w-[150px] h-[150px] rounded-full bg-gray-300 mx-auto md:mx-0 flex-shrink-0 flex items-center justify-center text-gray-500">
                            [Director]
                        </div>
                        <div className="flex-1">
                            <blockquote className="text-lg leading-relaxed text-text mb-4 italic">
                                "Namaste. At GTBM, we understand that building a home is a lifetime investment. My personal commitment to you is honesty and quality. Whether you are buying a plot for your future home or asking us to build it, we treat your dream as our own responsibility. We ensure processed paperwork, approved designs, and solid construction."
                            </blockquote>
                            <cite className="font-bold text-primary not-italic block mt-4">- Kamal Kharel, Director</cite>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default About;
