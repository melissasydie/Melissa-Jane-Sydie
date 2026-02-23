import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are the "Sydie Media AI Consultant". 
Sydie Media is a premier creative agency specializing in:
1. Writing: Content strategy, journalism, technical copy.
2. Podcasts: Full production and strategy.
3. Marketing: Digital growth and community building.
4. Branding: Identity systems and brand voice.
5. Editing: Editorial services for manuscripts.

Your goal is to help visitors understand how Sydie Media can help them. 
Keep your tone professional, innovative, and warm. 
If asked about specific portfolio items, mention categories like "Writing" or "Podcasts" and suggest contacting the team for a full pitch.
Keep answers concise (under 3 sentences unless asked for detail).
`;

// Initialize the GoogleGenAI client using the environment variable API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export class GeminiConsultant {
  /**
   * Generates a chat response from the Sydie Media AI Consultant.
   * @param message The message sent by the user.
   */
  async chat(message: string) {
    try {
      // Use ai.models.generateContent to get a text response for basic conversational tasks.
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
          systemInstruction: SYSTEM_PROMPT,
        },
      });

      // Access the .text property directly (do not call it as a function).
      return response.text || "I'm sorry, I'm currently unable to process that. Is there something else I can help with?";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having a brief technical moment. How else can I help you explore Sydie Media?";
    }
  }
}

export const geminiConsultant = new GeminiConsultant();