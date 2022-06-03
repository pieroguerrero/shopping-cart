import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App strPortalDivId="div-portal" />}>
        <Route index element={<>Landing Page</>} />
        <Route path="expenses" element={<>Expenses</>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
