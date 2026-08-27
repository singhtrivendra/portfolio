import { useEffect, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const ROLES = [
  'AI-Integrated Full-Stack Developer',
  'Generative AI & RAG Engineer',
  'React · Node.js · TypeScript',
  'Vector Search & LLM Integrations',
];

const STATS = [
  { value: '1+ Yrs', label: 'Building Products' },
  { value: '350+', label: 'DSA Problems Solved' },
  { value: '4', label: 'Platforms Shipped & Used Daily' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-b border-neutral-200 pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="animate-fadeIn">
          <div className="inline-flex items-center gap-2 mb-6 text-sm text-neutral-500">
            <span className="w-2 h-2 rounded-full bg-neutral-900" />
            Open to new opportunities
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight">
            Hi, I'm Trivendra Singh
          </h1>

          <div className="mt-4 h-8 flex items-center">
            <p key={roleIndex} className="text-lg font-medium text-neutral-600 animate-fadeIn">
              {ROLES[roleIndex]}
            </p>
          </div>

          <p className="mt-5 text-neutral-600 text-base sm:text-lg max-w-xl">
            I build AI-powered, full-stack products from RAG pipelines and semantic
            search to production-grade React/Node applications. At Yathaavat Solutions Pvt. Ltd.,
            I've shipped the company website, admin panel, CRM, and stakeholder platform
            all in daily use by the team.
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
            <MapPin size={16} />
            India · Open to Remote
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-neutral-900 text-white font-medium hover:bg-neutral-700 transition-colors duration-200"
            >
              View My Work
              <ArrowRight size={18} />
            </a>
            <a
              href="https://drive.google.com/file/d/1l2aT9x3Hn9c2peQ7-5zOytRpnUfaYXgQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-neutral-300 text-neutral-700 font-medium hover:border-neutral-900 transition-colors duration-200"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
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
                className="w-10 h-10 flex items-center justify-center rounded-md border border-neutral-200 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-neutral-900">{stat.value}</p>
                <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
