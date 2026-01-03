import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CalendarCheck, FileText, HardHat, Key, Search } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ProcessTimeline = () => {
    const { t } = useLanguage();

    const steps = [
        {
            icon: <Search size={24} />,
            title: t('process.step1.title'),
            desc: t('process.step1.desc')
        },
        {
            icon: <CalendarCheck size={24} />,
            title: t('process.step2.title'),
            desc: t('process.step2.desc')
        },
        {
            icon: <FileText size={24} />,
            title: t('process.step3.title'),
            desc: t('process.step3.desc')
        },
        {
            icon: <HardHat size={24} />,
            title: t('process.step4.title'),
            desc: t('process.step4.desc')
        },
        {
            icon: <Key size={24} />,
            title: t('process.step5.title'),
            desc: t('process.step5.desc')
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <ScrollReveal width="100%">
                        <h2 className="text-3xl font-bold font-heading text-text dark:text-white mb-4">
                            {t('process.title')}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {t('process.subtitle')}
                        </p>
                    </ScrollReveal>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 dark:bg-gray-800 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <ScrollReveal key={index} width="100%" delay={index * 0.15}>
                                <div className="flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-primary dark:border-blue-500 flex items-center justify-center text-primary dark:text-blue-400 text-xl font-bold shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 px-2">
                                        {step.desc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
