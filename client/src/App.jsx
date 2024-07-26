import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import ErrorPage from "./components/Error/ErrorPage";
import ThemOne from "./components/ThemOne/ThemOne";
import Quiz from "./components/ThemTwo/ThemTwo";
import Navbar from "./components/Navbar/Navbar"


function App() {
  return (
    <BrowserRouter>
    
      <Navbar/>
      <section className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themone" element={<ThemOne />} />
          <Route path="/themtwo" element={<Quiz />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
