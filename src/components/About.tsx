import { Cpu, Database, GraduationCap, Sparkles, User, Wrench } from 'lucide-react';

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
  return (
    <section id="about" className="py-24 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12 animate-fadeIn">
          <p className="text-neutral-400 font-medium tracking-wide uppercase text-xs mb-2">
            Get to know me
          </p>
          <h2 className="font-display text-3xl font-bold text-neutral-900">About Me</h2>
        </div>

        <div className="space-y-10">
          <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl">
            I'm currently a <span className="text-neutral-900 font-medium">Software Developer at Yathaavat Solutions Pvt. Ltd.</span>,
            where I build internal CRM tools, automate email workflows, and explore AI-powered
            solutions like web crawlers and knowledge-base chatbots. Earlier, as an{' '}
            <span className="text-neutral-900 font-medium">AI &amp; IP Innovation Intern at TT Consultants</span>,
            I worked on patent analytics and prior-art research for live client projects,
            including engagements with Nokia Technologies. I like working across the stack
            from designing embedding pipelines for semantic search to shipping polished,
            production-ready UI.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 border border-neutral-200 rounded-md">
              <div className="flex items-center gap-3 mb-2">
                <User className="text-neutral-500" size={20} />
                <h3 className="font-semibold text-neutral-900">Software Developer</h3>
              </div>
              <p className="text-sm text-neutral-600">
                AI-integrated full-stack developer who enjoys turning ambitious product ideas
                into fast, reliable, and well-designed software.
              </p>
            </div>
            <div className="p-5 border border-neutral-200 rounded-md">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="text-neutral-500" size={20} />
                <h3 className="font-semibold text-neutral-900">Education</h3>
              </div>
              <p className="text-sm text-neutral-600">
                B.E. in Electronics &amp; Communication Engineering, UIET, Panjab University,
                Chandigarh (2022 – 2026).
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-neutral-900 mb-4">
              Skills &amp; Technologies
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title} className="p-5 border border-neutral-200 rounded-md">
                  <div className="flex items-center gap-2 mb-3">
                    <group.icon className="text-neutral-500" size={18} />
                    <h4 className="font-semibold text-neutral-900 text-sm">{group.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-neutral-100 text-neutral-700 px-2.5 py-1 rounded text-xs font-medium"
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
    </section>
  );
}
