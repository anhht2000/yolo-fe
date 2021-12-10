import React from 'react';
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart"

import Home from "../pages/Home";
import Product from '../pages/Product';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';

function Routess() {
    return (
        <CartProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/catalog/:slug' element={<Product />} />
                <Route path="/products" element={<Catalog />} />
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </CartProvider>
    )
}

export default Routess
