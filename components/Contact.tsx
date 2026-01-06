
import React, { useState } from 'react';
import { websiteModels } from './Models';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Landing Page Express',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '258835127350';
    const text = `*NOVA SOLICITAÇÃO - THEVISION*%0A%0A` +
                 `👤 *Nome:* ${formData.name}%0A` +
                 `📧 *E-mail:* ${formData.email}%0A` +
                 `💻 *Modelo Escolhido:* ${formData.type}%0A%0A` +
                 `📝 *Mensagem:*%0A${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto glass rounded-[3rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row shadow-2xl">
          {/* Info Side */}
          <div className="lg:w-2/5 bg-gradient-to-br from-cyan-600 to-emerald-700 p-12 text-white relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-4xl font-extrabold mb-8 relative z-10 leading-tight">Solicite seu <br />Orçamento</h3>
            <p className="text-white/80 mb-12 text-lg relative z-10">
              Escolha um modelo e preencha os dados. Nossa equipe técnica entrará em contato via WhatsApp em poucos minutos.
            </p>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-md">
                  <i className="fab fa-whatsapp text-2xl"></i>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Atendimento Direto</p>
                  <p className="font-bold text-lg">+258 83 512 7350</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-md">
                  <i className="fas fa-clock text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Disponibilidade</p>
                  <p className="font-bold">Segunda à Sexta, 8h às 18h</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/10">
              <p className="text-sm text-white/60 mb-4 italic">"Transformando tecnologia em resultados reais para o seu negócio."</p>
              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/maur%C3%ADcio-sumalgy-tecnico-120545344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/mauricio.sumalgy_thevision?igsh=bnUwa2dzbmRpNHJv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 bg-slate-950/40">
            <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Seu Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-slate-600" 
                    placeholder="Nome completo" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Seu Melhor E-mail</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-slate-600" 
                    placeholder="exemplo@email.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Modelo de Site Desejado</label>
                <div className="relative">
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-500 transition-all appearance-none text-white cursor-pointer"
                  >
                    {websiteModels.map(m => (
                      <option key={m.id} value={m.title}>{m.title}</option>
                    ))}
                    <option value="Personalizado / Outro">Personalizado / Outro Sistema</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Descrição do Projeto</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full bg-slate-900 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-slate-600 resize-none" 
                  placeholder="Quais as funcionalidades principais? Qual o seu objetivo?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-cyan-500 text-slate-950 hover:bg-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-cyan-500/10 transition-all transform active:scale-[0.98] flex items-center justify-center gap-3"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                SOLICITAR ORÇAMENTO AGORA
              </button>
              
              <p className="text-center text-slate-600 text-[10px] uppercase tracking-widest font-bold">
                Seguro • Direto • Profissional
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
