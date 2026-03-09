import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Rocket, Cpu, Brain, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import roverPhoto from '../assets/rover-photo.jpg';
import fastApiPhoto from '../assets/fast_api.png';

export function Projects() {
  const projects = [
    {
      title: "Unmanned Space Mission",
      description: "ESP32-CAM based rover with real-time video streaming and web-based remote control interface. Implemented motor control, camera pan/tilt servos, and WebSocket communication using Arduino C++ for wireless terrain navigation.",
      icon: Rocket,
      tech: ["ESP32-CAM", "Arduino", "C++", "WebSocket", "AsyncTCP", "HTML/CSS/JS"],
      gradient: "from-blue-400 to-purple-500",
      image: roverPhoto,
      liveLink: "https://www.linkedin.com/posts/pratik-bugade_engineeringproject-iot-androiddevelopment-activity-7332961447129362432-wLvl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEy_Ek0BNm_hN188e87VcJHHUOGrY7LLeKA",
      githubLink: "https://github.com/pratikbugade01/Unmanned-Space-Mission"
    },
    {
      title: "Insurance Premium Prediction System",
      description: "Full-stack ML application predicting insurance premium categories (Low, Medium, High) using FastAPI backend deployed on AWS EC2 and Streamlit frontend. Built REST APIs with Pydantic validation, real-time predictions, and confidence scores.",
      icon: Cpu,
      tech: ["FastAPI", "Streamlit", "Pydantic", "Uvicorn", "AWS EC2", "Docker", "scikit-learn"],
      gradient: "from-green-400 to-blue-500",
      image: fastApiPhoto,
      liveLink: "https://insurance-premium-prediction-website.streamlit.app/",
      githubLink: "https://github.com/pratikbugade01/FastAPI_Project"
    },
    {
      title: "Machine Learning Prediction System",
      description: "Currently building a supervised learning system for classification and regression tasks using ensemble methods and feature engineering. Implementing data preprocessing pipelines, hyperparameter tuning, and model evaluation with Scikit-learn and Pandas.",
      icon: BarChart3,
      tech: ["Machine Learning", "scikit-learn", "Pandas", "NumPy", "Python", "Data Analysis"],
      gradient: "from-cyan-400 to-teal-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      liveLink: "https://github.com/pratikbugade01",
      githubLink: "https://github.com/pratikbugade01"
    },
    {
      title: "Generative AI Application",
      description: "Currently building a Generative AI application using large language models for intelligent text generation and question answering. Exploring prompt engineering, embeddings, and vector search for contextual AI responses.",
      icon: Brain,
      tech: ["LLMs", "Generative AI", "Vector Search", "Embeddings", "NLP", "Python"],
      gradient: "from-purple-400 to-pink-500",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
      liveLink: "https://github.com/pratikbugade01",
      githubLink: "https://github.com/pratikbugade01"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ fontSize: 'clamp(2rem, 5.5vw, 3rem)' }}>
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive gallery showcasing AI/ML projects that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative h-full flex flex-col">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>

                <CardHeader className="relative flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex space-x-2">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Live Demo"
                      >
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                          <ExternalLink size={16} />
                        </Button>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Source Code"
                      >
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400">
                          <Github size={16} />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}