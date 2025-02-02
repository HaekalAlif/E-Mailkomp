import React from "react";

const VisionMission = () => {
    return (
        <div className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Vision Section */}
                    <div className="space-y-6 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-500">
                        <div className="inline-block">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-orange to-primary-blue bg-clip-text text-transparent">
                                Our Vision
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-primary-orange to-primary-blue rounded-full"></div>
                        </div>
                        <div className="space-y-4">
                            <p className="text-lg text-gray-600 leading-relaxed p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300">
                                Menjadikan EMAILKOMP sebagai wadah untuk
                                menampung aspirasi seluruh mahasiswa D3 Teknik
                                Informatika yang didasarkan atas nilai
                                kebersamaan guna menciptakan mahasiswa yang
                                unggul, inovatif, kreatif, dan berkarakter.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
                                <div className="p-4 rounded-xl bg-primary-purple hover:shadow-lg transition-all duration-300">
                                    <p className="text-white font-medium text-center">
                                        Unggul
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-primary-purple hover:shadow-lg transition-all duration-300">
                                    <p className="text-white font-medium text-center">
                                        Inovatif
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-primary-purple hover:shadow-lg transition-all duration-300">
                                    <p className="text-white font-medium text-center">
                                        Kreatif
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-primary-purple hover:shadow-lg transition-all duration-300">
                                    <p className="text-white font-medium text-center">
                                        Berkarakter
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="space-y-6 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-500">
                        <div className="inline-block">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-blue to-primary-indigo bg-clip-text text-transparent">
                                Our Mission
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-primary-blue to-primary-indigo rounded-full"></div>
                        </div>
                        <div className="space-y-3">
                            {[
                                "Membangun kebersamaan yang kuat di lingkungan mahasiswa EMAILKOMP",
                                "Mengembangkan EMAILKOMP menjadi sebuah himpunan yang efektif dalam berpartisipasi baik di internal dan eksternal",
                                "Mendorong partisipasi aktif mahasiswa dalam kegiatan akademik dan non akademik melalui berbagai program yang telah mendukung pengembangan potensi diri dan keterampilan.",
                            ].map((mission, index) => (
                                <div
                                    key={index}
                                    className="group flex items-start gap-4 p-5 rounded-xl bg-white hover:shadow-lg transition-all duration-300"
                                >
                                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-blue to-primary-indigo text-white rounded-lg flex items-center justify-center font-medium group-hover:scale-110 transition-transform duration-300">
                                        {index + 1}
                                    </span>
                                    <p className="text-gray-600">{mission}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionMission;
