import React from "react";
import { motion } from "framer-motion";
import logo from "/public/assets/logo/Logo-E-Mailkomp.png";

const LogoSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center space-y-12"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
            >
                <div className="absolute -inset-16 md:-inset-24 bg-gradient-to-r from-primary-orange via-primary-blue to-primary-orange rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute -inset-12 md:-inset-20 bg-gradient-to-r from-primary-blue via-primary-orange to-primary-blue rounded-full blur-2xl opacity-25 animate-pulse delay-75"></div>
                <img
                    src={logo}
                    alt="EMAILKOMP Logo"
                    className="relative w-32 h-32 md:w-40 md:h-40 object-contain hover:scale-105 transition-transform duration-300"
                />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-5xl md:text-7xl font-bold text-white tracking-tight relative"
            >
                Contact Us at{" "}
                <span className="bg-gradient-to-r from-primary-orange to-primary-blue bg-clip-text text-transparent">
                    EMAILKOMP
                </span>
                <div className="absolute -inset-x-8 -inset-y-4 bg-primary-blue/20 blur-3xl -z-10 opacity-50"></div>
            </motion.h1>
        </motion.div>
    );
};

export default LogoSection;
