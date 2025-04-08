import React from 'react';
import { Code, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Code size={48} className="inline-block text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trivendra Singh
          </h1>
          <div className="w-24 h-1 bg-emerald-600 dark:bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl mb-10 text-slate-600 dark:text-slate-300">
            Software Developer
          </p>
          <div>
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 bg-slate-800 text-white dark:bg-emerald-600 dark:text-slate-100 font-medium hover:bg-slate-700 dark:hover:bg-emerald-500 transition-all duration-300"
            >
              View My Work
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}