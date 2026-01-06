
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onSolicitar: () => void;
  onNavigateHome: () => void;
  onNavigatePortfolio: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSolicitar, onNavigateHome, onNavigatePortfolio }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-xl py-3 border-b border-cyan-500/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={onNavigateHome} className="flex items-center gap-4 group">
          <div className="relative">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/thevision-logo.png" 
              alt="TheVision Logo" 
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                // Fallback caso a imagem não carregue
                (e.target as any).style.display = 'none';
                (e.target as any).nextSibling.style.display = 'flex';
              }}
            />
            <div style={{display: 'none'}} className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center font-black text-white">T</div>
          </div>
          <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">TheVision</span>
        </button>
        
        <div className="flex items-center gap-4 sm:gap-10">
          <button 
            onClick={onNavigatePortfolio} 
            className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-400 transition-colors"
          >
            Portfólio
          </button>
          <button 
            onClick={onSolicitar}
            className="bg-cyan-500 text-slate-950 px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            Orçamento
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
