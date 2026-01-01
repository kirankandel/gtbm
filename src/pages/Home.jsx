
import React from 'react';
import { ArrowRight, Building, Home as HomeIcon, PenTool } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-header-bg py-20 px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary mb-6 leading-tight">
                        Building Dreams, <br />
                        <span className="text-secondary">Securing Futures</span> in Kathmandu.
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Your trusted partner for Real Estate, Construction, and 2D/3D Architecture.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/projects" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">
                            Our Services <ArrowRight className="ml-2" size={20} />
                        </a>
                        <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary border border-gray-200 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-heading text-text mb-4">Our Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive solutions for all your property needs</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Building size={32} />, title: "Construction", desc: "Quality construction services for residential and commercial projects." },
                            { icon: <HomeIcon size={32} />, title: "Real Estate", desc: "Buying, selling, and renting properties across Kathmandu." },
                            { icon: <PenTool size={32} />, title: "Design & Planning", desc: "Modern architectural 2D & 3D designs for your dream home." }
                        ].map((service, index) => (
                            <div key={index} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-white">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 font-heading">{service.title}</h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
