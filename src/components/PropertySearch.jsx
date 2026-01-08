import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const PropertySearch = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('buy');

    return (
        <div className="w-full max-w-5xl mx-auto -mt-24 relative z-20 px-4">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20 dark:border-gray-700/50"
            >
                {/* Tabs */}
                <div className="flex gap-8 mb-8 border-b border-gray-200/50 dark:border-gray-700/50 pb-4">
                    {['buy', 'rent', 'sell'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setActiveTab(type)}
                            className={`text-lg font-bold pb-2 relative transition-all duration-300 ${activeTab === type
                                ? 'text-primary dark:text-blue-400 scale-105'
                                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                }`}
                        >
                            {t(`search.tab.${type}`)}
                            {activeTab === type && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-[-17px] left-0 w-full h-[4px] bg-gradient-to-r from-primary to-blue-400 rounded-t-full"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Search Form */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="relative md:col-span-4">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/70" size={20} />
                        <input
                            type="text"
                            placeholder={t('search.placeholder.location')}
                            className="w-full pl-12 pr-4 py-4 bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all dark:text-white placeholder-gray-500"
                        />
                    </div>

                    <div className="relative md:col-span-3">
                        <Home className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/70" size={20} />
                        <select className="w-full pl-12 pr-4 py-4 bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none dark:text-white cursor-pointer">
                            <option value="">{t('search.placeholder.type')}</option>
                            <option value="land">{t('property.type.land')}</option>
                            <option value="house">{t('property.type.house')}</option>
                            <option value="commercial">{t('property.type.commercial')}</option>
                        </select>
                    </div>

                    <div className="relative md:col-span-3">
                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/70" size={20} />
                        <select className="w-full pl-12 pr-4 py-4 bg-gray-50/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none dark:text-white cursor-pointer">
                            <option value="">{t('search.placeholder.budget')}</option>
                            <option value="low">Under 1 Cr</option>
                            <option value="mid">1 Cr - 3 Cr</option>
                            <option value="high">3 Cr+</option>
                        </select>
                    </div>

                    <button className="md:col-span-2 bg-gradient-to-r from-primary to-blue-700 hover:from-blue-700 hover:to-primary text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                        <Search size={20} />
                        {t('search.action')}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default PropertySearch;
