import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SeoHead from '../components/SeoHead';
import { Filter, MapPin, Maximize, Home, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('all');

    // Mock Data - In a real app this would come from an API/CMS
    const properties = [
        {
            id: 1,
            title: "Prime Land in Baneshwor",
            location: "Baneshwor, Kathmandu",
            price: "60 Lakhs / Aana",
            size: "4 Aana",
            road: "13 ft",
            type: "land",
            category: "sale",
            image: "/images/projects/site_sankhamul/site_sankhamul_1.jpeg",
            featured: true
        },
        {
            id: 2,
            title: "Commercial Complex Site",
            location: "Koteshwor, Kathmandu",
            price: "85 Lakhs / Aana",
            size: "10 Aana",
            road: "20 ft (Main Road)",
            type: "land",
            category: "sale",
            image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=800",
            featured: false
        },
        {
            id: 3,
            title: "Modern House for Sale",
            location: "Imadol, Lalitpur",
            price: "2.5 Cr",
            size: "3.5 Aana",
            road: "10 ft",
            type: "house",
            category: "sale",
            image: "https://images.unsplash.com/photo-1600596542815-e32cb5313d51?auto=format&fit=crop&q=80&w=800",
            featured: true
        },
        {
            id: 4,
            title: "Residential Plot",
            location: "Pepsicola, Kathmandu",
            price: "45 Lakhs / Aana",
            size: "5 Aana",
            road: "12 ft",
            type: "land",
            category: "sale",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
            featured: false
        }
    ];

    const filteredProperties = filter === 'all'
        ? properties
        : properties.filter(p => p.type === filter);

    return (
        <div className="pt-20">
            <SeoHead title={t('nav.projects')} description={t('projects.subtitle')} />

            {/* Header */}
            <section className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading mb-4">{t('projects.title')}</h1>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">{t('projects.subtitle')}</p>
                </div>
            </section>

            {/* Filters */}
            <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-16 z-30 shadow-sm transition-colors duration-300">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                        {['all', 'land', 'house', 'commercial'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-6 py-2 rounded-full font-bold capitalize transition-all whitespace-nowrap ${filter === f
                                        ? 'bg-secondary text-primary shadow-md'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                            >
                                {f === 'all' ? 'All Properties' : t(`property.type.${f}`)}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder={t('search.placeholder.location')}
                                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Listings Grid */}
            <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={filter}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProperties.map((property) => (
                                <div key={property.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col h-full">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={property.image}
                                            alt={property.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">
                                                {property.category === 'sale' ? 'For Sale' : 'For Rent'}
                                            </span>
                                            {property.featured && (
                                                <span className="bg-secondary/90 backdrop-blur-sm text-primary px-3 py-1 rounded text-xs font-bold uppercase tracking-wide flex items-center gap-1">
                                                    <Maximize size={12} /> Featured
                                                </span>
                                            )}
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900/90 to-transparent p-4 pt-12">
                                            <h3 className="text-xl font-bold text-white truncate drop-shadow-md">{property.title}</h3>
                                            <p className="text-gray-200 text-sm flex items-center gap-1">
                                                <MapPin size={14} className="text-secondary" /> {property.location}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="flex flex-col">
                                                <span className="text-gray-500 dark:text-gray-400 text-xs uppercase font-bold tracking-wider">{t('projects.label.price')}</span>
                                                <span className="text-primary dark:text-blue-400 font-bold text-lg">{property.price}</span>
                                            </div>
                                            <div className="flex flex-col text-right">
                                                <span className="text-gray-500 dark:text-gray-400 text-xs uppercase font-bold tracking-wider">{t('projects.label.size')}</span>
                                                <span className="text-gray-800 dark:text-gray-200 font-bold text-lg">{property.size}</span>
                                            </div>
                                            <div className="col-span-2 border-t border-gray-100 dark:border-gray-800 pt-4 mt-2 flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                                                <span className="flex items-center gap-2"><Home size={16} /> {t(`property.type.${property.type}`)}</span>
                                                <span>Road: <span className="text-gray-800 dark:text-gray-200 font-semibold">{property.road}</span></span>
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <Link to="/contact" className="block w-full text-center bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-200 py-3 rounded-lg font-bold hover:bg-primary hover:text-white dark:hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
                                                {t('projects.cta')}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
};

export default Projects;
