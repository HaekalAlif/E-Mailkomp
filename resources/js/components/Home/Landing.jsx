import React, { useState, useEffect } from "react";
import logo from "/public/assets/logo/Logo-E-Mailkomp.png";

const Landing = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-purple to-primary-dark"></div>
            <div className="absolute inset-0 bg-[url('/public/assets/grid.png')] opacity-5"></div>

            {/* Cursor Glow */}
            <div
                className="hidden md:block fixed w-[45vw] h-[45vw] bg-primary-blue/10 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: "translate(-50%, -50%)",
                }}
            ></div>

            {/* Abstract Background Glows */}
            {/* Center Blue Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[1200px] md:h-[1200px] bg-primary-blue opacity-20 blur-3xl animate-pulse-slow"></div>

            {/* Left Orange Glows - Smaller & Asymmetric */}
            <div className="absolute -top-1/3 -left-1/4 w-[50vw] h-[45vw] md:w-[700px] md:h-[600px] bg-primary-orange opacity-8 blur-3xl animate-pulse-slow delay-700 rotate-[15deg]"></div>
            <div className="absolute bottom-1/4 -left-1/3 w-[45vw] h-[55vw] md:w-[650px] md:h-[750px] bg-primary-orange opacity-10 blur-3xl animate-pulse-slow delay-1500 -rotate-[25deg]"></div>

            {/* Right Orange Glows - Different Sizes */}
            <div className="absolute -top-1/4 -right-1/3 w-[60vw] h-[40vw] md:w-[800px] md:h-[550px] bg-primary-orange opacity-8 blur-3xl animate-pulse-slow delay-1000 -rotate-[10deg]"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-[55vw] h-[50vw] md:w-[750px] md:h-[700px] bg-primary-orange opacity-10 blur-3xl animate-pulse-slow delay-2000 rotate-[35deg]"></div>

            {/* Middle gradient overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-primary-purple via-transparent to-transparent opacity-30"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center space-y-12">
                    <div className="relative">
                        {/* Logo Glows */}
                        <div className="absolute -inset-16 md:-inset-24 bg-gradient-to-r from-primary-orange via-primary-blue to-primary-orange rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <div className="absolute -inset-12 md:-inset-20 bg-gradient-to-r from-primary-blue via-primary-orange to-primary-blue rounded-full blur-2xl opacity-25 animate-pulse delay-75"></div>
                        <img
                            src={logo}
                            alt="EMAILKOMP Logo"
                            className="relative w-32 h-32 md:w-40 md:h-40 object-contain hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight relative">
                        Welcome to{" "}
                        <span className="bg-gradient-to-r from-primary-orange to-primary-blue bg-clip-text text-transparent">
                            EMAILKOMP
                        </span>
                        <div className="absolute -inset-x-8 -inset-y-4 bg-primary-blue/20 blur-3xl -z-10 opacity-50"></div>
                    </h1>

                    <p className="max-w-2xl text-lg text-gray-200/90 leading-relaxed">
                        Himpunan Mahasiswa D3 Teknik Informatika yang
                        berdedikasi untuk mengembangkan potensi dan kreativitas
                        mahasiswa.
                    </p>

                    <div className="flex gap-6">
                        <button className="group px-8 py-4 bg-gradient-to-r from-primary-orange to-primary-blue rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-blue/20">
                            <span className="text-white font-medium">
                                Learn More
                            </span>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
