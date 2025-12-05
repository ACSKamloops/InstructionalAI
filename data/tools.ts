
import { ToolDefinition, ToolType } from '../types';

export const TOOLS: ToolDefinition[] = [
  {
    id: ToolType.REMIX,
    title: "The Remix Method",
    subtitle: "Differentiation via Chain-of-Thought",
    description: "Instantly 'level' a text without losing core academic vocabulary using Chain-of-Thought processing.",
    technicalMechanism: "Chain-of-Thought (CoT)",
    visualMetaphor: "The Chain",
    whyItWorks: "We use 'Chain-of-Thought' to force the AI to analyze before it writes. By listing the hard words first (Link 1), it places them in working memory so it remembers to keep them in the simplified text (Link 2).",
    icon: "Layers",
    color: "bg-blue-50 text-blue-900 border-blue-200 ring-blue-500"
  },
  {
    id: ToolType.INTEREST_SKIN,
    title: "The Interest Skin",
    subtitle: "Engagement via Structure",
    description: "Wrap abstract academic problems in a narrative layer that appeals to student interests.",
    technicalMechanism: "Structure Precedes Content",
    visualMetaphor: "The Skeleton",
    whyItWorks: "We use 'Structure Precedes Content'. The math logic is the Skeleton (Immutable). The student interest is the Skin (Changeable). We explicitly tell the AI it 'cannot change the logic'.",
    icon: "Gamepad2",
    color: "bg-amber-50 text-amber-900 border-amber-200 ring-amber-500"
  },
  {
    id: ToolType.PROJECT_BREAKER,
    title: "The Project Breaker",
    subtitle: "Support via Decomposition",
    description: "Shatter massive tasks into small, manageable micro-steps using branching logic.",
    technicalMechanism: "Tree-of-Thought (ToT)",
    visualMetaphor: "The Tree",
    whyItWorks: "We use 'Tree-of-Thought' to visualize the project not as a mountain, but as branches. We break the monolith into Phases (Branches) and then into Micro-steps (Leaves).",
    icon: "BrainCircuit",
    color: "bg-emerald-50 text-emerald-900 border-emerald-200 ring-emerald-500"
  },
  {
    id: ToolType.RUBRIC_ARCHITECT,
    title: "The Rubric Architect",
    subtitle: "Assessment via Iterative Verification",
    description: "Create student-friendly rubrics by forcing the AI to critique and simplify its own jargon.",
    technicalMechanism: "Iterative Verification",
    visualMetaphor: "The Mirror",
    whyItWorks: "AI tends to use complex jargon. We use 'Iterative Verification' to force the AI to draft a rubric, then critique it for a specific age group, then rewrite it.",
    icon: "CheckSquare",
    color: "bg-indigo-50 text-indigo-900 border-indigo-200 ring-indigo-500"
  },
  {
    id: ToolType.DIFFICULT_EMAIL,
    title: "The Difficult Emailer",
    subtitle: "Communication via Role Priming",
    description: "Draft sensitive emails using specific personas and tone constraints to maintain relationships.",
    technicalMechanism: "Role Priming",
    visualMetaphor: "The Shield",
    whyItWorks: "We use 'Role Priming' to give the AI a specific persona (e.g., 'Compassionate Mediator'). This acts as an emotional shield, ensuring the output remains professional and empathetic.",
    icon: "Mail",
    color: "bg-stone-100 text-stone-900 border-stone-300 ring-stone-500"
  },
  {
    id: ToolType.DEEP_DIVER,
    title: "The Deep Diver",
    subtitle: "Hybrid Reasoning (System 2)",
    description: "Switch between fast, intuitive responses and slow, deliberate reasoning for complex behavioral issues.",
    technicalMechanism: "Hybrid System 1/2 Switching",
    visualMetaphor: "The Switch",
    whyItWorks: "Humans have 'System 1' (Fast/Reaction) and 'System 2' (Slow/Logic). Standard AI is often lazy (System 1). This tool forces a 'Mode Switch' to ensure deep reasoning on sensitive topics before answering.",
    icon: "Zap",
    color: "bg-cyan-50 text-cyan-900 border-cyan-200 ring-cyan-500"
  }
];
