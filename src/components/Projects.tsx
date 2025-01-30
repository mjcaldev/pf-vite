import React from 'react';

const projects = [
  {
    title: 'Personal Finance App',
    description: 'A generalized version of a product I shipped for a client.',
    image: '/assets/Track.png',
    tech: ['Typescript', 'Plaid', 'Next.js', 'Appwrite'],
  },
  {
    title: 'Music Player',
    description: 'A web app to play, shuffle, navigate a clients music (replaced with placeholder sounds).',
    image: '/assets/TN-Music.png',
    tech: ['TypeScript', 'Next.js', 'Tailwind'],
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-900 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;