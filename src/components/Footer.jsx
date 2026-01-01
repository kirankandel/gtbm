
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-primary dark:bg-gray-950 text-white pt-16 pb-8 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-4">GTBM</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-600 pb-2 inline-block">{t('footer.quicklinks')}</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.home')}</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.about')}</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.services')}</Link></li>
                            <li><Link to="/projects" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.projects')}</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-600 pb-2 inline-block">{t('footer.contact')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin className="text-secondary shrink-0 mt-1" size={18} />
                                <span>New Baneshwor, Kathmandu<br />Nepal</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone className="text-secondary shrink-0" size={18} />
                                <a href="tel:+9779851074241" className="hover:text-white transition-colors">+977 9851074241</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mail className="text-secondary shrink-0" size={18} />
                                <a href="mailto:info@gtbm.com.np" className="hover:text-white transition-colors">info@gtbm.com.np</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} {t('footer.companyName')} {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
