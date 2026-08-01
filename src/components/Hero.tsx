import { useEffect, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import profilePhoto from '../assests/Profile photo.png';

const ROLES = [
  'AI-Integrated Full-Stack Developer',
  'Generative AI & RAG Engineer',
  'React · Node.js · TypeScript',
  'Vector Search & LLM Integrations',
];

const STATS = [
  { value: '2+ Yrs', label: 'Building Products' },
  { value: '350+', label: 'DSA Problems Solved' },
  { value: '4', label: 'Platforms Shipped & Used Daily' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950 pt-24 pb-16">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-300 dark:bg-emerald-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-teal-300 dark:bg-teal-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '3s' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div className="animate-fadeIn text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to new opportunities
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-gradient">Trivendra Singh</span>
            </h1>

            <div className="mt-4 h-9 flex items-center justify-center lg:justify-start">
              <p
                key={roleIndex}
                className="text-lg sm:text-xl font-medium text-emerald-600 dark:text-emerald-400 animate-fadeIn"
              >
                {ROLES[roleIndex]}
              </p>
            </div>

            <p className="mt-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              I build AI-powered, full-stack products — from RAG pipelines and semantic
              search to production-grade React/Node applications. At Yathaavat Solutions,
              I've shipped the company website, admin panel, CRM, and stakeholder platform —
              all in daily use by the team.
            </p>

            <div className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={16} className="text-emerald-500" />
              India · Open to Remote
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-emerald-600 text-white font-medium shadow-lg shadow-slate-900/10 dark:shadow-emerald-900/30 hover:bg-slate-700 dark:hover:bg-emerald-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a
                href="https://drive.google.com/file/d/1l2aT9x3Hn9c2peQ7-5zOytRpnUfaYXgQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              {[
                { icon: Github, href: 'https://github.com/singhtrivendra', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/trivendra-singh', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:trivendrasingh0711@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slideIn flex justify-center lg:justify-end" style={{ animationDelay: '0.15s' }}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-400 via-teal-400 to-emerald-300 rounded-[2.5rem] rotate-6 opacity-70 blur-sm" />
              <div className="absolute -inset-4 border-2 border-dashed border-emerald-300 dark:border-emerald-700 rounded-[2.5rem] -rotate-6 animate-float" />
              {imageError ? (
                <div className="relative w-full h-full rounded-[2rem] bg-slate-100 dark:bg-slate-800 shadow-2xl flex items-center justify-center">
                  <span className="font-display text-6xl font-bold text-emerald-500">TS</span>
                </div>
              ) : (
                <img
                  src={profilePhoto}
                  alt="Trivendra Singh"
                  onError={() => setImageError(true)}
                  className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl ring-1 ring-black/5"
                />
              )}

              <div className="absolute -bottom-6 -left-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 px-4 py-3 animate-float">
                <p className="text-xs text-slate-500 dark:text-slate-400">Currently @</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Yathaavat Solutions</p>
              </div>

              <div
                className="absolute -top-6 -right-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 px-4 py-3 animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <p className="text-xs text-slate-500 dark:text-slate-400">B.Tech ECE</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">2022 – 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
