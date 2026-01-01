
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';

const StatsSection = () => {
    const { t } = useLanguage();

    const stats = [
        { label: 'Years Experience', value: '10+', key: 'stats.experience' },
        { label: 'Projects Completed', value: '50+', key: 'stats.projects' },
        { label: 'Happy Clients', value: '200+', key: 'stats.clients' },
    ];

    return (
        <section className="py-12 bg-primary dark:bg-blue-900 text-white transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                    {stats.map((stat, index) => (
                        <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                            <div className="p-4">
                                <div className="text-4xl md:text-5xl font-bold font-heading mb-2">{stat.value}</div>
                                <div className="text-lg opacity-90">{t(stat.key) || stat.label}</div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
