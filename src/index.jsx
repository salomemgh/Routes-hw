import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Mtavari from "./App";

function App() {

    const style= {
        backgroundColor : "green"
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<App />}></Route>
                <Route  path="/Contact" element={<Contact />}></Route>
                <Route  path="/Aboutus" element={<Aboutus />}></Route>
            </Routes>

            <Mtavari />
            <h1 style={style} >მთავარი</h1>
        </BrowserRouter>
    );
}

var root = document.getElementById("root");
ReactDom.createRoot(root).render(<App />);