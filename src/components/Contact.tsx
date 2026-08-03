import { Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'trivendrasingh0711@gmail.com',
    href: 'mailto:trivendrasingh0711@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 77039 13626',
    href: 'tel:+917703913626',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/singhtrivendra',
    href: 'https://github.com/singhtrivendra',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/trivendra-singh',
    href: 'https://www.linkedin.com/in/trivendra-singh-919bb6255/',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-slate-900 px-6 py-14 sm:px-14 sm:py-16 text-center">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500 rounded-full opacity-20 blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-500 rounded-full opacity-20 blur-3xl animate-blob" style={{ animationDelay: '3s' }} />

          <div className="relative animate-fadeIn">
            <p className="text-emerald-400 font-medium tracking-wide uppercase text-sm mb-3">
              Let's build something
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-4 flex items-center justify-center gap-2">
              <MapPin size={16} className="text-emerald-400" />
              Based in India · Open to remote opportunities
            </p>
            <p className="text-slate-300 max-w-xl mx-auto mb-10">
              Have a project in mind or just want to talk about AI, full-stack engineering,
              or your next product idea? My inbox is always open.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
              {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-400/50 transition-all duration-300 text-left"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
                    <Icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-400">{label}</span>
                    <span className="block text-sm font-medium text-white truncate">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1l2aT9x3Hn9c2peQ7-5zOytRpnUfaYXgQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500 text-slate-900 font-semibold shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
