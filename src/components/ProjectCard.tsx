import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
  delay: number;
  isLive:Boolean
}

export default function ProjectCard({ title, description, tech, github, live, image, delay ,isLive }: ProjectCardProps) {
  return (

    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden animate-fadeIn transform hover:scale-105 transition-all duration-500 relative hover:shadow-2xl"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden group h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
          <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm opacity-90">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-6 dark:text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((item, i) => (
            <span 
              key={i} 
              className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 px-3 py-1 rounded-full text-sm transition-colors duration-300 hover:bg-emerald-200 dark:hover:bg-emerald-800"
              >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-auto fixed bottom-3 flex space-x-36 ">
          <a 
            href={github} 
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-600 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} className="mr-1" />
            Code
          </a>
          {isLive ? <a 
            href={live} 
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={20} className="mr-1" />
            Live Demo
          </a>: <div></div>}
        </div>
      </div>
    </div>
  );
}