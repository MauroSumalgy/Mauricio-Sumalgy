
import React, { useState } from 'react';

const fullProjects = [
  {
    title: 'Nexus Finance Dashboard',
    category: 'Fintech / SaaS',
    year: '2024',
    metrics: { speed: '0.4s', conversion: '+140%', seo: '100' },
    tags: ['React', 'D3.js', 'Node.js'],
    description: 'Plataforma de análise preditiva para o mercado financeiro com processamento de dados em tempo real.',
    icon: 'fa-chart-pie'
  },
  {
    title: 'Aura Luxury Retail',
    category: 'E-commerce',
    year: '2023',
    metrics: { speed: '0.6s', conversion: '+85%', seo: '98' },
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    description: 'Experiência de compra imersiva focada em marcas de alto padrão com checkout em uma única etapa.',
    icon: 'fa-gem'
  },
  {
    title: 'Quantum Cloud App',
    category: 'Infrastructure',
    year: '2024',
    metrics: { speed: '0.3s', conversion: '+200%', seo: '95' },
    tags: ['Go', 'TypeScript', 'Docker'],
    description: 'Interface de gerenciamento de clusters com visualizações complexas e baixa latência.',
    icon: 'fa-microchip'
  },
  {
    title: 'Pulse Medical Portal',
    category: 'Healthcare',
    year: '2023',
    metrics: { speed: '0.7s', conversion: '+50%', seo: '100' },
    tags: ['React', 'Firebase', 'Encryption'],
    description: 'Sistema seguro para agendamentos e telemedicina com conformidade total de privacidade.',
    icon: 'fa-heart-pulse'
  }
];

interface PortfolioPageProps {
  onBack: () => void;
  onContact: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBack, onContact }) => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'SaaS', 'E-commerce', 'Healthcare'];

  const filteredProjects = filter === 'Todos' 
    ? fullProjects 
    : fullProjects.filter(p => p.category.includes(filter));

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
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${filter === cat ? 'bg-cyan-500 text-slate-950 border-cyan-500 shadow-lg shadow-cyan-500/20' : 'border-white/10 text-slate-500 hover:border-white/30'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((p, idx) => (
            <div key={idx} className="glass p-10 rounded-[3rem] border border-white/5 group hover:border-cyan-500/30 transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-cyan-600/10 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-500">
                  <i className={`fas ${p.icon} text-2xl`}></i>
                </div>
                <span className="text-slate-600 font-mono text-xs">{p.year}</span>
              </div>

              <div className="mb-8">
                <p className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">{p.category}</p>
                <h3 className="text-3xl font-bold mb-4">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg max-w-md">{p.description}</p>
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
        <div className="mt-24 p-12 glass rounded-[3rem] border border-cyan-500/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl"></div>
          <h2 className="text-4xl font-black mb-6 relative z-10">Pronto para criar seu próximo <span className="gradient-text">Case de Sucesso?</span></h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto relative z-10">Não construímos apenas sites. Construímos ativos digitais que geram receita e autoridade.</p>
          <button 
            onClick={onContact}
            className="px-12 py-5 bg-cyan-500 hover:bg-white text-slate-950 rounded-2xl font-black text-lg transition-all shadow-xl shadow-cyan-500/20 relative z-10 transform active:scale-95"
          >
            Configurar meu Projeto
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
