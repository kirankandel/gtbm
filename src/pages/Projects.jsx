
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
    const { t } = useLanguage();

    const projects = [
        {
            title: "Sankhamul Site",
            location: "Sankhamul, Kathmandu",
            price: "Call for Price",
            size: "House Project",
            road: "6 ft",
            type: t('projects.type.construction'),
            image: "/images/projects/site_sankhamul/site_sankhamul_1.jpeg",
        }
    ];

    return (
        <React.Fragment>
            <section className="bg-primary text-white py-20 text-center bg-[url('/images/hero-vector.jpg')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-primary/80 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl font-bold mb-4 text-white">{t('projects.title')}</h1>
                    <p className="text-xl opacity-90">{t('projects.subtitle')}</p>
                </div>
            </section>

            <section className="py-20 bg-gray-50 dark:bg-gray-900 text-text dark:text-gray-200 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-transparent dark:border-gray-700">
                                <div className="relative h-[250px] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <span className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold z-10 uppercase tracking-wide shadow-sm">{project.type}</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors text-text dark:text-white">{project.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex items-center gap-1">📍 {project.location}</p>

                                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded mb-6 transition-colors">
                                        <div className="flex justify-between mb-1 last:mb-0 text-sm">
                                            <span className="text-gray-600 dark:text-gray-300">{t('projects.label.price')}</span>
                                            <span className="font-semibold text-text dark:text-white">{project.price}</span>
                                        </div>
                                        <div className="flex justify-between mb-1 last:mb-0 text-sm">
                                            <span className="text-gray-600 dark:text-gray-300">{t('projects.label.size')}</span>
                                            <span className="font-semibold text-text dark:text-white">{project.size}</span>
                                        </div>
                                        <div className="flex justify-between mb-1 last:mb-0 text-sm">
                                            <span className="text-gray-600 dark:text-gray-300">{t('projects.label.road')}</span>
                                            <span className="font-semibold text-text dark:text-white">{project.road}</span>
                                        </div>
                                    </div>

                                    <Link to="/contact" className="block w-full text-center border-2 border-primary text-primary dark:border-blue-500 dark:text-blue-400 px-4 py-2 rounded font-semibold hover:bg-primary hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors">
                                        {t('projects.cta')}
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
