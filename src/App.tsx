import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import './styles/animations.css';

function App() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Retrieve the count from localStorage and ensure it is a number
    const storedCount = localStorage.getItem('visitorCount');
    let count = storedCount ? parseInt(storedCount, 10) : 0; // Default to 0 if null

    count += 1; // Increment count
    localStorage.setItem('visitorCount', count.toString()); // Store it back
    setVisitorCount(count);
  }, []);

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
            <p>No of Visitors : {visitorCount}</p>
          </div>
        </footer>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
