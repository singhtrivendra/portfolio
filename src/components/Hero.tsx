import React from 'react';
import { Code, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-900 dark:via-purple-900 dark:to-blue-900 text-white py-20 animate-gradient bg-[length:200%_200%]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-float">
            <Code size={48} className="inline-block" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Hi, I'm Trivendra Singh
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          Software Developer
          </p>
          <div className="animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 dark:bg-gray-900 dark:text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}