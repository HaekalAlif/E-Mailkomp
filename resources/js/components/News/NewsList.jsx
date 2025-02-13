import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import emptyStateLogo from "/public/assets/logo/Logo-E-Mailkomp.png";

const NewsList = ({ news = [], loading = false }) => {
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-orange"></div>
            </div>
        );
    }

    if (Array.isArray(news) && news.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12">
                {/* Logo dengan animasi bouncing */}
                <motion.img
                    src={emptyStateLogo}
                    alt="No News"
                    className="w-32 h-32 md:w-40 md:h-40"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: [0, -5, 0], opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />

                {/* Teks dengan efek masuk halus */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-lg md:text-xl text-gray-400 mt-6 bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent font-semibold"
                >
                    Berita tidak ditemukan. Coba lagi nanti!
                </motion.p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((news) => (
                <Link
                    to={`/berita/${news.slug}`}
                    key={news.id}
                    className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-[450px] border border-gray-100"
                >
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={`/storage/${news.image}`}
                            alt={news.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <h2 className="text-xl font-bold bg-gradient-to-r from-primary-orange to-primary-blue bg-clip-text text-transparent mb-4 line-clamp-2 h-[3.5rem]">
                            {news.title}
                        </h2>
                        <p
                            className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow"
                            dangerouslySetInnerHTML={{
                                __html:
                                    news.content
                                        .replace(
                                            /<\/?(h[1-6]|br|img|iframe|script|style|table|tr|td|th)[^>]*>/g,
                                            ""
                                        )
                                        .split("</p>")[0] + "...",
                            }}
                        ></p>

                        <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                            <span className="text-primary-blue font-medium text-sm">
                                {news.category?.name}
                            </span>
                            <span className="text-gray-400 text-sm">
                                {new Date(news.created_at).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default NewsList;
