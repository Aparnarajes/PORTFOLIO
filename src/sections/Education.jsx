import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Star, Calendar, Award } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Education = () => {
  const academicRecords = [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "Srinivas Institute of Engineering and Technology",
      period: "2022 - 2026",
      score: "CGPA: 8.76",
      description: "Rigorous coursework focusing on predictive analytics, deep learning models, advanced neural networks, data structures, and algorithms.",
      icon: <GraduationCap className="text-accent-blue" size={24} />,
      badge: "Honors"
    },
    {
      degree: "Masters Program in Data Science",
      institution: "ExcelR, Bangalore",
      period: "2025 - Present",
      score: "Specialization",
      description: "Advanced curriculum covering Machine Learning, AI algorithms, deep learning using TensorFlow, predictive analytics, and statistical modeling applied to real-world datasets.",
      icon: <Award className="text-accent-cyan" size={24} />,
      badge: "Ongoing"
    },
    {
      degree: "Class XII (Senior Secondary)",
      institution: "State Board",
      period: "2022",
      score: "92%",
      description: "Focused on Physics, Chemistry, and Mathematics. Laying a solid foundation for computational engineering.",
      icon: <BookOpen className="text-accent-purple" size={22} />
    },
    {
      degree: "Class X (Secondary Education)",
      institution: "State Board",
      period: "2020",
      score: "Full A+",
      description: "Outstanding overall academic record with straight A+ grades across all core subjects.",
      icon: <Star className="text-accent-cyan" size={22} />
    }
  ];

  const certifications = [
    { title: "Masters Program in Data Science", issuer: "ExcelR", icon: <Award className="text-accent-blue" size={22} /> },
    { title: "AWS APAC – Solutions Architecture Job Simulation", issuer: "Forage", icon: <Award className="text-accent-purple" size={22} /> },
    { title: "AWS Academy Cloud Foundations", issuer: "AWS", icon: <Award className="text-accent-cyan" size={22} /> },
    { title: "Deep Learning using TensorFlow", issuer: "Course Certification", icon: <Award className="text-accent-blue" size={22} /> },
    { title: "Weekly Coding Challenge (Challenge 20)", issuer: "Certificate of Participation", icon: <Award className="text-accent-purple" size={22} /> }
  ];

  return (
    <section id="education" className="py-32 px-4 relative overflow-hidden bg-black-pure">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.5em] text-accent-blue mb-4">Academic Base</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Education <span className="text-white/20">& Credentials</span>
          </h3>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {academicRecords.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Card Outer Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0" />
              
              <div className="relative z-10 h-full glass-card-dark p-8 border border-white/5 group-hover:border-white/10 transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    {item.badge && (
                      <span className="px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-accent-blue/20 text-accent-blue border border-accent-blue/20 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <span className="flex items-center gap-1 text-white/40 text-xs font-semibold tracking-wider mb-2">
                    <Calendar size={12} /> {item.period}
                  </span>
                  
                  <h4 className="text-2xl font-bold mb-3 tracking-tight text-white group-hover:text-white transition-colors">
                    {item.degree}
                  </h4>
                  
                  <p className="text-accent-cyan font-bold tracking-wide mb-4 text-lg">
                    {item.score}
                  </p>

                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    {item.institution}
                  </p>
                </div>

                <p className="text-white/40 text-xs italic mt-6 border-t border-white/5 pt-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Certifications <span className="text-white/20">& Courses</span>
          </h3>
        </motion.div>

        {/* Certifications Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((item, idx) => (
             <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card-dark p-6 border border-white/5 rounded-2xl hover:border-white/10 hover:bg-white/[0.02] transition-all flex items-center gap-4"
             >
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 leading-snug">{item.title}</h4>
                  <p className="text-white/40 text-xs">{item.issuer}</p>
                </div>
             </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
