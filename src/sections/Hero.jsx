import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, Github, Linkedin, Sparkles } from 'lucide-react';

const Hero = () => {
  const stats = [
    { value: "3+", label: "AI Projects", description: "Production & Research" },
    { value: "2", label: "Data Science Internships", description: "Practical Experience" },
    { value: "IEEE", label: "Research Paper", description: "Conference Acceptance" },
    { value: "AIML", label: "Vice-President", description: "Department Committee" }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-4 overflow-hidden bg-black-pure">
      
      {/* Background Subtle Gradient Grid Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl max-h-5xl pointer-events-none opacity-25">
        <div className="absolute inset-0 bg-gradient-radial from-accent-blue/15 via-accent-purple/5 to-transparent blur-3xl" />
      </div>

      <div className="z-10 text-center max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass-card border border-white/5 shadow-inner"
          >
            <Sparkles size={14} className="text-accent-cyan animate-pulse" />
            <span className="text-[10px] text-white/70 font-semibold tracking-[0.2em] uppercase">
              AI/ML Engineer Portfolio
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full text-left mb-20 mt-4">
            
            {/* Left Column: Headline copy */}
            <div className="lg:w-3/5 space-y-6">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] text-white">
                Aparna <span className="bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple bg-clip-text text-transparent">Rajesh</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-bold text-white/90 leading-snug">
                Data Scientist | Machine Learning & Statistical Modeling <br/>
                <span className="text-white/50 font-medium text-lg md:text-xl">
                  AI/ML Engineer
                </span>
              </h2>

              <p className="text-white/60 font-light text-base md:text-lg max-w-xl leading-relaxed">
                Applying machine learning and statistical modeling techniques to end-to-end data science projects, from data pipeline design through model development and deployment.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-7 py-3.5 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-bold rounded-xl flex items-center gap-2 shadow-[0_10px_25px_rgba(99,102,241,0.2)] hover:shadow-[0_15px_30px_rgba(99,102,241,0.3)] transition-all duration-300 border border-white/10"
                >
                  View Projects
                  <ArrowRight size={16} />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all font-semibold rounded-xl text-white/80 hover:text-white"
                >
                  Contact Me
                </motion.a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-5 pt-6 text-white/40">
                <a 
                  href="https://github.com/Aparnarajes" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors duration-300"
                >
                  <Github size={22} />
                </a>
                <a 
                  href="https://linkedin.com/in/aparnarajesh25" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={22} />
                </a>
                <a 
                  href="mailto:aparnarajeshapzz@gmail.com" 
                  className="hover:text-white transition-colors duration-300"
                >
                  <Mail size={22} />
                </a>
              </div>
            </div>

            {/* Right Column: Premium Framed Profile Picture */}
            <div className="lg:w-2/5 flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-72 h-72 md:w-80 md:h-80"
              >
                {/* Background Rotating Gradients */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue via-accent-cyan to-accent-purple rounded-[2.5rem] blur-xl opacity-35 animate-pulse-slow" />
                
                {/* Border container */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/40 via-accent-cyan/20 to-accent-purple/40 rounded-[2.5rem] p-1.5 border border-white/10 backdrop-blur-sm">
                  {/* Inner container */}
                  <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-black-near">
                    <img
                      src="/profile.jpG.jpeg"
                      alt="Aparna Rajesh"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.target.onerror = null;
                        // fallback to a default visual representation if missing
                        e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12 pt-12 border-t border-white/5 relative z-20">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.8 }}
                className="glass-card-dark p-6 rounded-2xl border border-white/5 flex flex-col justify-center text-left hover:border-white/10 hover:shadow-xl transition-all duration-300 group"
              >
                <span className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple bg-clip-text text-transparent block mb-1 group-hover:scale-105 origin-left transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-white/85">
                  {stat.label}
                </span>
                <span className="text-xs text-white/40 font-light mt-1">
                  {stat.description}
                </span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
