
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (userMessage: string, history: Message[]) => {
  try {
    const chat = ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: `Você é o Consultor Estratégico da DevVision. 
        Seu objetivo exclusivo é ajudar clientes a escolherem o modelo de site ideal para o negócio deles.
        Nossos modelos principais são:
        1. Landing Page Express: Foco em conversão única, 1 página, SEO otimizado.
        2. Corporate Pro: Sites institucionais completos, CMS, Blog, Multi-páginas.
        3. E-commerce Advanced: Lojas virtuais com gestão de estoque e pagamentos.
        4. Custom SaaS/App: Sistemas sob medida com banco de dados e lógica complexa.

        Ajude o usuário a entender as especificações técnicas (Next.js, Tailwind, Performance Score 90+, etc).
        Sempre que o usuário demonstrar interesse em um orçamento, peça para ele clicar no botão "Enviar via WhatsApp" ou finalize a conversa direcionando-o para o número +258 83 512 7350.
        Seja técnico, persuasivo e profissional.`,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    const result = await chat;
    return result.text || "Desculpe, tive um problema técnico. Pode repetir?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro. Por favor, tente novamente.";
  }
};
