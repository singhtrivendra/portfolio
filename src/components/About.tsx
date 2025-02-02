import React, { useState } from 'react';
import { Smartphone, BookOpen, Code, User } from 'lucide-react';
import about from "../assests/about_img.jpg"

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white animate-fadeIn">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideIn">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-lg transform rotate-6"></div>
              {imageError ? (
                <div className="relative w-full h-[400px] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                  <User size={64} className="text-gray-400 dark:text-gray-600" />
                </div>
              ) : (
                <img
                  src={about}
                  alt="Trivendra Singh"
                  className="relative rounded-lg shadow-lg w-full h-[400px] object-cover"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </div>
          <div className="space-y-6 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transform hover:scale-105 transition duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <Smartphone className="text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Android Developer</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Passionate about creating intuitive and efficient mobile applications using Flutter and modern Android development practices.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transform hover:scale-105 transition duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <BookOpen className="text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                3rd year B.Tech student in Electronics and Communication Engineering at UIET, Panjab University Chandigarh
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg transform hover:scale-105 transition duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <Code className="text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Dart', 'Android', 'React', 'JavaScript', 'TypeScript'].map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm transition-colors duration-300 hover:bg-blue-200 dark:hover:bg-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}