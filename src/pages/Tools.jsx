import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SeoHead from '../components/SeoHead';
import LandConverter from '../components/LandConverter';
import CostCalculator from '../components/CostCalculator';
import ScrollReveal from '../components/ScrollReveal';

const Tools = () => {
    const { t } = useLanguage();

    return (
        <div className="pt-20">
            <SeoHead title={t('nav.tools')} description="Real Estate Tools and Calculators for Nepal." />

            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <ScrollReveal width="100%">
                        <h1 className="text-4xl font-bold font-heading mb-4">{t('tools.title', 'Real Estate Tools')}</h1>
                        <p className="text-xl opacity-90">{t('tools.subtitle', 'Smart calculators to help you make better decisions.')}</p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        <ScrollReveal width="100%">
                            <LandConverter />
                        </ScrollReveal>
                        <ScrollReveal width="100%" delay={0.2}>
                            <CostCalculator />
                        </ScrollReveal>
                    </div>

                    <div className="mt-16 text-center max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Need a Professional valuation?</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            While these tools give you a good estimate, our experts can provide precise valuations and construction quotes tailored to your specific needs.
                        </p>
                        <a href="/contact" className="inline-block px-8 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-orange-600 transition-colors">
                            Contact an Expert
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tools;
