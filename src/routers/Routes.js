import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from '../pages/Products';
 
function Routess() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products/>}  />
        </Routes>
    )
}

export default Routess
