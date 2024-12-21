'use client';

import { useState, useEffect } from "react";
import Header from "../app/components/Header";
import Navbar from "../app/components/Navbar";
import Home from "../app/components/Home";
import About from "../app/components/About";
import Products from "../app/components/Products";
import Contact from "../app/components/Contact";
import Footer from "../app/components/Footer";
import { CartProvider } from "../app/contexts/CartContext";

export default function MainPage() {
  const [activePage, setActivePage] = useState("Home");

  useEffect(() => {
    const sections = document.querySelectorAll("[data-page]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const page = entry.target.getAttribute("data-page");
            if (page) {
              setActivePage(page);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // Adjust to trigger when 50% of the section is visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <CartProvider>
      <div>
        <Header />
        <Navbar setPage={setActivePage} activePage={activePage} />
        <main className="pt-[76px]">
          {/* Sections for scrolling */}
          <section data-page="Home">
            <Home />
          </section>
          <section data-page="About">
            <About />
          </section>
          <section data-page="Products">
            <Products />
          </section>
          <section data-page="Contact">
            <Contact />
          </section>
          <Footer />
        </main>
      </div>
    </CartProvider>
  );
}
