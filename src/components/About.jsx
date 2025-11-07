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

      {/* Section 2: Formations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-bold mb-8 text-purple-400">En route vers aujourd’hui</h3>
        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl hover:bg-white/10 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between mb-2">
                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                <span className="text-sm font-semibold text-purple-400">{edu.period}</span>
              </div>
              <p className="text-lg font-medium text-gray-200 mb-2">{edu.school}</p>
              <p className="text-sm font-medium text-pink-400 mb-2">{edu.specialization}</p>
              <p className="text-gray-300 mb-2">{edu.description}</p>
              <p className="text-sm italic text-gray-400">{edu.status}</p>
            </div>
          ))}
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
        <h3 className="text-3xl font-bold mb-8 text-purple-400">Mon expérience sur le terrain</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-white/10 transition-all hover:-translate-y-1 ${
                exp.current ? "border-2 border-purple-500" : "border border-purple-500/20"
              }`}
            >
              {exp.current && (
                <span className="inline-block px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full mb-3">
                  En cours
                </span>
              )}
              <div className="mb-4">
                <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                <p className="text-lg font-semibold text-purple-400 mb-1">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.period}</p>
                <p className="text-sm font-medium text-pink-400 mt-1">{exp.type}</p>
              </div>
              <p className="text-gray-300 mb-3">{exp.description}</p>
              <ul className="space-y-1">
                {exp.tasks.map((task, idx) => (
                  <li key={idx} className="text-sm text-gray-300 flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
