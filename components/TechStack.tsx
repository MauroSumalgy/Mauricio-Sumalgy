
import React from 'react';

const technologies = [
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Next.js', icon: 'fas fa-bolt' },
  { name: 'Tailwind', icon: 'fas fa-wind' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'TypeScript', icon: 'fas fa-code' },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-slate-950/20">
      <div className="container mx-auto px-6 flex flex-wrap justify-center items-center gap-10 md:gap-20 grayscale opacity-40">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex items-center gap-2">
            <i className={`${tech.icon} text-xl`}></i>
            <span className="text-sm font-bold tracking-tight">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
