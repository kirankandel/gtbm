import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Star, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { Link } from 'react-router-dom';

const SellProperty = () => {
    const { t } = useLanguage();

    const benefits = [
        t('sell.benefit.1'),
        t('sell.benefit.2'),
        t('sell.benefit.3'),
        t('sell.benefit.4')
    ];

    return (
        <section className="py-20 bg-primary/95 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <ScrollReveal width="100%">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                                <Star className="text-secondary fill-secondary" size={16} />
                                <span className="text-sm font-bold uppercase tracking-wider">{t('sell.badge')}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                                {t('sell.title')}
                                <span className="block text-secondary">{t('sell.title.highlight')}</span>
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-xl">
                                {t('sell.desc')}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="bg-white/20 p-1 rounded-full">
                                            <CheckCircle size={16} className="text-secondary" />
                                        </div>
                                        <span className="font-medium text-blue-50">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/contact" className="inline-block bg-secondary text-primary font-bold px-8 py-4 rounded-lg hover:bg-white transition-all shadow-lg transform hover:-translate-y-1">
                                {t('sell.cta')}
                            </Link>
                        </ScrollReveal>
                    </div>

                    <div className="flex-1 w-full max-w-md">
                        <ScrollReveal width="100%" delay={0.2}>
                            <div className="bg-white p-8 rounded-2xl shadow-2xl">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('sell.form.title')}</h3>
                                <form className="space-y-4">
                                    <input type="text" placeholder={t('contact.form.name')} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-gray-800" />
                                    <input type="text" placeholder={t('contact.form.phone')} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-gray-800" />
                                    <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-gray-800">
                                        <option value="">{t('search.placeholder.location')}</option>
                                        <option value="kathmandu">Kathmandu</option>
                                        <option value="bhaktapur">Bhaktapur</option>
                                        <option value="lalitpur">Lalitpur</option>
                                    </select>
                                    <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors">
                                        {t('sell.form.submit')}
                                    </button>
                                </form>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellProperty;
