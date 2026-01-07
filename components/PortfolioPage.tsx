
import React, { useState } from 'react';

const fullProjects = [
  {
    title: 'Barba & Arte - Barber Shop',
    category: 'Luxury Services',
    year: '2024',
    metrics: { speed: '0.5s', conversion: '+95%', seo: '100' },
    tags: ['Visagismo IA', 'Agendamento Online', 'E-commerce'],
    description: 'Plataforma completa para barbearia contemporânea, integrando um Consultor de Visagismo por IA que sugere cortes baseados no formato do rosto do cliente.',
    icon: 'fa-scissors'
  },
  {
    title: "L'Arte della Pizza",
    category: 'Gastronomy Premium',
    year: '2024',
    metrics: { speed: '0.4s', conversion: '+110%', seo: '98' },
    tags: ['Pizza Sommelier IA', 'Reservas', 'Menu Digital'],
    description: 'Experiência digital imersiva para restaurante italiano, com um Sommelier de Pizza IA que harmoniza ingredientes e bebidas conforme o humor do cliente.',
    icon: 'fa-pizza-slice'
  },
  {
    title: 'PrecisionAuto',
    category: 'Engineering & Tech',
    year: '2024',
    metrics: { speed: '0.3s', conversion: '+70%', seo: '100' },
    tags: ['Centro Técnico', 'Performance', 'Quote System'],
    description: 'Portal de alta performance para oficina mecânica de precisão, focado em transparência radical de serviços e otimização de fluxo de agendamento.',
    icon: 'fa-gears'
  },
  {
    title: 'Nexus Intelligence',
    category: 'AI Platform / SaaS',
    year: '2024',
    metrics: { speed: '0.4s', conversion: '+140%', seo: '100' },
    tags: ['React', 'D3.js', 'Node.js'],
    description: 'Plataforma de análise preditiva para o mercado financeiro com processamento de dados em tempo real.',
    icon: 'fa-brain'
  }
];

interface PortfolioPageProps {
  onBack: () => void;
  onContact: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBack, onContact }) => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Luxury Services', 'Gastronomy Premium', 'Engineering & Tech', 'AI Platform / SaaS'];

  const filteredProjects = filter === 'Todos' 
    ? fullProjects 
    : fullProjects.filter(p => p.category === filter);

  const driveLink = "https://drive.google.com/drive/folders/1Ocpk17FAjQRainsMbTAioda5lUIZL_B3";

  return (
    <div className="pt-32 pb-24 animate-in fade-in duration-700">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <button 
              onClick={onBack}
              className="text-cyan-500 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2 hover:translate-x-[-4px] transition-transform"
            >
              <i className="fas fa-arrow-left"></i> Voltar
            </button>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Galeria de <span className="gradient-text">Elite</span></h1>
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest transition-all border ${filter === cat ? 'bg-cyan-500 text-slate-950 border-cyan-500 shadow-lg shadow-cyan-500/20' : 'border-white/10 text-slate-500 hover:border-white/30'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <a 
              href={driveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-slate-900 border border-cyan-500/20 rounded-xl hover:border-cyan-500 transition-all shadow-xl"
            >
              <i className="fas fa-folder-open text-cyan-500 group-hover:scale-110 transition-transform"></i>
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Ver Catálogo de Modelos</span>
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((p, idx) => (
            <div key={idx} className="glass p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3rem] border border-white/5 group hover:border-cyan-500/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-cyan-600/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-500">
                  <i className={`fas ${p.icon} text-2xl`}></i>
                </div>
                <span className="text-slate-600 font-mono text-xs">{p.year}</span>
              </div>

              <div className="mb-8">
                <p className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{p.category}</p>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed text-base sm:text-lg max-w-md">{p.description}</p>
              </div>

              {/* Technical Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-white/5">
                <div className="text-center">
                  <p className="text-white font-black text-xl">{p.metrics.speed}</p>
                  <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Speed Index</p>
                </div>
                <div className="text-center">
                  <p className="text-cyan-500 font-black text-xl">{p.metrics.conversion}</p>
                  <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">Conversion</p>
                </div>
                <div className="text-center">
                  <p className="text-white font-black text-xl">{p.metrics.seo}</p>
                  <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest">SEO Score</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-md text-slate-500">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 p-8 sm:p-16 glass rounded-[3rem] border border-cyan-500/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl"></div>
          <h2 className="text-3xl sm:text-5xl font-black mb-6 relative z-10">Seu projeto merece esse <span className="gradient-text">Padrão Elite.</span></h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto relative z-10 text-base sm:text-lg">Não entregamos apenas código. Entregamos autoridade digital e sistemas que vendem sozinhos.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button 
              onClick={onContact}
              className="w-full sm:w-auto px-12 py-5 bg-cyan-500 hover:bg-white text-slate-950 rounded-2xl font-black text-lg transition-all shadow-xl shadow-cyan-500/20 transform active:scale-95"
            >
              Configurar meu Projeto agora
            </button>
            <a 
              href={driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-12 py-5 glass border border-white/10 text-white rounded-2xl font-black text-lg transition-all hover:bg-white/5 transform active:scale-95 flex items-center justify-center gap-3"
            >
              <i className="fas fa-images"></i>
              Ver Todos Modelos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
