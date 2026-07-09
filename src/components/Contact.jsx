import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { contact, personalInfo } from "../data/portfolio_content";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-white"
      >
        <span role="img" aria-label="enveloppe">📬</span> Envoyez-moi un message !
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

          {/* Formulaire fun */}
          <ContactForm />

          {/* Coordonnées (sauf téléphone) */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
            <motion.a
              href={`mailto:${contact.email}`}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl hover:bg-white/10 transition-all border border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl">
                <MdEmail size={22} />
              </div>
              <span className="font-semibold text-white">{contact.email}</span>
            </motion.a>
            <motion.a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl hover:bg-white/10 transition-all border border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl">
                <FaLinkedin size={22} />
              </div>
              <span className="font-semibold text-white">{contact.linkedin}</span>
            </motion.a>
            <motion.a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl hover:bg-white/10 transition-all border border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl">
                <FaGithub size={22} />
              </div>
              <span className="font-semibold text-white">{contact.github}</span>
            </motion.a>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl border border-purple-500/20"
            >
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2 rounded-lg">
                <FaMapMarkerAlt size={20} />
              </div>
              <span className="font-medium text-white">{personalInfo.location}</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Formulaire fun
const ContactForm = () => {
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    window.location.href = `mailto:tchaniadkma29@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1200);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex flex-col items-center justify-center py-12"
      >
        <span className="text-6xl mb-4 animate-bounce">🎉</span>
        <h3 className="text-2xl font-bold text-purple-400 mb-2">Message envoyé !</h3>
        <p className="text-lg text-white mb-4">Merci pour votre contact, je reviens vers vous très vite !</p>
        <button
          className="px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-all"
          onClick={() => { setSent(false); setSubject(""); setMessage(""); }}
        >Envoyer un autre message</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-purple-500/30 mb-8">
      <div className="mb-6">
        <label htmlFor="subject" className="block text-purple-300 font-semibold mb-2 text-lg">
          <span role="img" aria-label="question">❓</span> Vous me contactez pour ?
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={e => setSubject(e.target.value)}
          required
          placeholder="Collab', question, projet, papotage..."
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-purple-500/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all text-lg"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-purple-300 font-semibold mb-2 text-lg">
          <span role="img" aria-label="message">💬</span> Votre message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          placeholder="Dites moi tout... 🤩"
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-purple-500/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all text-lg"
        />
      </div>
      {error && <p className="text-pink-500 mb-4">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-full shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all text-lg"
      >
        {loading ? "Envoi..." : "🚀 Envoyer le message"}
      </button>
    </form>
  );
};
