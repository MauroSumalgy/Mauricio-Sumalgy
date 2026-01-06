
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">D</div>
            <span className="text-xl font-bold tracking-tight">DevVision</span>
          </div>
          
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} DevVision Solutions. Todos os direitos reservados.
          </div>
          
          <div className="flex gap-8 text-sm text-slate-400">
            <a href="#" className="hover:text-blue-500 transition-colors">Termos</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Privacidade</a>
            <a href="#contato" className="hover:text-blue-500 transition-colors">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
