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
      className="cursor-pointer text-gray-300 hover:text-purple-400 transition-colors"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-lg border-b border-purple-500/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
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
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="hidden sm:block font-semibold text-white">
                {personalInfo.name.split(" ")[0]}
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="home">Home</NavLink>
            <NavLink to="about">À propos</NavLink>
            <NavLink to="projects">Projets</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="p-2 rounded-md text-gray-300 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all ${isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"}`}>
        <div className="px-4 pb-6 flex flex-col gap-4 bg-black/90 backdrop-blur-md border-t border-purple-500/20" onClick={() => setIsOpen(false)}>
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">À propos</NavLink>
          <NavLink to="projects">Projets</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
