import React from "react";
import Footer from "../components/Layouts/Footer";
import MouseCursorEffect from "../components/Contact/MouseCursorEffect";
import BackgroundEffects from "../components/Contact/BackgroundEffects";
import HeadingSection from "../components/Contact/HeadingSection";
import ContactForm from "../components/Contact/ContactForm";

const ContactPage = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
                <BackgroundEffects />
                <MouseCursorEffect />

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10 mb-12 flex flex-col items-center justify-center">
                    <HeadingSection />
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
