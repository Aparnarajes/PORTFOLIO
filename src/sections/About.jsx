import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Database, Brain, Sparkles, BookOpen } from 'lucide-react';

const About = () => {
  const coreStrengths = [
    {
      title: "Artificial Intelligence & ML Foundation",
      description: "Comprehensive training in machine learning concepts, classification, and neural network engineering.",
      icon: <Brain className="text-accent-blue" size={20} />
    },
    {
      title: "Data Science & Analytical Thinking",
      description: "Extensive background in exploratory data analysis (EDA), data structures, and feature optimization.",
      icon: <Database className="text-accent-cyan" size={20} />
    },
    {
      title: "IEEE Conference Contributor",
      description: "Active academic researcher presenting work on predictive systems at IEEE conferences.",
      icon: <Award className="text-accent-purple" size={20} />
    },
    {
      title: "Predictive System Design",
      description: "Proven expertise in developing software systems like IntelliCampus and MindSight using ML.",
      icon: <Code className="text-accent-blue" size={20} />
    }
  ];

  return (
    <section id="about" className="py-32 px-4 bg-black-pure relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-left"
        >
          <h2 className="text-sm uppercase tracking-[0.5em] text-accent-blue mb-4">Discovery</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
            About <span className="text-white/20">Aparna</span>
          </h3>
        </motion.div>

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass-card-dark p-8 md:p-16 border border-white/5 relative overflow-hidden group"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent-blue/5 blur-[120px] rounded-full group-hover:bg-accent-blue/10 transition-colors duration-500" />
          
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Content Column */}
            <div className="lg:w-1/2 space-y-6 text-white/70 leading-relaxed text-base md:text-lg font-light">
              <div className="flex items-center gap-2 text-accent-cyan text-sm font-semibold tracking-wider">
                <Sparkles size={16} />
                <span>Professional Biography</span>
              </div>
              
              <p className="text-white/90 font-medium">
                I am an AI/ML graduate with an academic CGPA of 8.76, specializing in machine learning and statistical modeling. I am actively seeking roles in AI/ML Engineering, Data Science, or Analytics to apply my analytical and problem-solving skills to complex business challenges.
              </p>
              
              <p>
                My technical philosophy centers on bridging statistical modeling with software engineering. I specialize in building highly structured predictive pipelines that turn unstructured data into actionable features and intelligent indicators, utilizing algorithms like regression, classification, and neural networks.
              </p>
              
              <p>
                With a strong baseline in Python, SQL, predictive analytics, and deep learning libraries, I construct robust models that scale. I enjoy tackling complex real-world challenges, whether it's disease prediction, stock price forecasting, or optimizing user behaviors.
              </p>

              <div className="pt-6 border-t border-white/5 flex flex-wrap gap-8">
                <div>
                  <div className="text-white font-extrabold text-3xl">8.76</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">B.Tech CGPA</div>
                </div>
                <div>
                  <div className="text-white font-extrabold text-3xl">2</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">DS Internships</div>
                </div>
                <div>
                  <div className="text-white font-extrabold text-3xl">IEEE</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Research Contributor</div>
                </div>
              </div>
            </div>

            {/* Right Highlights Column */}
            <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreStrengths.map((strength, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-6 border border-white/5 hover:border-white/10 transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                    {strength.icon}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 tracking-tight">
                    {strength.title}
                  </h4>
                  <p className="text-white/45 text-xs font-light leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
