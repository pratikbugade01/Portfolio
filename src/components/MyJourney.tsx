import React from 'react';
import { motion } from 'motion/react';
import { Brain, Code, Database, Lightbulb } from 'lucide-react';

export function MyJourney() {
  const skills = [
    { name: 'Machine Learning Enthusiast', icon: Brain, gradient: 'from-blue-400 to-cyan-400' },
    { name: 'Generative AI Explorer', icon: Code, gradient: 'from-purple-400 to-pink-400' },
    { name: 'Data Analysis Expert', icon: Database, gradient: 'from-green-400 to-emerald-400' },
    { name: 'Problem Solver', icon: Lightbulb, gradient: 'from-orange-400 to-yellow-400' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold mb-6 pb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ fontSize: 'clamp(2rem, 5.5vw, 3rem)' }}>
            My Journey
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column - Text content & CGPA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently pursuing B.Tech in AI/ML at D. Y. Patil University with a CGPA of 6.0. I specialize in machine learning, data analysis, and I am actively exploring Generative AI.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My passion lies in bridging the gap between complex AI concepts and practical applications that solve real-world problems. I believe in continuous learning and contributing to the open-source community.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-6 rounded-lg border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <h3 className="text-xl font-bold text-blue-300">Academic Excellence</h3>
              </div>
              <p className="text-white text-2xl font-bold mb-1">CGPA: 6.0</p>
              <p className="text-gray-400">D. Y. Patil University - B.Tech AI/ML</p>
            </motion.div>
          </motion.div>

          {/* Right column - Skill cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 hover:border-purple-400/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]">
                  <div className="flex items-center space-x-4">
                    {/* Icon circle with gradient glow */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${skill.gradient} bg-opacity-20`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    {/* Skill text */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </h3>
                    </div>

                    {/* Indicator dot */}
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.gradient} opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_10px_currentColor] transition-all duration-300`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
