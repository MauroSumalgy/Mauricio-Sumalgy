
import React from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const openDirectWhatsApp = () => {
    const phoneNumber = '258835127350';
    const text = "Olá! Gostaria de falar diretamente com um consultor da DevVision sobre um novo projeto.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-10 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          Consultoria Especializada em Moçambique
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tight">
          O Site Perfeito <br />
          <span className="gradient-text">Para Sua Empresa.</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Escolha um modelo de alta performance, consulte nosso especialista em IA e receba seu orçamento direto no WhatsApp.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => onStart()}
            className="group w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3 text-white"
          >
            Começar Projeto 
            <i className="fas fa-rocket text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
          </button>
          <button 
            onClick={openDirectWhatsApp}
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 hover:bg-slate-200 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 transform active:scale-95 shadow-xl"
          >
            Falar no WhatsApp <i className="fab fa-whatsapp text-green-600"></i>
          </button>
        </div>

        <div className="mt-24 relative max-w-5xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass p-4 rounded-[2.5rem] border border-white/10">
            <img 
              src="https://picsum.photos/seed/webdesign/1200/600" 
              alt="Website Showcase" 
              className="rounded-[2rem] w-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
