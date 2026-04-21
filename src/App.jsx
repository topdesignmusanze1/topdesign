import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./components/LanguageContext";
import ScrollToTop from "./components/scrollToTop";
import WhatsAppButton from "./components/Whatsapp";

function App() {

  

  return (

    <LanguageProvider> 
    <BrowserRouter>
    <ScrollToTop/>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
<WhatsAppButton/>
      <Footer />

    </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;