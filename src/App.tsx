import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MyJourney } from './components/MyJourney';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { NeuralBackground } from './components/NeuralBackground';

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground relative">
      <NeuralBackground />
      <Navbar />
      <div className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <TechStack />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <div id="journey">
          <MyJourney />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}