
import React from 'react';

export const websiteModels = [
  {
    id: 'linkbio',
    title: 'Link Bio Profissional',
    price: 'A partir de 5.000 MT',
    specs: [
      'Otimizado para Instagram/TikTok',
      'Design Mobile-First Radical',
      'Botões de Ação Estratégicos',
      'Analytics de Cliques Integrado',
      'Carregamento Instantâneo'
    ],
    icon: 'fa-link',
    color: 'from-cyan-500 to-emerald-500'
  },
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
    color: 'from-cyan-400 to-emerald-400'
  },
  {
    id: 'portfolio-cre',
    title: 'Portfolio Criativo',
    price: 'A partir de 20.000 MT',
    specs: [
      'Foco Total em Impacto Visual',
      'Galeria de Projetos Interativa',
      'Página Sobre Mim / Currículo',
      'Formulário de Contato Direto',
      'Otimização para Imagens HD'
    ],
    icon: 'fa-palette',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'onepage',
    title: 'One Page Business',
    price: 'A partir de 25.000 MT',
    specs: [
      'Toda a Empresa em uma Única Página',
      'Seções de Serviços, Equipe e FAQ',
      'Navegação Suave (Anchor Links)',
      'Google Maps Integrado',
      'CTA Fixo no Rodapé Mobile'
    ],
    icon: 'fa-briefcase',
    color: 'from-amber-500 to-cyan-500'
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
    color: 'from-cyan-600 to-indigo-600'
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
          <h2 className="text-cyan-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">Escolha seu Modelo</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Arquiteturas <span className="text-slate-500">Sob Medida</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto">Desenvolvemos cada projeto com as tecnologias mais modernas do mercado, garantindo velocidade e segurança.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteModels.map((model) => (
            <div key={model.id} className="glass rounded-[2rem] p-8 border border-white/5 flex flex-col hover:border-cyan-500/30 transition-all duration-500 group">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${model.color} flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/10`}>
                <i className={`fas ${model.icon} text-white text-2xl`}></i>
              </div>
              
              <h4 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{model.title}</h4>
              <p className="text-cyan-500 font-mono text-xs mb-6 font-bold">{model.price}</p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {model.specs.map((spec, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <i className="fas fa-check-circle text-cyan-500 mt-1"></i>
                    {spec}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => onSelect(model.title)}
                className="w-full py-4 bg-slate-900 border border-white/10 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-cyan-500 hover:text-slate-950 transition-all text-center block text-white hover:shadow-xl transform active:scale-[0.98]"
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
