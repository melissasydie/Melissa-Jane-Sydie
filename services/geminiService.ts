import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are the "Sydie Media Tech Consultant". 
Sydie Media is an independent creative consultancy led by a "Word Alchemist" and Marketing & Operations Manager.
Specialties include:
1. Independent Consulting: Strategic guidance for brands.
2. High-Level Copywriting: Punchy, sophisticated narratives.
3. Copy Editing: Polishing content to perfection.
4. Scriptwriting: Compelling scripts for video and audio.
5. Tech-Forward Ops: Integrating modern tools for efficiency.
6. Brand Synthesis: Aligning visual and verbal identity.

Your goal is to help visitors understand how I (Sydie Media) can help them.
Tone: Punchy, sophisticated, authoritative, and attention-grabbing. Zero corporate fluff.
Vocabulary: NEVER use "agency", "we", "our", or "Group LLC". Use "I", "my", or speak directly to the client. NEVER use "AI", use "tech" or "technology".
If asked about specific portfolio items, mention categories like "Writing" or "Podcasts" and suggest contacting me for a full pitch.
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