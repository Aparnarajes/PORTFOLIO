import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative antialiased min-h-screen text-white bg-black-pure font-['Plus_Jakarta_Sans',_sans-serif]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple origin-left z-[99] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Atmospheric Background */}
      <Background />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-12 text-center text-white/30 border-t border-white/5 relative z-10 glass-card rounded-none" style={{ background: 'rgba(8,9,17,0.85)' }}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p>© {new Date().getFullYear()} Aparna Rajesh. All rights reserved.</p>
          <p className="font-light">
            Designed for <span className="text-white/60 font-medium">Recruiter Impact</span> & built using <span className="text-accent-cyan font-medium">React, Vite & Tailwind</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
