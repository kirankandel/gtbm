import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SeoHead from '../components/SeoHead';

const Contact = () => {
    const { t } = useLanguage();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! We will contact you shortly.');
    };

    return (
        <div className="pt-20">
            <SeoHead title={t('nav.contact')} description={t('contact.subtitle')} />

            <section className="bg-primary text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-2 text-white">{t('contact.title')}</h1>
                    <p className="text-lg">{t('contact.subtitle')}</p>
                </div>
            </section>

            <section className="py-20 bg-background dark:bg-gray-900 text-text dark:text-gray-200 transition-colors duration-300">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2 className="text-2xl font-bold text-primary dark:text-blue-400 mb-8">{t('contact.info.title')}</h2>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2 text-secondary">📍 {t('contact.info.visit')}</h3>
                            <p className="text-text dark:text-gray-300">{t('contact.info.address')}</p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2 text-secondary">📞 {t('contact.info.call')}</h3>
                            <p><a href="tel:9851074241" className="text-lg font-bold text-primary dark:text-blue-400 hover:underline">9851074241</a></p>
                            <p><a href="#" className="text-text dark:text-gray-300 hover:text-primary transition-colors">01-4XXXXXX</a></p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2 text-secondary">✉️ {t('contact.info.email')}</h3>
                            <p><a href="mailto:info@gtbm.com.np" className="text-text dark:text-gray-300 hover:text-primary transition-colors">info@gtbm.com.np</a></p>
                        </div>

                        <div className="mt-8">
                            <iframe
                                title="Map Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.564539668486!2d85.3341!3d27.6915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a792044813%3A0x67399a9a0e663806!2sNew%20Baneshwor%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                                className="block w-full h-[300px] rounded-lg border-0 shadow-md"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 h-fit transition-colors">
                        <h2 className="text-2xl font-bold text-primary dark:text-blue-400 mb-8">{t('contact.form.title')}</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-2 font-semibold text-[0.95rem] text-gray-700 dark:text-gray-300">{t('contact.form.name')}</label>
                                <input type="text" id="name" name="name" required placeholder={t('contact.form.placeholder.name')} className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:border-primary focus:outline-none transition-colors bg-white dark:bg-gray-700 dark:text-white" />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block mb-2 font-semibold text-[0.95rem] text-gray-700 dark:text-gray-300">{t('contact.form.phone')}</label>
                                <input type="tel" id="phone" name="phone" required placeholder={t('contact.form.placeholder.phone')} className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:border-primary focus:outline-none transition-colors bg-white dark:bg-gray-700 dark:text-white" />
                            </div>

                            <div>
                                <label htmlFor="service" className="block mb-2 font-semibold text-[0.95rem] text-gray-700 dark:text-gray-300">{t('contact.form.service')}</label>
                                <select id="service" name="service" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:border-primary focus:outline-none transition-colors bg-white dark:bg-gray-700 dark:text-white">
                                    <option value="real-estate">{t('contact.form.option.realestate')}</option>
                                    <option value="construction">{t('contact.form.option.construction')}</option>
                                    <option value="design">{t('contact.form.option.design')}</option>
                                    <option value="plotting">{t('contact.form.option.plotting')}</option>
                                    <option value="maintenance">{t('contact.form.option.maintenance')}</option>
                                    <option value="other">{t('contact.form.option.other')}</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 font-semibold text-[0.95rem] text-gray-700 dark:text-gray-300">{t('contact.form.message')}</label>
                                <textarea id="message" name="message" rows="5" placeholder={t('contact.form.placeholder.message')} className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:border-primary focus:outline-none transition-colors bg-white dark:bg-gray-700 dark:text-white"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary text-white p-3 rounded font-bold hover:bg-secondary transition-colors">{t('contact.form.submit')}</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
