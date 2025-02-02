import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import EMsiklopediaPage from "../pages/EMsiklopediaPage";
import EMsiklopediaDetailPage from "../pages/EMsiklopediaDetailPage";

const Index = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/emsiklopedia" element={<EMsiklopediaPage />} />
                <Route
                    path="/articles/:slug"
                    element={<EMsiklopediaDetailPage />}
                />
            </Routes>
        </div>
    );
};

export default Index;
