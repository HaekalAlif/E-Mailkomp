import React from "react";
import NewsDetail from "../components/News/NewsDetail";
import RelatedNews from "../components/News/RelatedNews";
import Footer from "../components/Layouts/Footer";

const EMsiklopediaDetailPage = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row w-full max-w-8xl mx-auto px-4 lg:px-16 gap-12 pt-24">
                <div className="flex-1">
                    <NewsDetail />
                </div>
                <div className="w-full lg:w-1/3">
                    <RelatedNews />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EMsiklopediaDetailPage;
