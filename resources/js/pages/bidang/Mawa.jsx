import React, { useState, useEffect } from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const teamMembers = [
    {
        name: "John Doe",
        position: "Ketua Bidang",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: true,
    },
    {
        name: "Jane Smith",
        position: "Ketua Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: true,
    },
    {
        name: "Tom Brown",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: false,
    },
    {
        name: "Emma White",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: false,
        description: "Membantu pelaksanaan program kerja dalam divisi.",
    },
    {
        name: "Chris Green",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: false,
    },
    {
        name: "Tom Holland",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: false,
    },
];

const Mawa = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        slides: { perView: 5, spacing: 15 },
        breakpoints: {
            "(max-width: 1024px)": { slides: { perView: 4, spacing: 10 } },
            "(max-width: 768px)": { slides: { perView: 3, spacing: 8 } },
            "(max-width: 480px)": { slides: { perView: 2, spacing: 6 } },
        },
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-purple to-primary-dark overflow-x-hidden">
            <Navbar />
            <main className="relative">
                {/* Background Effects similar to Landing */}
                <div className="fixed inset-0 pointer-events-none">
                    {/* Center Blue Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[1200px] md:h-[1200px] bg-primary-blue opacity-20 blur-3xl animate-pulse-slow"></div>

                    {/* Left Orange Glows */}
                    <div className="absolute -top-1/3 -left-1/4 w-[50vw] h-[45vw] md:w-[700px] md:h-[600px] bg-primary-orange opacity-8 blur-3xl animate-pulse-slow delay-700 rotate-[15deg]"></div>
                    <div className="absolute bottom-1/4 -left-1/3 w-[45vw] h-[55vw] md:w-[650px] md:h-[750px] bg-primary-orange opacity-10 blur-3xl animate-pulse-slow delay-1500 -rotate-[25deg]"></div>

                    {/* Right Orange Glows */}
                    <div className="absolute -top-1/4 -right-1/3 w-[60vw] h-[40vw] md:w-[800px] md:h-[550px] bg-primary-orange opacity-8 blur-3xl animate-pulse-slow delay-1000 -rotate-[10deg]"></div>
                    <div className="absolute -bottom-1/4 -right-1/4 w-[55vw] h-[50vw] md:w-[750px] md:h-[700px] bg-primary-orange opacity-10 blur-3xl animate-pulse-slow delay-2000 rotate-[35deg]"></div>

                    {/* Middle gradient overlay */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-primary-purple via-transparent to-transparent opacity-30"></div>
                </div>

                {/* Content */}

                <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
                    <motion.header
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <div className="absolute -inset-x-8 -inset-y-4 bg-primary-blue/20 blur-3xl -z-10 opacity-50 rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                                <span className="inline-block bg-gradient-to-r from-white via-primary-orange/80 to-white bg-clip-text text-transparent animate-gradient-x">
                                    Kemahasiswaan
                                </span>
                            </h1>
                        </motion.div>
                    </motion.header>

                    {/* Ketua Bidang */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        <div className="group relative w-[200px] mx-auto">
                            <div className="relative transform skew-x-[-12deg] overflow-hidden rounded-lg bg-gradient-to-br from-primary-dark/90 to-primary-purple/90 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-primary-orange/20">
                                <div className="aspect-[9/16] relative overflow-hidden">
                                    <img
                                        src={teamMembers[0].imageUrl}
                                        alt={teamMembers[0].name}
                                        className="absolute inset-0 w-full h-full object-cover transform skew-x-[12deg] scale-150 group-hover:scale-150 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 inset-x-0 p-3 text-center bg-gradient-to-t from-black/90 to-transparent">
                                    <h3 className="text-sm font-bold text-white">
                                        {teamMembers[0].name}
                                    </h3>
                                    <span className="mt-1 px-3 py-1 bg-primary-orange/30 rounded-full text-xs text-white border border-white/10">
                                        {teamMembers[0].position}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Ketua Divisi & Staff dalam Carousel */}
                    <div
                        ref={sliderRef}
                        className="keen-slider max-w-7xl mx-auto"
                    >
                        {teamMembers.slice(1).map((member, index) => (
                            <motion.div
                                key={member.name}
                                className="keen-slider__slide overflow-visible"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                }}
                            >
                                <div className="group relative w-[180px] text-center mx-auto">
                                    <div className="relative transform skew-x-[-12deg] overflow-hidden rounded-lg bg-gradient-to-br from-primary-dark/90 to-primary-purple/90 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-primary-orange/20">
                                        <div className="aspect-[9/16] relative overflow-hidden">
                                            <img
                                                src={member.imageUrl}
                                                alt={member.name}
                                                className="absolute inset-0 w-full h-full object-cover transform skew-x-[12deg] scale-150 group-hover:scale-150 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                        </div>
                                        <div className="absolute bottom-0 inset-x-0 p-3 text-center bg-gradient-to-t from-black/90 to-transparent">
                                            <h3 className="text-sm font-bold text-white">
                                                {member.name}
                                            </h3>
                                            <span className="mt-1 px-3 py-1 bg-primary-orange/30 rounded-full text-xs text-white border border-white/10">
                                                {member.position}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Mawa;
