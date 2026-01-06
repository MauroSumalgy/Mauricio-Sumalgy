
import React, { useState } from 'react';

interface ProjectBuilderProps {
  onClose: () => void;
  initialModel: string | null;
}

const ProjectBuilder: React.FC<ProjectBuilderProps> = ({ onClose, initialModel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectName: '',
    model: initialModel || 'Landing Page Express',
    style: 'Minimalista',
    description: '',
  });

  const [features, setFeatures] = useState<string[]>([]);

  const styleOptions = [
    { id: 'minimalist', name: 'Minimalista', desc: 'Foco em tipografia e espaços limpos', icon: 'fa-feather' },
    { id: 'modern', name: 'Moderno / Tech', desc: 'Glassmorphism, gradientes e neon', icon: 'fa-microchip' },
    { id: 'luxury', name: 'Elegante / Luxo', desc: 'Sóbrio, premium e tipografia serifada', icon: 'fa-crown' },
    { id: 'bold', name: 'Criativo / Bold', desc: 'Cores vibrantes e layouts dinâmicos', icon: 'fa-wand-magic-sparkles' },
    { id: 'corporate', name: 'Corporativo', desc: 'Sólido, estruturado e profissional', icon: 'fa-briefcase' }
  ];

  const featureOptions = [
    'Pagamentos Online',
    'Área de Membros / Login',
    'Blog / Notícias',
    'Chat em Tempo Real',
    'Dashboard Administrativo',
    'SEO Avançado',
    'Multilingue (Idiomas)',
    'Integração com CRM',
    'Agendamento Online',
    'Galeria de Fotos/Vídeos',
    'Dark / Light Mode',
    'Feed do Instagram Vivo',
    'FAQ Inteligente',
    'Busca Interna no Site',
    'Mapa Interativo (Google)',
    'Botão de Chamada Direta',
    'Newsletter / E-mail Marketing',
    'Pop-up de Promoção'
  ];

  const toggleFeature = (feature: string) => {
    setFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '258835127350';
    const text = `*🚀 NOVA SOLICITAÇÃO DETALHADA - THEVISION*%0A%0A` +
                 `👤 *Cliente:* ${formData.name}%0A` +
                 `📧 *E-mail:* ${formData.email}%0A` +
                 `📁 *Projeto:* ${formData.projectName}%0A` +
                 `💻 *Modelo Base:* ${formData.model}%0A` +
                 `🎨 *Estilo Visual:* ${formData.style}%0A%0A` +
                 `⚙️ *Funcionalidades Desejadas:*%0A${features.length > 0 ? features.map(f => `• ${f}`).join('%0A') : 'Nenhuma selecionada'}%0A%0A` +
                 `📝 *Detalhes Adicionais:*%0A${formData.description}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-6 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onClose}
          className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest"
        >
          <i className="fas fa-arrow-left"></i> Voltar para o site
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Detalhamento do <span className="gradient-text">Projeto</span></h1>
          <p className="text-slate-400">Personalize cada detalhe do seu site para receber um orçamento preciso.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Sessão 1: Básico */}
          <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-sm">1</span>
              Informações Básicas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Seu Nome</label>
                <input 
                  required
                  type="text"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-all"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="Ex: João Silva"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">E-mail de Contato</label>
                <input 
                  required
                  type="email"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-all"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  placeholder="joao@empresa.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Nome do Projeto / Empresa</label>
              <input 
                required
                type="text"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-all"
                value={formData.projectName}
                onChange={e => setFormData({...formData, projectName: e.target.value})}
                placeholder="Ex: Minha Nova Loja Online"
              />
            </div>
          </div>

          {/* Sessão 2: Estilo Visual */}
          <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-sm">2</span>
              Estilo Visual do Site
            </h3>
            <p className="text-slate-500 text-sm">Como você quer que seu site se pareça para os seus clientes?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {styleOptions.map(style => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => setFormData({...formData, style: style.name})}
                  className={`flex flex-col items-start p-5 rounded-2xl border transition-all text-left ${
                    formData.style === style.name 
                    ? 'bg-cyan-600/20 border-cyan-500 shadow-lg shadow-cyan-600/10' 
                    : 'bg-slate-900/50 border-white/5 hover:border-white/20'
                  }`}
                >
                  <i className={`fas ${style.icon} mb-4 text-xl ${formData.style === style.name ? 'text-cyan-400' : 'text-slate-600'}`}></i>
                  <span className={`text-xs font-black uppercase tracking-widest mb-1 ${formData.style === style.name ? 'text-white' : 'text-slate-400'}`}>{style.name}</span>
                  <span className="text-[10px] text-slate-500 leading-tight">{style.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sessão 3: Funcionalidades */}
          <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-sm">3</span>
              Funcionalidades do Site
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {featureOptions.map(feature => (
                <button
                  key={feature}
                  type="button"
                  onClick={() => toggleFeature(feature)}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all text-[11px] font-bold uppercase tracking-wider ${
                    features.includes(feature) 
                    ? 'bg-cyan-600 border-cyan-500 text-white shadow-lg shadow-cyan-600/20' 
                    : 'bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  <span className="truncate mr-2">{feature}</span>
                  {features.includes(feature) ? <i className="fas fa-check-circle flex-shrink-0"></i> : <i className="far fa-circle opacity-30 flex-shrink-0"></i>}
                </button>
              ))}
            </div>
          </div>

          {/* Sessão 4: Modelo e Detalhes */}
          <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-sm">4</span>
              Modelo e Descrição
            </h3>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Modelo de Referência</label>
              <select 
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-all text-white"
                value={formData.model}
                onChange={e => setFormData({...formData, model: e.target.value})}
              >
                <option>Link Bio Profissional</option>
                <option>Landing Page Express</option>
                <option>Portfolio Criativo</option>
                <option>One Page Business</option>
                <option>Corporate Pro</option>
                <option>E-commerce Advanced</option>
                <option>Custom SaaS/App</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Descrição Detalhada do Objetivo</label>
              <textarea 
                rows={5}
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-all text-white resize-none"
                placeholder="Descreva o que seu site precisa fazer, quem é o público-alvo e quais referências você gosta..."
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button 
              type="submit"
              className="w-full md:w-auto px-12 py-5 bg-white text-slate-950 font-black text-xl rounded-2xl hover:bg-cyan-500 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-4 transform active:scale-95"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              FINALIZAR E ENVIAR SOLICITAÇÃO
            </button>
            <p className="text-slate-500 text-sm font-medium">Ao clicar, você enviará todos os dados acima para o desenvolvedor via WhatsApp.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectBuilder;
