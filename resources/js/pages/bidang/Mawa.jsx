import React, { useState } from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const psdm = [
    {
        name: "Anisa Fatimah Azzahra",
        position: "Ketua Bidang",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: true,
    },
    {
        name: "Nanang Ardiansyah",
        position: "Ketua Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: true,
    },
    {
        name: "Mahesa Rahmad Ramdani",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: false,
    },
    {
        name: "Citra Tri Setyaningrum",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: false,
    },
    {
        name: "Muharram Bagas Putra Santoso",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: false,
    },
    {
        name: "Hasna May Tanaya",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: false,
    },
    {
        name: "Zahra Raufatul Azizah",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: false,
    },
    {
        name: "Zaskiya Salsabila Quratu'ain Dyahari",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: false,
    },
];

const minatbakat = [
    {
        name: "Nanang Ardiansyah",
        position: "Ketua Bidang",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: true,
    },
    {
        name: "Justin Farrel Hazza Ashari",
        position: "Ketua Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: true,
    },
    {
        name: "Khairuddin Al Fadhilah",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: false,
    },
    {
        name: "Ahmad Alaudin Falah",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: false,
    },
    {
        name: "Hanif Khoerul Aqilla",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/member/ketua.png",
        isLeader: false,
    },
];

const Mawa = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 5,
            spacing: 0,
        },
        breakpoints: {
            "(max-width: 1280px)": {
                slides: { perView: 4, spacing: 0 },
            },
            "(max-width: 1024px)": {
                slides: { perView: 3, spacing: 0 },
            },
            "(max-width: 768px)": {
                slides: { perView: 3, spacing: 0 },
            },
        },
        created() {
            setLoaded(true);
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-purple to-primary-dark overflow-x-hidden">
            <Navbar />
            <main className="relative">
                {/* Background Effects */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[1200px] md:h-[1200px] bg-primary-blue opacity-20 blur-3xl animate-pulse-slow"></div>
                    <div className="absolute -top-1/3 -left-1/4 w-[50vw] h-[45vw] md:w-[700px] md:h-[600px] bg-primary-orange opacity-8 blur-3xl animate-pulse-slow delay-700 rotate-[15deg]"></div>
                    <div className="absolute bottom-1/4 -left-1/3 w-[45vw] h-[55vw] md:w-[650px] md:h-[750px] bg-primary-orange opacity-10 blur-3xl animate-pulse-slow delay-1500 -rotate-[25deg]"></div>
                    <div className="absolute -top-1/4 -right-1/3 w-[60vw] h-[40vw] md:w-[800px] md:h-[550px] bg-primary-orange opacity-8 blur-3xl animate-pulse-slow delay-1000 -rotate-[10deg]"></div>
                    <div className="absolute -bottom-1/4 -right-1/4 w-[55vw] h-[50vw] md:w-[750px] md:h-[700px] bg-primary-orange opacity-10 blur-3xl animate-pulse-slow delay-2000 rotate-[35deg]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-primary-purple via-transparent to-transparent opacity-30"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 pt-24">
                    {/* Header Section */}
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
                            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold tracking-tight mb-6">
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
                        <div className="group relative w-[130px] sm:w-[180px] md:w-[200px] mx-auto">
                            <div className="relative transform skew-x-[-12deg] overflow-hidden rounded-lg bg-gradient-to-br from-primary-dark/90 to-primary-purple/90 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-primary-orange/20">
                                <div className="aspect-[9/16] relative overflow-hidden">
                                    <img
                                        src={psdm[0].imageUrl}
                                        alt={psdm[0].name}
                                        className="absolute inset-0 w-full h-full object-cover transform skew-x-[12deg] scale-150 group-hover:scale-150 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3 text-center bg-gradient-to-t from-black/90 to-transparent">
                                    <h3 className="text-xs sm:text-sm font-bold text-white">
                                        {psdm[0].name}
                                    </h3>
                                    <span className="mt-1 px-2 sm:px-3 py-1 bg-primary-blue/30 rounded-full text-[10px] sm:text-xs text-white border border-white/10">
                                        {psdm[0].position}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bidang Sections */}
                    {[
                        {
                            title: "Pengembangan Sumber Daya Manusia",
                            members: psdm,
                        },
                        {
                            title: "Minat dan Bakat",
                            members: minatbakat,
                        },
                    ].map((section, sectionIndex) => (
                        <div key={sectionIndex} className="mb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="relative text-center mb-10"
                            >
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                                    <span className="bg-gradient-to-r from-white/90 via-primary-orange/70 to-white/90 bg-clip-text text-transparent">
                                        {section.title}
                                    </span>
                                </h2>
                            </motion.div>

                            {/* Slider Container */}
                            <div className="px-4 md:px-8">
                                <div
                                    ref={sliderRef}
                                    className="keen-slider max-w-7xl mx-auto"
                                >
                                    {section.members
                                        .slice(1)
                                        .map((member, index) => (
                                            <motion.div
                                                key={`${sectionIndex}-${member.name}-${index}`}
                                                className="keen-slider__slide"
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.9,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{
                                                    delay: index * 0.1,
                                                    duration: 0.6,
                                                }}
                                            >
                                                <div className="group relative w-[80px] sm:w-[130px] md:w-[150px] lg:w-[170px] text-center mx-auto">
                                                    <div className="relative transform skew-x-[-12deg] overflow-hidden rounded-lg bg-gradient-to-br from-primary-dark/90 to-primary-purple/90 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-primary-orange/20">
                                                        <div className="aspect-[9/16] relative overflow-hidden">
                                                            <img
                                                                src={
                                                                    member.imageUrl
                                                                }
                                                                alt={
                                                                    member.name
                                                                }
                                                                className="absolute inset-0 w-full h-full object-cover transform skew-x-[12deg] scale-150 group-hover:scale-150 transition-transform duration-500"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                                        </div>
                                                        <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3 text-center bg-gradient-to-t from-black/90 to-transparent">
                                                            <h3 className="text-[10px] sm:text-xs md:text-sm font-bold text-white">
                                                                {member.name}
                                                            </h3>
                                                            <span className="mt-1 px-1 sm:px-2 py-0.5 bg-primary-orange/30 rounded-full text-[8px] sm:text-[10px] md:text-xs text-white border border-white/10">
                                                                {
                                                                    member.position
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                </div>

                                {/* Carousel Indicators */}
                                {loaded && instanceRef.current && (
                                    <div className="flex justify-center gap-2 mt-4">
                                        {[
                                            ...Array(
                                                Math.ceil(
                                                    (section.members.length -
                                                        1) /
                                                        3
                                                )
                                            ),
                                        ].map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    instanceRef.current?.moveToIdx(
                                                        idx * 3
                                                    );
                                                }}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                    Math.floor(
                                                        currentSlide / 3
                                                    ) === idx
                                                        ? "bg-primary-orange/90 w-4"
                                                        : "bg-white/30 hover:bg-white/50"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Mawa;
