'use client';

import { useState } from 'react';

export default function Navbar({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = (page) => {
    setIsOpen(false); // Close mobile menu
    setPage(page); // Set the active page
  };

  return (
    <nav className="bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
            rel="stylesheet"
          />

          <div className="flex-shrink-0">
            <button
              onClick={() => navigate("Home")}
              className="text-2xl font-bold"
              style={{
                fontFamily: "'Poppins', sans-serif", // Apply the font here
              }}
            >
              Hills Cargo
            </button>
          </div>

          {/* Menu (Center Links) */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => navigate("Home")} className="hover:text-gray-400 transition duration-300">
              Home
            </button>
            <button onClick={() => navigate("About")} className="hover:text-gray-400 transition duration-300">
              About
            </button>
            <button onClick={() => navigate("Products")} className="hover:text-gray-400 transition duration-300">
              Products
            </button>
            <button onClick={() => navigate("Contact")} className="hover:text-gray-400 transition duration-300">
              Contact
            </button>
          </div>

          {/* Search Icon */}
          <div className="flex items-center space-x-4">
            <button
              aria-label="Search"
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a7 7 0 110 14 7 7 0 010-14zm0 0l7 7"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => navigate("Home")}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Home
            </button>
            <button
              onClick={() => navigate("About")}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              About
            </button>
            <button
              onClick={() => navigate("Products")}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Products
            </button>
            <button
              onClick={() => navigate("Contact")}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
