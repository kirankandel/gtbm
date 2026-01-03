import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const PropertySearch = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('buy');

    return (
        <div className="w-full max-w-4xl mx-auto -mt-24 relative z-20 px-4">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border border-gray-100 dark:border-gray-700"
            >
                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">
                    {['buy', 'rent', 'sell'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setActiveTab(type)}
                            className={`text-lg font-bold pb-2 relative transition-colors ${activeTab === type
                                    ? 'text-primary dark:text-blue-400'
                                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                }`}
                        >
                            {t(`search.tab.${type}`)}
                            {activeTab === type && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-[-17px] left-0 w-full h-[3px] bg-primary dark:bg-blue-400"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Search Form */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder={t('search.placeholder.location')}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                        />
                    </div>

                    <div className="relative">
                        <Home className="absolute left-3 top-3 text-gray-400" size={20} />
                        <select className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none dark:text-white">
                            <option value="">{t('search.placeholder.type')}</option>
                            <option value="land">{t('property.type.land')}</option>
                            <option value="house">{t('property.type.house')}</option>
                            <option value="commercial">{t('property.type.commercial')}</option>
                        </select>
                    </div>

                    <div className="relative">
                        <DollarSign className="absolute left-3 top-3 text-gray-400" size={20} />
                        <select className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none dark:text-white">
                            <option value="">{t('search.placeholder.budget')}</option>
                            <option value="low">Under 1 Cr</option>
                            <option value="mid">1 Cr - 3 Cr</option>
                            <option value="high">3 Cr+</option>
                        </select>
                    </div>

                    <button className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg dark:bg-blue-600 dark:hover:bg-blue-500">
                        <Search size={20} />
                        {t('search.action')}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default PropertySearch;
