import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center min-h-screen bg-primary-dark px-4 py-10 text-center relative overflow-hidden"
        >
            {/* Background elements for modern look */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-60 h-60 bg-primary-blue/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary-orange/10 rounded-full filter blur-3xl"></div>
            </div>

            {/* Logo dengan animasi lebih menarik */}
            <motion.div
                initial={{ opacity: 0, scale: 0.6, rotateZ: -5 }}
                animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                }}
                className="mb-6 relative z-10"
            >
                <motion.img
                    src="assets/logo/Logo-E-Mailkomp.png"
                    alt="E-Mailkomp Logo"
                    className="h-16 md:h-20"
                    whileHover={{
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 300 },
                    }}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.2}
                />
            </motion.div>

            {/* Container for 404 and text */}
            <motion.div className="max-w-lg backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 80,
                    }}
                    className="text-[110px] md:text-[140px] font-bold bg-gradient-to-r from-primary-orange to-primary-blue bg-clip-text text-transparent leading-none"
                >
                    404
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-2 text-xl md:text-2xl font-medium text-white"
                >
                    Halaman Tidak Ditemukan
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-4 text-white/70 text-sm md:text-base"
                >
                    Halaman yang Anda cari tidak ada atau telah dipindahkan ke
                    lokasi lain.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-6"
                >
                    <Link to="/">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 20px rgba(255, 149, 0, 0.4)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-primary-orange to-primary-blue text-white rounded-xl shadow-lg transform transition-all duration-300 font-medium"
                        >
                            Kembali ke Beranda
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default NotFound;
