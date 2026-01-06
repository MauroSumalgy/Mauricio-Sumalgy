
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
    { id: 'minimalist', name: 'Minimalista', desc: 'Foco em tipografia limpa', icon: 'fa-feather' },
    { id: 'modern', name: 'Moderno / Tech', desc: 'Gradientes e neon', icon: 'fa-microchip' },
    { id: 'luxury', name: 'Elegante / Luxo', desc: 'Sóbrio e premium', icon: 'fa-crown' },
    { id: 'bold', name: 'Criativo / Bold', desc: 'Cores vibrantes', icon: 'fa-wand-magic-sparkles' },
    { id: 'corporate', name: 'Corporativo', desc: 'Sólido e profissional', icon: 'fa-briefcase' }
  ];

  const featureOptions = [
    'Pagamentos Online',
    'Área de Membros',
    'Blog / Notícias',
    'Chat em Tempo Real',
    'SEO Avançado',
    'Agendamento Online',
    'Galeria HD',
    'Botão de Chamada',
    'Newsletter'
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
                 `📁 *Projeto:* ${formData.projectName}%0A` +
                 `💻 *Modelo Base:* ${formData.model}%0A` +
                 `🎨 *Estilo:* ${formData.style}%0A%0A` +
                 `⚙️ *Funcionalidades:*%0A${features.length > 0 ? features.map(f => `• ${f}`).join('%0A') : 'Nenhuma'}%0A%0A` +
                 `📝 *Detalhes:*%0A${formData.description}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 py-8 sm:py-12 px-4 sm:px-6 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onClose}
          className="mb-6 sm:mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold uppercase text-[10px] sm:text-xs tracking-widest"
        >
          <i className="fas fa-arrow-left"></i> Voltar
        </button>

        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-black mb-3 sm:mb-4">Seu <span className="gradient-text">Projeto</span></h1>
          <p className="text-slate-400 text-sm">Personalize os detalhes para seu orçamento.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-10">
          {/* Sessão 1: Básico */}
          <div className="glass p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 space-y-6">
            <h3 className="text-lg sm:text-xl font-bold flex items-center gap-3">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-xs sm:text-sm text-white font-black">1</span>
              Básico
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Seu Nome</label>
                <input 
                  required
                  type="text"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-all text-sm"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder="Nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">E-mail</label>
                <input 
                  required
                  type="email"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-all text-sm"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Empresa / Projeto</label>
              <input 
                required
                type="text"
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 outline-none transition-all text-sm"
                value={formData.projectName}
                onChange={e => setFormData({...formData, projectName: e.target.value})}
                placeholder="Ex: Minha Empresa"
              />
            </div>
          </div>

          {/* Sessão 2: Estilo Visual */}
          <div className="glass p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 space-y-6">
            <h3 className="text-lg sm:text-xl font-bold flex items-center gap-3">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-xs sm:text-sm text-white font-black">2</span>
              Estilo
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {styleOptions.map(style => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => setFormData({...formData, style: style.name})}
                  className={`flex flex-col items-start p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all text-left ${
                    formData.style === style.name 
                    ? 'bg-cyan-600/20 border-cyan-500 shadow-lg' 
                    : 'bg-slate-900/50 border-white/5 hover:border-white/20'
                  }`}
                >
                  <i className={`fas ${style.icon} mb-3 text-lg ${formData.style === style.name ? 'text-cyan-400' : 'text-slate-600'}`}></i>
                  <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-1 ${formData.style === style.name ? 'text-white' : 'text-slate-400'}`}>{style.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sessão 3: Funcionalidades */}
          <div className="glass p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 space-y-6">
            <h3 className="text-lg sm:text-xl font-bold flex items-center gap-3">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-xs sm:text-sm text-white font-black">3</span>
              Funcionalidades
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {featureOptions.map(feature => (
                <button
                  key={feature}
                  type="button"
                  onClick={() => toggleFeature(feature)}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${
                    features.includes(feature) 
                    ? 'bg-cyan-600 border-cyan-500 text-white shadow-md' 
                    : 'bg-slate-900/50 border-white/5 text-slate-500'
                  }`}
                >
                  <span className="truncate">{feature}</span>
                  {features.includes(feature) && <i className="fas fa-check-circle ml-2"></i>}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 pt-4">
            <button 
              type="submit"
              className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 font-black text-lg rounded-xl sm:rounded-2xl hover:bg-cyan-500 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-4 transform active:scale-95"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              ENVIAR SOLICITAÇÃO
            </button>
            <p className="text-slate-500 text-[10px] font-medium uppercase tracking-[0.2em] text-center">Resposta rápida garantida.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectBuilder;
