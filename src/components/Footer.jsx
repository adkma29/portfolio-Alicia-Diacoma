import React from "react";
import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { contact, personalInfo } from "../data/portfolio_content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-300 flex items-center gap-2 justify-center md:justify-start">
              © {currentYear} - {personalInfo.name}
            </p>
            <p className="text-sm text-gray-400 mt-1 flex items-center gap-1 justify-center md:justify-start">
              Fait avec <FaHeart className="text-pink-500" size={14} /> et React
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition-all hover:scale-110"
              aria-label="Email"
            >
              <MdEmail size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Portfolio développé avec Vite + React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
