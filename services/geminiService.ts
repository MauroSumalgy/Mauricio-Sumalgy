
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

export const getAIResponse = async (userMessage: string, history: Message[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
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
        systemInstruction: `Você é o Consultor Estratégico Sênior da TheVision (Agência de Desenvolvimento Web & IA).
        Seu objetivo é ser técnico, minimalista, elegante e extremamente focado em converter o visitante em cliente.

        DIRETRIZES DE RESPOSTA:
        1. SOBRE A THEVISION: Explique que somos especialistas em Performance (sites que carregam em <1s), Design de Elite e Integração com IA.
        2. DÚVIDAS TÉCNICAS: Responda sobre SEO, Responsividade, React, Next.js e por que essas tecnologias são melhores para o negócio do cliente.
        3. PREÇOS E ORÇAMENTOS (CRITICAL): Se o cliente perguntar sobre valores específicos, preços de modelos ou quiser um orçamento personalizado, você DEVE dizer explicitamente: 
           "Para fornecer um orçamento preciso e discutir condições especiais, por favor, clique no ícone do WhatsApp no topo desta conversa ou envie uma mensagem direta para +258 83 512 7350. Nossa equipe comercial está pronta para te atender agora."
        4. MODELOS: Recomende os modelos do site (Landing Page Express, Corporate Pro, E-commerce Advanced, etc) conforme a necessidade do cliente, mas sempre reforçando que o preço final é fechado via WhatsApp.
        5. TOM DE VOZ: Profissional, futurista e encorajador.

        DADOS DA AGÊNCIA:
        - WhatsApp: +258 83 512 7350
        - Fundador/Dev Principal: Maurício Sumalgy
        - Localização: Moçambique (atendimento global).
        - Especialidade: Transformar visão em lucro digital.`,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text || "Estou analisando sua solicitação... Poderia detalhar melhor seu objetivo?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tive uma breve oscilação na minha rede neural. Mas estou de volta! Como posso ajudar com seu projeto digital?";
  }
};
