import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import './styles/animations.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <Header />
        <Hero />
        <main>
          <About />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
          <div className="container mx-auto px-4 text-center text-sm">
            <p>© 2026 Trivendra Singh. Built with React, TypeScript &amp; Tailwind CSS.</p>
          </div>
        </footer>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;