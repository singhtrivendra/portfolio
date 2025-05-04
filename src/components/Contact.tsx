import React from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="mailto:trivendrasingh0711@gmail.com"
            className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition"
          >
            <Mail size={24} />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/singhtrivendra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/trivendra-singh-919bb6255/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="text-center">
          <a
            href="https://drive.google.com/file/d/1svXLmdG2bCHzYT9PrY8yehwiEMfqtRZk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg shadow-md hover:bg-emerald-700 transition"
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
