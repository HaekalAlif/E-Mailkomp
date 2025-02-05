import React from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const teamMembers = [
    {
        name: "John Doe",
        position: "Ketua Bidang",
        imageUrl: "/assets/organization/ketua.png",
        isLeader: true,
    },
    {
        name: "Jane Smith",
        position: "Ketua Divisi",
        imageUrl: "/assets/organization/ketua.png",
        isLeader: false,
    },
    {
        name: "Tom Brown",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/ketua.png",
        isLeader: false,
    },
    {
        name: "Emma White",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/ketua.png",
        isLeader: false,
    },
    {
        name: "Chris Green",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/ketua.png",
        isLeader: false,
    },
    {
        name: "Tom Holland",
        position: "Staff Divisi",
        imageUrl: "/assets/organization/ketua.png",
        isLeader: false,
    },
];

const SekBenSection = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        slides: {
            perView: 5,
            spacing: 15,
        },
        breakpoints: {
            "(max-width: 1024px)": { slides: { perView: 4, spacing: 10 } },
            "(max-width: 768px)": { slides: { perView: 3, spacing: 8 } },
            "(max-width: 480px)": { slides: { perView: 2, spacing: 6 } },
        },
    });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center mt-14"
        >
            <h2 className="text-2xl md:text-3xl font-medium mb-8">
                <span className="bg-gradient-to-r from-white/90 via-primary-orange/70 to-white/90 bg-clip-text text-transparent">
                    Sekretaris & Bendahara
                </span>
            </h2>

            {/* Ketua Bidang (1 orang, tidak dalam carousel) */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
            >
                <div className="group relative w-[220px]">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-dark/80 to-primary-purple/80 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                        <div className="aspect-[9/12] relative overflow-hidden">
                            <img
                                src={teamMembers[0].imageUrl}
                                alt={teamMembers[0].name}
                                className="w-full h-full object-cover"
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

            <h3 className="text-2xl md:text-2xl font-medium mb-8">
                <span className="bg-gradient-to-r from-primary-blue via-white to-primary-blue bg-clip-text text-transparent">
                    divisi 1
                </span>
            </h3>

            {/* Ketua Divisi & Staff dalam Carousel */}
            <div ref={sliderRef} className="keen-slider max-w-6xl">
                {teamMembers.slice(1).map((member, index) => (
                    <motion.div
                        key={member.name}
                        className="keen-slider__slide"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="group relative w-[200px]">
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-dark/80 to-primary-purple/80 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                                <div className="aspect-[9/12] relative overflow-hidden">
                                    <img
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 inset-x-0 p-3 text-center bg-gradient-to-t from-black/90 to-transparent">
                                    <h3 className="text-sm font-bold text-white">
                                        {member.name}
                                    </h3>
                                    <span className="mt-1 px-3 py-1 bg-primary-blue/30 rounded-full text-xs text-white border border-white/10">
                                        {member.position}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SekBenSection;
