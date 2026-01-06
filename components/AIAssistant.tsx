
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o estrategista da TheVision. Como posso transformar sua visão em um produto digital de elite hoje?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await getAIResponse(inputValue, messages);
      const aiMsg: Message = { role: 'model', text: responseText };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '258835127350';
    const lastUserMsg = messages.filter(m => m.role === 'user').pop()?.text || "Gostaria de um orçamento.";
    const text = `Olá! Estava conversando com seu assistente de IA da TheVision sobre meu projeto: "${lastUserMsg.substring(0, 100)}" e gostaria de falar com um especialista sobre preços e prazos.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-90 ${isOpen ? 'bg-slate-800 text-white' : 'bg-cyan-500 text-slate-950 shadow-cyan-500/30'}`}
        aria-label="Abrir Assistente de IA"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-brain-circuit'} text-2xl`}></i>
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[420px] h-[600px] glass rounded-[2.5rem] flex flex-col shadow-2xl border border-white/10 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="bg-gradient-to-r from-cyan-600 to-emerald-600 p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center border border-white/30">
                <i className="fas fa-microchip text-xl text-white"></i>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 border-4 border-cyan-600 rounded-full"></span>
              </div>
              <div>
                <h3 className="font-black text-sm tracking-tight text-white">Estrategista TheVision</h3>
                <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">IA Conectada</p>
              </div>
            </div>
            <button 
              onClick={openWhatsApp} 
              title="Falar com especialista"
              className="w-10 h-10 rounded-xl bg-emerald-500 hover:bg-white text-white hover:text-emerald-600 flex items-center justify-center transition-all shadow-lg animate-pulse" 
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-slate-950/40">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-cyan-600 text-slate-950 font-medium shadow-lg shadow-cyan-600/10' : 'bg-slate-800 text-slate-100 border border-white/5'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-4 rounded-2xl text-sm italic opacity-70 flex gap-2 items-center border border-white/5">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 bg-slate-900 border-t border-white/5">
            <div className="flex gap-3">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Dúvidas sobre seu site?"
                className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder:text-slate-600"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 p-2 rounded-xl w-14 h-14 flex items-center justify-center disabled:opacity-30 transition-all transform active:scale-90 shadow-lg shadow-cyan-500/20"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p className="text-[9px] text-center text-slate-600 mt-4 font-bold uppercase tracking-widest">
              Para orçamentos detalhados, use o botão WhatsApp acima.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
