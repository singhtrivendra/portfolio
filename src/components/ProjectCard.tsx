import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
  delay: number;
  isLive: boolean;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  image,
  delay,
  isLive,
  featured,
}: ProjectCardProps) {
  return (
    <div
      className={`group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden animate-fadeIn hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 ${
        featured ? 'md:col-span-2' : ''
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden h-48 shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
        {featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold shadow">
            Featured
          </span>
        )}
        <span
          className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold shadow ${
            isLive ? 'bg-white/90 text-emerald-700' : 'bg-white/90 text-slate-500'
          }`}
        >
          {isLive ? 'Live' : 'Code only'}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {tech.map((item) => (
            <span
              key={item}
              className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 px-2.5 py-1 rounded-full text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-4 border-t border-slate-100 dark:border-slate-800">
          {github && (
            <a
              href={github}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              Code
            </a>
          )}
          {isLive && live && (
            <a
              href={live}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
