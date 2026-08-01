import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-lg shadow-sm border-b border-slate-200/60 dark:border-slate-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white font-display font-bold shadow-sm group-hover:rotate-6 transition-transform duration-300">
              TS
            </span>
            <span className="font-display font-semibold text-slate-900 dark:text-white hidden sm:block">
              Trivendra Singh
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1l2aT9x3Hn9c2peQ7-5zOytRpnUfaYXgQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 dark:bg-emerald-600 text-white text-sm font-medium hover:bg-slate-700 dark:hover:bg-emerald-500 transition-colors duration-200"
            >
              <Sparkles size={14} />
              Resume
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        } bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-b border-slate-200/60 dark:border-slate-800/60`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1l2aT9x3Hn9c2peQ7-5zOytRpnUfaYXgQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-900 dark:bg-emerald-600 text-white text-sm font-medium"
          >
            <Sparkles size={14} />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
