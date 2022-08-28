import Home from "./components/Home";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import More from "./components/MorePage"
import Watch from "./components/WatchPage"

export default props => {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="Inicio" element={<Home />} />
            <Route path="Mais" element={<More />} />
            <Route path="Assistir" element={<Watch />} />
        </Routes>
    );

}
