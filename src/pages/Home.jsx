import React from 'react';
import { ArrowRight, Building, Home as HomeIcon, PenTool } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SeoHead from '../components/SeoHead';
import ScrollReveal from '../components/ScrollReveal';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessTimeline from '../components/ProcessTimeline';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import PropertySearch from '../components/PropertySearch';
import SellProperty from '../components/SellProperty';

const Home = () => {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col">
            <SeoHead title={t('nav.home')} />

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax-like fixed feel */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transform scale-105 transition-transform duration-[20s] hover:scale-110"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-e32cb5313d51?q=80&w=2000&auto=format&fit=crop')" }}
                ></div>

                {/* Modern Gradient Overlay - Lighter/Cleaner */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80 z-0"></div>

                <div className="container mx-auto px-4 text-center relative z-10 pt-20">
                    <ScrollReveal width="100%">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
                            {t('home.hero.title')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">
                                {t('home.hero.title.highlight')}
                            </span> {t('home.hero.title.suffix')}
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal width="100%" delay={0.2}>
                        <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
                            {t('home.hero.subtitle')}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal width="100%" delay={0.4}>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <a href="/projects" className="group relative px-8 py-4 bg-secondary text-primary font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(252,163,17,0.5)] hover:scale-105">
                                <span className="relative z-10 flex items-center gap-2">
                                    {t('home.hero.cta.services')} <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </span>
                                <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            </a>

                            <a href="/contact" className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-full hover:bg-white hover:text-primary transition-all hover:scale-105">
                                {t('home.hero.cta.contact')}
                            </a>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Property Search Bar (Overlapping Hero) */}
            <PropertySearch />

            <div className="mt-12"></div>

            <div className="mt-12"></div>

            <WhyChooseUs />

            {/* Featured Properties Preview (Replaced old services CTA logic essentially) */}
            {/* We will keep services preview but add more real estate focus later */}

            <ProcessTimeline />

            <SellProperty />

            {/* Services Preview */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <ScrollReveal width="100%">
                            <h2 className="text-3xl font-bold font-heading text-text dark:text-white mb-4">{t('home.services.title')}</h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t('home.services.subtitle')}</p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <HomeIcon size={32} />, title: t('home.service.realestate'), desc: t('home.service.realestate.desc') },
                            { icon: <Building size={32} />, title: t('home.service.construction'), desc: t('home.service.construction.desc') },
                            { icon: <PenTool size={32} />, title: t('home.service.design'), desc: t('home.service.design.desc') }
                        ].map((service, index) => (
                            <ScrollReveal key={index} width="100%" delay={index * 0.2}>
                                <div className="p-8 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-xl transition-all bg-white dark:bg-gray-900 h-full group">
                                    <div className="w-14 h-14 bg-primary/10 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-primary dark:text-blue-400 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 font-heading text-gray-800 dark:text-gray-100">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />

            <FAQ />

        </div>
    );
};

export default Home;
