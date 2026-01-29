import React, { useState } from "react";
import Logo from "./Logo";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlineQuestionCircle, AiOutlineLogin } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home"); // track which link is active

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClick = (link) => {
    setActive(link);
    setMenuOpen(false); // close mobile menu on click
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 px-2 bg-[#020617]/95 backdrop-blur-md shadow-lg">
      <div className="max-w-[1200px] w-full mx-auto h-[70px] flex items-center justify-between">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            onClick={() => handleClick("Home")}
            className={`flex items-center gap-1 text-lg transition duration-300 ${
              active === "Home"
                ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                : "text-white hover:text-gray-200"
            }`}
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => handleClick("About")}
            className={`flex items-center gap-1 text-lg transition duration-300 ${
              active === "About"
                ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                : "text-white hover:text-gray-200"
            }`}
          >
            About
          </a>
          <a
            href="#"
            onClick={() => handleClick("How it works")}
            className={`flex items-center gap-1 text-lg transition duration-300 ${
              active === "How it works"
                ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                : "text-white hover:text-gray-200"
            }`}
          >
            How it works
          </a>
          <a
            href="#"
            onClick={() => handleClick("Login")}
            className={`flex items-center gap-1 text-lg transition duration-300 ${
              active === "Login"
                ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                : "text-white hover:text-gray-200"
            }`}
          >
            Login
          </a>
          <button className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-lg hover:scale-105 hover:shadow-lg transition duration-300">
            Join Now
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#020617] w-full flex flex-col gap-4 overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100 p-4 border-t border-gray-700" : "max-h-0 opacity-0 py-0 border-none"
        }`}
      >
        <a
          href="#"
          onClick={() => handleClick("Home")}
          className={`flex items-center gap-2 text-lg transition duration-300 ${
            active === "Home" ? "text-blue-500" : "text-white hover:text-gray-200"
          }`}
        >
          <AiOutlineHome /> Home
        </a>
        <a
          href="#"
          onClick={() => handleClick("About")}
          className={`flex items-center gap-2 text-lg transition duration-300 ${
            active === "About" ? "text-blue-500" : "text-white hover:text-gray-200"
          }`}
        >
          <AiOutlineInfoCircle /> About
        </a>
        <a
          href="#"
          onClick={() => handleClick("How it works")}
          className={`flex items-center gap-2 text-lg transition duration-300 ${
            active === "How it works" ? "text-blue-500" : "text-white hover:text-gray-200"
          }`}
        >
          <AiOutlineQuestionCircle /> How it works
        </a>
        <a
          href="#"
          onClick={() => handleClick("Login")}
          className={`flex items-center gap-2 text-lg transition duration-300 ${
            active === "Login" ? "text-blue-500" : "text-white hover:text-gray-200"
          }`}
        >
          <AiOutlineLogin /> Login
        </a>
        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-lg hover:scale-105 hover:shadow-lg transition duration-300">
          Join Now
        </button>
      </div>
    </header>
  );
};

export default Header;
