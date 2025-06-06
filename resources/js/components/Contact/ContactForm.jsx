import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast, Toaster } from "sonner";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        subject: "",
        phone: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Harap isi nama terlebih dahulu";
        if (!formData.email) {
            tempErrors.email = "Harap isi alamat email terlebih dahulu";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email tidak valid";
        }
        if (!formData.message) tempErrors.message = "Harap isi pesan terlebih dahulu";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            setIsSubmitting(true);
            try {
                const response = await axios.post("/api/contact", formData);
                toast.success("Pesan berhasil terkirim", {
                    duration: 4000,
                    position: "center-center",
                    style: {
                        fontSize: "1.2rem",
                        padding: "20px",
                        maxWidth: "500px",
                        fontWeight: "500",
                    },
                });
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                    subject: "",
                    phone: "",
                });
            } catch (error) {
                console.error("Form submission error:", error);
                toast.error("Gagal mengirim pesan, coba lagi", {
                    duration: 4000,
                    position: "center-center", 
                    style: {
                        fontSize: "1.2rem",
                        padding: "20px",
                        maxWidth: "500px",
                        fontWeight: "500",
                    },
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-[60%] space-y-6 p-8 mt-6 rounded-xl backdrop-blur-lg border border-primary-blue/50 shadow-xl transform transition-all duration-500 hover:shadow-2xl hover:shadow-primary-blue/20"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-2xl md:text-3xl font-medium mb-4 text-center"
            >
                <span className="bg-gradient-to-r from-white/90 via-primary-orange/70 to-white/90 bg-clip-text text-transparent">
                    Kirim Pesan Kepada Kami
                </span>
            </motion.h2>

            <Toaster
                richColors
                position="center"
                expand={true}
                toastOptions={{
                    style: {
                        fontSize: "1.2rem",
                        padding: "20px",
                        maxWidth: "500px",
                        fontWeight: "500",
                    },
                    className: "my-toast-class",
                }}
            />

            <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <div>
                    <motion.label
                        htmlFor="name"
                        className="block text-white text-md font-medium mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Nama
                    </motion.label>
                    <motion.input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Nama pengirim"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 text-white border ${
                            errors.name
                                ? "border-red-500"
                                : "border-transparent"
                        } rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all bg-white/20 backdrop-blur-md`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    />
                    {errors.name && (
                        <p className="text-sm text-red-400 mt-1">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div>
                    <motion.label
                        htmlFor="email"
                        className="block text-white text-md font-medium mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        Email
                    </motion.label>
                    <motion.input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 text-white border ${
                            errors.email
                                ? "border-red-500"
                                : "border-transparent"
                        } rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all bg-white/20 backdrop-blur-md`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    />
                    {errors.email && (
                        <p className="text-sm text-red-400 mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div>
                    <motion.label
                        htmlFor="subject"
                        className="block text-white text-md font-medium mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        Perihal (Opsional)
                    </motion.label>
                    <motion.input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Perihal pesan"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-5 py-3 text-white border border-transparent rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all bg-white/20 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                    />
                </div>

                <div>
                    <motion.label
                        htmlFor="phone"
                        className="block text-white text-md font-medium mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.95 }}
                    >
                        No Telepon (Opsional)
                    </motion.label>
                    <motion.input
                        id="phone"
                        type="text"
                        name="phone"
                        placeholder="08xxxxxxxxxx"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3 text-white border border-transparent rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all bg-white/20 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.95 }}
                    />
                </div>

                <div>
                    <motion.label
                        htmlFor="message"
                        className="block text-white text-md font-medium mb-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        Pesan
                    </motion.label>
                    <motion.textarea
                        id="message"
                        name="message"
                        rows="3"
                        placeholder="Tulis pesan Anda di sini"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 text-white border ${
                            errors.message
                                ? "border-red-500"
                                : "border-transparent"
                        } rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary-blue transition-all bg-white/20 backdrop-blur-md`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    ></motion.textarea>
                    {errors.message && (
                        <p className="text-sm text-red-400 mt-1">
                            {errors.message}
                        </p>
                    )}
                </div>

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 bg-gradient-to-r from-primary-orange to-primary-blue text-white rounded-xl shadow-lg transform transition-all duration-300 ${
                        isSubmitting
                            ? "opacity-70 cursor-not-allowed"
                            : "hover:scale-105 hover:shadow-primary-blue/20"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </motion.button>
            </motion.form>
        </motion.div>
    );
};

export default ContactForm;
