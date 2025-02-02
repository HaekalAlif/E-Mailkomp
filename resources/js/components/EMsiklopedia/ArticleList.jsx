import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ articles = [], loading = false }) => {
    // Loading state with brand color
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-orange"></div>
            </div>
        );
    }

    if (Array.isArray(articles) && articles.length === 0) {
        return (
            <div className="text-center text-gray-500 py-8">
                No articles found
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
                <Link
                    to={`/articles/${article.slug}`}
                    key={article.id}
                    className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-[450px] border border-gray-100"
                >
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={`/storage/${article.image}`}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <h2 className="text-xl font-bold bg-gradient-to-r from-primary-orange to-primary-blue bg-clip-text text-transparent mb-4 line-clamp-2 h-[3.5rem]">
                            {article.title}
                        </h2>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                            {article.content}
                        </p>
                        <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                            <span className="text-primary-blue font-medium text-sm">
                                {article.category?.name}
                            </span>
                            <span className="text-gray-400 text-sm">
                                {new Date(
                                    article.created_at
                                ).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ArticleList;
