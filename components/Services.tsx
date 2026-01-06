
import React from 'react';

const services = [
  {
    icon: 'fa-laptop-code',
    title: 'Websites Exclusivos',
    description: 'Desenvolvimento de sites personalizados com foco em conversão e identidade visual única.'
  },
  {
    icon: 'fa-mobile-alt',
    title: 'Mobile First',
    description: 'Interfaces responsivas que garantem uma experiência perfeita em qualquer dispositivo.'
  },
  {
    icon: 'fa-rocket',
    title: 'Alta Performance',
    description: 'Otimização de velocidade e SEO técnico para que seu site seja encontrado e carregue instantaneamente.'
  },
  {
    icon: 'fa-shopping-cart',
    title: 'E-commerce',
    description: 'Soluções completas de vendas online, integrando pagamentos e gestão de estoque.'
  },
  {
    icon: 'fa-brain',
    title: 'Integração IA',
    description: 'Implementação de chatbots inteligentes e automações usando modelos avançados como Gemini.'
  },
  {
    icon: 'fa-shield-alt',
    title: 'Manutenção & Segurança',
    description: 'Suporte contínuo para manter seu sistema seguro, atualizado e funcionando 24/7.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">O que fazemos</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold">Serviços que Impulsionam Negócios</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="glass p-8 rounded-3xl group hover:bg-blue-600/5 transition-all duration-300 border border-white/5 hover:border-blue-500/20">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <i className={`fas ${s.icon} text-2xl text-blue-500 group-hover:text-white`}></i>
              </div>
              <h4 className="text-xl font-bold mb-4">{s.title}</h4>
              <p className="text-slate-400 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
