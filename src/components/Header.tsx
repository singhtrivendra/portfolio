import React from 'react';
import { Code } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code size={24} />
            <span className="text-xl font-bold">Trivendra Singh</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}