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
    period: 'Jan 2026 – May 2026',
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
    <section id="experience" className="py-24 border-b border-neutral-200 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12 animate-fadeIn">
          <p className="text-neutral-400 font-medium tracking-wide uppercase text-xs mb-2">
            Career path
          </p>
          <h2 className="font-display text-3xl font-bold text-neutral-900">Experience</h2>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="bg-white border border-neutral-200 rounded-md p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold text-neutral-900">{exp.role}</h3>
                {exp.current && (
                  <span className="text-xs font-medium px-2.5 py-1 rounded bg-neutral-900 text-white">
                    Current
                  </span>
                )}
              </div>
              <p className="text-neutral-700 font-medium text-sm mb-1">{exp.company}</p>
              <p className="text-neutral-500 text-sm mb-4">
                {exp.period} · {exp.location}
              </p>

              <ul className="space-y-2 mb-4">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-2 text-neutral-600 text-sm leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
