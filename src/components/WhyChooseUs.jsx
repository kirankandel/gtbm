import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollReveal from './ScrollReveal';
import { ShieldCheck, Clock, Users, Star } from 'lucide-react';

const WhyChooseUs = () => {
    const { t } = useLanguage();

    const reasons = [
        {
            icon: <ShieldCheck size={32} />,
            title: t('why.reason1.title') || "Trusted Excellence",
            desc: t('why.reason1.desc') || "Delivering top-tier quality in every project with uncompromised standards."
        },
        {
            icon: <Clock size={32} />,
            title: t('why.reason2.title') || "Timely Delivery",
            desc: t('why.reason2.desc') || "We value your time, ensuring all deadlines are met with precision."
        },
        {
            icon: <Users size={32} />,
            title: t('why.reason3.title') || "Customer Focused",
            desc: t('why.reason3.desc') || "Your satisfaction is our priority, tailoring solutions to your needs."
        },
        {
            icon: <Star size={32} />,
            title: t('why.reason4.title') || "Proven Track Record",
            desc: t('why.reason4.desc') || "Years of experience and happy clients speak for our expertise."
        }
    ];

    return (
        <section className="py-20 bg-primary dark:bg-blue-900 text-white transition-colors duration-300 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Logo / Brand Section */}
                    <div className="w-full lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
                        <ScrollReveal width="100%">
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 inline-block w-full">
                                <img
                                    src="/images/logo.png"
                                    alt="Logo"
                                    className="h-32 mx-auto mb-6 drop-shadow-lg"
                                />
                                <h2 className="text-4xl font-bold font-heading mb-4 text-white">Why Choose Us?</h2>
                                <p className="text-white text-xl max-w-sm mx-auto lg:mx-0 font-medium leading-relaxed">
                                    Building your dreams with integrity, quality, and passion.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Reasons Grid */}
                    <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {reasons.map((reason, index) => (
                            <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group">
                                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        {reason.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">{reason.title}</h3>
                                    <p className="text-white text-lg leading-relaxed opacity-90">{reason.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
