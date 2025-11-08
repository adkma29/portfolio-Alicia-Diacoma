import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { personalInfo } from "../data/portfolio_content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-80}
      duration={500}
      activeClass="text-purple-400 font-semibold"
      className="cursor-pointer text-gray-300 hover:text-purple-400 transition-all duration-300 relative group"
      onClick={() => setIsOpen(false)}
    >
      {children}
      {/* Underline effect */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-xl shadow-xl shadow-purple-500/10 border-b border-purple-500/30" 
          : "bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center gap-3"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              <img
                src="/logo-alicia.png"
                alt={`${personalInfo.name} logo`}
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="hidden sm:block font-semibold text-white text-lg">
                {personalInfo.name}
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-base font-medium">
            <NavLink to="home">Home</NavLink>
            <NavLink to="about">À propos</NavLink>
            <NavLink to="projects">Projets</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="p-2.5 rounded-lg text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 bg-black/95 backdrop-blur-xl border-t border-purple-500/30 shadow-lg">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-purple-400 font-semibold"
            className="cursor-pointer text-gray-300 hover:text-purple-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-purple-500/10 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-purple-400 font-semibold"
            className="cursor-pointer text-gray-300 hover:text-purple-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-purple-500/10 font-medium"
            onClick={() => setIsOpen(false)}
          >
            À propos
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-purple-400 font-semibold"
            className="cursor-pointer text-gray-300 hover:text-purple-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-purple-500/10 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Projets
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-purple-400 font-semibold"
            className="cursor-pointer text-gray-300 hover:text-purple-400 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-purple-500/10 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
