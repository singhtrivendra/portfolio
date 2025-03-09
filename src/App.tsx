import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import './styles/animations.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Hero />
        <main>
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <footer className="bg-gray-800 dark:bg-gray-950 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 Trivendra Singh. All rights reserved.</p>
          </div>
        </footer>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;