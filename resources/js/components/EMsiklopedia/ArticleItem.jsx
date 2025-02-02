import React from "react";
import { Link } from "react-router-dom";

const ArticleItem = ({ article }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <img
                src={`/storage/${article.image}`}
                alt={article.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-2xl font-bold text-amber-600 mb-2">
                    {article.title}
                </h2>
                <Link
                    to={`/articles/${article.slug}`}
                    className="text-blue-500 hover:underline"
                >
                    Read more
                </Link>
            </div>
        </div>
    );
};

export default ArticleItem;
