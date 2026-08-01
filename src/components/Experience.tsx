import { Briefcase } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Software Developer',
    company: 'Yathaavat Solutions Pvt. Ltd',
    location: 'Remote',
    period: 'June 2026 – Present',
    current: true,
    stack: ['Node.js', 'Express.js', 'TypeScript', 'React.js', 'Tailwind CSS', 'PostgreSQL', 'CI/CD (VPS)'],
    points: [
      'Developing an internal CRM platform for managing customer data, lead and deal pipelines, and interaction history, with integrated email automation for bulk emailing.',
      'Exploring AI-powered solutions including web crawlers and knowledge-base chatbots.',
      'Researching intelligent analysis of GC/GCMS laboratory reports for product quality assessment and domain-specific insights.',
    ],
  },
  {
    role: 'AI & IP Innovation Intern',
    company: 'TT Consultants Pvt. Ltd.',
    location: 'Chandigarh, India',
    period: 'Jan 2026 – Jun 2026',
    current: false,
    stack: ['Patent Analytics', 'Prior Art Search', 'Semantic Search', 'Technical Documentation'],
    points: [
      'Conducted patent infringement and prior-art analysis across Electronics, AI, and IoT domains, including two live Nokia Technologies projects.',
      'Performed claim charting, claim-element mapping, and technical feature analysis using Google Patents, USPTO, Espacenet, WIPO PatentScope, Orbit, and XLSCOUT.',
      'Built AI-assisted patent research workflows using semantic search and automated prior-art retrieval.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Yathaavat Solutions Pvt. Ltd',
    location: 'Remote',
    period: 'June 2024 – Dec 2024',
    current: false,
    stack: ['Node.js', 'Express.js', 'TypeScript', 'React.js', 'Tailwind CSS', 'PostgreSQL', 'REST APIs', 'CI/CD'],
    points: [
      'Revamped the company website, improving UI/UX and performance and adding dynamic blog management and content-publishing workflows.',
      'Designed and built a PostgreSQL-backed Admin Panel with full CRUD for products, blogs, contact requests, and quotations, streamlining operations.',
      'Developed an internal CRM for customer data, lead/deal pipelines, and interaction history, with integrated bulk-email automation.',
      'Explored AI-powered solutions including a document management system, web crawlers, and a knowledge-base chatbot.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 animate-fadeIn">
          <p className="text-emerald-600 dark:text-emerald-400 font-medium tracking-wide uppercase text-sm mb-2">
            Career path
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-400 via-emerald-300 to-transparent dark:from-emerald-600 dark:via-emerald-800" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="relative pl-14 sm:pl-16 animate-fadeIn"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <span
                  className={`absolute left-0 sm:left-1 top-1 flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900/50 shadow-md ${
                    exp.current
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400'
                  }`}
                >
                  <Briefcase size={16} />
                </span>

                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{exp.role}</h3>
                    {exp.current && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-1">{exp.company}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                    {exp.period} · {exp.location}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
