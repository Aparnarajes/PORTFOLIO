import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const experiences = [
  {
    role: "Data Science Intern",
    company: "AI Varient, Bangalore",
    period: "Dec 2025 – Present",
    highlights: [
      "Applied statistical modeling and machine learning techniques to build and evaluate predictive analytics models, improving accuracy through feature engineering, hyperparameter tuning, and cross-validation.",
      "Designed end-to-end data pipelines for preprocessing, EDA, and visualization of enterprise datasets using Python, Pandas, and NumPy, delivering high-quality, AI-ready data that informed business decisions.",
      "Curated and standardized datasets to maintain data quality and security standards aligned with enterprise AI solution requirements, collaborating with cross-functional stakeholders."
    ],
    tech: ["Python", "Pandas", "NumPy", "Statistical Modeling", "Machine Learning"]
  },
  {
    role: "Data Science Intern",
    company: "ExcelR Solutions",
    period: "Dec 2025 – Present",
    highlights: [
      "Conduct Exploratory Data Analysis (EDA) to understand feature distributions and anomalies.",
      "Implement data cleaning pipelines to resolve missing data values and outliers.",
      "Construct interactive data visualizations representing data correlations and patterns.",
      "Develop custom Machine Learning models using regression and classification algorithms.",
      "Create predictive analytics pipelines mapping operational outcomes."
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"]
  },
  {
    role: "Data Science Intern",
    company: "Wayeva Technologies",
    period: "May 2025 – Jul 2025",
    highlights: [
      "Applied supervised machine learning algorithms (Random Forest, XGBoost, Gradient Boosting) to real-world datasets for predictive modeling and data-driven decision-making.",
      "Improved model performance through systematic feature engineering, categorical encoding, and optimization, contributing to scalable, reproducible data science workflows."
    ],
    tech: ["Python", "Random Forest", "XGBoost", "Gradient Boosting", "Feature Engineering"]
  },
  {
    role: "Python Developer",
    company: "Dhanwis Techinfo Solutions",
    period: "Jan 2025 – Mar 2025",
    highlights: [
      "Wrote and maintained Python scripts to automate data handling and backend tasks, supporting internal tools and workflows.",
      "Collaborated with the development team to debug, test, and document code, strengthening core Python and software engineering fundamentals."
    ],
    tech: ["Python", "Automation", "Backend", "Debugging", "Scripting"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden bg-black-pure">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.5em] text-accent-blue mb-4">Timeline</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Professional <span className="text-white/20">Experience</span>
          </h3>
        </motion.div>

        {/* Timeline Flow */}
        <div className="relative space-y-16">
          {/* Vertical Center Glow Line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-purple opacity-30 transform md:-translate-x-1/2" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Connector Bubble */}
              <div 
                className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border border-white/10 bg-[#080911] flex items-center justify-center z-10 transform -translate-x-1/2 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                style={{ top: "4px" }}
              >
                <Briefcase size={14} className="text-accent-cyan" />
              </div>

              {/* Card Container */}
              <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
                <div className="relative group">
                  {/* Subtle hover backplate */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                  
                  <div className="relative glass-card-dark p-8 border border-white/5 group-hover:border-white/10 transition-all duration-300">
                    
                    {/* Period Badge */}
                    <span className="flex items-center gap-1.5 text-accent-cyan text-xs font-semibold tracking-wider mb-3">
                      <Calendar size={12} />
                      {exp.period}
                    </span>

                    <h4 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors duration-300">
                      {exp.role}
                    </h4>

                    <p className="text-white/50 font-medium text-sm mb-6">
                      {exp.company}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-white/60 text-sm font-light leading-relaxed">
                          <ChevronRight size={14} className="text-accent-cyan mt-1 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
                      {exp.tech.map(t => (
                        <span 
                          key={t}
                          className="px-2.5 py-1 text-[9px] uppercase tracking-wider font-bold rounded bg-white/5 text-white/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
