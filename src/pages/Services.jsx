
import React from 'react';
import { Home, Building, PenTool, MapPin, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    return (
        <React.Fragment>
            <section className="bg-primary text-white py-16 text-center mb-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-2 text-white">{t('services.title')}</h1>
                    <p className="text-lg">{t('services.subtitle')}</p>
                </div>
            </section>

            <div className="container mx-auto px-4">
                {/* Real Estate */}
                <section id="real-estate" className="flex flex-col md:flex-row items-center gap-16 py-16 border-b border-gray-100 dark:border-gray-800 last:border-0 scroll-mt-24 transition-colors duration-300">
                    <div className="text-secondary flex-shrink-0">
                        <Home size={100} strokeWidth={1} />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">{t('services.realestate.title')}</h2>
                        <p className="text-text dark:text-gray-300 mb-4 leading-relaxed">{t('services.realestate.desc')}</p>
                        <ul className="list-disc pl-6 mt-4 marker:text-primary dark:marker:text-blue-500 space-y-2 text-gray-700 dark:text-gray-400">
                            <li>{t('services.realestate.item1')}</li>
                            <li>{t('services.realestate.item2')}</li>
                            <li>{t('services.realestate.item3')}</li>
                            <li>{t('services.realestate.item4')}</li>
                        </ul>
                    </div>
                </section>

                {/* Construction */}
                <section id="construction" className="flex flex-col md:flex-row-reverse items-center gap-16 py-16 border-b border-gray-100 dark:border-gray-800 last:border-0 scroll-mt-24 transition-colors duration-300">
                    <div className="text-secondary flex-shrink-0">
                        <Building size={100} strokeWidth={1} />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">{t('services.construction.title')}</h2>
                        <p className="text-text dark:text-gray-300 mb-4 leading-relaxed">{t('services.construction.desc')}</p>
                        <ul className="list-disc pl-6 mt-4 marker:text-primary dark:marker:text-blue-500 space-y-2 text-gray-700 dark:text-gray-400">
                            <li>{t('services.construction.item1')}</li>
                            <li>{t('services.construction.item2')}</li>
                            <li>{t('services.construction.item3')}</li>
                            <li>{t('services.construction.item4')}</li>
                            <li>{t('services.construction.item5')}</li>
                        </ul>
                    </div>
                </section>

                {/* Design */}
                <section id="design" className="flex flex-col md:flex-row items-center gap-16 py-16 border-b border-gray-100 dark:border-gray-800 last:border-0 scroll-mt-24 transition-colors duration-300">
                    <div className="text-secondary flex-shrink-0">
                        <PenTool size={100} strokeWidth={1} />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">{t('services.design.title')}</h2>
                        <p className="text-text dark:text-gray-300 mb-4 leading-relaxed">{t('services.design.desc')}</p>
                        <ul className="list-disc pl-6 mt-4 marker:text-primary dark:marker:text-blue-500 space-y-2 text-gray-700 dark:text-gray-400">
                            <li>{t('services.design.item1')}</li>
                            <li>{t('services.design.item2')}</li>
                            <li>{t('services.design.item3')}</li>
                            <li>{t('services.design.item4')}</li>
                        </ul>
                    </div>
                </section>

                {/* Plotting */}
                <section id="plotting" className="flex flex-col md:flex-row-reverse items-center gap-16 py-16 border-b border-gray-100 dark:border-gray-800 last:border-0 scroll-mt-24 transition-colors duration-300">
                    <div className="text-secondary flex-shrink-0">
                        <MapPin size={100} strokeWidth={1} />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">{t('services.plotting.title')}</h2>
                        <p className="text-text dark:text-gray-300 mb-4 leading-relaxed">{t('services.plotting.desc')}</p>
                        <ul className="list-disc pl-6 mt-4 marker:text-primary dark:marker:text-blue-500 space-y-2 text-gray-700 dark:text-gray-400">
                            <li>{t('services.plotting.item1')}</li>
                            <li>{t('services.plotting.item2')}</li>
                            <li>{t('services.plotting.item3')}</li>
                        </ul>
                    </div>
                </section>

                {/* Maintenance */}
                <section id="maintenance" className="flex flex-col md:flex-row items-center gap-16 py-16 border-b border-gray-100 dark:border-gray-800 last:border-0 scroll-mt-24 transition-colors duration-300">
                    <div className="text-secondary flex-shrink-0">
                        <Wrench size={100} strokeWidth={1} />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-primary dark:text-blue-400 mb-4">{t('services.maintenance.title')}</h2>
                        <p className="text-text dark:text-gray-300 mb-4 leading-relaxed">{t('services.maintenance.desc')}</p>
                        <ul className="list-disc pl-6 mt-4 marker:text-primary dark:marker:text-blue-500 space-y-2 text-gray-700 dark:text-gray-400">
                            <li>{t('services.maintenance.item1')}</li>
                            <li>{t('services.maintenance.item2')}</li>
                            <li>{t('services.maintenance.item3')}</li>
                            <li>{t('services.maintenance.item4')}</li>
                        </ul>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
};

export default Services;
