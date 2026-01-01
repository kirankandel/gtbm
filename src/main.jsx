import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './contexts/LanguageContext'
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <ThemeProvider>
                <LanguageProvider>
                    <App />
                </LanguageProvider>
            </ThemeProvider>
        </HelmetProvider>
    </React.StrictMode>,
)
