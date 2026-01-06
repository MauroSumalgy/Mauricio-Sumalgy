
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Models from './components/Models';
import Portfolio from './components/Portfolio';
import PortfolioPage from './components/PortfolioPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import ProjectBuilder from './components/ProjectBuilder';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'portfolio' | 'builder'>('home');
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const openBuilder = (model?: string) => {
    if (model) setSelectedModel(model);
    setCurrentView('builder');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (view: 'home' | 'portfolio') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'builder') {
    return (
      <div className="min-h-screen bg-slate-950 text-white font-['Inter']">
        <ProjectBuilder onClose={() => navigateTo('home')} initialModel={selectedModel} />
        <AIAssistant />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white font-['Inter'] selection:bg-cyan-500/30">
      <Navbar 
        onSolicitar={() => openBuilder()} 
        onNavigateHome={() => navigateTo('home')}
        onNavigatePortfolio={() => navigateTo('portfolio')}
      />
      <main>
        {currentView === 'home' ? (
          <>
            <Hero onStart={() => openBuilder()} onViewCases={() => navigateTo('portfolio')} />
            <TechStack />
            <Services />
            <Portfolio onSeeMore={() => navigateTo('portfolio')} />
            <Models onSelect={(model) => openBuilder(model)} />
            <Contact />
          </>
        ) : (
          <PortfolioPage onBack={() => navigateTo('home')} onContact={() => openBuilder()} />
        )}
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
