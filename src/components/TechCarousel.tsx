import React from 'react';
import { 
  FileJson,
  FileType,
  Atom,
  Database,
  Server,
  Smartphone,
  Palette,
  FileCode,
  Paintbrush,
  ArrowUpRightSquare,
  Container
} from 'lucide-react';

const techStack = [
  { name: 'JavaScript', icon: FileJson, color: 'text-yellow-400', size: 32 },
  { name: 'TypeScript', icon: FileType, color: 'text-blue-400', size: 32 },
  { name: 'React.js', icon: Atom, color: 'text-cyan-400', size: 32 },
  { name: 'SQL', icon: Database, color: 'text-orange-400', size: 32 },
  { name: 'Node.js', icon: Server, color: 'text-green-400', size: 32 },
  { name: 'React Native', icon: Smartphone, color: 'text-purple-400', size: 32 },
  { name: 'Tailwind', icon: Palette, color: 'text-teal-400', size: 32 },
  { name: 'HTML', icon: FileCode, color: 'text-red-400', size: 32 },
  { name: 'CSS', icon: Paintbrush, color: 'text-pink-400', size: 32 },
  { name: 'Next.js', icon: ArrowUpRightSquare, color: 'text-white', size: 32 },
  { name: 'Docker', icon: Container, color: 'text-blue-500', size: 32 },
];

const TechCarousel: React.FC = () => {
  return (
    <div className="relative h-32 overflow-hidden rounded-xl bg-gray-900">
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center">
        <div className="flex animate-carousel">
          {/* First set of items */}
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`first-${index}`}
                className="tech-item flex flex-col items-center justify-center flex-shrink-0 w-32 cursor-pointer"
              >
                <Icon size={tech.size} className={tech.color} />
                <span className={`text-sm mt-2 ${tech.color}`}>
                  {tech.name}
                </span>
              </div>
            );
          })}
          {/* Duplicate set for seamless loop */}
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`second-${index}`}
                className="tech-item flex flex-col items-center justify-center flex-shrink-0 w-32 cursor-pointer"
              >
                <Icon size={tech.size} className={tech.color} />
                <span className={`text-sm mt-2 ${tech.color}`}>
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechCarousel;