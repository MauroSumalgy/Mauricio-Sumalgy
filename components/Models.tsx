
import React from 'react';

export const websiteModels = [
  {
    id: 'landing',
    title: 'Landing Page Express',
    price: 'A partir de 15.000 MT',
    specs: [
      'Design Single Page de Alta Conversão',
      'Otimização Extrema (Core Web Vitals)',
      'Integração direta com WhatsApp/E-mail',
      'SEO Básico e Responsividade Total',
      'Hospedagem em CDN Global'
    ],
    icon: 'fa-rocket',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'corporate',
    title: 'Corporate Pro',
    price: 'A partir de 35.000 MT',
    specs: [
      'Site Multi-páginas Institucional',
      'Painel de Gestão de Conteúdo (CMS)',
      'Blog Integrado e SEO Avançado',
      'Análise de Tráfego (Google Analytics)',
      'E-mails Corporativos Inclusos'
    ],
    icon: 'fa-building',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Advanced',
    price: 'Sob Consulta',
    specs: [
      'Catálogo de Produtos Ilimitado',
      'Carrinho de Compras e Checkout Seguro',
      'Gestão de Estoque e Pedidos',
      'Integração com Gateways de Pagamento',
      'Painel Administrativo Robusto'
    ],
    icon: 'fa-shopping-bag',
    color: 'from-orange-500 to-red-500'
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
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Escolha seu Modelo</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Especificações Técnicas</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">Desenvolvemos cada projeto com as tecnologias mais modernas do mercado, garantindo velocidade e segurança.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {websiteModels.map((model) => (
            <div key={model.id} className="glass rounded-[2rem] p-8 border border-white/5 flex flex-col hover:border-blue-500/30 transition-all duration-500 group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${model.color} flex items-center justify-center mb-8 shadow-lg shadow-blue-500/10`}>
                <i className={`fas ${model.icon} text-white text-2xl`}></i>
              </div>
              
              <h4 className="text-2xl font-bold mb-2">{model.title}</h4>
              <p className="text-blue-400 font-mono text-sm mb-6">{model.price}</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {model.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <i className="fas fa-check-circle text-blue-500 mt-1"></i>
                    {spec}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => onSelect(model.title)}
                className="w-full py-4 bg-slate-900 border border-white/10 rounded-xl font-bold hover:bg-white hover:text-slate-950 transition-all text-center block text-white hover:shadow-xl"
              >
                Selecionar Modelo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
