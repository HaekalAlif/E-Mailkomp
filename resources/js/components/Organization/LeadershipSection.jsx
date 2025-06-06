import React from "react";
import { motion } from "framer-motion";

const LeadershipSection = () => {
    const leaders = [
        {
            name: "Satria Pambingkas",
            position: "Ketua Umum",
            imageUrl: "/assets/organization/anggota/ketua-wakil/satria.png",
        },
        {
            name: "Aisyah Nurlatifah Ramadhanti",
            position: "Wakil Ketua Umum",
        imageUrl: "/assets/organization/anggota/ketua-wakil/aisyah.png",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 max-w-3xl mx-auto">
                {leaders.map((leader, index) => (
                    <motion.div
                        key={leader.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`flex justify-center ${
                            index === 0 ? "md:-mt-16" : "md:mt-0"
                        }`}
                    >
                        <div className="group relative w-[200px]">
                            {/* Card */}
                            <div className="relative transform skew-x-[-12deg] overflow-hidden rounded-lg bg-gradient-to-br from-primary-dark/90 to-primary-purple/90 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-primary-orange/20">
                                {/* Image Container */}
                                <div className="aspect-[9/16] relative overflow-hidden">
                                    <img
                                        src={leader.imageUrl}
                                        alt={leader.name}
                                        className="absolute inset-0 w-full h-full object-cover transform skew-x-[12deg] scale-140 group-hover:scale-160 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent" />
                                </div>

                                {/* Info */}
                                <div className="absolute bottom-0 inset-x-0 transform  p-3 bg-gradient-to-t from-primary-dark/95 to-primary-dark/80">
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-sm font-bold text-white text-center">
                                            {leader.name}
                                        </h3>
                                        <span className="mt-1 px-2.5 py-0.5 bg-gradient-to-r from-primary-orange/20 to-primary-blue/20 rounded-full text-[10px] text-white/90 border border-white/10">
                                            {leader.position}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default LeadershipSection;
