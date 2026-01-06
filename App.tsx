
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Models from './components/Models';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import ProjectBuilder from './components/ProjectBuilder';

const App: React.FC = () => {
  const [showBuilder, setShowBuilder] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const openBuilder = (model?: string) => {
    if (model) setSelectedModel(model);
    setShowBuilder(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeBuilder = () => {
    setShowBuilder(false);
    setSelectedModel(null);
  };

  if (showBuilder) {
    return (
      <div className="min-h-screen bg-slate-950 text-white font-['Inter']">
        <ProjectBuilder onClose={closeBuilder} initialModel={selectedModel} />
        <AIAssistant />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white font-['Inter']">
      <Navbar onSolicitar={() => openBuilder()} />
      <main>
        <Hero onStart={() => openBuilder()} />
        <Models onSelect={(model) => openBuilder(model)} />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
