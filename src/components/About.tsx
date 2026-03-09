import React from 'react';
import { motion } from 'motion/react';
import { Code, Coffee, Heart } from 'lucide-react';

export function About() {
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
          <h2 className="font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ fontSize: 'clamp(2rem, 5.5vw, 3rem)' }}>
            About Me
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              AI & ML Engineering Student passionate about building intelligent systems and real-world AI solutions
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a third-year AI & ML Engineering student at D.Y Patil Agriculture & Technical University, Kolhapur. I have a genuine interest in machine learning and enjoy turning ideas into working, practical projects.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I completed a 3-month AI internship at Wayspire Ed-Tech, where I worked with supervised learning, ensemble methods, and NLP techniques. My real-world projects include an ESP32-CAM based rover with live video streaming and a FastAPI-powered insurance premium prediction system deployed on AWS EC2.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I am currently exploring Generative AI and large language models, and I aim to grow into an AI Engineer who builds impactful, reliable AI solutions.
            </p>

            <div className="flex items-center space-x-6 text-gray-400">
              <div className="flex items-center space-x-2">
                <Code className="text-blue-400" size={20} />
                <span>ML Expert</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="text-purple-400" size={20} />
                <span>Data Driven</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="text-pink-400" size={20} />
                <span>AI Enthusiast</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-blue-400/20"
            >
              <p className="text-blue-300 italic">
                "Turning data into intelligence, one algorithm at a time."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
