
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o consultor da DevVision. Como posso ajudar a estruturar seu novo projeto hoje?' }
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
    const lastMessage = messages[messages.length - 1]?.text || "";
    const text = `Olá! Estava conversando com seu assistente de IA sobre: "${lastMessage.substring(0, 100)}..." e gostaria de formalizar um orçamento.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-90 ${isOpen ? 'bg-slate-800 text-white' : 'bg-blue-600 text-white shadow-blue-600/30'}`}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-comment-dots'} text-2xl`}></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] glass rounded-3xl flex flex-col shadow-2xl border border-white/10 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <i className="fas fa-robot"></i>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-950 rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Consultor DevVision</h3>
                <p className="text-[10px] text-white/70">IA Online • Especialista</p>
              </div>
            </div>
            <button 
              onClick={openWhatsApp} 
              className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center text-white transition-colors" 
              title="Chamar no WhatsApp"
            >
              <i className="fab fa-whatsapp text-xl"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-slate-950/20">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/10' : 'bg-slate-800 text-slate-100 border border-white/5'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-3 rounded-2xl text-sm italic opacity-70 flex gap-2 items-center">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-slate-900 border-t border-white/5">
            {messages.length > 2 && (
              <button 
                onClick={openWhatsApp}
                className="w-full mb-4 bg-green-600 hover:bg-green-700 text-white text-xs font-black py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/10 transform hover:scale-[1.02] active:scale-95"
              >
                <i className="fab fa-whatsapp text-lg"></i> CONTINUAR NO WHATSAPP
              </button>
            )}
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ex: Como criar um e-commerce?"
                className="flex-1 bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white placeholder:text-slate-600"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-xl w-12 h-12 flex items-center justify-center disabled:opacity-30 disabled:hover:bg-blue-600 transition-all transform active:scale-90"
              >
                <i className="fas fa-paper-plane text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
