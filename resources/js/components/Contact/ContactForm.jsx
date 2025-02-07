import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-[60%] space-y-6 p-8 mt-6 rounded-xl backdrop-blur-lg border border-primary-blue/50 shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:shadow-primary-blue/20"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-2xl md:text-3xl font-medium mb-4 text-center"
            >
                <span className="bg-gradient-to-r from-white/90 via-primary-orange/70 to-white/90 bg-clip-text text-transparent">
                    Send Us a Message
                </span>
            </motion.h2>

            <motion.form
                action="#"
                method="POST"
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <motion.input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-5 py-3 text-white border border-transparent rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all bg-white/20 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-5 py-3 text-white border border-transparent rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all bg-white/20 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                />
                <motion.textarea
                    name="message"
                    rows="3"
                    placeholder="Your Message"
                    className="w-full px-5 py-3 text-white border border-transparent rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all bg-white/20 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                ></motion.textarea>
                <motion.button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-primary-orange to-primary-blue text-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-primary-blue/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    Send Message
                </motion.button>
            </motion.form>
        </motion.div>
    );
};

export default ContactForm;
