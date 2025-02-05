import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Landing from "../components/Home/Landing";
import VisionMission from "../components/Home/VisionMission";
import Events from "../components/Home/Events";
import Footer from "../components/Layouts/Footer";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-purple to-primary-dark">
            <div className="absolute inset-0 opacity-5"></div>
            <Navbar />
            <Landing />
            <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary-purple to-white"></div>
                <div className="relative bg-white">
                    <VisionMission />
                </div>
            </div>
            <Events />
            <Footer />
        </div>
    );
};

export default HomePage;
