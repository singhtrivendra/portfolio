import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';

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
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-12 animate-fadeIn">
          <p className="text-neutral-400 font-medium tracking-wide uppercase text-xs mb-2">
            Let's build something
          </p>
          <h2 className="font-display text-3xl font-bold text-neutral-900">Get In Touch</h2>
        </div>

        <p className="text-neutral-600 mb-8 max-w-xl">
          Based in India · open to remote opportunities. Have a project in mind or just want
          to talk? My inbox is always open.
        </p>

        <div className="flex flex-col gap-2 mb-10">
          {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              <Icon size={16} className="text-neutral-400" />
              <span className="text-sm font-medium">{value}</span>
            </a>
          ))}
        </div>

        <a
          href="https://drive.google.com/file/d/1_swLjqTE0FV9YCuEIRmD4V8LjTldd3fP/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-neutral-900 text-white font-medium hover:bg-neutral-700 transition-colors duration-200"
        >
          <Download size={18} />
          Download Resume
        </a>
      </div>
    </section>
  );
}
