import { motion } from "framer-motion";
import { FaTiktok, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "/public/assets/logo/Logo-E-Mailkomp.png";

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white pt-12 pb-5">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Kolom 1: Logo dan Deskripsi */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center lg:items-center"
                >
                    <img
                        src={logo}
                        alt="EMAILKOMP Logo"
                        className="w-24 mb-4"
                    />
                    <p className="text-gray-300 text-center lg:text-center text-sm md:text-base">
                        Himpunan Mahasiswa D3 Teknik Informatika
                    </p>
                    <p className="text-gray-300 text-center lg:text-center text-sm md:text-base">
                        Universitas Sebelas Maret
                    </p>
                </motion.div>

                {/* Kolom 2: Navigasi */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center lg:text-left"
                >
                    <h3 className="text-lg font-semibold text-primary-orange mb-4">
                        Navigasi
                    </h3>
                    <ul className="space-y-2">
                        {[
                            { name: "Home", link: "/" },
                            { name: "Organisasi", link: "/organisasi" },
                            { name: "EMsiklopedia", link: "/emsiklopedia" },
                            { name: "Berita", link: "/berita" },
                        ].map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    className="text-gray-300 hover:text-primary-orange transition duration-300"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Kolom 3: Sosial Media */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center lg:text-left"
                >
                    <h3 className="text-lg font-semibold text-primary-orange mb-4">
                        Ikuti Kami
                    </h3>
                    <div className="flex justify-center lg:justify-start space-x-6 mt-4">
                        {[
                            { icon: FaTiktok, link: "#" },
                            { icon: FaInstagram, link: "#" },
                            { icon: FaLinkedinIn, link: "#" },
                            { icon: FaYoutube, link: "#" },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.link}
                                className="bg-primary-indigo p-3 rounded-full hover:bg-primary-orange transition duration-300"
                            >
                                <social.icon className="w-6 h-6 text-white" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Kolom 4: Kontak */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <h3 className="text-lg font-semibold text-primary-orange mb-4">
                        Kontak
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                        Email: support@emailkomp.com
                    </p>
                    <p className="text-gray-300 text-sm">
                        Telepon: +62 123 456 789
                    </p>
                </motion.div>
            </div>

            {/* Garis Pemisah & Copyright */}
            <div className="border-t border-gray-600 mt-10 pt-6 text-center text-gray-400 text-sm">
                &copy; 2024 EMAILKOMP. Semua Hak Dilindungi.
            </div>
        </footer>
    );
};

export default Footer;
