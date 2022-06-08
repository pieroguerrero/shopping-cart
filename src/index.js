import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandinPage } from "./pages/LandingPage";
import { ProductList } from "./pages/ProductList";
import { ProductPage } from "./pages/ProductPage/ProductPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App strPortalDivId="div-portal" />}>
          <Route index element={<LandinPage />} />
          <Route path="productlist/:listId" element={<ProductList />} />
          <Route path="product/:productId" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
