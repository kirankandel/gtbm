import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.projects'), path: '/projects' },
        { name: t('nav.tools'), path: '/tools' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 transition-all duration-300 border-b border-white/20 dark:border-gray-800">
            {/* Top Bar */}
            <div className="bg-primary dark:bg-blue-900 text-white py-2 text-sm hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2"><Phone size={14} /> +977 9851074241</span>
                        <span className="flex items-center gap-2"><Mail size={14} /> info@gtbm.com.np</span>
                    </div>
                </div>
            </div>

            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    {/* Logo */}
                    <Link to="/" className="flex flex-col items-center">
                        <img src="/images/logo.png" alt="GTBM Logo" className="h-10 w-auto" />
                        <span className="font-bold font-heading text-primary text-xs leading-none mt-1">GTBM</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex gap-6 font-medium">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-primary dark:text-secondary border-b-2 border-primary dark:border-secondary pb-1"
                                                : "text-text dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors"
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <ThemeToggle />
                        <LanguageSwitcher />
                        <a href="tel:9851074241" className="bg-secondary text-white px-5 py-2 rounded font-bold hover:bg-orange-600 transition-colors">
                            {t('nav.callnow')}
                        </a>
                    </div>

                    {/* Mobile Menu Button & Language Switcher */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <LanguageSwitcher />
                        <button onClick={toggleMenu} className="text-primary focus:outline-none">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-inner">
                        <ul className="flex flex-col gap-4 font-medium">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? "text-primary dark:text-secondary block font-bold" : "text-text dark:text-gray-200 block"
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
