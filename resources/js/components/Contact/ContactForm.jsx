import React, { useState } from "react";

const ContactForm = ({
    onSubmit,
    isSubmitting,
    formStatus,
    formData,
    handleChange,
}) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Get in Touch
            </h2>

            <form onSubmit={onSubmit}>
                <div className="mb-6">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 p-3 w-full bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-orange"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 p-3 w-full bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-orange"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2 p-3 w-full bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-orange"
                        rows="6"
                        required
                    ></textarea>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className={`${
                            isSubmitting
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-primary-orange hover:bg-primary-dark"
                        } text-white font-semibold py-2 px-6 rounded-lg transition duration-300`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </div>

                {formStatus && (
                    <div className="mt-4 text-center text-sm text-gray-500">
                        {formStatus}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
