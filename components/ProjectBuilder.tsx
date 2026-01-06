
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
    description: '',
  });

  const [features, setFeatures] = useState<string[]>([]);

  const featureOptions = [
    'Pagamentos Online',
    'Área de Membros / Login',
    'Blog / Notícias',
    'Chat em Tempo Real',
    'Dashboard Administrativo',
    'SEO Avançado',
    'Multilingue (Vários Idiomas)',
    'Integração com CRM',
    'Agendamento Online',
    'Galeria de Fotos/Vídeos'
  ];

  const toggleFeature = (feature: string) => {
    setFeatures(prev => 
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '258835127350';
    const text = `*🚀 NOVA SOLICITAÇÃO DETALHADA - DEVVISION*%0A%0A` +
                 `👤 *Cliente:* ${formData.name}%0A` +
                 `📧 *E-mail:* ${formData.email}%0A` +
                 `📁 *Projeto:* ${formData.projectName}%0A` +
                 `💻 *Modelo Base:* ${formData.model}%0A%0A` +
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
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-sm">1</span>
              Informações Básicas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Seu Nome</label>
                <input 
                  required
                  type="text"
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all"
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
                  className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all"
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
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all"
                value={formData.projectName}
                onChange={e => setFormData({...formData, projectName: e.target.value})}
                placeholder="Ex: Minha Nova Loja Online"
              />
            </div>
          </div>

          {/* Sessão 2: Funcionalidades */}
          <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-sm">2</span>
              Funcionalidades do Site
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featureOptions.map(feature => (
                <button
                  key={feature}
                  type="button"
                  onClick={() => toggleFeature(feature)}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all text-sm font-medium ${
                    features.includes(feature) 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/20' 
                    : 'bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/20'
                  }`}
                >
                  {feature}
                  {features.includes(feature) ? <i className="fas fa-check-circle"></i> : <i className="far fa-circle opacity-30"></i>}
                </button>
              ))}
            </div>
          </div>

          {/* Sessão 3: Modelo e Detalhes */}
          <div className="glass p-8 rounded-[2rem] border border-white/5 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-sm">3</span>
              Modelo e Descrição
            </h3>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Modelo de Referência</label>
              <select 
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all text-white"
                value={formData.model}
                onChange={e => setFormData({...formData, model: e.target.value})}
              >
                <option>Landing Page Express</option>
                <option>Corporate Pro</option>
                <option>E-commerce Advanced</option>
                <option>Custom SaaS/App</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Descrição Detalhada do Objetivo</label>
              <textarea 
                rows={5}
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all text-white resize-none"
                placeholder="Descreva o que seu site precisa fazer, quem é o público-alvo e quais referências você gosta..."
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <button 
              type="submit"
              className="w-full md:w-auto px-12 py-5 bg-white text-slate-950 font-black text-xl rounded-2xl hover:bg-blue-500 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-4 transform active:scale-95"
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
