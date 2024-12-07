import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaSnapchat } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-yellow-800 text-white text-sm fixed top-0 left-0 w-full z-30 h-10">
      <div className="container mx-auto flex justify-end items-center h-full p-2 space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="hover:text-blue-500" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-blue-400" />
        </a>
        <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
          <FaSnapchat className="hover:text-yellow-400" />
        </a>
      </div>
    </div>
  );
};

export default Header;
