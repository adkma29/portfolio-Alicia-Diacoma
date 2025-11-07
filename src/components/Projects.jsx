import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolio_content";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:bg-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-400 overflow-hidden">
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
                <div className="flex items-center justify-center h-full text-white text-6xl">
                  {project.title.charAt(0)}
                </div>
              )}
              {project.featured && (
                <span className="absolute top-3 right-3 px-3 py-1 bg-yellow-400 text-gray-800 text-xs font-bold rounded-full">
                  ⭐ Featured
                </span>
              )}
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                {project.year && (
                  <span className="text-sm font-semibold text-purple-400">{project.year}</span>
                )}
              </div>

              <p className="text-sm font-medium text-pink-400 mb-3">{project.subtitle}</p>
              <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-900/40 text-purple-300 border border-purple-500/30 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-all"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>Démo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition-all"
                  >
                    <FaGithub size={16} />
                    <span>Code</span>
                  </a>
                )}
                {!project.demoUrl && !project.githubUrl && (
                  <div className="flex-1 px-4 py-2 bg-gray-100 text-gray-500 rounded-lg font-medium text-center text-sm">
                    Projet en cours
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
