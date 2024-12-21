"use client";

import { useState, useEffect } from "react";
import { GiMountaintop } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import { useRouter } from "next/navigation";

export default function Navbar({ setPage, activePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollingDown, setScrollingDown] = useState(false);
  const { cart } = useCart();
  const router = useRouter(); // Initialize router
  const [isHomepage, setIsHomepage] = useState(router.pathname === "/"); // Track if on homepage

  const handleScroll = (page) => {
    if (!isHomepage) {
      // Navigate to the homepage if not already on it
      router.push("/");
    }

    // Close the mobile menu
    setIsOpen(false);

    // Scroll to the section
    setTimeout(() => {
      scrollToSection(page);
    }, 100); // Delay ensures the page is fully loaded
  };

  const scrollToSection = (page) => {
    const section = document.querySelector(`[data-page="${page}"]`);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 76, // Adjust to prevent hiding behind navbar
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setIsHomepage(router.pathname === "/"); // Check if the current page is the homepage
  }, [router.pathname]); // Update whenever the route changes

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
            <div className="flex items-center space-x-2">
              <GiMountaintop className="text-4xl text-black" />
              <button
                onClick={() => handleScroll("Home")}
                className={`text-2xl font-semibold tracking-tight ${
                  activePage === "Home" ? "underline" : ""
                }`}
              >
                Hills Packaging
              </button>
            </div>

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
              <button
                onClick={() => handleScroll("Cart")}
                className="relative hover:text-gray-300 text-lg font-medium"
              >
                <FaShoppingCart className="text-2xl" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                ☰
              </button>

              {/* Cart icon always visible on mobile */}
              <button
                onClick={() => handleScroll("Cart")}
                className="relative ml-4 text-white"
              >
                <FaShoppingCart className="text-2xl" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

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
              <button
                onClick={() => handleScroll("Cart")}
                className="relative hover:text-gray-300 text-lg font-medium"
              >
                <FaShoppingCart className="text-2xl" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
