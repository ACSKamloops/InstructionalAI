export enum ToolType {
  REMIX = 'REMIX',
  INTEREST_SKIN = 'INTEREST_SKIN',
  PROJECT_BREAKER = 'PROJECT_BREAKER',
  DEEP_DIVER = 'DEEP_DIVER',
  EMPATHY_DECODER = 'EMPATHY_DECODER',
  RUBRIC_ARCHITECT = 'RUBRIC_ARCHITECT',
  DIFFICULT_EMAIL = 'DIFFICULT_EMAIL',
  LESSON_PLANNER = 'LESSON_PLANNER'
}

export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  content: string;
  isError?: boolean;
}

export interface ToolDefinition {
  id: ToolType;
  title: string;
  subtitle: string;
  description: string;
  technicalMechanism: string; // e.g. "Chain-of-Thought"
  visualMetaphor: string; // e.g. "The Chain"
  whyItWorks: string; // Explanation from slides
  icon: string;
  color: string;
}

export type Zone = 'intro' | 'slides' | 'green-zone' | 'red-zone' | 'code-of-conduct';