
import React from 'react';

const services = [
  {
    icon: 'fa-laptop-code',
    title: 'Websites Premium',
    description: 'De Landing Pages a portais complexos, focados na identidade e nos objetivos do seu negócio.'
  },
  {
    icon: 'fa-brain',
    title: 'Sistemas com IA',
    description: 'Automatize processos e encante clientes com agentes inteligentes integrados diretamente no seu site.'
  },
  {
    icon: 'fa-rocket',
    title: 'Performance 90+',
    description: 'Sites que carregam em menos de 1 segundo. Mais velocidade significa mais vendas e melhor SEO.'
  },
  {
    icon: 'fa-mobile-screen',
    title: 'Mobile First',
    description: 'O seu site brilhará em smartphones, tablets e desktops com uma experiência fluida e nativa.'
  },
  {
    icon: 'fa-cart-shopping',
    title: 'E-commerce Moderno',
    description: 'Lojas virtuais completas com gestão de estoque e pagamentos integrados para vender 24/7.'
  },
  {
    icon: 'fa-shield-halved',
    title: 'Segurança & Suporte',
    description: 'Monitoramento contínuo, backups e proteção contra ataques para sua tranquilidade total.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-cyan-500 font-black tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4">Especialidades</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 leading-tight">Soluções para a <br /><span className="text-slate-500">Era Digital</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="glass p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] group hover:bg-cyan-600/10 transition-all duration-500 border border-white/5 hover:border-cyan-500/30">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-500/10 rounded-[1.25rem] flex items-center justify-center mb-6 sm:mb-8 group-hover:bg-cyan-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <i className={`fas ${s.icon} text-xl sm:text-2xl text-cyan-500 group-hover:text-white`}></i>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors">{s.title}</h4>
              <p className="text-slate-400 leading-relaxed text-base sm:text-lg">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
