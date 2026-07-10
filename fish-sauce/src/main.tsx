import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Test } from "./pages/test";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/test" element={<Test />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
