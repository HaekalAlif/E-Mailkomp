import React from "react";

const BackgroundEffects = () => {
    return (
        <>
            {/* Background Gradients and Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-purple to-primary-dark"></div>
            <div className="absolute inset-0 bg-[url('/public/assets/grid.png')] opacity-5"></div>

            {/* Animated Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[1200px] md:h-[1200px] bg-primary-blue opacity-20 blur-3xl animate-pulse-slow"></div>
            <div className="absolute -top-1/3 -left-1/4 w-[50vw] h-[45vw] md:w-[700px] md:h-[600px] bg-primary-orange opacity-8 blur-3xl animate-pulse-slow delay-700 rotate-[15deg]"></div>
            <div className="absolute bottom-1/4 -left-1/3 w-[45vw] h-[55vw] md:w-[650px] md:h-[750px] bg-primary-orange opacity-10 blur-3xl animate-pulse-slow delay-1500 -rotate-[25deg]"></div>
        </>
    );
};

export default BackgroundEffects;
