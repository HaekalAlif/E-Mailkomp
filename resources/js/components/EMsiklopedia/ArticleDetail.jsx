import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/articles/${slug}`)
            .then((response) => response.json())
            .then((data) => {
                setArticle(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching article:", error);
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <p className="text-gray-500 text-lg">Article not found</p>
            </div>
        );
    }

    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 mb-12">
            <div className="relative h-[400px] w-full overflow-hidden">
                <img
                    src={`/storage/${article.image}`}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-8 -mt-32 relative z-10">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                        {article.category && (
                            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                                {article.category.name}
                            </span>
                        )}
                        <time dateTime={article.created_at}>
                            {new Date(article.created_at).toLocaleDateString(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                }
                            )}
                        </time>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {article.title}
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        {typeof article.content === "string" ? (
                            article.content
                                .split("\n")
                                .filter(Boolean)
                                .map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-gray-700 leading-relaxed text-justify mb-6"
                                    >
                                        {paragraph.trim()}
                                    </p>
                                ))
                        ) : (
                            <p className="text-gray-700 leading-relaxed text-justify mb-6">
                                {String(article.content)}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-8">
                <div className="border-t border-gray-200 -pt-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>
                            Last updated:{" "}
                            {new Date(article.updated_at).toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ArticleDetail;
