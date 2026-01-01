
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? (
                <Moon size={20} className="text-gray-600 dark:text-gray-300" />
            ) : (
                <Sun size={20} className="text-yellow-400" />
            )}
        </button>
    );
};

export default ThemeToggle;
