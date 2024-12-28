import React from 'react';
import { Building } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Building className="text-blue-600" />
            <h3 className="text-xl font-semibold">Software Development Intern</h3>
          </div>
          <div className="ml-8">
            <p className="text-gray-800 font-medium">Yathaavat Solutions Pvt. Ltd</p>
            <p className="text-gray-600">1 Month Internship</p>
            <ul className="list-disc ml-4 mt-2 text-gray-600">
              <li>Worked on frontend development projects</li>
              <li>Collaborated with team members on various assignments</li>
              <li>Gained practical experience in software development lifecycle</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}