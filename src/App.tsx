import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <Header />
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-sm text-neutral-500">
          <p>© 2026 Trivendra Singh. Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
