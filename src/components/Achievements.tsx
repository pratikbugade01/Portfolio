import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      title: "Data Structure Certificate",
      platform: "GeeksforGeeks",
      year: "2025",
      icon: "🧠",
      verificationLink: "https://media.geeksforgeeks.org/courses/certificates/9f2e484d4d421da232f79c40c9ad5c68.pdf",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      title: "Internship Certificate",
      platform: "Wayspire Ed-Tech",
      year: "2025",
      icon: "☁️",
      verificationLink: "https://drive.google.com/file/d/1JauXvE1YjnByOA1i2koMVXgueeGq3izP/view?usp=sharing",
      gradient: "from-orange-400 to-yellow-400"
    },
    {
      title: "L&T TECH XCELERATE - MindSpark'25",
      platform: "COEP Technological University",
      year: "2025",
      icon: "🎓",
      verificationLink: "https://drive.google.com/file/d/1lVD38n3jfNpDim-hxMe9lH150lqAa1xf/view?usp=sharing",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      title: "Python Certification",
      platform: "IBM Skills Network",
      year: "2025",
      icon: "🐍",
      verificationLink: "https://courses.etrain.skillsnetwork.site/certificates/94cdaebdd0914d41bf29496f5c4e11cf",
      gradient: "from-green-400 to-teal-400"
    },
    {
      title: "IoT Exploration with Arduino & ESP32",
      platform: "SVL Automations",
      year: "2025",
      icon: "🧬",
      verificationLink: "https://drive.google.com/file/d/1UpB0V6r4XEIS4Ggbx4Y1eLaJzJ1SYe19/view?usp=sharing",
      gradient: "from-red-400 to-rose-400"
    },
    {
      title: "Git Training",
      platform: "Simplilearn SkillUp",
      year: "2025",
      icon: "🤖",
      verificationLink: "https://drive.google.com/file/d/1KylhygtR6MMVvMNBI070A49soQ8Dc4Hh/view?usp=sharing",
      gradient: "from-indigo-400 to-blue-400"
    }
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
          <h2 className="font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent" style={{ fontSize: 'clamp(2rem, 5.5vw, 3rem)' }}>
            Achievements & Certifications
          </h2>
          <p className="text-gray-400 text-lg">
            Professional certifications and achievements that validate my expertise in AI/ML
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-orange-400/50 transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon and Badge */}
                <div className="relative flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="text-5xl"
                  >
                    {achievement.icon}
                  </motion.div>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-2 rounded-full bg-gradient-to-r ${achievement.gradient} bg-opacity-20`}
                  >
                    <Award className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-blue-300 text-sm mb-2 font-medium">
                    {achievement.platform}
                  </p>

                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Calendar size={14} className="mr-2" />
                    <span>{achievement.year}</span>
                  </div>

                  {/* Verification Link */}
                  <motion.a
                    href={achievement.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-auto inline-flex items-center text-sm font-semibold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300`}
                  >
                    <span>View Credential</span>
                    <ExternalLink size={14} className="ml-2 text-orange-400" />
                  </motion.a>
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${achievement.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
