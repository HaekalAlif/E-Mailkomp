import React from "react";

const Hero = ({
    searchTerm,
    setSearchTerm,
    categories,
    selectedCategory,
    setSelectedCategory,
    articles,
}) => {
    return (
        <div className="relative bg-gradient-to-br from-primary-dark via-primary-purple to-primary-dark overflow-hidden">
            <div className="absolute inset-0 bg-[url('/public/assets/grid.png')] opacity-5"></div>

            {/* Hero Content */}
            <div className="relative pt-24 md:pt-32 pb-16 md:pb-20">
                {/* Background Glows */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[1200px] md:h-[1200px] bg-primary-blue opacity-20 blur-3xl animate-pulse-slow"></div>
                    <div className="absolute -top-1/3 -left-1/4 w-[50vw] h-[45vw] md:w-[700px] md:h-[600px] bg-primary-orange opacity-8 blur-3xl animate-pulse-slow delay-700"></div>
                    <div className="absolute -top-1/4 -right-1/3 w-[60vw] h-[40vw] md:w-[800px] md:h-[550px] bg-primary-orange opacity-8 blur-3xl animate-pulse-slow delay-1000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* ...existing hero content... */}
                    <div className="text-center space-y-6 md:space-y-8">
                        {/* ...existing title and search... */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
