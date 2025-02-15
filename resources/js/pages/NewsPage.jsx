import React, { useState, useEffect } from "react";
import Navbar from "../components/Layouts/Navbar";
import NewsList from "../components/News/NewsList";
import { motion } from "framer-motion";
import Footer from "../components/Layouts/Footer";
import MouseCursorEffect from "../components/Layouts/MouseCursorEffect";

const NewsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalNewsCount, setTotalNewsCount] = useState(0);
    const newsPerPage = 6;

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("/api/news-categories");
                const data = await response.json();
                console.log("Categories Data:", data);
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const url = selectedCategory
                    ? `/api/news-categories/${selectedCategory}/news`
                    : "/api/news";
                const response = await fetch(url);
                const data = await response.json();
                setNews(data.data || []);

                if (!selectedCategory) {
                    setTotalNewsCount(data.data?.length || 0);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error:", error);
                setLoading(false);
            }
        };
        fetchNews();
    }, [selectedCategory]);

    const filteredNews = news.filter((news) =>
        news?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate pagination
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
    const totalPages = Math.ceil(filteredNews.length / newsPerPage);

    // Reset page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory]);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-primary-dark via-primary-purple to-primary-dark overflow-hidden">
                <Navbar />
                <MouseCursorEffect />

                <div className="relative pt-20 md:pt-24 pb-16 md:pb-20">
                    <div className="absolute inset-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[1200px] md:h-[1200px] bg-primary-blue opacity-20 blur-3xl animate-pulse-slow"></div>
                        <div className="absolute -top-1/3 -left-1/4 w-[50vw] h-[45vw] md:w-[700px] md:h-[600px] bg-primary-orange opacity-8 blur-3xl animate-pulse-slow delay-700"></div>
                        <div className="absolute -top-1/4 -right-1/3 w-[60vw] h-[40vw] md:w-[800px] md:h-[550px] bg-primary-orange opacity-8 blur-3xl animate-pulse-slow delay-1000"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center space-y-6 md:space-y-8">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7 }}
                                className="relative"
                            >
                                <div className="absolute -inset-x-8 -inset-y-4 bg-primary-blue/20 blur-3xl -z-10 opacity-50 rounded-full"></div>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                                    <span className="inline-block bg-gradient-to-r from-primary-orange to-primary-blue bg-clip-text text-transparent">
                                        Portal Berita
                                    </span>
                                </h1>
                            </motion.div>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.7 }}
                                className="text-lg text-gray-200/90 font-light"
                            >
                                <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto px-4">
                                    Temukan informasi terbaru tentang beasiswa,
                                    kegiatan himpunan, dan perkembangan dunia
                                    akademik serta teknologi
                                </p>
                            </motion.p>

                            <div className="max-w-4xl mx-auto mt-8 space-y-6 px-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                        placeholder="Cari Berita..."
                                        className="w-full px-6 py-3 md:py-4 bg-white/10 backdrop-blur-xl text-white placeholder-gray-300 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary-orange/50 transition-all duration-300"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                    <button
                                        onClick={() =>
                                            setSelectedCategory(null)
                                        }
                                        className={`px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-full transition-all duration-300 ${
                                            !selectedCategory
                                                ? "bg-primary-orange text-white shadow-lg"
                                                : "bg-white/10 text-white hover:bg-white/20"
                                        }`}
                                    >
                                        Semua
                                        <span className="ml-2 text-sm opacity-75">
                                            ({totalNewsCount})
                                        </span>
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() =>
                                                setSelectedCategory(category.id)
                                            }
                                            className={`px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-full transition-all duration-300 ${
                                                selectedCategory === category.id
                                                    ? "bg-primary-orange text-white shadow-lg"
                                                    : "bg-white/10 text-white hover:bg-white/20"
                                            }`}
                                        >
                                            {category.name}
                                            <span className="ml-2 text-sm opacity-75">
                                                ({category.news_count})
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                    <NewsList news={currentNews} loading={loading} />

                    {totalPages > 1 && (
                        <div className="mt-12 flex justify-center">
                            <div className="inline-flex items-center gap-2">
                                <button
                                    onClick={() =>
                                        setCurrentPage((prev) =>
                                            Math.max(prev - 1, 1)
                                        )
                                    }
                                    disabled={currentPage === 1}
                                    className={`w-10 h-10 rounded-lg transition-all duration-200 
                                        ${
                                            currentPage === 1
                                                ? "text-gray-400 cursor-not-allowed"
                                                : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                >
                                    ←
                                </button>

                                {Array.from(
                                    { length: totalPages },
                                    (_, i) => i + 1
                                ).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`w-10 h-10 rounded-lg transition-all duration-200
                                            ${
                                                currentPage === page
                                                    ? "bg-primary-orange text-white shadow-lg"
                                                    : "text-gray-600 hover:bg-gray-100"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}

                                <button
                                    onClick={() =>
                                        setCurrentPage((prev) =>
                                            Math.min(prev + 1, totalPages)
                                        )
                                    }
                                    disabled={currentPage === totalPages}
                                    className={`w-10 h-10 rounded-lg transition-all duration-200 
                                        ${
                                            currentPage === totalPages
                                                ? "text-gray-400 cursor-not-allowed"
                                                : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default NewsPage;
