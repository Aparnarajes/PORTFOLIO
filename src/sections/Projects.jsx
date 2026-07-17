import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu, TrendingUp, Brain, Activity, Car, LineChart } from 'lucide-react';

const projects = [
  {
    title: "Alzheimer's Disease Prediction",
    subtitle: "Predictive Healthcare Pipeline",
    description: "Built a machine learning pipeline to predict Alzheimer's disease from demographic, lifestyle, medical, cognitive, and symptom-related patient data (2,149 records, 32 features).",
    icon: <Activity className="text-accent-blue" size={26} />,
    tech: ["Python", "Scikit-learn", "XGBoost", "Statsmodels", "Pandas"],
    highlights: [
      "Benchmarked Logistic Regression, SVM with PCA, Random Forest, Gradient Boosting, and XGBoost",
      "Selected Gradient Boosting as best model with 95.1% accuracy and 0.949 ROC-AUC",
      "Identified Functional Assessment, ADL, and MMSE as strongest clinical predictors",
      "Conducted extensive EDA, multicollinearity checks, and class imbalance handling"
    ],
    github: "https://github.com/Aparnarajes",
    accent: "from-blue-500/10 to-indigo-500/10"
  },
  {
    title: "Apple Stock Price Prediction",
    subtitle: "GRU Deep Learning Model",
    description: "Built a multi-step GRU neural network for 30-day AAPL stock price forecasting, engineering statistical and technical indicators for predictive power.",
    icon: <LineChart className="text-accent-purple" size={26} />,
    tech: ["TensorFlow", "Keras", "GRU", "ONNX", "Streamlit"],
    highlights: [
      "Achieved 98.2% R² and 1.35% MAPE on the test dataset through systematic hyperparameter tuning",
      "Exported the trained model to ONNX for efficient, lightweight deployment",
      "Engineered features using SMA, RSI, and Bollinger Bands",
      "Delivered an interactive Streamlit dashboard for actionable insights and forecast visualization"
    ],
    github: "https://github.com/Aparnarajes",
    accent: "from-purple-500/10 to-pink-500/10"
  },
  {
    title: "Car Price Prediction System",
    subtitle: "Interactive ML Web App",
    description: "Developed a full machine learning pipeline from data ingestion to model training, benchmarking multiple algorithms to identify the best statistical fit.",
    icon: <Car className="text-accent-cyan" size={26} />,
    tech: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Pandas"],
    highlights: [
      "Benchmarked six algorithms using R², MAE, MSE, and RMSE metrics",
      "Deployed a real-time interactive Streamlit web application for car price prediction",
      "Selected Random Forest Regressor as the best-performing model",
      "Implemented comprehensive EDA and feature engineering workflows"
    ],
    github: "https://github.com/Aparnarajes",
    accent: "from-cyan-500/10 to-blue-500/10"
  },
  {
    title: "IntelliCampus",
    subtitle: "AI-Based Campus Management System",
    description: "An intelligent, multi-tenant campus platform streamlining academic administration and tracking student performance thresholds using predictive analytics.",
    icon: <Cpu className="text-accent-blue" size={26} />,
    tech: ["React.js", "Node.js", "Prisma", "SQLite", "MongoDB"],
    highlights: [
      "AI-powered predictive analytics for identifying at-risk students",
      "Role-based secure dashboards (Admins, Faculty, Students)",
      "Approved and funded by KCST (Karnataka Council for Science and Technology)",
      "Accepted for presentation and publication at an IEEE Conference"
    ],
    github: "https://github.com/Aparnarajes",
    accent: "from-blue-500/10 to-indigo-500/10"
  },
  {
    title: "Trader Performance & Sentiment Analysis",
    subtitle: "Market Sentiment vs. Performance Indicators",
    description: "A data science application that maps psychological sentiment metrics (Fear & Greed Index) to individual trader decisions and equity drawdowns.",
    icon: <TrendingUp className="text-accent-purple" size={26} />,
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    highlights: [
      "Fear & Greed index integration for behavioral bias analysis",
      "Robust feature engineering analyzing trade execution frequency",
      "Dynamic statistical correlation charts and risk assessment",
      "Interactive data visualization mapping drawdown overlays"
    ],
    github: "https://github.com/Aparnarajes",
    accent: "from-purple-500/10 to-pink-500/10"
  },
  {
    title: "MindSight",
    subtitle: "Mental Health Prediction System",
    description: "A machine learning pipeline designed to classify and predict mental health risk indicators based on survey demographics and behavioral features.",
    icon: <Brain className="text-accent-cyan" size={26} />,
    tech: ["Python", "Scikit-learn", "XGBoost"],
    highlights: [
      "High-accuracy risk classification using ensemble classifiers",
      "Advanced demographic data imputation and pipeline encoding",
      "Comprehensive evaluation using Accuracy, F1-Score, and AUC-ROC curves",
      "Optimized decision trees with customized hyperparameter grids"
    ],
    github: "https://github.com/Aparnarajes",
    accent: "from-cyan-500/10 to-blue-500/10"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-4 bg-black-pure">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm uppercase tracking-[0.5em] text-accent-blue mb-4">Mastery</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter italic">
            Selected <span className="text-white">Systems</span>
          </h3>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0" />
              
              <div className="relative z-10 glass-card-dark p-8 md:p-12 border border-white/5 group-hover:border-white/10 transition-all duration-500">
                {/* Accent Backdrop Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl`} />

                <div className="flex flex-col lg:flex-row gap-10 items-start relative z-10">
                  
                  {/* Icon and Core Info */}
                  <div className="lg:w-2/5 space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        {project.icon}
                      </div>
                      <div className="flex gap-4">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-white/40 hover:text-white transition-colors p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>

                    <div>
                      <span className="text-accent-cyan text-xs font-bold uppercase tracking-widest block mb-1">
                        {project.subtitle}
                      </span>
                      <h4 className="text-3xl font-extrabold tracking-tight text-white mb-4">
                        {project.title}
                      </h4>
                      <p className="text-white/50 text-base font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2.5 pt-4">
                      {project.tech.map(tech => (
                        <span 
                          key={tech} 
                          className="px-3 py-1.5 text-[9px] uppercase tracking-wider font-bold rounded-lg bg-white/5 border border-white/5 text-white/55"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="lg:w-3/5 w-full h-full lg:border-l lg:border-white/5 lg:pl-10 space-y-4">
                    <h5 className="text-xs uppercase tracking-[0.2em] font-bold text-white/40 mb-4">
                      Project Highlights & Outcomes
                    </h5>
                    <ul className="space-y-4">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/70 text-sm md:text-base font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2.5 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
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

export default Projects;
