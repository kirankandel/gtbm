
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
    const { t } = useLanguage();

    return (
        <React.Fragment>
            {/* Hero Section */}
            <section className="bg-primary text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-2 text-white">{t('about.title')}</h1>
                    <p className="text-lg">{t('about.subtitle')}</p>
                </div>
            </section>

            {/* Profile Section */}
            <section id="profile" className="py-20 bg-background text-text">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-4 text-primary">{t('about.profile.title')}</h2>
                            <p className="mb-4 leading-relaxed">{t('about.profile.p1')}</p>
                            <p className="mb-4 leading-relaxed">{t('about.profile.p2')}</p>
                            <ul className="mt-6 flex flex-col gap-2">
                                <li className="text-lg"><strong>{t('about.value.integrity')}</strong> {t('about.value.integrity.desc')}</li>
                                <li className="text-lg"><strong>{t('about.value.quality')}</strong> {t('about.value.quality.desc')}</li>
                                <li className="text-lg"><strong>{t('about.value.innovation')}</strong> {t('about.value.innovation.desc')}</li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full">
                            <img
                                src="/images/about-us.png"
                                alt="GTBM Office or Team"
                                className="w-full h-auto rounded-lg shadow-xl object-cover transform hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Director Section */}
            <section id="director" className="py-20 bg-gray-50 text-text">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-primary">{t('about.director.title')}</h2>
                    <div className="flex flex-col md:flex-row gap-12 items-start bg-white p-8 md:p-12 rounded-2xl shadow-lg mt-8 max-w-5xl mx-auto border-t-4 border-primary">
                        <img
                            src="/images/director.jpeg"
                            alt="Kamal Kharel"
                            className="w-[150px] h-[150px] rounded-full object-cover border-4 border-gray-100 shadow-md mx-auto md:mx-0 flex-shrink-0"
                        />
                        <div className="flex-1">
                            <blockquote className="text-lg leading-relaxed text-text mb-4 italic">
                                {t('about.director.message')}
                            </blockquote>
                            <cite className="font-bold text-primary not-italic block mt-4">{t('about.director.cite')}</cite>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default About;
