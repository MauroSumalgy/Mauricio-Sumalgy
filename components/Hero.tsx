
import React from 'react';

interface HeroProps {
  onStart: () => void;
  onViewCases: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, onViewCases }) => {
  return (
    <section id="home" className="relative pt-48 pb-32 overflow-hidden">
      {/* Luzes de Fundo Ciano/Verde */}
      <div className="absolute top-[-10%] right-[-5%] -z-10 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] -z-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 mb-10 animate-fade-up">
          <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></span>
          <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Pronto para a nova era digital</span>
        </div>

        <h1 className="text-6xl md:text-[8rem] font-black mb-10 tracking-tighter animate-fade-up leading-none">
          Visão Digital. <br />
          <span className="gradient-text">Execução Elite.</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-16 animate-fade-up [animation-delay:200ms] leading-relaxed">
          Onde a estética minimalista encontra a inteligência tecnológica. 
          Criamos plataformas que não apenas existem, mas dominam o mercado.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-up [animation-delay:400ms]">
          <button 
            onClick={onStart}
            className="w-full sm:w-auto px-16 py-7 bg-cyan-500 text-slate-950 hover:bg-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-cyan-500/25 transform hover:-translate-y-1 active:scale-95"
          >
            Iniciar Meu Projeto
          </button>
          <button 
            onClick={onViewCases}
            className="w-full sm:w-auto px-16 py-7 glass rounded-2xl font-black text-lg hover:bg-white/5 transition-all border border-white/10 hover:border-cyan-500/30"
          >
            Ver Cases
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
