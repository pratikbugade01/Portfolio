import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, Github, Linkedin } from 'lucide-react';
import profileImage from '../assets/me.jpeg';

export function Hero() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative pt-20" style={{ pointerEvents: 'auto' }}>
      <div className="max-w-6xl w-full mx-auto" style={{ pointerEvents: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: isDesktop ? 'row' : 'column-reverse', alignItems: 'center', justifyContent: isDesktop ? 'space-between' : 'center', gap: '3rem', flexWrap: 'wrap' }}>

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: '1 1 300px', textAlign: isDesktop ? 'left' : 'center' }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#9ca3af', marginBottom: '0.5rem', fontWeight: 500 }}
            >
              Hi, I&apos;m
            </motion.p>

            <h1 className="font-bold mb-4" style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', lineHeight: 1.2, paddingBottom: '0.1em', overflow: 'visible' }}>
              {"Pratik Bugade".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                  className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', fontWeight: 600, color: '#d1d5db', marginBottom: '1rem', letterSpacing: '0.01em' }}
            >
              AI &amp; ML Engineering Student
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)', lineHeight: 1.8, color: '#9ca3af', marginBottom: '2rem' }}
            >
              A third-year undergraduate engineering student at{' '}
              <strong style={{ color: '#ffffff', fontWeight: 600 }}>D.Y Patil Agriculture &amp; technical University</strong>, Kolhapur.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: isDesktop ? 'flex-start' : 'center' }}
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button type="button" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-lg border-0 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
                  <Download size={18} /> Resume
                </button>
              </a>
              <a href="https://github.com/pratikbugade01" target="_blank" rel="noopener noreferrer">
                <button type="button" className="text-white font-semibold rounded-lg border border-gray-600 hover:border-blue-400 bg-transparent transition-all duration-300 hover:scale-105 inline-flex items-center gap-2" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
                  <Github size={18} /> GitHub
                </button>
              </a>
              <a href="https://www.linkedin.com/in/pratik-bugade" target="_blank" rel="noopener noreferrer">
                <button type="button" className="text-white font-semibold rounded-lg border border-gray-600 hover:border-blue-400 bg-transparent transition-all duration-300 hover:scale-105 inline-flex items-center gap-2" style={{ padding: '0.75rem 1.75rem', fontSize: '1rem' }}>
                  <Linkedin size={18} /> LinkedIn
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative', width: 'clamp(220px, 35vw, 340px)', height: 'clamp(220px, 35vw, 340px)' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '3px solid rgba(96,165,250,0.4)', background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(168,85,247,0.2))' }}>
                <img src={profileImage} alt="Pratik Bugade" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', inset: '-8px', borderRadius: '50%', border: '2px dashed rgba(96,165,250,0.3)', pointerEvents: 'none' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}