import { Award, GitPullRequest, Trophy } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: 'DSA on LeetCode',
    description: 'Solved 350+ data structures & algorithms problems as part of "Decode C++ with DSA".',
  },
  {
    icon: Award,
    title: 'Full Stack Web Dev & DevOps',
    description: 'Completed the Full Stack Web Development || DevOps program, Cohort 3.0.',
  },
  {
    icon: GitPullRequest,
    title: 'GirlScript Summer of Code',
    description: 'Open-source contributor with 8 merged pull requests and a program score of 160.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 animate-fadeIn">
          <p className="text-emerald-600 dark:text-emerald-400 font-medium tracking-wide uppercase text-sm mb-2">
            Recognition
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Certifications &amp; Achievements
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, index) => (
            <div
              key={item.title}
              className="group p-7 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={22} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
