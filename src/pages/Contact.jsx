
import React, { useState } from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for the inquiry! We will contact you soon.');
    };

    return (
        <React.Fragment>
            <section className="bg-primary text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-2 text-white">Contact Us</h1>
                    <p className="text-lg">Get in touch for consultations and site visits.</p>
                </div>
            </section>

            <section className="py-20 bg-background text-text">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2 className="text-2xl font-bold text-primary mb-8">Get In Touch</h2>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2 text-secondary">📍 Visit Us</h3>
                            <p className="text-text">New Baneshwor-10, Kathmandu, Nepal</p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2 text-secondary">📞 Call Us</h3>
                            <p><a href="tel:9851074241" className="text-lg font-bold text-primary hover:underline">9851074241</a></p>
                            <p><a href="#" className="text-text hover:text-primary transition-colors">01-4XXXXXX</a></p>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2 text-secondary">✉️ Email Us</h3>
                            <p><a href="mailto:info@gtbm.com.np" className="text-text hover:text-primary transition-colors">info@gtbm.com.np</a></p>
                        </div>

                        <div className="mt-8">
                            <iframe
                                title="Map Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.564539668486!2d85.3341!3d27.6915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a792044813%3A0x67399a9a0e663806!2sNew%20Baneshwor%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                                className="block w-full h-[300px] rounded-lg border-0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="bg-white p-6 md:p-10 rounded-lg shadow-md border border-gray-100 h-fit">
                        <h2 className="text-2xl font-bold text-primary mb-8">Send an Inquiry</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-2 font-semibold text-[0.95rem]">Full Name</label>
                                <input type="text" id="name" name="name" required placeholder="Ram Bahadur" className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:outline-none transition-colors" />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block mb-2 font-semibold text-[0.95rem]">Phone Number</label>
                                <input type="tel" id="phone" name="phone" required placeholder="98XXXXXXXX" className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:outline-none transition-colors" />
                            </div>

                            <div>
                                <label htmlFor="service" className="block mb-2 font-semibold text-[0.95rem]">Service Interested In</label>
                                <select id="service" name="service" className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:outline-none transition-colors bg-white">
                                    <option value="real-estate">Real Estate (Buy/Sell)</option>
                                    <option value="construction">Construction (Thekka)</option>
                                    <option value="design">2D/3D Design</option>
                                    <option value="plotting">Plotting Services</option>
                                    <option value="maintenance">Maintenance</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 font-semibold text-[0.95rem]">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Tell us more about your requirement..." className="w-full p-3 border border-gray-300 rounded focus:border-primary focus:outline-none transition-colors"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary text-white p-3 rounded font-bold hover:bg-secondary transition-colors">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Contact;
