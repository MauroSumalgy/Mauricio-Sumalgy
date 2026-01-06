
import React from 'react';

const technologies = [
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Next.js', icon: 'fas fa-bolt' },
  { name: 'Tailwind', icon: 'fas fa-wind' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'TypeScript', icon: 'fas fa-code' },
  { name: 'Google IA', icon: 'fas fa-brain' },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-10 border-y border-white/5 bg-slate-950/40 overflow-hidden">
      <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
        <div className="flex justify-start sm:justify-center items-center gap-10 sm:gap-20 min-w-max sm:min-w-0 py-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center gap-3">
              <i className={`${tech.icon} text-xl sm:text-2xl text-cyan-500`}></i>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
