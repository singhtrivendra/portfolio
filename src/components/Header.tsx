import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
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
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'border-b border-neutral-200' : ''
      }`}
    >
      <nav className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-display font-semibold text-neutral-900">
            Trivendra Singh
          </a>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1l2aT9x3Hn9c2peQ7-5zOytRpnUfaYXgQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-700 transition-colors duration-200"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-200 ${
          menuOpen ? 'max-h-96 border-b border-neutral-200' : 'max-h-0'
        } bg-white`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-md text-neutral-700 hover:bg-neutral-100 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1l2aT9x3Hn9c2peQ7-5zOytRpnUfaYXgQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="mt-2 px-3 py-2.5 rounded-md bg-neutral-900 text-white text-sm font-medium text-center"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
