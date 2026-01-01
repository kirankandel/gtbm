
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="text-2xl font-bold text-white font-heading mb-4 block">
                            GTBM
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Building dreams and securing futures through excellence in construction and real estate services in Kathmandu.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Our Services</Link></li>
                            <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors text-sm">Recent Projects</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading">Services</h3>
                        <ul className="space-y-3">
                            <li className="text-gray-400 text-sm">Real Estate</li>
                            <li className="text-gray-400 text-sm">Construction</li>
                            <li className="text-gray-400 text-sm">2D/3D Design</li>
                            <li className="text-gray-400 text-sm">Maintenance</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-heading">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 mt-1 text-primary shrink-0" />
                                <span className="text-gray-400 text-sm">Kathmandu, Nepal</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-3 text-primary shrink-0" />
                                <span className="text-gray-400 text-sm">+977 1234567890</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-3 text-primary shrink-0" />
                                <span className="text-gray-400 text-sm">info@gtbm.com.np</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} GTBM. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
