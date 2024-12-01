"use client"
import { useState } from 'react';
import Navbar from '../app/components/Navbar';
import Home from '../app/components/Home';
import About from '../app/components/About';
import Products from '../app/components/Products';
import Contact from '../app/components/Contact';
import Footer from '../app/components/Footer';

export default function MainPage() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div>
      
      <Navbar setPage={setActivePage} />
      <main>
        {activePage === "Home" && <Home />}
        {activePage === "About" && <About />}
        {activePage === "Products" && <Products />}
        {activePage === "Contact" && <Contact />}
      </main>
      <Footer/>
    </div>
);
}
