import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Flutter E-Commerce App",
      description: "A modern e-commerce application with clean UI and smooth animations",
      tech: ["Flutter", "Dart", "Firebase"],
      github: "https://github.com/singhtrivendra/Yathaavat",
      live: "#",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and modern web technologies",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    },
    {
      title: "contact Form App",
      description: "Android application for picking image and location",
      tech: ["Flutter", "Android", "Geolocation","image_picker"],
      github: "https://github.com/singhtrivendra/contact_form_app",
      live: "#",
      image: "src/images.jpg",
    },
    {
      title: "Meal App",
      description: "Android application for meal recipes and filters",
      tech: ["Flutter", "Android", "Fultter animation"],
      github: "https://github.com/singhtrivendra/Recipes_app",
      live: "#",
      image: "src/meal_app.jpg",
    },
    {
      title: "Blood Donor App",
      description: "DonorConnect, an application designed to connect donors and organizations for life-saving contributions.",
      tech: ["Flutter", "Android", "Firebase"],
      github: "https://github.com/singhtrivendra/donorconnect",
      live: "#",
      image: "src/donor2.png",
    },
    {
      title: "FPO for farmers and traders",
      description: "Web  UI serves as a valuable resource for farmers seeking to join FPOs ",
      tech: ["HTML", "CSS"],
      github: "https://github.com/singhtrivendra/FPO",
      live: "https://singhtrivendra.github.io/PROJECT-2/",
      image: "src/download.png",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center animate-fadeIn">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}