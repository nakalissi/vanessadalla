import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./views/layouts/Layout";
import Home from "./views/pages/Home";
import Products from "./views/pages/Products";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
