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
      className={`flex flex-col bg-white rounded-md border border-neutral-200 overflow-hidden animate-fadeIn hover:border-neutral-400 transition-colors duration-200 ${
        featured ? 'md:col-span-2' : ''
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative h-44 shrink-0 border-b border-neutral-200">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-white border border-neutral-200 text-neutral-600 text-xs font-medium">
          {isLive ? 'Live' : 'Code only'}
        </span>
        {featured && (
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-neutral-900 text-white text-xs font-medium">
            Featured
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-neutral-900 mb-2">{title}</h3>
        <p className="text-sm text-neutral-600 mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.map((item) => (
            <span
              key={item}
              className="bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-4 border-t border-neutral-200">
          {github && (
            <a
              href={github}
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {isLive && live && (
            <a
              href={live}
              className="flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
