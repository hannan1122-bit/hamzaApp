"use client";

import { useState, useEffect } from "react";
import { GiMountaintop } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import { useRouter } from "next/navigation";


export default function Navbar({ activePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [showCart, setShowCart] = useState(false); // State to toggle cart visibility
  const { cart, removeFromCart, getTotalPrice } = useCart(); // Destructure removeFromCart and getTotalPrice
  const router = useRouter();
  const [isHomepage, setIsHomepage] = useState(router.pathname === "/");

  const handleScroll = (page) => {
    if (!isHomepage) {
      router.push("/");
    }
    setIsOpen(false);
    setTimeout(() => {
      scrollToSection(page);
    }, 100);
  };

  const scrollToSection = (page) => {
    const section = document.querySelector(`[data-page="${page}"]`);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 76,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setIsHomepage(router.pathname === "/");
  }, [router.pathname]);

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
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
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
              {["Home", "About", "Products", "Contact"].map((page, i) => (
                <button
                  key={i}
                  onClick={() => handleScroll(page)}
                  className={`hover:text-gray-300 text-lg font-medium ${
                    activePage === page ? "text-yellow-300" : ""
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setShowCart(true)} // Show the cart when clicked
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

              <button
                onClick={() => setShowCart(true)} // Show the cart when clicked
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
              {["Home", "About", "Products", "Contact"].map((page, i) => (
                <button
                  key={i}
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

      {/* Show Cart Modal when showCart is true */}
      {showCart && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-40">
          <div className="bg-white p-6 max-w-lg mx-auto mt-16 rounded">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {cart.map((product, i) => (
                  <div key={i} className="mb-4 border p-4 rounded shadow">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p>Price: {product.price}</p>
                    <button
                      onClick={() => removeFromCart(product.id)} // Remove item functionality
                      className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className="mt-4">
                  <p className="text-lg font-semibold">
                    Total: ${getTotalPrice().toFixed(2)}
                  </p>
                </div>
              </div>
            )}
            <button
              onClick={() => setShowCart(false)} // Close the cart modal
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
