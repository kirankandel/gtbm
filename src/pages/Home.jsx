import React from 'react';
import { ArrowRight, Building, Home as HomeIcon, PenTool } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SeoHead from '../components/SeoHead';
import ScrollReveal from '../components/ScrollReveal';
import StatsSection from '../components/StatsSection';

const Home = () => {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col">
            <SeoHead title={t('nav.home')} />

            {/* Hero Section */}
            <section className="relative py-32 px-4 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/hero-vector.jpg')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60 z-0"></div>
                <div className="container mx-auto text-center max-w-4xl relative z-10">
                    <ScrollReveal width="100%">
                        <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight drop-shadow-md">
                            {t('home.hero.title')} <br />
                            <span className="text-secondary">{t('home.hero.title.highlight')}</span> {t('home.hero.title.suffix')}
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal width="100%" delay={0.2}>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-sm font-medium">
                            {t('home.hero.subtitle')}
                        </p>
                    </ScrollReveal>
                    <ScrollReveal width="100%" delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/projects" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 hover:shadow-lg">
                                {t('home.hero.cta.services')} <ArrowRight className="ml-2" size={20} />
                            </a>
                            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/50 font-bold rounded-lg hover:bg-white hover:text-primary transition-all">
                                {t('home.hero.cta.contact')}
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <StatsSection />

            {/* Services Preview */}
            <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <ScrollReveal width="100%">
                            <h2 className="text-3xl font-bold font-heading text-text dark:text-white mb-4">{t('home.services.title')}</h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t('home.services.subtitle')}</p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <Building size={32} />, title: t('home.service.construction'), desc: t('home.service.construction.desc') },
                            { icon: <HomeIcon size={32} />, title: t('home.service.realestate'), desc: t('home.service.realestate.desc') },
                            { icon: <PenTool size={32} />, title: t('home.service.design'), desc: t('home.service.design.desc') }
                        ].map((service, index) => (
                            <ScrollReveal key={index} width="100%" delay={index * 0.2}>
                                <div className="p-6 border border-gray-100 dark:border-gray-800 rounded-xl hover:shadow-lg transition-all bg-white dark:bg-gray-800 h-full">
                                    <div className="w-12 h-12 bg-primary/10 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary dark:text-blue-400 mb-4">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 font-heading dark:text-gray-100">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
