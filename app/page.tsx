'use client';

import { useState, useEffect } from "react";
import Header from "../app/components/Header"; // Ensure the path is correct
import Navbar from "../app/components/Navbar";
import Home from "../app/components/Home";
import About from "../app/components/About";
import Products from "../app/components/Products";
import Contact from "../app/components/Contact";
import Footer from "../app/components/Footer";

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
              setActivePage(page); // Ensure `page` is not null before setting it
            }
          }
        });
      },
      {
        root: null, // Default is the viewport
        threshold: 0.5, // 50% of the section must be visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar setPage={setActivePage} activePage={activePage} />

      {/* Main Content */}
      <main className="pt-[76px]"> {/* Offset for Header + Navbar */}
        <section data-page="Home" className="min-h-screen">
          <Home />
        </section>
        <section data-page="About" className="min-h-screen">
          <About />
        </section>
        <section data-page="Products" className="min-h-screen">
          <Products />
        </section>
        <section data-page="Contact" className="min-h-screen">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
