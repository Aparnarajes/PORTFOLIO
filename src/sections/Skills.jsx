import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Library, BarChart2, Hammer, Database } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="text-accent-blue" size={24} />,
    color: "from-blue-500/10 to-indigo-500/10",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "Machine Learning",
    icon: <BrainCircuit className="text-accent-purple" size={24} />,
    color: "from-purple-500/10 to-pink-500/10",
    skills: [
      { name: "Regression & Classification", level: 92 },
      { name: "Neural Networks (GRU, LSTM)", level: 88 },
      { name: "NLP & Sentiment Analysis", level: 85 },
      { name: "Feature Engineering", level: 90 },
      { name: "Cross-Validation", level: 90 }
    ]
  },
  {
    title: "Libraries & Frameworks",
    icon: <Library className="text-accent-cyan" size={24} />,
    color: "from-cyan-500/10 to-blue-500/10",
    skills: [
      { name: "Pandas & NumPy", level: 95 },
      { name: "Scikit-learn", level: 92 },
      { name: "TensorFlow & XGBoost", level: 85 },
      { name: "Hugging Face & ONNX", level: 80 },
      { name: "Flask & Streamlit", level: 85 }
    ]
  },
  {
    title: "Data Engineering & Analysis",
    icon: <BarChart2 className="text-accent-blue" size={24} />,
    color: "from-blue-500/10 to-cyan-500/10",
    skills: [
      { name: "EDA & Data Cleaning", level: 90 },
      { name: "Statistical Analysis", level: 85 },
      { name: "Matplotlib & Seaborn", level: 90 },
      { name: "Power BI & Tableau", level: 82 }
    ]
  },
  {
    title: "Cloud & Databases",
    icon: <Database className="text-accent-purple" size={24} />,
    color: "from-purple-500/10 to-indigo-500/10",
    skills: [
      { name: "AWS", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Data Pipelines", level: 82 }
    ]
  },
  {
    title: "Tools & Practices",
    icon: <Hammer className="text-accent-cyan" size={24} />,
    color: "from-cyan-500/10 to-indigo-500/10",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code & Anaconda", level: 90 },
      { name: "Agile Methodology", level: 85 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-4 bg-black-pure overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-right"
        >
          <h2 className="text-sm uppercase tracking-[0.5em] text-accent-purple mb-4">Technique</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter italic">
            Technical <span className="text-white">Layer</span>
          </h3>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative group h-full"
            >
              {/* Glow Behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0" />
              
              <div className="relative z-10 h-full glass-card-dark p-8 border border-white/5 group-hover:border-white/10 transition-all duration-500 flex flex-col justify-between">
                
                {/* Glow Overlay Accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-tight">{category.title}</h4>
                  </div>
                  
                  {/* Skill Progress Bars */}
                  <div className="space-y-5">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/70 font-light">{skill.name}</span>
                          <span className="text-accent-cyan font-bold">{skill.level}%</span>
                        </div>
                        {/* Track Bar */}
                        <div className="h-1.5 w-full bg-white/5 border border-white/5 rounded-full overflow-hidden">
                          {/* Fill Bar with delay and initial view triggering */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: sIdx * 0.1 }}
                            className="h-full bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple rounded-full"
                          />
                        </div>
                      </div>
                    ))}
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

export default Skills;
