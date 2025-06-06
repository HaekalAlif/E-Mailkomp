import { motion } from "framer-motion";

const HeadingSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center space-y-8"
        >
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-primary-blue tracking-tight relative p-1"
            >
                Hubungi Kami
                <div className="absolute -inset-x-8 -inset-y-4 bg-primary-blue/20 blur-3xl -z-10 opacity-50 animate-pulse-slow "></div>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="max-w-2xl text-lg text-gray-200/90 leading-relaxed"
            >
                Hubungi Himpunan Mahasiswa Emailkomp untuk informasi,
                kolaborasi, atau pertanyaan lebih lanjut
            </motion.p>
        </motion.div>
    );
};

export default HeadingSection;
