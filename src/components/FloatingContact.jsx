
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingContact = () => {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
            {/* WhatsApp / Message Button */}
            <motion.a
                href="https://wa.me/9779851074241"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Chat on WhatsApp"
            >
                <MessageCircle size={24} />
            </motion.a>

            {/* Phone Call Button */}
            <motion.a
                href="tel:9851074241"
                className="bg-secondary text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Call Now"
            >
                <Phone size={24} />
            </motion.a>
        </div>
    );
};

export default FloatingContact;
