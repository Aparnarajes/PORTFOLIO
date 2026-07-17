import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, Cpu, Users, GraduationCap, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const honors = [
    {
      title: "IEEE Research Contributor",
      subtitle: "Academic Research",
      description: "Co-authored and presented research focused on predictive analytics and AI system architectures at an IEEE Conference.",
      icon: <Cpu className="text-accent-blue" size={26} />,
      color: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "KCST Approved Project",
      subtitle: "Government Approval",
      description: "Received approval and support from Karnataka Council for Science and Technology (KCST) for the IntelliCampus AI-Based Campus Management System.",
      icon: <Award className="text-accent-purple" size={26} />,
      color: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "AIML Department Vice-President",
      subtitle: "Student Leadership",
      description: "Vice Head of the AIML Department Student Committee, hosting technical bootcamps, workshops, and inter-college events.",
      icon: <Users className="text-accent-cyan" size={26} />,
      color: "from-cyan-500/10 to-blue-500/10"
    },
    {
      title: "CGPA 8.76 / 10.00",
      subtitle: "Academic Excellence",
      description: "Maintained a high GPA throughout the B.Tech program, specializing in advanced data structures, logic systems, and statistical models.",
      icon: <GraduationCap className="text-accent-blue" size={26} />,
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Business Analyst Club Member",
      subtitle: "Professional Group",
      description: "Active contributor focusing on predictive market intelligence, behavior analytics, and translating model outputs into strategy.",
      icon: <TrendingUp className="text-accent-purple" size={26} />,
      color: "from-purple-500/10 to-indigo-500/10"
    },
    {
      title: "Data Science Club Member",
      subtitle: "Tech Group",
      description: "Collaborated on open source datasets, organized hackathons, and built analytics workflows for real-world projects.",
      icon: <ShieldAlert className="text-accent-cyan" size={26} />,
      color: "from-cyan-500/10 to-purple-500/10"
    }
  ];

  return (
    <section id="achievements" className="py-32 px-4 relative overflow-hidden bg-black-pure">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-left"
        >
          <h2 className="text-sm uppercase tracking-[0.5em] text-accent-purple mb-4">Milestones</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter italic">
            Research & <span className="text-white">Achievements</span>
          </h3>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {honors.map((honor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group h-full cursor-default"
            >
              {/* Blur Backplate */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative h-full glass-card-dark p-8 border border-white/5 group-hover:border-white/10 transition-all duration-500 flex flex-col">
                {/* Glow Background Accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${honor.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl`} />

                <div className="relative z-10 flex items-start gap-5">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-115 transition-transform duration-500">
                    {honor.icon}
                  </div>
                  <div>
                    <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest block mb-1">
                      {honor.subtitle}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {honor.title}
                    </h4>
                    <p className="text-white/50 text-sm font-light leading-relaxed">
                      {honor.description}
                    </p>
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

export default Achievements;
