import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { siteConfig } from "./data/portfolio_content";
import "./App.css";

export default function App() {
  useEffect(() => {
    if (siteConfig?.title) document.title = siteConfig.title;
    // enable smooth scroll for browsers that support it
    try {
      document.documentElement.style.scrollBehavior = "smooth";
    } catch (e) {
      // noop
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#15003b] via-[#000000] to-[#2a003b] text-white">
      <Navbar />

      <main className="pt-16">
        <section id="home" className="min-h-[80vh]">
          <Home />
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
