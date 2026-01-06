
import React from 'react';

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'SaaS / Web App',
    image: 'https://picsum.photos/seed/dash/800/600'
  },
  {
    title: 'E-Shop Pro',
    category: 'E-commerce',
    image: 'https://picsum.photos/seed/shop/800/600'
  },
  {
    title: 'ZenFlow App',
    category: 'Landing Page',
    image: 'https://picsum.photos/seed/zen/800/600'
  }
];

const Portfolio: React.FC = () => {
  const openGithub = () => {
    window.open('https://github.com', '_blank');
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Trabalhos Recentes</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold">Criando Experiências <br /> Digitais de Excelência</h3>
          </div>
          <button 
            onClick={openGithub}
            className="group text-blue-500 font-bold flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            Ver tudo no GitHub 
            <i className="fas fa-external-link-alt text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 shadow-2xl shadow-slate-950">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <i className="fas fa-eye"></i>
                  </div>
                </div>
              </div>
              <p className="text-blue-500 text-sm font-semibold mb-2">{p.category}</p>
              <h4 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{p.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
