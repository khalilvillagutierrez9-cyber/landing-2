import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || 'AIzaSyCZp8XCUFklSgMLeXrarh_LZTvas4uYTgQ';

// Initialize the client
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

// System instruction to guide the persona
const SYSTEM_INSTRUCTION = `
Eres "Vitali", un asistente empático y experto en salud holística especializado en Hipotiroidismo de Hashimoto.
Tu objetivo es ayudar a los usuarios que visitan esta landing page a entender sus síntomas y cómo cambios en el estilo de vida (dieta antiinflamatoria, gestión del estrés, descanso) pueden ayudarles.

Reglas:
1. Responde de manera concisa, cálida y esperanzadora.
2. Si preguntan sobre el "Programa Hashimoto Vitality", explícales que es un método integral de 12 semanas para recuperar energía y bajar inflamación.
3. IMPORTANTE: No eres un médico. Siempre incluye un pequeño descargo de responsabilidad si la pregunta es sobre medicación o diagnóstico médico grave (ej: "Recuerda consultar siempre con tu endocrinólogo para cambios en tu medicación").
4. Evita el gluten, lácteos y soja en tus recomendaciones dietéticas generales, ya que son detonantes comunes en Hashimoto.
5. Habla siempre en español.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<AsyncIterable<GenerateContentResponse>> => {
  try {
    const session = getChatSession();
    const result = await session.sendMessageStream({ message });
    return result;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};
