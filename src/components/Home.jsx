import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio_content";

export default function Home() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Grille futuriste en arrière-plan */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Lignes néon animées */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-30"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-20"></div>
      
      {/* Cercles néon flottants */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full border-2 border-purple-500/30"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-20 w-48 h-48 rounded-full border-2 border-pink-500/20"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      ></motion.div>

      {/* Particules lumineuses */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.8)]"></div>
      <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.8)]"></div>
      <div className="absolute top-1/2 right-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-start relative"
          >
            {/* Glow effect autour de l'avatar */}
            <div></div>
            <img
              src="/alicia3d.png"
              alt={personalInfo.name}
            />
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-white text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
            >
              {personalInfo.tagline || "Hey, moi c’est Alicia !"}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl mb-8 text-gray-400 max-w-xl"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons avec effet néon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer px-8 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:bg-purple-500 hover:scale-105 transition-all duration-300 border border-purple-400"
              >
                Qui suis-je ?
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-300 font-semibold rounded-full hover:bg-purple-500/20 hover:border-purple-400 hover:text-white hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
              >
                Explorer mes projets
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
