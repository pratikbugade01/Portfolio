import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Artificial Intelligence Intern",
      company: "Wayspire Ed-Tech Private Limited",
      period: "July 2025 - September 2025",
      description: "• Built supervised and ensemble learning models (Linear/Logistic Regression, Decision Trees, Random Forest, Boosting) using Python, NumPy, and Pandas\n• Developed deep learning architectures with Neural Networks, CNNs, and RNNs for pattern recognition and sequential analysis\n• Implemented NLP pipelines using TF-IDF vectorization, word embeddings, and sentiment analysis for text classification\n• Completed capstone AI project with end-to-end solutions and visualizations using Matplotlib and Seaborn",
      icon: GraduationCap,
      skills: ["Python", "Machine Learning", "NLP", "Computer Vision", "Data Analysis", "Deep Learning"]
    }
  ];

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent" style={{ fontSize: 'clamp(2rem, 5.5vw, 3rem)' }}>
            Experience Timeline
          </h2>
          <p className="text-gray-400 text-lg">
            My journey in AIML engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" style={{ left: isDesktop ? '50%' : '20px', transform: isDesktop ? 'translateX(-50%)' : 'none' }} />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="relative flex items-center mb-16"
              style={{ justifyContent: isDesktop ? (index % 2 === 0 ? 'flex-start' : 'flex-end') : 'flex-start', paddingLeft: isDesktop ? '0' : '48px' }}
            >
              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10"
                style={{ left: isDesktop ? '50%' : '20px', transform: 'translateX(-50%)' }}
              />

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ width: isDesktop ? '41.67%' : '100%', marginRight: isDesktop && index % 2 === 0 ? 'auto' : undefined, marginLeft: isDesktop && index % 2 === 1 ? 'auto' : undefined }}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-full mr-4">
                      <exp.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-purple-300 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}