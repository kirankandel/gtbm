import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeftRight, Calculator } from 'lucide-react';

const LandConverter = () => {
    const { t } = useLanguage();

    // Base unit is Square Feet
    const units = {
        sqft: { label: 'Sq. Feet', factor: 1 },
        sqmeter: { label: 'Sq. Meter', factor: 10.764 },
        ropani: { label: 'Ropani', factor: 5476 },
        aana: { label: 'Aana', factor: 342.25 },
        paisa: { label: 'Paisa', factor: 85.56 },
        daam: { label: 'Daam', factor: 21.39 },
        bigha: { label: 'Bigha', factor: 72900 },
        kattha: { label: 'Kattha', factor: 3645 },
        dhur: { label: 'Dhur', factor: 182.25 }
    };

    const [inputVal, setInputVal] = useState('');
    const [fromUnit, setFromUnit] = useState('aana');
    const [results, setResults] = useState({});

    const calculate = () => {
        const val = parseFloat(inputVal);
        if (isNaN(val)) {
            setResults({});
            return;
        }

        const sqFtValue = val * units[fromUnit].factor;

        const newResults = {};
        Object.keys(units).forEach(key => {
            newResults[key] = (sqFtValue / units[key].factor).toFixed(4);
        });
        setResults(newResults);
    };

    useEffect(() => {
        calculate();
    }, [inputVal, fromUnit]);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <ArrowLeftRight size={24} />
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">{t('tools.converter.title', 'Land Area Converter')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                    <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{t('tools.converter.input_label', 'Enter Value')}</label>
                    <input
                        type="number"
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none dark:text-white"
                        placeholder="e.g. 4"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{t('tools.converter.unit_label', 'Select Unit')}</label>
                    <select
                        value={fromUnit}
                        onChange={(e) => setFromUnit(e.target.value)}
                        className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none dark:text-white"
                    >
                        {Object.keys(units).map(unit => (
                            <option key={unit} value={unit}>{units[unit].label}</option>
                        ))}
                    </select>
                </div>
            </div>

            {inputVal && (
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">{t('tools.converter.results', 'Conversions')}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {Object.keys(results).map(unit => (
                            <div key={unit} className={`p-3 rounded border ${unit === fromUnit ? 'bg-primary/10 border-primary text-primary' : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700'}`}>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{units[unit].label}</div>
                                <div className="font-bold text-lg dark:text-gray-200">{results[unit]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LandConverter;
