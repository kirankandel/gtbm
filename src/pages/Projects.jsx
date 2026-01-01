
import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            title: "Sankhamul Site",
            location: "Sankhamul",
            price: "Undisclosed",
            size: "House Project",
            road: "6 ft",
            type: "Construction",
            images: [], // Images would go here
        }
    ];

    return (
        <React.Fragment>
            <section className="bg-primary text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-2 text-white">Projects & Listings</h1>
                    <p className="text-lg">Explore our latest properties and completed construction projects.</p>
                </div>
            </section>

            <section className="py-20 bg-background text-text">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 border border-gray-100 hover:shadow-lg group">
                                <div className="relative h-[250px] bg-gray-200 flex items-center justify-center text-gray-400">
                                    [Project Image]
                                    <span className="absolute top-2 right-2 bg-secondary text-white px-3 py-1 rounded text-xs font-bold z-10">{project.type}</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">📍 {project.location}</p>

                                    <div className="bg-header-bg p-4 rounded mb-6">
                                        <div className="flex justify-between mb-1 last:mb-0 text-sm">
                                            <span className="text-gray-600">Price:</span>
                                            <span className="font-semibold text-text">{project.price}</span>
                                        </div>
                                        <div className="flex justify-between mb-1 last:mb-0 text-sm">
                                            <span className="text-gray-600">Size:</span>
                                            <span className="font-semibold text-text">{project.size}</span>
                                        </div>
                                        <div className="flex justify-between mb-1 last:mb-0 text-sm">
                                            <span className="text-gray-600">Road:</span>
                                            <span className="font-semibold text-text">{project.road}</span>
                                        </div>
                                    </div>

                                    <Link to="/contact" className="block w-full text-center border-2 border-primary text-primary px-4 py-2 rounded font-semibold hover:bg-primary hover:text-white transition-colors">
                                        Book a Site Visit
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Projects;
