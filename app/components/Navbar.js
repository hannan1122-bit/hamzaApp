'use client';

import { useState, useEffect } from "react";

export default function Navbar({ setPage, activePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollingDown, setScrollingDown] = useState(false);

  const handleScroll = (page) => {
    setPage(page);

    const section = document.querySelector(`[data-page="${page}"]`);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 76, // Offset for Header + Navbar
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleNavbarScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY);
      setShowNavbar(!(scrollingDown && currentScrollY > 50));
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleNavbarScroll);
    return () => window.removeEventListener("scroll", handleNavbarScroll);
  }, [scrollingDown]);

  return (
    <nav
      className={`fixed top-[40px] left-0 w-full z-20 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-yellow-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo or Title */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleScroll("Home")}
                className={`text-2xl font-semibold tracking-tight ${
                  activePage === "Home" ? "underline" : ""
                }`}
              >
                Hills Cargo
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              {["Home", "About", "Products", "Contact"].map((page) => (
                <button
                  key={page}
                  onClick={() => handleScroll(page)}
                  className={`hover:text-gray-300 text-lg font-medium ${
                    activePage === page ? "text-yellow-300" : ""
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Products", "Contact"].map((page) => (
                <button
                  key={page}
                  onClick={() => handleScroll(page)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activePage === page ? "bg-yellow-700" : ""
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
