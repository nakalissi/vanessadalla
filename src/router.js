import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./views/layouts/Layout";
import Home from "./views/pages/Home";
import Products from "./views/pages/Products";
import Services from "./views/pages/Services";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
