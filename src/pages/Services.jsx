
import React from 'react';
import { Home, Building, PenTool, MapPin, Wrench } from 'lucide-react';

const Services = () => {
    return (
        <React.Fragment>
            <section className="bg-primary text-white py-16 text-center mb-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-2 text-white">Our Services</h1>
                    <p className="text-lg">Expert Solutions for Real Estate, Construction, and Design.</p>
                </div>
            </section>

            <div className="container mx-auto px-4">
                {/* Real Estate */}
                <section id="real-estate" className="flex flex-col md:flex-row items-center gap-16 py-16 border-b border-gray-100 last:border-0 scroll-mt-24">
                    <div className="text-secondary flex-shrink-0">
                        <Home size={100} strokeWidth={1} />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-primary mb-4">Real Estate (Buying/Selling/Rent)</h2>
                        <p className="text-text mb-4 leading-relaxed">We facilitate secure and transparent property transactions across Kathmandu and Nepal.</p>
                        <ul className="list-disc pl-6 mt-4 marker:text-primary space-y-2">
                            <li>Land Plotting & Sales</li>
                            <li>House Buying & Selling</li>
                            <li>Commercial Space & House Rentals</li>
                            <li>Property Valuation</li>
                        </ul>
                    </div>
                </section>

                {/* Construction */}
                <section id="construction" className="flex flex-col md:flex-row-reverse items-center gap-16 py-16 border-b border-gray-100 last:border-0 scroll-mt-24">
                    <div className="text-secondary flex-shrink-0">
                        <Building size={100} strokeWidth={1} />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-primary mb-4">Construction & Contractor (Thekka)</h2>
                        <p className="text-text mb-4 leading-relaxed">From foundation to finish, we handle your construction projects with professional "Thekka" services. We define clear contracts, timelines, and material quality (Grade A).</p>
                        <ul className="list-disc pl-6 mt-4 marker:text-primary space-y-2">
                            <li>Residential Home Construction</li>
                            <li>Commercial Building Construction</li>
                            <li>Renovation & Remodeling</li>
                            <li>Earthquake Resistant Structures</li>
                            <li>Structural Analysis</li>
                        </ul>
                    </div>
                </section>

                {/* Design */}
                <section id="design" className="flex flex-col md:flex-row items-center gap-16 py-16 border-b border-gray-100 last:border-0 scroll-mt-24">
                    <div className="text-secondary flex-shrink-0">
                        <PenTool size={100} strokeWidth={1} />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-primary mb-4">2D/3D Design & Naksha</h2>
                        <p className="text-text mb-4 leading-relaxed">Visualize your dream before building it. Our architects provide detailed blueprints and realistic 3D renders.</p>
                        <ul className="list-disc pl-6 mt-4 marker:text-primary space-y-2">
                            <li>2D Floor Plans & Blueprints</li>
                            <li>3D Exterior & Interior Renders</li>
                            <li>Municipality Map Pass (Naksha Pass) Assistance</li>
                            <li>Vastu Consultation</li>
                        </ul>
                    </div>
                </section>

                {/* Plotting */}
                <section id="plotting" className="flex flex-col md:flex-row-reverse items-center gap-16 py-16 border-b border-gray-100 last:border-0 scroll-mt-24">
                    <div className="text-secondary flex-shrink-0">
                        <MapPin size={100} strokeWidth={1} />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-primary mb-4">Plotting Services</h2>
                        <p className="text-text mb-4 leading-relaxed">We transform raw land into improved residential colonies with proper road access, drainage, and utilities.</p>
                        <ul className="list-disc pl-6 mt-4 marker:text-primary space-y-2">
                            <li>Land Development</li>
                            <li>Road Opening & Black Topping</li>
                            <li>Compound Fencing</li>
                        </ul>
                    </div>
                </section>

                {/* Maintenance */}
                <section id="maintenance" className="flex flex-col md:flex-row items-center gap-16 py-16 border-b border-gray-100 last:border-0 scroll-mt-24">
                    <div className="text-secondary flex-shrink-0">
                        <Wrench size={100} strokeWidth={1} />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-primary mb-4">Plumbing & Maintenance</h2>
                        <p className="text-text mb-4 leading-relaxed">Complete home care solutions to keep your property in top condition.</p>
                        <ul className="list-disc pl-6 mt-4 marker:text-primary space-y-2">
                            <li>Professional Plumbing Services</li>
                            <li>Electrical Maintenance</li>
                            <li>Painting & Finishing</li>
                            <li>Waterproofing</li>
                        </ul>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
};

export default Services;
