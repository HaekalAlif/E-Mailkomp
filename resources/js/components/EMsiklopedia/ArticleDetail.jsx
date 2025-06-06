import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import parse, { domToReact } from "html-react-parser";

const ArticleDetail = () => {
    const { slug } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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

    // Fungsi untuk menangani parsing elemen HTML yang kompleks
    const parseOptions = {
        replace: (domNode) => {
            if (domNode.type === "tag") {
                if (domNode.name === "ol") {
                    return (
                        <ol className="list-decimal pl-6">
                            {domToReact(domNode.children, parseOptions)}
                        </ol>
                    );
                }
                if (domNode.name === "ul") {
                    return (
                        <ul className="list-disc pl-6">
                            {domToReact(domNode.children, parseOptions)}
                        </ul>
                    );
                }
                if (domNode.name === "h2") {
                    return (
                        <h2 className="text-2xl font-bold mt-6 mb-2">
                            {domToReact(domNode.children, parseOptions)}
                        </h2>
                    );
                }
                if (domNode.name === "h3") {
                    return (
                        <h2 className="text-xl font-bold mt-6 mb-2">
                            {domToReact(domNode.children, parseOptions)}
                        </h2>
                    );
                }
            }
        },
    };

    return (
        <div>
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
                <ol className="flex gap-2">
                    <li
                        className="cursor-pointer hover:text-primary-orange"
                        onClick={() => navigate("/emsiklopedia")}
                    >
                        EMsiklopedia
                    </li>
                    <li>&gt;</li>
                    <li className="text-gray-600">{article.title}</li>
                </ol>
            </nav>
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
                                {new Date(
                                    article.created_at
                                ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                        </div>

                        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            {article.title}
                        </h1>

                        <div className="text-justify">
                            {parse(article.content, parseOptions)}
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-6 py-8">
                    <div className="border-t border-gray-200 -pt-4">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>
                                Last updated:{" "}
                                {new Date(
                                    article.updated_at
                                ).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </div>
            </article>
            {/* Back Button */}
            <div className="flex justify-start mt-6 mb-6">
                <button
                    onClick={() => navigate(-1)} // Goes back to the previous page
                    className="text-white bg-primary-orange hover:bg-primary-dark font-semibold py-2 px-4 rounded-lg"
                >
                    &larr; Kembali ke EMsiklopedia
                </button>
            </div>
        </div>
    );
};

export default ArticleDetail;
