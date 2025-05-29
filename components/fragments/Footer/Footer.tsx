import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Logo / Brand */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">MyWebsite</h2>
          <p className="text-sm text-gray-400">© 2024 All Rights Reserved</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
          <a href="#" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#features" className="hover:text-blue-400 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-xl hover:text-blue-500 transition">
            <FaFacebook />
          </a>
          <a href="#" className="text-xl hover:text-blue-400 transition">
            <FaTwitter />
          </a>
          <a href="#" className="text-xl hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="text-xl hover:text-gray-500 transition">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
