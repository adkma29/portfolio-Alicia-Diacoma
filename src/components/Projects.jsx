import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolio_content";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
      >
        Mes Projets
      </motion.h2>

      {/* Carrousel principal */}
      <div className="relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image du projet */}
              <div className="relative h-96 md:h-auto bg-gradient-to-br from-purple-400 to-pink-400 overflow-hidden group">
                {currentProject.image ? (
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-white text-8xl font-bold">
                    {currentProject.title.charAt(0)}
                  </div>
                )}
                {currentProject.featured && (
                  <span className="absolute top-4 right-4 px-4 py-2 bg-yellow-400 text-gray-800 text-sm font-bold rounded-full shadow-lg">
                    ⭐ Projet Featured
                  </span>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Contenu du projet */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold mb-3">
                        {currentProject.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {currentProject.title}
                      </h3>
                      <p className="text-lg font-medium text-pink-400 mb-4">
                        {currentProject.subtitle}
                      </p>
                    </div>
                    {currentProject.year && (
                      <span className="text-lg font-bold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-lg">
                        {currentProject.year}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {currentProject.description}
                  </p>

                  {/* Caractéristiques */}
                  {currentProject.features && currentProject.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wide mb-3">
                        Fonctionnalités clés :
                      </h4>
                      <ul className="space-y-2">
                        {currentProject.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-start">
                            <span className="text-purple-400 mr-2 mt-0.5">▸</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wide mb-3">
                      Technologies utilisées :
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-purple-900/40 text-purple-300 border border-purple-500/40 rounded-lg text-sm font-medium hover:bg-purple-800/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-3 pt-4 border-t border-purple-500/20">
                  {currentProject.demoUrl && (
                    <a
                      href={currentProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-600 shadow-lg hover:shadow-purple-500/50 transition-all"
                    >
                      <FaExternalLinkAlt size={16} />
                      <span>Voir la démo</span>
                    </a>
                  )}
                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl font-semibold hover:bg-gray-900 border border-gray-700 hover:border-gray-600 transition-all"
                    >
                      <FaGithub size={18} />
                      <span>Voir le code</span>
                    </a>
                  )}
                  {!currentProject.demoUrl && !currentProject.githubUrl && (
                    <div className="flex-1 px-6 py-3 bg-gray-100/10 text-gray-400 rounded-xl font-medium text-center border border-gray-500/20">
                      Projet en cours de développement
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Boutons de navigation */}
        <button
          onClick={prevProject}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-600/80 hover:bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all backdrop-blur-sm"
          aria-label="Projet précédent"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-600/80 hover:bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all backdrop-blur-sm"
          aria-label="Projet suivant"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Indicateurs de pagination */}
      <div className="flex justify-center gap-3 mt-8">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex
                ? "w-8 bg-gradient-to-r from-purple-500 to-pink-500"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Aller au projet ${idx + 1}`}
          />
        ))}
      </div>

      {/* Mini aperçu des autres projets */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
        {projects.map((project, idx) => (
          <motion.button
            key={project.id}
            onClick={() => setCurrentIndex(idx)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative h-32 rounded-xl overflow-hidden border-2 transition-all ${
              idx === currentIndex
                ? "border-purple-500 shadow-lg shadow-purple-500/30"
                : "border-purple-500/20 opacity-60 hover:opacity-100"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-white text-3xl font-bold">
                  {project.title.charAt(0)}
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
              <p className="text-white text-sm font-semibold line-clamp-1">{project.title}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
