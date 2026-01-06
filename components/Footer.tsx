
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/thevision-logo.png" 
                alt="TheVision Logo" 
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  (e.target as any).style.display = 'none';
                  (e.target as any).nextSibling.style.display = 'flex';
                }}
              />
              <div style={{display: 'none'}} className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center font-bold">T</div>
              <span className="text-2xl font-black tracking-tighter">TheVision</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left leading-relaxed">
              Desenvolvendo o futuro da web através de design consciente e tecnologia de ponta.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-10 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <a href="#" className="hover:text-cyan-400 transition-colors">Termos</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacidade</a>
              <a href="#contato" className="hover:text-cyan-400 transition-colors">Suporte</a>
            </div>
            <div className="text-slate-600 text-xs font-medium">
              © {new Date().getFullYear()} TheVision Solutions. Moçambique para o Mundo.
            </div>
          </div>
          
          <div className="flex gap-4">
            <a href="https://wa.me/258835127350" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
              <i className="fab fa-whatsapp text-xl"></i>
            </a>
            <a href="https://www.instagram.com/mauricio.sumalgy_thevision?igsh=bnUwa2dzbmRpNHJv" target="_blank" rel="noopener noreferrer" title="Instagram" className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/maur%C3%ADcio-sumalgy-tecnico-120545344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
