import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "/public/assets/logo/Logo-E-Mailkomp.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            // Close mobile menu on scroll
            if (isOpen) setIsOpen(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/organisasi", label: "Organisasi" },
        { path: "/emsiklopedia", label: "EMsiklopedia" },
        { path: "/berita", label: "Berita" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled
                        ? "backdrop-blur-xl bg-white/90 shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16">
                        {/* Logo Section - Left */}
                        <div className="flex-shrink-0 flex items-center space-x-3">
                            <img
                                src={logo}
                                className="w-10 h-10 object-contain"
                                alt="EMAILKOMP logo"
                            />
                            <span className="text-primary-orange font-bold text-xl tracking-tight">
                                EMAILKOMP
                            </span>
                        </div>

                        {/* Main Navigation - Center */}
                        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition-all duration-200 relative group ${
                                            isActive
                                                ? "text-primary-orange"
                                                : "text-gray-600 hover:text-primary-orange"
                                        }`
                                    }
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                </NavLink>
                            ))}
                        </div>

                        {/* Contact Button - Right */}
                        <div className="hidden md:flex flex-shrink-0 items-center">
                            <NavLink
                                to="/contact"
                                className="px-6 py-2 bg-primary-orange text-white rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300"
                            >
                                Kontak
                            </NavLink>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center ml-auto">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="rounded-full p-2 text-gray-600 hover:text-primary-orange hover:bg-orange-50 focus:outline-none transition-all duration-300"
                            >
                                <svg
                                    className={`h-6 w-6 transition-transform duration-300 ${
                                        isOpen ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isOpen ? (
                                        <path d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-xl shadow-xl">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                                            isActive
                                                ? "text-primary-orange bg-orange-50"
                                                : "text-gray-600 hover:text-primary-orange hover:bg-orange-50"
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <NavLink
                                to="/contact"
                                className="block px-4 py-3 mt-2 bg-gradient-to-r from-primary-orange to-primary-blue text-white rounded-lg font-medium text-base transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Kontak
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>

            {/* Overlay for mobile menu */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-all duration-500"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;
