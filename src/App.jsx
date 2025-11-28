import './App.css'
import Navbar from './Components/Navbar'
import Hero from "./Components/Hero"
import Sobre from './Components/Sobre'
import Animais from './Components/Animais'
import Contato from './Components/Contato'
import Footer from './Components/Footer'
import Catalogo from './pages/Catalogo'
import CriarAnuncio from './pages/CriarAnuncio'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: false,     
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-purple-200">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Animais />
                <Sobre />
                <Contato />
              </>
            } />

            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/criar-anuncio" element={<CriarAnuncio />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App