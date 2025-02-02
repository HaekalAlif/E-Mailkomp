import "./bootstrap";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Index from "./router/Index";
import Navbar from "./components/Layouts/Navbar";
ReactDOM.createRoot(document.getElementById("app")).render(
    <BrowserRouter>
        <Navbar />
        <Index />
    </BrowserRouter>
);
