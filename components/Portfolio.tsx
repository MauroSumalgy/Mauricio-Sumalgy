
import React from 'react';

interface PortfolioProps {
  onSeeMore?: () => void;
}

const projects = [
  {
    title: 'Barba & Arte',
    category: 'Estética Masculina',
    icon: 'fa-scissors',
    color: 'from-amber-600/20 to-transparent'
  },
  {
    title: "L'Arte della Pizza",
    category: 'Gastronomia Premium',
    icon: 'fa-pizza-slice',
    color: 'from-red-600/20 to-transparent'
  },
  {
    title: 'PrecisionAuto',
    category: 'Engenharia Automotiva',
    icon: 'fa-gears',
    color: 'from-orange-600/20 to-transparent'
  }
];

const Portfolio: React.FC<PortfolioProps> = ({ onSeeMore }) => {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="mb-16 sm:mb-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">Cases <span className="text-cyan-500">Premium</span></h2>
            <p className="text-slate-500 font-medium uppercase text-xs tracking-[0.3em]">Resultados reais para negócios de elite.</p>
          </div>
          <div className="h-px flex-1 mx-12 bg-white/5 hidden lg:block"></div>
          {onSeeMore && (
            <button 
              onClick={onSeeMore}
              className="w-full sm:w-auto text-[10px] font-black uppercase tracking-[0.2em] px-8 py-4 border border-white/10 rounded-full hover:bg-white hover:text-slate-950 transition-all"
            >
              Ver Galeria Completa
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((p, idx) => (
            <div key={idx} className="group cursor-pointer" onClick={onSeeMore}>
              <div className={`relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-900 aspect-square mb-6 shadow-2xl transition-all duration-500 group-hover:border-cyan-500/30 flex flex-col items-center justify-center bg-gradient-to-br ${p.color}`}>
                <i className={`fas ${p.icon} text-6xl text-cyan-500/30 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500`}></i>
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[4px]">
                  <span className="px-8 py-3 bg-white text-slate-950 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl">Ver Detalhes</span>
                </div>
              </div>
              <p className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{p.category}</p>
              <h4 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors tracking-tight">{p.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
