import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import EMsiklopediaPage from "../pages/EMsiklopediaPage";
import EMsiklopediaDetailPage from "../pages/EMsiklopediaDetailPage";
import OrganizationPage from "../pages/OrganizationPage";
import ContactPage from "../pages/ContactPage";
import NewsPage from "../pages/NewsPage";
import NewsDetailPage from "../pages/NewsDetailPage";
import Jaringan from "../pages/bidang/Jaringan";
import Mawa from "../pages/bidang/Mawa";
import SekBend from "../pages/bidang/SekBend";
import PO from "../pages/bidang/PO";
import LitBang from "../pages/bidang/LitBang";

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
                <Route
                    path="/organisasi"
                    element={<OrganizationPage />}
                ></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
                <Route path="/bidang/jaringan" element={<Jaringan />} />
                <Route path="/bidang/kemahasiswaan" element={<Mawa />} />
                <Route
                    path="/bidang/sekretaris-bendahara"
                    element={<SekBend />}
                />
                <Route
                    path="/bidang/pengembangan-organisasi"
                    element={<PO />}
                />
                <Route
                    path="/bidang/penelitian-pengembangan"
                    element={<LitBang />}
                />
                <Route path="/berita" element={<NewsPage />} />
                <Route path="/berita/:slug" element={<NewsDetailPage />} />
            </Routes>
        </div>
    );
};

export default Index;
