
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors border border-gray-300 text-sm font-medium text-gray-700"
            title={language === 'en' ? 'Switch to Nepali' : 'Switch to English'}
        >
            <Globe size={16} />
            <span>{language === 'en' ? 'NE' : 'EN'}</span>
        </button>
    );
};

export default LanguageSwitcher;
