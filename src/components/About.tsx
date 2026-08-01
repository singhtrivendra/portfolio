import { useState } from 'react';
import { Cpu, Database, GraduationCap, Sparkles, User, Wrench } from 'lucide-react';
import about from '../assests/about_img.jpg';

const SKILL_GROUPS = [
  {
    icon: Cpu,
    title: 'Languages',
    skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    icon: Sparkles,
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    icon: Wrench,
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    icon: Sparkles,
    title: 'AI / GenAI',
    skills: ['LLM Integration', 'RAG', 'Pinecone', 'Gemini API', 'Semantic Search', 'Embeddings'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'AWS EC2', 'CI/CD'],
  },
];

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 animate-fadeIn">
          <p className="text-emerald-600 dark:text-emerald-400 font-medium tracking-wide uppercase text-sm mb-2">
            Get to know me
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          <div className="animate-slideIn lg:sticky lg:top-28">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-emerald-600 dark:bg-emerald-500 rounded-2xl transform rotate-6" />
              {imageError ? (
                <div className="relative w-full h-[420px] bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                  <User size={64} className="text-slate-400 dark:text-slate-600" />
                </div>
              ) : (
                <img
                  src={about}
                  alt="Trivendra Singh"
                  className="relative rounded-2xl shadow-xl w-full h-[420px] object-cover"
                  onError={() => setImageError(true)}
                />
              )}
            </div>

            <div className="mt-8 space-y-4 max-w-sm mx-auto lg:mx-0">
              <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <User className="text-emerald-600 dark:text-emerald-400" size={20} />
                  <h3 className="font-semibold text-slate-900 dark:text-white">Software Developer</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  AI-integrated full-stack developer who enjoys turning ambitious product ideas
                  into fast, reliable, and well-designed software.
                </p>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="text-emerald-600 dark:text-emerald-400" size={20} />
                  <h3 className="font-semibold text-slate-900 dark:text-white">Education</h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  B.E. in Electronics &amp; Communication Engineering, UIET, Panjab University,
                  Chandigarh (2022 – 2026).
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fadeIn" style={{ animationDelay: '0.15s' }}>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              I'm currently a <span className="text-slate-900 dark:text-white font-medium">Software Developer at Yathaavat Solutions</span>,
              where I build internal CRM tools, automate email workflows, and explore AI-powered
              solutions like web crawlers and knowledge-base chatbots. Earlier, as an{' '}
              <span className="text-slate-900 dark:text-white font-medium">AI &amp; IP Innovation Intern at TT Consultants</span>,
              I worked on patent analytics and prior-art research for live client projects,
              including engagements with Nokia Technologies. I like working across the stack —
              from designing embedding pipelines for semantic search to shipping polished,
              production-ready UI.
            </p>

            <div>
              <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Skills &amp; Technologies
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {SKILL_GROUPS.map((group) => (
                  <div
                    key={group.title}
                    className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-800 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <group.icon className="text-emerald-600 dark:text-emerald-400" size={18} />
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{group.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 px-2.5 py-1 rounded-full text-xs font-medium transition-colors duration-300 hover:bg-emerald-200 dark:hover:bg-emerald-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
