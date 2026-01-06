
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onSolicitar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSolicitar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Modelos', href: '#modelos' },
    { name: 'Cases', href: '#portfolio' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-slate-950/90 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-blue-600/20 group-hover:rotate-6 transition-transform text-white">D</div>
          <span className="text-2xl font-black tracking-tighter text-white">Dev<span className="text-blue-500">Vision</span></span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <button 
            onClick={onSolicitar}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 transform hover:scale-105 active:scale-95"
          >
            Solicitar
          </button>
        </div>
        
        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl text-slate-300 focus:outline-none"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-white/5 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold text-slate-300 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
                setIsMenuOpen(false);
                onSolicitar();
            }}
            className="bg-blue-600 text-white px-6 py-4 rounded-2xl text-center font-black uppercase tracking-widest shadow-lg shadow-blue-600/20"
          >
            Solicitar Orçamento
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
