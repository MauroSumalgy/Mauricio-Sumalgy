
import React from 'react';

interface HeroProps {
  onStart: () => void;
  onViewCases: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, onViewCases }) => {
  return (
    <section id="home" className="relative pt-32 sm:pt-56 pb-20 sm:pb-32 overflow-hidden flex min-h-[90vh] items-center">
      {/* Background Orbs */}
      <div className="absolute top-[10%] -left-[10%] -z-10 w-[250px] sm:w-[600px] h-[250px] sm:h-[600px] bg-cyan-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[10%] -right-[10%] -z-10 w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] bg-emerald-600/10 rounded-full blur-[80px]"></div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 sm:mb-12 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-cyan-400">Padrão Elite de Desenvolvimento</span>
        </div>

        <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black mb-6 sm:mb-12 tracking-tighter leading-[0.85] sm:leading-[0.8]">
          Codificando <br />
          <span className="gradient-text">o Amanhã.</span>
        </h1>
        
        <p className="text-slate-400 text-lg sm:text-2xl max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed px-4">
          Unimos <span className="text-white font-bold">Design Radical</span> e <span className="text-white font-bold">Engenharia de Performance</span> para marcas que não aceitam o comum.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto">
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-10 sm:px-14 py-5 sm:py-6 bg-cyan-500 text-slate-950 hover:bg-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-cyan-500/30 transform active:scale-95"
          >
            Iniciar Projeto
          </button>
          <button 
            onClick={onViewCases}
            className="w-full sm:w-auto px-10 sm:px-14 py-5 sm:py-6 glass border border-white/10 rounded-2xl font-black text-lg hover:bg-white/5 transition-all transform active:scale-95"
          >
            Explorar Cases
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
