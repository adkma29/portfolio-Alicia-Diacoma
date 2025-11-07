import React from "react";
import { motion } from "framer-motion";
import { personalInfo, skills, education, experiences } from "../data/portfolio_content";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
      >
        À propos de moi
      </motion.h2>

      {/* Section 1: Qui suis-je ? */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-bold mb-6 text-purple-400">Qui suis-je ?</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-300 mb-4">{personalInfo.description}</p>
            <p className="text-lg text-gray-300 mb-4">{personalInfo.bioabout}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {personalInfo.traits.map((trait, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Compétences techniques :</h4>
            <div className="grid grid-cols-2 gap-4">
              {skills.languages.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logiciels maîtrisés - Section centrée */}
        <div className="mt-12">
          <h4 className="text-xl font-semibold mb-6 text-white text-center">Logiciels maîtrisés :</h4>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-purple-900/40 text-purple-300 rounded-lg font-medium flex items-center gap-2 border border-purple-500/30"
              >
                <span>{tool.icon}</span>
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Section 2: Formations avec image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-bold mb-6 text-purple-400">Mon parcours</h3>
        
        <div className="grid md:grid-cols-[500px_1fr] gap-8 items-center">
          {/* Image 3D à gauche */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <img
              src="/alicia-education.png"
              alt="Alicia 3D"
              className="w-full h-full object-contain rounded-2xl"
              style={{ filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.6))' }}
            />
          </motion.div>

          {/* Timeline des formations à droite */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl hover:bg-white/10 transition-all">
                  <div className="flex flex-wrap items-center justify-between mb-3">
                    <span className="text-sm font-bold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">{edu.period}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-lg font-medium text-gray-200 mb-2">{edu.school}</p>
                  <p className="text-sm font-medium text-pink-400 mb-2">{edu.specialization}</p>
                  <p className="text-gray-300 mb-2 text-sm">{edu.description}</p>
                  <p className="text-sm font-semibold text-purple-300">{edu.status}</p>
                </div>
                
                {/* Ligne de connexion entre les items (sauf le dernier) */}
                {index < education.length - 1 && (
                  <div className="absolute left-0 top-full h-6 w-1 bg-gradient-to-b from-purple-500/50 to-transparent ml-3"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Section 3: Expériences */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-3xl font-bold mb-8 text-purple-400 text-center">Mon expérience sur le terrain</h3>
        
        {/* Image 3D centrée au-dessus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <img
            src="/alicia-experience.png"
            alt="Alicia 3D"
            className="w-96 md:w-[500px] h-auto object-contain rounded-2xl"
            style={{ filter: 'drop-shadow(0 0 40px rgba(168, 85, 247, 0.6))' }}
          />
        </motion.div>

        {/* Grille des expériences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all hover:-translate-y-2 relative overflow-hidden group ${
                exp.current ? "border-2 border-purple-500" : "border border-purple-500/20"
              }`}
            >
              {/* Effet de fond au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Contenu */}
              <div className="relative z-10">
                {/* Header avec logo et badge */}
                <div className="flex items-start justify-between mb-5">
                  {/* Logo entreprise */}
                  <div className="w-20 h-20 bg-white rounded-xl p-2.5 shadow-lg flex items-center justify-center">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<span class="text-3xl font-bold text-purple-600">${exp.company.charAt(0)}</span>`;
                      }}
                    />
                  </div>
                  
                  {/* Badge "En cours" */}
                  {exp.current && (
                    <span className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">
                      En cours
                    </span>
                  )}
                </div>

                {/* Infos principales */}
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{exp.role}</h4>
                  <p className="text-lg font-semibold text-purple-400 mb-1">{exp.company}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-1">
                    <span>📅</span>
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-pink-400">
                    <span>🎯</span>
                    <span>{exp.type}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{exp.description}</p>

                {/* Tâches */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-purple-300 uppercase tracking-wide">Missions principales :</p>
                  <ul className="space-y-2">
                    {exp.tasks.map((task, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2 mt-1">▸</span>
                        <span className="flex-1">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Effet de brillance au survol */}
              <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
