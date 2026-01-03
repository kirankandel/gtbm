import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calculator, Check } from 'lucide-react';

const CostCalculator = () => {
    const { t } = useLanguage();

    const [area, setArea] = useState('');
    const [floors, setFloors] = useState(1);
    const [quality, setQuality] = useState('standard');
    const [totalCost, setTotalCost] = useState(0);

    const rates = {
        budget: { rate: 2800, label: 'Budget', desc: 'Basic finishing, local materials.' },
        standard: { rate: 3500, label: 'Standard', desc: 'Good quality tiles, modular kitchen.' },
        premium: { rate: 4500, label: 'Premium', desc: 'Luxury fittings, parquet, imported materials.' }
    };

    const calculateCost = (e) => {
        e.preventDefault();
        const areaVal = parseFloat(area);
        const floorsVal = parseFloat(floors);

        if (isNaN(areaVal) || isNaN(floorsVal)) return;

        // Convert Aana to Sq. Ft (1 Aana = 342.25 Sq. Ft)
        // Assuming the user is inputting the *Built-up Area per floor* in Aana
        const areaInSqFt = areaVal * 342.25;
        const cost = areaInSqFt * floorsVal * rates[quality].rate;
        setTotalCost(cost);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-NP', { style: 'currency', currency: 'NPR', maximumFractionDigits: 0 }).format(amount);
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 h-full">
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                    <Calculator size={24} />
                </div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">{t('tools.calculator.title', 'Construction Cost Estimator')}</h2>
            </div>

            <form onSubmit={calculateCost} className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Land Area (Aana)</label>
                    <input
                        type="number"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none dark:text-white"
                        placeholder="e.g. 4"
                        step="0.1"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Number of Floors</label>
                    <input
                        type="number"
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                        min="1"
                        max="10"
                        className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-secondary focus:outline-none dark:text-white"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Finishing Quality</label>
                    <div className="grid grid-cols-1 gap-3">
                        {Object.keys(rates).map((q) => (
                            <div
                                key={q}
                                onClick={() => setQuality(q)}
                                className={`p-3 rounded-lg border cursor-pointer transition-all flex justify-between items-center ${quality === q
                                    ? 'border-secondary bg-secondary/5 ring-1 ring-secondary'
                                    : 'border-gray-200 dark:border-gray-600 hover:border-secondary/50'
                                    }`}
                            >
                                <div>
                                    <div className="font-bold text-gray-800 dark:text-gray-200">{rates[q].label}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">{rates[q].desc}</div>
                                </div>
                                {quality === q && <Check size={18} className="text-secondary" />}
                            </div>
                        ))}
                    </div>
                </div>

                <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                    Calculate Cost
                </button>
            </form>

            {totalCost > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 text-center animate-pulse-once">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Estimated Total Cost</div>
                    <div className="text-3xl font-bold text-secondary font-heading">
                        {formatCurrency(totalCost)}
                    </div>
                    <p className="text-xs text-gray-400 mt-2 italic">* This is an approximate estimation. Actual costs may vary depending on site conditions and material prices.</p>
                </div>
            )}
        </div>
    );
};

export default CostCalculator;
