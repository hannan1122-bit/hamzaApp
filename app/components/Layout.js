"use client";

import { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CartProvider } from "../contexts/CartContext"; // Correct the path if needed

const Layout = ({ children, activePage }) => {
  return (
    <CartProvider> {/* Wrap everything with CartProvider to provide cart context */}
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Navbar */}
        <Navbar activePage={activePage} setPage={() => {}} /> {/* Corrected navbar props */}

        {/* Main Content */}
        <main className="flex-grow bg-gray-100">
          {children} {/* Render the child content */}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Layout;
