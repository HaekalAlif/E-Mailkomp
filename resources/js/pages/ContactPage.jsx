import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Layouts/Footer";

const ContactPage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div>
            <div className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-purple to-primary-dark"></div>
                <div className="absolute inset-0 bg-[url('/assets/grid.png')] opacity-10"></div>

                {/* Cursor Glow */}
                <div
                    className="hidden md:block fixed w-[45vw] h-[45vw] bg-primary-blue/10 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out"
                    style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`,
                        transform: "translate(-50%, -50%)",
                    }}
                ></div>

                {/* Abstract Background Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[1200px] md:h-[1200px] bg-primary-blue opacity-20 blur-3xl animate-pulse-slow"></div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center text-center space-y-12"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-primary-blue tracking-tight relative"
                        >
                            Contact Us
                            <div className="absolute -inset-x-8 -inset-y-4 bg-primary-blue/20 blur-3xl -z-10 opacity-50 animate-pulse-slow"></div>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="max-w-2xl text-lg text-gray-200/90 leading-relaxed"
                        >
                            We are here to assist you with any questions or
                            concerns. Reach out to us through the contact form
                            or visit us at our office.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.1 }}
                            className="w-full md:w-[70%] space-y-6 p-8 rounded-xl backdrop-blur-lg bg-primary-blue/40 border border-primary-blue/50 shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-blue/20"
                        >
                            <h2 className="text-2xl md:text-3xl font-medium mb-4">
                                <span className="bg-gradient-to-r from-white/90 via-primary-orange/70 to-white/90 bg-clip-text text-transparent">
                                    Send Us a Message
                                </span>
                            </h2>
                            <form
                                action="#"
                                method="POST"
                                className="space-y-6"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full px-5 py-3 border border-transparent rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all bg-white/20 backdrop-blur-md"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full px-5 py-3 border border-transparent rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all bg-white/20 backdrop-blur-md"
                                />
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full px-5 py-3 border border-transparent rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all bg-white/20 backdrop-blur-md"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-primary-orange to-primary-blue text-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-primary-blue/20"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
