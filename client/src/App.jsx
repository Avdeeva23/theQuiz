import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import ErrorPage from "./components/Error/ErrorPage";
import Navbar from "./components/Navbar/Navbar"
import Question from "./components/Question/Question";


function App() {
  return (
    <BrowserRouter>
    
      <Navbar/>
      <section className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Question />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
