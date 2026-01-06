
import React from 'react';

export const websiteModels = [
  {
    id: 'linkbio',
    title: 'Link Bio Profissional',
    price: 'A partir de 5.000 MT',
    specs: ['Otimizado Instagram', 'Mobile-First', 'Alta Conversão'],
    icon: 'fa-link',
    color: 'from-cyan-500 to-emerald-500'
  },
  {
    id: 'landing',
    title: 'Landing Page Express',
    price: 'A partir de 15.000 MT',
    specs: ['Design Elite', 'Performance 90+', 'Foco em Vendas'],
    icon: 'fa-rocket',
    color: 'from-cyan-400 to-emerald-400'
  },
  {
    id: 'portfolio-cre',
    title: 'Portfolio Criativo',
    price: 'A partir de 20.000 MT',
    specs: ['Galeria HD', 'Impacto Visual', 'Clean Design'],
    icon: 'fa-palette',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'onepage',
    title: 'One Page Business',
    price: 'A partir de 25.000 MT',
    specs: ['Tudo em 1 Página', 'Mapa & Contato', 'Navegação Suave'],
    icon: 'fa-briefcase',
    color: 'from-amber-500 to-cyan-500'
  },
  {
    id: 'corporate',
    title: 'Corporate Pro',
    price: 'A partir de 35.000 MT',
    specs: ['Site Multi-página', 'Painel CMS', 'SEO Avançado'],
    icon: 'fa-building',
    color: 'from-cyan-600 to-indigo-600'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Advanced',
    price: 'Sob Consulta',
    specs: ['Vendas 24/7', 'Checkout Seguro', 'Gestão Total'],
    icon: 'fa-shopping-bag',
    color: 'from-emerald-600 to-cyan-700'
  }
];

interface ModelsProps {
  onSelect: (model: string) => void;
}

const Models: React.FC<ModelsProps> = ({ onSelect }) => {
  return (
    <section id="modelos" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 font-black tracking-[0.3em] uppercase text-[10px] mb-4">Planos & Modelos</h2>
          <h3 className="text-4xl sm:text-6xl font-black mb-6 tracking-tighter">Estruturas de <span className="gradient-text">Alto Nível</span></h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteModels.map((model) => (
            <div key={model.id} className="glass rounded-[2.5rem] p-8 border border-white/5 flex flex-col group hover:border-cyan-500/40 transition-all duration-500">
              <div className="flex justify-between items-start mb-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${model.color} flex items-center justify-center shadow-lg shadow-cyan-500/10`}>
                  <i className={`fas ${model.icon} text-white text-xl`}></i>
                </div>
                <div className="text-right">
                  <p className="text-cyan-400 font-black text-xs uppercase tracking-tighter">{model.price}</p>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold mb-6">{model.title}</h4>
              
              <ul className="space-y-4 mb-10 flex-1">
                {model.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <i className="fas fa-check text-cyan-500/50 text-[10px]"></i>
                    {spec}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => onSelect(model.title)}
                className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-cyan-500 hover:text-slate-950 transition-all active:scale-[0.98]"
              >
                Selecionar Este
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
