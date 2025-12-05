import { GoogleGenAI } from "@google/genai";
import { AgentConfig } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Default temperature settings for different task types
export const TEMPERATURE_PRESETS = {
  LOGIC: 0.2,      // For analytical, logical tasks
  BALANCED: 0.7,   // For general creative tasks
  CREATIVE: 1.0,   // For brainstorming and highly creative tasks
} as const;

// Default agent configuration
const DEFAULT_CONFIG: AgentConfig = {
  temperature: TEMPERATURE_PRESETS.BALANCED,
  maxOutputTokens: 8192,
  topP: 0.95,
  topK: 40,
};

export const generateGeminiResponse = async (
  model: string,
  prompt: string,
  systemInstruction?: string,
  config?: AgentConfig
): Promise<string> => {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };
  
  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: mergedConfig.temperature,
        maxOutputTokens: mergedConfig.maxOutputTokens,
        topP: mergedConfig.topP,
        topK: mergedConfig.topK,
      },
    });

    return response.text || "No response generated.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Enhanced error messages with troubleshooting hints
    let errorMessage = error.message || "An error occurred while communicating with the Co-Pilot.";
    
    if (error.message?.includes("API key")) {
      errorMessage = "API key error. Please verify your API_KEY environment variable is set correctly.";
    } else if (error.message?.includes("quota")) {
      errorMessage = "API quota exceeded. Please try again later or check your usage limits.";
    } else if (error.message?.includes("model")) {
      errorMessage = "Model not available. Please ensure you're using a supported model version.";
    }
    
    throw new Error(errorMessage);
  }
};

// Helper to get appropriate temperature for task type
export const getTemperatureForTask = (taskType: 'logic' | 'balanced' | 'creative'): number => {
  switch (taskType) {
    case 'logic':
      return TEMPERATURE_PRESETS.LOGIC;
    case 'creative':
      return TEMPERATURE_PRESETS.CREATIVE;
    default:
      return TEMPERATURE_PRESETS.BALANCED;
  }
};