import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { contact, personalInfo } from "../data/portfolio_content";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
      >
        Contactez-moi
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 backdrop-blur-xl rounded-3xl shadow-2xl shadow-purple-500/30 p-8 md:p-12 text-white border border-purple-500/30 overflow-hidden">
          {/* Effets de fond animés */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-purple-500/10 to-purple-600/10"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-8 relative z-10">
            {/* Email */}
            <motion.a
              href={`mailto:${contact.email}`}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm p-5 rounded-2xl hover:bg-white/10 transition-all border border-purple-500/20 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                <MdEmail size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-purple-300 mb-1">Email</p>
                <p className="font-semibold text-white break-all">{contact.email}</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href={`tel:${contact.phone}`}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm p-5 rounded-2xl hover:bg-white/10 transition-all border border-purple-500/20 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-4 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                <FaPhone size={22} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-purple-300 mb-1">Téléphone</p>
                <p className="font-semibold text-white">{contact.phone}</p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm p-5 rounded-2xl hover:bg-white/10 transition-all border border-purple-500/20 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                <FaLinkedin size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-purple-300 mb-1">LinkedIn</p>
                <p className="font-semibold text-white">{contact.linkedin}</p>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-4 bg-white/5 backdrop-blur-sm p-5 rounded-2xl hover:bg-white/10 transition-all border border-purple-500/20 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-4 rounded-xl group-hover:scale-110 transition-transform shadow-lg">
                <FaGithub size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-purple-300 mb-1">GitHub</p>
                <p className="font-semibold text-white">{contact.github}</p>
              </div>
            </motion.a>
          </div>

          {/* Location avec style amélioré */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative z-10 flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl border border-purple-500/20 mx-auto max-w-md"
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
              <FaMapMarkerAlt size={20} />
            </div>
            <span className="text-lg font-medium text-white">{personalInfo.location}</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
