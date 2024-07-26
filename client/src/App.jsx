import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import ErrorPage from "./components/Error/ErrorPage";
import Navbar from "./components/Navbar/Navbar"
import Question from "./components/Question/Question";


function App() {
  const [user, setUser] = useState('')
  return (
    <BrowserRouter>
    
      <Navbar/>
      <section className="container mt-5">
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/:id" element={<Question/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
