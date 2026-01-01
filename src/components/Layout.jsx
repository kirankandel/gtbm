import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main className="flex-grow mt-[80px]"> {/* Add margin-top to account for fixed header */}
                <Outlet />
            </main>
            <FloatingContact />
            <Footer />
        </div>
    );
};

export default Layout;
