import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RelatedNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("/api/news")
            .then((response) => response.json())
            .then((data) => {
                const NewsArray = Array.isArray(data)
                    ? data
                    : data.data || [];
                setNews(NewsArray);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching news:", error);
                setNews([]);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-amber-600"></div>
            </div>
        );
    }

    return (
        <aside className="w-full bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Baca Juga
            </h2>
            <div className="space-y-4">
                {news.slice(0, 5).map((news) => (
                    <Link
                        to={`/berita/${news.slug}`}
                        key={news.id}
                        className="group flex items-start gap-4 hover:bg-gray-50 p-3 rounded-lg transition-all duration-200"
                    >
                        <div className="w-28 h-24 overflow-hidden rounded-lg flex-shrink-0">
                            <img
                                src={`/storage/${news.image}`}
                                alt={news.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                        </div>
                        <div className="flex flex-col gap-2 flex-1 min-h-[70px]">
                            <h3 className="font-medium text-gray-800 group-hover:text-amber-600 transition-colors duration-200 line-clamp-2 text-sm leading-snug">
                                {news.title}
                            </h3>
                            <div>
                                {news.category?.name && (
                                    <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs">
                                        {news.category.name}
                                    </span>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default RelatedNews;
