
import { ToolDefinition, ToolType } from '../types';

export const TOOLS: ToolDefinition[] = [
  {
    id: ToolType.REMIX,
    title: "The Epistemic Translator",
    subtitle: "Multi-Modal Knowledge Transfer",
    description: "Transform knowledge between registers: Academic ↔ Vernacular, Technical ↔ Narrative, Legal ↔ Operational. Includes Distortion Report flagging where meaning was lost.",
    technicalMechanism: "Chain-of-Thought + Fidelity Verification",
    visualMetaphor: "The Chain",
    whyItWorks: "Uses Chain-of-Thought to analyze before translating. Preserves critical terminology while adapting register. Generates a 'Distortion Report' identifying where nuance may have been lost in translation.",
    icon: "Layers",
    color: "bg-blue-50 text-blue-900 border-blue-200 ring-blue-500"
  },
  {
    id: ToolType.INTEREST_SKIN,
    title: "The Interest Skin",
    subtitle: "Engagement via Structure",
    description: "Wrap abstract academic problems in a narrative layer that appeals to student interests while preserving core logic.",
    technicalMechanism: "Structure Precedes Content",
    visualMetaphor: "The Skeleton",
    whyItWorks: "Uses 'Structure Precedes Content'. The academic logic is the Skeleton (Immutable). The student interest is the Skin (Changeable). The AI cannot alter the underlying mathematical or scientific logic.",
    icon: "Gamepad2",
    color: "bg-amber-50 text-amber-900 border-amber-200 ring-amber-500"
  },
  {
    id: ToolType.METAPHOR_MAPPER,
    title: "The Isomorphic Analyst",
    subtitle: "Systems Thinking via Structural Mapping",
    description: "User provides BOTH systems (they are the expert). AI identifies structural isomorphisms and outputs a 'Friction Report' showing where systems conflict.",
    technicalMechanism: "Analogical Mapping + Gap Analysis",
    visualMetaphor: "The Bridge",
    whyItWorks: "The student teaches the AI about both systems. The AI identifies functional relationships between domains and explicitly surfaces 'Friction Points' where the analogy breaks down. Never assumes cultural knowledge.",
    icon: "Network",
    color: "bg-violet-50 text-violet-900 border-violet-200 ring-violet-500"
  },
  {
    id: ToolType.PROJECT_BREAKER,
    title: "The Recursive Architect",
    subtitle: "Domain Decomposition & Risk Analysis",
    description: "Break complex projects into branches: Technical, Regulatory, Community, Financial. Maps dependencies and identifies critical paths and risk surfaces.",
    technicalMechanism: "Tree-of-Thought + Risk Surface Analysis",
    visualMetaphor: "The Tree",
    whyItWorks: "Uses Tree-of-Thought for domain decomposition. Identifies what must happen before what (dependencies), where things could fail (risk surfaces), and the critical path to completion.",
    icon: "BrainCircuit",
    color: "bg-emerald-50 text-emerald-900 border-emerald-200 ring-emerald-500"
  },
  {
    id: ToolType.BLIND_SPOT,
    title: "The Epistemic Auditor",
    subtitle: "Multi-Phase Critical Analysis",
    description: "Phase 1: Claim Extraction. Phase 2: Source Audit. Phase 3: Perspective Scan (Economic, Ecological, Historical, Relational). Phase 4: Adversarial Challenge.",
    technicalMechanism: "Chain-of-Verification + Adversarial Analysis",
    visualMetaphor: "The Red Team",
    whyItWorks: "Operates in distinct phases: extracts claims, audits evidence, scans through multiple lenses, then generates Devil's Advocate questions. Provides confidence levels for each finding.",
    icon: "Eye",
    color: "bg-rose-50 text-rose-900 border-rose-200 ring-rose-500"
  },
  {
    id: ToolType.SYNTAX_SCAFFOLDER,
    title: "The Linguistic Architect",
    subtitle: "English-Only Scenario Generation",
    description: "Generates English scenarios designed to necessitate specific grammatical structures. Human teacher/Elder provides actual language instruction.",
    technicalMechanism: "Constraint Satisfaction",
    visualMetaphor: "The Scaffold",
    whyItWorks: "AI NEVER generates non-English language (it hallucinates). Instead, generates precise English scenarios that set up students to practice specific grammar rules. The human instructor provides all actual language instruction.",
    icon: "MessageSquare",
    color: "bg-teal-50 text-teal-900 border-teal-200 ring-teal-500"
  },
  {
    id: ToolType.RUBRIC_ARCHITECT,
    title: "The Rubric Architect",
    subtitle: "Assessment via Iterative Verification",
    description: "Create student-friendly rubrics by forcing the AI to critique and simplify its own jargon through multiple iterations.",
    technicalMechanism: "Iterative Verification",
    visualMetaphor: "The Mirror",
    whyItWorks: "AI tends to use complex jargon. Uses 'Iterative Verification' to draft a rubric, critique it for age-appropriateness, then rewrite it in student-friendly language.",
    icon: "CheckSquare",
    color: "bg-indigo-50 text-indigo-900 border-indigo-200 ring-indigo-500"
  },
  {
    id: ToolType.DIFFICULT_EMAIL,
    title: "The Difficult Emailer",
    subtitle: "Communication via Role Priming",
    description: "Draft sensitive emails using specific personas and tone constraints to maintain relationships while addressing challenges.",
    technicalMechanism: "Role Priming",
    visualMetaphor: "The Shield",
    whyItWorks: "Uses 'Role Priming' to adopt a specific persona (e.g., 'Compassionate Mediator'). This acts as an emotional shield, ensuring the output remains professional and empathetic.",
    icon: "Mail",
    color: "bg-stone-100 text-stone-900 border-stone-300 ring-stone-500"
  },
  {
    id: ToolType.DEEP_DIVER,
    title: "The Cognitive Archaeologist",
    subtitle: "Dual-System Reasoning with Assumption Excavation",
    description: "System 1 (Fast) for immediate triage. System 2 (Deep) for multi-layer analysis with visible reasoning, assumption excavation, and counter-hypothesis generation.",
    technicalMechanism: "Hybrid System 1/2 + Meta-Cognition",
    visualMetaphor: "The Switch",
    whyItWorks: "Humans have System 1 (Fast/Reaction) and System 2 (Slow/Logic). This tool forces explicit mode-switching. System 2 includes 'Assumption Excavation' and 'Counter-Hypothesis Generation' phases.",
    icon: "Zap",
    color: "bg-cyan-50 text-cyan-900 border-cyan-200 ring-cyan-500"
  }
];