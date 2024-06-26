import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import HeroSection from "./pages/HeroSection";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blogpost" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
