import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Ram Bahadur Thapa",
            role: "Homeowner",
            content: t('testimonials.1.content'),
            location: "Baneshwor"
        },
        {
            id: 2,
            name: "Sita Sharma",
            role: "Business Owner",
            content: t('testimonials.2.content'),
            location: "Koteshwor"
        },
        {
            id: 3,
            name: "Dr. Bikram KC",
            role: "Investor",
            content: t('testimonials.3.content'),
            location: "Pepsicola"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="py-20 bg-primary/5 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-heading text-primary dark:text-blue-400 mb-4">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative h-[300px] sm:h-[250px] flex items-center justify-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 absolute w-full"
                        >
                            <Quote size={40} className="text-secondary/20 absolute top-6 right-8" />
                            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed relative z-10">
                                "{testimonials[currentIndex].content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-xl font-bold text-gray-500">
                                    {testimonials[currentIndex].name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary dark:text-blue-400">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">
                                        {testimonials[currentIndex].role} — <span className="text-secondary">{testimonials[currentIndex].location}</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-secondary w-8'
                                    : 'bg-gray-300 dark:bg-gray-700 hover:bg-secondary/50'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
