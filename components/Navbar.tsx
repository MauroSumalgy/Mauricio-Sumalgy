
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onSolicitar: () => void;
  onNavigateHome: () => void;
  onNavigatePortfolio: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSolicitar, onNavigateHome, onNavigatePortfolio }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNav = (action: () => void) => {
    setIsMenuOpen(false);
    action();
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-slate-950/90 backdrop-blur-xl py-3 border-b border-cyan-500/10' : 'bg-transparent py-6 sm:py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={onNavigateHome} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center font-black text-white text-xs sm:text-base shadow-lg shadow-cyan-500/20">V</div>
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tighter bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">TheVision</span>
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <button onClick={onNavigatePortfolio} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-400 transition-colors">Portfólio</button>
            <button onClick={onSolicitar} className="bg-cyan-500 text-slate-950 px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-cyan-500/20">Orçamento</button>
          </div>

          {/* Mobile Hamburguer */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[110]"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-slate-950/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          <button 
            onClick={() => handleMobileNav(onNavigateHome)} 
            className="text-4xl font-black tracking-tighter hover:text-cyan-500 transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => handleMobileNav(onNavigatePortfolio)} 
            className="text-4xl font-black tracking-tighter hover:text-cyan-500 transition-colors"
          >
            Portfólio
          </button>
          <button 
            onClick={() => handleMobileNav(onSolicitar)} 
            className="w-full bg-cyan-500 text-slate-950 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-cyan-500/20"
          >
            Solicitar Projeto
          </button>
          
          <div className="mt-12 flex gap-6 text-slate-400">
            <i className="fab fa-instagram text-2xl"></i>
            <i className="fab fa-linkedin text-2xl"></i>
            <i className="fab fa-whatsapp text-2xl"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
