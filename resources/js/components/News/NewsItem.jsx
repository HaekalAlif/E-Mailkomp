import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ news }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <img
                src={`/storage/${news.image}`}
                alt={news.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-2xl font-bold text-amber-600 mb-2">
                    {news.title}
                </h2>
                <Link
                    to={`/berita/${news.slug}`}
                    className="text-blue-500 hover:underline"
                >
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default NewsItem;
