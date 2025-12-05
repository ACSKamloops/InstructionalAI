
export enum ToolType {
  REMIX = 'REMIX',
  INTEREST_SKIN = 'INTEREST_SKIN',
  PROJECT_BREAKER = 'PROJECT_BREAKER',
  DEEP_DIVER = 'DEEP_DIVER',
  RUBRIC_ARCHITECT = 'RUBRIC_ARCHITECT',
  DIFFICULT_EMAIL = 'DIFFICULT_EMAIL',
  METAPHOR_MAPPER = 'METAPHOR_MAPPER',
  BLIND_SPOT = 'BLIND_SPOT',
  SYNTAX_SCAFFOLDER = 'SYNTAX_SCAFFOLDER',
  LESSON_PLANNER = 'LESSON_PLANNER'
}

// Translation modes for REMIX tool
export enum TranslationMode {
  ACADEMIC_VERNACULAR = 'academic_vernacular',
  TECHNICAL_NARRATIVE = 'technical_narrative',
  LEGAL_OPERATIONAL = 'legal_operational'
}

// Challenge intensity levels for BLIND_SPOT tool
export enum ChallengeIntensity {
  GENTLE = 'gentle',
  MODERATE = 'moderate',
  RIGOROUS = 'rigorous'
}

// Agent configuration for Gemini API calls
export interface AgentConfig {
  temperature?: number;
  maxOutputTokens?: number;
  topP?: number;
  topK?: number;
}

// Fidelity report for tracking translation accuracy
export interface FidelityReport {
  originalClaims: string[];
  translatedClaims: string[];
  distortions: string[];
  confidenceLevel: number;
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
  technicalMechanism: string;
  visualMetaphor: string;
  whyItWorks: string;
  icon: string;
  color: string;
}

export interface ScenarioData {
  [key: string]: string | undefined;
}

export interface Scenario {
  id: string;
  label: string;
  teacherStory: string; // The "Context" for the user
  data: ScenarioData;
}

export type Zone = 'intro' | 'slides' | 'green-zone' | 'red-zone' | 'code-of-conduct';