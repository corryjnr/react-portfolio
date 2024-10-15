import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import React, { useState, useEffect } from 'react';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.pageX, y: event.pageY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const glowStyle = {
    position: 'absolute',
    top: position.y, // Offset to center the glow
    left: position.x,
    width: '0.1px',
    height: '0.1px', // Offset to center the glow
    borderRadius: '50%',
    backgroundColor: 'rgba(59, 130, 246, .5)', // Glow color
    boxShadow: '0 0 1000px 300px rgba(0, 150, 255, 0.07)', // Glow effect
    pointerEvents: 'none', // Ensures the glow doesn’t block interaction with other elements
    zIndex: 999, // Ensure it stays on top of everything
  };

  return (
    <div className={styles.App}>
      <div className="App">
        <div style={glowStyle}></div>
        <div className={styles.firstPage}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
