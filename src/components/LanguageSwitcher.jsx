
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { language: currentLanguage, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'ne', label: 'Nepali' },
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageChange = (langCode) => {
        setLanguage(langCode);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 font-bold text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-secondary transition-colors"
                title="Select Language"
            >
                <Globe size={16} />
                <span>{currentLanguage === 'en' ? 'EN' : 'NE'}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 py-2 w-24 bg-white dark:bg-gray-800 rounded-md shadow-xl z-50 animate-fade-in border border-gray-100 dark:border-gray-700">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${currentLanguage === lang.code ? 'text-primary dark:text-secondary font-bold' : 'text-gray-700 dark:text-gray-300'}`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
