import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: t('faq.q1'),
            answer: t('faq.a1')
        },
        {
            question: t('faq.q2'),
            answer: t('faq.a2')
        },
        {
            question: t('faq.q3'),
            answer: t('faq.a3')
        },
        {
            question: t('faq.q4'),
            answer: t('faq.a4')
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-heading text-primary dark:text-blue-400 mb-4 flex items-center justify-center gap-2">
                        <HelpCircle size={32} /> {t('faq.title')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        {t('faq.subtitle')}
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-secondary" />
                                ) : (
                                    <ChevronDown className="text-gray-400" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
