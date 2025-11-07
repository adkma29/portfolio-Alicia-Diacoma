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
        className="max-w-3xl mx-auto"
      >
        <div className="relative bg-gradient-to-br from-[#74276c] via-[#c53364] to-[#fd8263] rounded-2xl shadow-2xl shadow-[#c53364]/50 p-8 md:p-12 text-white border border-[#fd8263]/30">
          {/* Effet néon subtil */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#74276c]/20 to-[#fd8263]/20 blur-xl -z-10"></div>
          
          <p className="text-center text-lg md:text-xl mb-8">
            Je suis disponible pour discuter de vos projets, opportunités de collaboration ou simplement échanger !
          </p>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all hover:scale-105"
            >
              <div className="bg-white/20 p-3 rounded-full">
                <MdEmail size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">Email</p>
                <p className="font-semibold">{contact.email}</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all hover:scale-105"
            >
              <div className="bg-white/20 p-3 rounded-full">
                <FaPhone size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">Téléphone</p>
                <p className="font-semibold">{contact.phone}</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all hover:scale-105"
            >
              <div className="bg-white/20 p-3 rounded-full">
                <FaLinkedin size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">LinkedIn</p>
                <p className="font-semibold">{contact.linkedin}</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all hover:scale-105"
            >
              <div className="bg-white/20 p-3 rounded-full">
                <FaGithub size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-white/80">GitHub</p>
                <p className="font-semibold">{contact.github}</p>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-white/90">
            <FaMapMarkerAlt size={18} />
            <span className="text-lg">{personalInfo.location}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
