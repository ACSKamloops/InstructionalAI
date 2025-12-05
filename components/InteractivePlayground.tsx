import React, { useState, useRef, useEffect } from 'react';
import { ToolType, ChatMessage, ToolDefinition } from '../types';
import { generateGeminiResponse } from '../services/geminiService';
import { Play, RotateCcw, Sparkles, AlertCircle, BrainCircuit, Gamepad2, Layers, BookOpen, Link, Bone, Network, Lightbulb, Eye, EyeOff, Zap, Ear, Activity, Volume2, Thermometer, Mic, Terminal, CheckSquare, Mail, RefreshCw, Shield, Hexagon } from 'lucide-react';

const tools: ToolDefinition[] = [
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
  },
  {
    id: ToolType.EMPATHY_DECODER,
    title: "The Empathy Decoder",
    subtitle: "Audio-of-Thought Analysis",
    description: "Analyze student quotes by first transcribing the 'hidden' emotional data (tone, prosody) before interpretation.",
    technicalMechanism: "Audio-of-Thought (AoT)",
    visualMetaphor: "The Stethoscope",
    whyItWorks: "Text analysis is lossy; it misses the *feeling*. We use 'Audio-of-Thought' to force a 'Structured Transcription' of emotion, volume, and tone first. This provides the AI with the emotional context standard prompts miss.",
    icon: "Ear",
    color: "bg-rose-50 text-rose-900 border-rose-200 ring-rose-500"
  }
];

interface Scenario {
    id: string;
    label: string;
    data: any;
}

const SCENARIOS: Record<ToolType, Scenario[]> = {
    [ToolType.REMIX]: [
        { 
            id: 'salmon', 
            label: 'Scenario 1: Salmon Cycle (Gr 4-5)', 
            data: { 
                grade: 'Grade 4', 
                text: 'The anadromous life cycle of Oncorhynchus nerka involves a complex migration from freshwater redds to the pelagic ocean zones. Upon maturation, they navigate via magnetoreception back to their natal streams. The females utilize their caudal fins to excavate redds in the gravel substrate, where high oxygenation is critical for the survival of the alevin stages.',
                terms: 'Alevin, Fry, Smolt, Spawning, Redds'
            } 
        },
        { 
            id: 'fur_trade', 
            label: 'Scenario 2: The Fur Trade (Gr 7)', 
            data: { 
                grade: 'Grade 7', 
                text: 'The Hudson’s Bay Company established a mercantilist monopoly over the Rupert’s Land basin, fundamentally altering Indigenous economic systems. This corporate hegemony relied on the extraction of beaver pelts for European markets, creating a dependency cycle that eroded traditional sovereignty and enforced a barter system heavily weighted in favor of colonial goods.',
                terms: 'Monopoly, Sovereignty, Barter, Pelt'
            } 
        },
        { 
            id: 'macbeth', 
            label: 'Scenario 3: Macbeth (Gr 10)', 
            data: { 
                grade: 'Modern English', 
                text: 'Is this a dagger which I see before me, The handle toward my hand? Come, let me clutch thee. I have thee not, and yet I see thee still. Art thou not, fatal vision, sensible To feeling as to sight? or art thou but A dagger of the mind, a false creation, Proceeding from the heat-oppressed brain?',
                terms: 'Heat-oppressed brain, Marshall’st, Palpable'
            } 
        },
        { 
            id: 'geometry', 
            label: 'Scenario 4: Geometric Proofs (Gr 9)', 
            data: { 
                grade: 'Grade 9 (Student who hates math)', 
                text: 'In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides. This fundamental theorem establishes the relationship between the legs and the hypotenuse in Euclidean geometry, forming the basis for trigonometric ratios.',
                terms: 'Hypotenuse, Leg, Right Angle'
            } 
        },
    ],
    [ToolType.INTEREST_SKIN]: [
        {
            id: 'dirt_bike',
            label: 'Scenario 5: Dirt Biking (Math)',
            data: {
                topic: 'Slope (m = y2-y1 / x2-x1)',
                interest: 'Building a Dirt Bike Jump Track in Stein Valley',
                problem: 'To clear the creek, the ramp needs a rise of 4 meters over a run of 12 meters. What is the slope? If we steepen it to a slope of 0.5, how high does it get?'
            }
        },
        {
            id: 'fortnite',
            label: 'Scenario 6: Fortnite Ecosystem (Science)',
            data: {
                topic: 'Predator/Prey Relationships and Trophic Cascades',
                interest: 'Fortnite Battle Royale Map',
                problem: 'If all the "Wolves" (Predators) are eliminated from the Weeping Woods, what happens to the population of "Boars" (Prey)? How does this affect the "Shield Mushrooms" (Producers) they eat?'
            }
        },
        {
            id: 'among_us',
            label: 'Scenario 7: Among Us Gov (Socials)',
            data: {
                topic: 'How a Bill becomes Law (First Reading, Second Reading, Royal Assent)',
                interest: 'Among Us',
                problem: 'The Crewmates (Parliament) want to pass a new rule about Venting. Trace the "Bill" through the "Cafeteria" (House of Commons) and "Admin" (Senate). Who is the "Imposter" trying to veto it?'
            }
        },
        {
            id: 'tiktok',
            label: 'Scenario 8: TikTok Persuasion (English)',
            data: {
                topic: 'Rhetorical Devices (Ethos, Pathos, Logos)',
                interest: 'Becoming a Viral Influencer',
                problem: 'Write a script for a 60-second video convincing people to stop vaping. You must use Ethos (cite a cool celebrity), Pathos (sad music/story), and Logos (one scary statistic).'
            }
        }
    ],
    [ToolType.PROJECT_BREAKER]: [
        {
            id: 'science_fair',
            label: 'Scenario 9: Science Fair Panic (Gr 7)',
            data: {
                task: 'Do a Science Fair Project. Due in 4 weeks.',
                time: '4 weeks'
            }
        },
        {
            id: 'capstone',
            label: 'Scenario 10: Capstone Project (Gr 12)',
            data: {
                task: 'Career Life Connections (CLC) Capstone: 30 Hours of Volunteering + Presentation.',
                time: 'Semester'
            }
        },
        {
            id: 'novel_study',
            label: 'Scenario 11: Novel Study (Gr 5)',
            data: {
                task: 'Read "The Barren Grounds" and write a report.',
                time: '3 weeks'
            }
        },
        {
            id: 'short_film',
            label: 'Scenario 12: Short Film (Gr 10)',
            data: {
                task: 'Create a 3-minute documentary about Lytton.',
                time: '2 weeks'
            }
        }
    ],
    [ToolType.RUBRIC_ARCHITECT]: [
        {
            id: 'oral_story',
            label: 'Scenario 13: Oral Storytelling (All)',
            data: {
                criteria: 'Demonstrates oratorical proficiency and cultural adherence.',
                critique: 'Too colonial. Too academic.',
                fix: 'I can tell the story clearly so everyone hears. / I can share who told me this story (protocol).'
            }
        },
        {
            id: 'chemistry',
            label: 'Scenario 14: Chemistry Lab (Gr 11)',
            data: {
                criteria: 'Properly hypothesizes stoichiometric ratios.',
                critique: 'Confusing.',
                fix: 'I can predict what will happen before I mix the chemicals.'
            }
        },
        {
            id: 'sel',
            label: 'Scenario 15: SEL (Gr 4)',
            data: {
                criteria: 'Exhibits self-regulation strategies during conflict.',
                critique: 'A 9-year-old does not know what that means.',
                fix: 'When I got mad, I took a deep breath instead of yelling.'
            }
        },
        {
            id: 'art',
            label: 'Scenario 16: Visual Arts (Gr 8)',
            data: {
                criteria: 'Utilizes negative space and perspective effectively.',
                critique: 'Too technical.',
                fix: 'I filled the whole paper, not just the middle. / My drawing looks 3D, not flat.'
            }
        }
    ],
    [ToolType.DIFFICULT_EMAIL]: [
        {
            id: 'ghost_student',
            label: 'Scenario 17: The Ghost Student',
            data: {
                situation: 'Student has not shown up in 2 weeks. Teacher is worried but annoyed.',
                persona: 'The Compassionate Connector'
            }
        },
        {
            id: 'plagiarism',
            label: 'Scenario 18: The Plagiarism Incident',
            data: {
                situation: 'Student used ChatGPT to write their whole essay. Teacher is angry about the cheating.',
                persona: 'The Digital Mentor'
            }
        },
        {
            id: 'failing_grade',
            label: 'Scenario 19: The Failing Grade',
            data: {
                situation: 'Student failed the math test. Parent is demanding and defensive.',
                persona: 'The Partner in Success'
            }
        },
        {
            id: 'behavior',
            label: 'Scenario 20: Behavioral Outburst',
            data: {
                situation: 'Student flipped a desk and walked out.',
                persona: 'The Trauma-Informed Regulator'
            }
        }
    ],
    [ToolType.DEEP_DIVER]: [
        {
            id: 'default_deep',
            label: 'Standard Scenario',
            data: { scenario: "A Grade 9 student, usually quiet, suddenly flipped a desk and yelled 'This whole system is rigged!' after receiving a C- on his History essay." }
        }
    ],
    [ToolType.EMPATHY_DECODER]: [
        {
            id: 'default_empathy',
            label: 'Standard Scenario',
            data: { 
                quote: "Whatever. It’s fine. I don't care about the basketball team anyway. I have better things to do.",
                context: "Said quietly, looking at the floor, arms crossed tight, immediately after cuts were posted."
            }
        }
    ],
    [ToolType.LESSON_PLANNER]: []
};

const InteractivePlayground: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ToolType>(ToolType.REMIX);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showPromptPreview, setShowPromptPreview] = useState(false);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('');
  
  // Input States
  const [remixText, setRemixText] = useState("");
  const [remixGrade, setRemixGrade] = useState("Grade 5");
  const [remixTerms, setRemixTerms] = useState("");
  
  const [skinTopic, setSkinTopic] = useState("");
  const [skinInterest, setSkinInterest] = useState("");
  const [skinProblem, setSkinProblem] = useState("");
  
  const [projectTask, setProjectTask] = useState("");
  const [projectTime, setProjectTime] = useState("");

  const [rubricCriteria, setRubricCriteria] = useState("");
  const [rubricCritique, setRubricCritique] = useState("");

  const [emailSituation, setEmailSituation] = useState("");
  const [emailPersona, setEmailPersona] = useState("");

  const [deepDiverScenario, setDeepDiverScenario] = useState("");
  const [deepDiverMode, setDeepDiverMode] = useState<"fast" | "slow">("slow");

  const [empathyQuote, setEmpathyQuote] = useState("");
  const [empathyContext, setEmpathyContext] = useState("");

  // Load Demo Data
  const loadScenario = (tool: ToolType, scenarioId?: string) => {
    const scenarios = SCENARIOS[tool];
    if (!scenarios || scenarios.length === 0) return;

    const scenario = scenarioId 
        ? scenarios.find(s => s.id === scenarioId) 
        : scenarios[0];
    
    if (!scenario) return;

    setSelectedScenarioId(scenario.id);
    const d = scenario.data;

    switch (tool) {
      case ToolType.REMIX:
        setRemixText(d.text);
        setRemixGrade(d.grade);
        setRemixTerms(d.terms);
        break;
      case ToolType.INTEREST_SKIN:
        setSkinTopic(d.topic);
        setSkinInterest(d.interest);
        setSkinProblem(d.problem || "");
        break;
      case ToolType.PROJECT_BREAKER:
        setProjectTask(d.task);
        setProjectTime(d.time);
        break;
      case ToolType.RUBRIC_ARCHITECT:
        setRubricCriteria(d.criteria);
        setRubricCritique(d.critique);
        break;
      case ToolType.DIFFICULT_EMAIL:
        setEmailSituation(d.situation);
        setEmailPersona(d.persona);
        break;
      case ToolType.DEEP_DIVER:
        setDeepDiverScenario(d.scenario);
        break;
      case ToolType.EMPATHY_DECODER:
        setEmpathyQuote(d.quote);
        setEmpathyContext(d.context);
        break;
    }
    setMessages([]);
  };

  useEffect(() => {
    loadScenario(activeTool);
  }, [activeTool]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleToolChange = (tool: ToolType) => {
    setActiveTool(tool);
    setMessages([]); 
  };

  const getSystemInstruction = (tool: ToolType): string => {
    switch (tool) {
      case ToolType.REMIX:
        return "You are an expert Special Education teacher and Nlaka'pamux curriculum specialist. You strictly follow Chain-of-Thought reasoning. You must Identify terms first, then Strategize, then Remix, then Verify.";
      case ToolType.INTEREST_SKIN:
        return "You are a Creative Math Designer who specializes in gamified learning. You strictly adhere to 'Structure Precedes Content'. The academic logic must remain immutable, while the narrative skin changes to match the student's interest.";
      case ToolType.PROJECT_BREAKER:
        return "You are an Executive Function Coach. You use Tree-of-Thought decomposition to break large tasks into parallel branches (Research, Drafting, Review) and then into micro-steps. Your output must be a 'Quest Log'.";
      case ToolType.RUBRIC_ARCHITECT:
        return "You are a Curriculum Assessment Specialist. You use 'Iterative Verification'. You never accept the first draft. You always critique it for age-appropriateness and simplicity before finalizing.";
      case ToolType.DIFFICULT_EMAIL:
        return "You are a Compassionate School Administrator. You use 'Role Priming' to adopt a specific, supportive persona. You use the 'Sandwich Method' (Connection - Issue - Solution).";
      case ToolType.DEEP_DIVER:
        return "You are a Senior Behavioral Specialist. You are capable of 'System 1' (Reactive) and 'System 2' (Deep Reasoning) thinking. When in System 2 mode, you MUST output your internal monologue inside <thinking> tags before providing the strategy.";
      case ToolType.EMPATHY_DECODER:
        return "You are an Empathy Coach. You use the 'Audio-of-Thought' framework. You never analyze text directly. You first generate a 'Structured Transcription' of the non-verbal cues (Prosody, Emotion, Environment) to ground your analysis.";
      default:
        return "You are a helpful teaching assistant.";
    }
  };

  const constructPrompt = () => {
    switch (activeTool) {
      case ToolType.REMIX:
        return `Task: Apply the "Remix Method" using Chain-of-Thought reasoning.
        
Step 1: Identify the most critical academic terms (e.g., ${remixTerms}).
Step 2: Rewrite the text for ${remixGrade}, but KEEP the critical terms.
Step 3: Verify your work. Did you keep the science/logic accurate?

Source Text: "${remixText}"`;
      
      case ToolType.INTEREST_SKIN:
        return `Task: Create a "${skinInterest} Challenge" based on this topic: ${skinTopic}.

Constraint - Structure Precedes Content:
1. The Core Logic: The problem MUST require using ${skinTopic}. This logic cannot change.
2. The Skin: Contextualize this as ${skinInterest}.
3. The Specific Problem: ${skinProblem}

Output Format:
- Narrative Hook
- The Mission (The Problem)
- The Hint`;

      case ToolType.PROJECT_BREAKER:
        return `Task: Break down this assignment into a "Tree of Steps": "${projectTask}" due in ${projectTime}.

Technique: Tree-of-Thought Decomposition.
1. Create 3 main Branches (Phases).
2. Break each branch into micro-tasks (20 mins each).
Output: Present this as a "Quest Log" checklist. Keep the tone encouraging.`;

      case ToolType.RUBRIC_ARCHITECT:
        return `Task: Create a student-friendly rubric for: "${rubricCriteria}".
        
Process (Iterative Verification):
1. Draft 1: Write it in standard academic language.
2. Critique: Identify why this is too complex (e.g. "${rubricCritique}").
3. Final Polish: Rewrite into "I Can" statements suitable for the student.`;

      case ToolType.DIFFICULT_EMAIL:
        return `Task: Draft an email to a parent/guardian about: "${emailSituation}".
        
Persona: ${emailPersona}.
Constraints:
- Tone: Collaborative, not accusatory.
- Method: Sandwich Method (Positive - Challenge - Positive).
- Call to Action: Ask for a solution we can work on together.`;

      case ToolType.DEEP_DIVER:
        if (deepDiverMode === "fast") {
            return `Task: Provide a quick, immediate reaction strategy for this scenario.
Scenario: ${deepDiverScenario}
Constraint: Use System 1 thinking. Be efficient and directive. Do not over-analyze.`;
        } else {
            return `Task: Analyze this behavioral incident using System 2 Hybrid Reasoning.

Scenario: "${deepDiverScenario}"

Protocol:
1. <thinking>
FIRST: Disengage System 1 (Reaction).
SECOND: Engage System 2 (Logic).
THIRD: Analyze the root cause using a Trauma-Informed Lens.
FOURTH: Consider 3 alternative interpretations of the behavior beyond "defiance".
FIFTH: Weigh the pros/cons of immediate intervention vs. de-escalation.
</thinking>

2. Strategy: Based on the deep reasoning above, provide a 3-step intervention plan.`;
        }

      case ToolType.EMPATHY_DECODER:
        return `Task: Analyze the emotional subtext of this student quote using "Audio-of-Thought".

Quote: "${empathyQuote}"
Context/Non-Verbal: "${empathyContext}"

Step 1: Structured Transcription (Audio-of-Thought)
[Analyze the hidden data lost in text. Output this as a structured list]
- Prosody: (e.g., Pitch, Tone, Speed)
- Emotion: (e.g., Valence: [-1 to 1], Arousal: [-1 to 1])
- Environmentals: (e.g., Social context, Physical space)
- Vocal Characterizers: (e.g., "whisper", "shout", "tremble")

Step 2: The Decoder
Based ONLY on the structured transcription above, translate what the student is *actually* saying. What is the root need?

Step 3: The Response
Draft a one-sentence response that validates the *emotion*, not the surface text.`;
      
      default:
        return "";
    }
  };

  const handleRun = async () => {
    setIsLoading(true);
    const userPrompt = constructPrompt();
    
    // Add user message to UI
    let displayPrompt = "";
    switch (activeTool) {
        case ToolType.REMIX: displayPrompt = `Remixing text for ${remixGrade}...`; break;
        case ToolType.INTEREST_SKIN: displayPrompt = `Applying "${skinInterest}" skin to ${skinTopic}...`; break;
        case ToolType.PROJECT_BREAKER: displayPrompt = `Breaking down project...`; break;
        case ToolType.RUBRIC_ARCHITECT: displayPrompt = `Architecting rubric for "${rubricCriteria}"...`; break;
        case ToolType.DIFFICULT_EMAIL: displayPrompt = `Drafting email as ${emailPersona}...`; break;
        case ToolType.DEEP_DIVER: displayPrompt = deepDiverMode === 'slow' ? `Engaging System 2 Deep Reasoning...` : `Generating Fast Response...`; break;
        case ToolType.EMPATHY_DECODER: displayPrompt = `Decoding emotional subtext...`; break;
    }

    setMessages(prev => [...prev, { role: 'user', content: displayPrompt }]);

    try {
      const response = await generateGeminiResponse(
        'gemini-2.5-flash',
        userPrompt,
        getSystemInstruction(activeTool)
      );
      setMessages(prev => [...prev, { role: 'model', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', content: "The Nexus encountered a disruption. Please try again.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const currentToolDef = tools.find(t => t.id === activeTool)!;

  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
        case 'Layers': return <Layers className={className} />;
        case 'Gamepad2': return <Gamepad2 className={className} />;
        case 'BrainCircuit': return <BrainCircuit className={className} />;
        case 'Zap': return <Zap className={className} />;
        case 'Ear': return <Ear className={className} />;
        case 'CheckSquare': return <CheckSquare className={className} />;
        case 'Mail': return <Mail className={className} />;
        default: return <BookOpen className={className} />;
    }
  };

  const renderMetaphorIcon = (metaphor: string) => {
      if (metaphor === 'The Chain') return <Link className="text-blue-600" size={32} />;
      if (metaphor === 'The Skeleton') return <Bone className="text-amber-600" size={32} />;
      if (metaphor === 'The Tree') return <Network className="text-emerald-600" size={32} />;
      if (metaphor === 'The Switch') return <Activity className="text-cyan-600" size={32} />;
      if (metaphor === 'The Stethoscope') return <Volume2 className="text-rose-600" size={32} />;
      if (metaphor === 'The Mirror') return <RefreshCw className="text-indigo-600" size={32} />;
      if (metaphor === 'The Shield') return <Shield className="text-stone-600" size={32} />;
      return <Lightbulb className="text-amber-500" size={32} />;
  }

  // --- CUSTOM MARKDOWN RENDERER ---
  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-[#1E3A8A]">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    let isInThinkingBlock = false;
    let isInTranscriptionBlock = false;

    return lines.map((line, i) => {
      const trimmed = line.trim();
      
      if (trimmed.includes('<thinking>')) {
          isInThinkingBlock = true;
          return <div key={i} className="flex items-center gap-2 text-cyan-700 font-bold text-[10px] uppercase tracking-wider mt-4 mb-2 bg-cyan-50 p-2 rounded-t-lg border-t border-l border-r border-cyan-100 w-fit"><BrainCircuit size={12}/> System 2 Analysis Active</div>;
      }
      if (trimmed.includes('</thinking>')) {
          isInThinkingBlock = false;
          return <div key={i} className="h-4 border-b border-cyan-100 mb-4"></div>;
      }

      if (isInThinkingBlock) {
          return (
            <div key={i} className="text-cyan-900/80 text-xs font-mono pl-4 border-l-2 border-cyan-200 bg-cyan-50/30 pr-2 py-0.5">
                {trimmed.replace('<thinking>', '').replace('</thinking>', '')}
            </div>
          );
      }

      if (trimmed.toLowerCase().includes('structured transcription') || trimmed.includes('Audio-of-Thought')) {
          isInTranscriptionBlock = true;
          return (
              <div key={i} className="mt-4 mb-2">
                 <div className="flex items-center gap-2 text-rose-600 font-bold text-[10px] uppercase tracking-wider bg-rose-50 p-2 rounded-t-lg border-t border-l border-r border-rose-100 w-fit">
                    <Mic size={12}/> Structured Transcription (Hidden Data)
                 </div>
              </div>
          );
      }
      
      if (isInTranscriptionBlock && (trimmed.startsWith('Step 2') || trimmed.startsWith('**Step 2'))) {
          isInTranscriptionBlock = false;
      }

      if (isInTranscriptionBlock && trimmed.length > 0 && !trimmed.startsWith('Step 1')) {
           return (
               <div key={i} className="font-mono text-xs text-rose-800 bg-rose-50/50 border-l-2 border-rose-200 pl-3 py-1 mb-1">
                   {formatText(trimmed)}
               </div>
           );
      }

      if (!trimmed) return <div key={i} className="h-2" />;

      if (trimmed.startsWith('###') || (trimmed.startsWith('**') && trimmed.includes(':') && trimmed.length < 50)) {
         return (
             <h3 key={i} className="text-base font-bold text-[#1E3A8A] mt-5 mb-2 flex items-center gap-2">
                 {formatText(trimmed.replace(/^#+\s/, ''))}
             </h3>
         );
      }

      if (trimmed.startsWith('* ') || trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
        const content = trimmed.replace(/^[*•-]\s/, '');
        return (
          <div key={i} className="flex gap-2.5 mb-2 pl-1">
            <div className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#D97706]"></div>
            <p className="text-sm text-slate-700 leading-relaxed">{formatText(content)}</p>
          </div>
        );
      }

      if (/^\d+\.\s/.test(trimmed)) {
          const [num, ...rest] = trimmed.split('.');
          return (
             <div key={i} className="flex gap-2.5 mb-2 pl-1">
                 <span className="shrink-0 font-bold text-[#D97706] text-sm w-4">{num}.</span>
                 <p className="text-sm text-slate-700 leading-relaxed">{formatText(rest.join('.').trim())}</p>
             </div>
          )
      }

      return <p key={i} className="text-sm text-slate-700 leading-relaxed mb-2">{formatText(trimmed)}</p>;
    });
  };

  return (
    <div className="flex flex-col h-full bg-[#FDFBF7] font-sans">
      <div className="flex overflow-x-auto gap-3 p-3 bg-white border-b border-stone-200 shadow-sm z-10 sticky top-0 scrollbar-hide">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => handleToolChange(tool.id)}
            className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 min-w-[200px] ${
              activeTool === tool.id
                ? `${tool.color} shadow-sm ring-1`
                : 'bg-white border-stone-100 text-stone-500 hover:bg-stone-50 hover:border-stone-300'
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeTool === tool.id ? 'bg-white/60' : 'bg-stone-50'}`}>
              {renderIcon(tool.icon, activeTool === tool.id ? "w-5 h-5" : "w-5 h-5 text-stone-300")}
            </div>
            <div className="text-left">
              <div className="font-bold text-sm tracking-tight">{tool.title}</div>
              <div className="text-[10px] opacity-80 uppercase tracking-wide font-medium truncate max-w-[140px]">{tool.subtitle}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* Left Panel: The Map (Configuration) */}
        <div className="w-full lg:w-5/12 p-5 overflow-y-auto border-r border-stone-200 bg-[#FDFBF7]">
          <div className="max-w-xl mx-auto space-y-5">
            
            {/* Mechanism Card */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                    <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                        {renderMetaphorIcon(currentToolDef.visualMetaphor)}
                    </div>
                    <div>
                        <h3 className="font-serif font-bold text-[#1E3A8A] text-base flex items-center gap-2">
                            {currentToolDef.visualMetaphor}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 bg-stone-50 px-2 py-0.5 rounded-full border border-stone-100">
                                {currentToolDef.technicalMechanism}
                        </span>
                    </div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed pl-3 border-l-2 border-stone-100 ml-1">
                  {currentToolDef.whyItWorks}
                </p>
            </div>

            {/* Scenario Selector */}
            {SCENARIOS[activeTool] && SCENARIOS[activeTool].length > 0 && (
                <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm">
                    <label className="block text-[10px] font-bold text-stone-400 mb-2 uppercase tracking-wide px-1">Select Real-World Scenario</label>
                    <select 
                        value={selectedScenarioId}
                        onChange={(e) => loadScenario(activeTool, e.target.value)}
                        className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-stone-50 text-[#1E3A8A] font-medium focus:ring-2 focus:ring-blue-500/20 outline-none"
                    >
                        {SCENARIOS[activeTool].map(s => (
                            <option key={s.id} value={s.id}>{s.label}</option>
                        ))}
                    </select>
                </div>
            )}

            {/* Inputs Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-[11px] font-extrabold text-stone-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Play size={10} className="fill-current" /> Nexus Inputs
                </h3>
              </div>
              
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-5">
                {activeTool === ToolType.REMIX && (
                  <>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Source Text</label>
                      <textarea 
                        className="w-full p-3.5 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-900/10 h-32 leading-relaxed text-stone-700 resize-none bg-stone-50"
                        value={remixText}
                        onChange={(e) => setRemixText(e.target.value)}
                        placeholder="Paste complex text..."
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Target Audience</label>
                            <input 
                                className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                                value={remixGrade}
                                onChange={(e) => setRemixGrade(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Keep Terms</label>
                            <input 
                                className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                                value={remixTerms}
                                onChange={(e) => setRemixTerms(e.target.value)}
                                placeholder="e.g. Alevin, Fry"
                            />
                        </div>
                    </div>
                  </>
                )}

                {activeTool === ToolType.INTEREST_SKIN && (
                  <>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Bone size={14} className="text-amber-600"/>
                            <label className="block text-[10px] font-bold text-amber-900 uppercase tracking-wider">The Skeleton (Immutable)</label>
                        </div>
                      <input 
                        className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white mb-2"
                        value={skinTopic}
                        onChange={(e) => setSkinTopic(e.target.value)}
                        placeholder="Core Logic"
                      />
                       <textarea 
                        className="w-full p-2.5 border border-stone-200 rounded-lg text-xs bg-white h-16 resize-none"
                        value={skinProblem}
                        onChange={(e) => setSkinProblem(e.target.value)}
                        placeholder="Specific Problem Statement..."
                      />
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                        <div className="flex items-center gap-2 mb-2">
                            <Gamepad2 size={14} className="text-purple-500"/>
                            <label className="block text-[10px] font-bold text-purple-900 uppercase tracking-wider">The Skin (Interest)</label>
                        </div>
                      <input 
                        className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white"
                        value={skinInterest}
                        onChange={(e) => setSkinInterest(e.target.value)}
                        placeholder="Student Interest"
                      />
                    </div>
                  </>
                )}

                {activeTool === ToolType.PROJECT_BREAKER && (
                  <>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">The Monolith</label>
                      <textarea 
                        className="w-full p-3.5 border border-stone-200 rounded-xl text-sm h-28 focus:ring-emerald-500/20 bg-stone-50 resize-none"
                        value={projectTask}
                        onChange={(e) => setProjectTask(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Time Constraints</label>
                      <input 
                        className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                        value={projectTime}
                        onChange={(e) => setProjectTime(e.target.value)}
                      />
                    </div>
                  </>
                )}

                {activeTool === ToolType.RUBRIC_ARCHITECT && (
                  <>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Draft Criteria (Jargon)</label>
                      <textarea 
                        className="w-full p-3.5 border border-stone-200 rounded-xl text-sm h-20 bg-stone-50 resize-none"
                        value={rubricCriteria}
                        onChange={(e) => setRubricCriteria(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Self-Critique</label>
                      <input 
                        className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                        value={rubricCritique}
                        onChange={(e) => setRubricCritique(e.target.value)}
                        placeholder="Why is this too hard?"
                      />
                    </div>
                  </>
                )}

                {activeTool === ToolType.DIFFICULT_EMAIL && (
                  <>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Situation</label>
                      <textarea 
                        className="w-full p-3.5 border border-stone-200 rounded-xl text-sm h-20 bg-stone-50 resize-none"
                        value={emailSituation}
                        onChange={(e) => setEmailSituation(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Adopt Persona</label>
                      <input 
                        className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                        value={emailPersona}
                        onChange={(e) => setEmailPersona(e.target.value)}
                      />
                    </div>
                  </>
                )}

                {activeTool === ToolType.DEEP_DIVER && (
                  <>
                    <div className="p-4 rounded-xl bg-cyan-50/50 border border-cyan-100">
                        <label className="block text-[11px] font-bold text-cyan-900 mb-3 uppercase tracking-wide">Cognitive Mode</label>
                        <div className="flex bg-white rounded-lg p-1 border border-cyan-100 shadow-sm">
                            <button 
                                onClick={() => setDeepDiverMode("fast")}
                                className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${deepDiverMode === 'fast' ? 'bg-cyan-100 text-cyan-800 shadow-sm' : 'text-stone-400 hover:text-cyan-600'}`}
                            >
                                System 1 (Fast)
                            </button>
                            <button 
                                onClick={() => setDeepDiverMode("slow")}
                                className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${deepDiverMode === 'slow' ? 'bg-cyan-100 text-cyan-800 shadow-sm' : 'text-stone-400 hover:text-cyan-600'}`}
                            >
                                System 2 (Deep)
                            </button>
                        </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Behavioral Scenario</label>
                      <textarea 
                        className="w-full p-3.5 border border-stone-200 rounded-xl text-sm h-28 focus:ring-cyan-500/50 bg-stone-50 resize-none transition-all"
                        value={deepDiverScenario}
                        onChange={(e) => setDeepDiverScenario(e.target.value)}
                      />
                    </div>
                  </>
                )}

                {activeTool === ToolType.EMPATHY_DECODER && (
                  <>
                    <div>
                      <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Student Quote</label>
                      <textarea 
                        className="w-full p-3.5 border border-stone-200 rounded-xl text-sm h-20 focus:ring-rose-500/50 bg-stone-50 resize-none transition-all"
                        value={empathyQuote}
                        onChange={(e) => setEmpathyQuote(e.target.value)}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Thermometer size={12} className="text-rose-400"/>
                        <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wide">Non-Verbal Context</label>
                      </div>
                      <input 
                        className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50 focus:ring-rose-500/50"
                        value={empathyContext}
                        onChange={(e) => setEmpathyContext(e.target.value)}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Prompt Preview Toggle */}
              <div className="flex items-center justify-between px-2 pt-1">
                 <button 
                   onClick={() => setShowPromptPreview(!showPromptPreview)}
                   className="flex items-center gap-2 text-[11px] font-bold text-stone-400 hover:text-stone-600 transition-colors uppercase tracking-wider"
                 >
                   {showPromptPreview ? <EyeOff size={12} /> : <Eye size={12} />}
                   {showPromptPreview ? "Hide Internal Logic" : "View Internal Logic"}
                 </button>
              </div>

              {showPromptPreview && (
                <div className="bg-[#1E3A8A] rounded-xl p-4 text-[10px] font-mono text-blue-100 overflow-x-auto border border-blue-900 shadow-inner">
                  <div className="flex items-center gap-2 text-[#D97706] mb-2 border-b border-blue-800 pb-2">
                     <BrainCircuit size={12} />
                     <span className="font-bold">GENERATED PROMPT (What the AI sees)</span>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed opacity-80">
                    {constructPrompt()}
                  </pre>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={handleRun}
                  disabled={isLoading}
                  className="group relative w-full flex items-center justify-center gap-3 bg-[#1E3A8A] hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl disabled:opacity-80 disabled:cursor-not-allowed overflow-hidden ring-4 ring-stone-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  {isLoading ? (
                    <RotateCcw className="animate-spin text-[#D97706]" size={18} />
                  ) : (
                    <Sparkles size={18} className="text-[#D97706]" />
                  )}
                  {isLoading ? "Nexus is Processing..." : "Launch Nexus"}
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 mx-auto max-w-xl bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex gap-3 shadow-sm items-start">
             <div className="shrink-0 mt-0.5"><AlertCircle size={16} className="text-amber-600" /></div>
             <div className="leading-relaxed">
               <span className="font-bold text-amber-800">Pilot Rule Enforced: </span> 
               You must read, check, and verify EVERYTHING. The machine can hallucinate.
             </div>
          </div>
        </div>

        {/* Right Panel: The Paddle (Output) */}
        <div className="w-full lg:w-7/12 bg-white flex flex-col h-[600px] lg:h-auto border-l border-stone-200 shadow-2xl lg:shadow-none z-0 relative">
           <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-white/95 backdrop-blur-md sticky top-0 z-10">
              <span className="font-bold text-[#1E3A8A] flex items-center gap-2.5 text-[11px] uppercase tracking-widest">
                <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-[#D97706] animate-ping' : 'bg-[#D97706]'}`}></div>
                Nexus Output Stream
              </span>
              <button 
                onClick={() => setMessages([])} 
                className="text-[10px] uppercase font-bold tracking-wider text-stone-400 hover:text-red-500 transition-colors px-3 py-1.5 rounded-full hover:bg-red-50"
              >
                Clear History
              </button>
           </div>
           
           <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
             {messages.length === 0 && (
               <div className="h-full flex flex-col items-center justify-center text-stone-300 p-8 text-center opacity-60">
                  <div className="bg-stone-50 p-6 rounded-3xl mb-4 border border-stone-100">
                     {renderIcon(currentToolDef.icon, "w-8 h-8 text-stone-300")}
                  </div>
                  <h3 className="font-serif font-bold text-stone-400 text-lg mb-2">Ready to {currentToolDef.title.split(":")[1]}</h3>
                  <p className="text-sm text-stone-400 max-w-xs leading-relaxed">
                    Configure the parameters on the left (The Map) to guide the Nexus.
                  </p>
               </div>
             )}
             
             {messages.map((msg, idx) => (
               <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                 
                 <div className={`max-w-3xl rounded-2xl p-5 shadow-sm border text-base ${
                   msg.role === 'user' 
                     ? 'bg-stone-50 text-stone-600 border-stone-200/60 rounded-br-sm' 
                     : msg.isError 
                        ? 'bg-red-50 text-red-900 border-red-100'
                        : 'bg-white text-stone-800 border-blue-100 rounded-bl-sm shadow-md ring-1 ring-blue-500/10'
                 }`}>
                   {msg.role === 'model' && (
                     <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-50">
                        <div className="bg-blue-50 p-1 rounded-md border border-blue-100">
                            <Sparkles size={12} className="text-[#1E3A8A]" />
                        </div>
                        <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest">Nexus Response</span>
                        {activeTool === ToolType.DEEP_DIVER && deepDiverMode === 'fast' && (
                             <span className="ml-auto text-[9px] font-bold text-cyan-500 uppercase tracking-widest flex items-center gap-1 border border-cyan-100 px-2 py-0.5 rounded-full bg-cyan-50">
                                 <Zap size={8} /> System 1 (Fast)
                             </span>
                        )}
                        {activeTool === ToolType.DEEP_DIVER && deepDiverMode === 'slow' && (
                             <span className="ml-auto text-[9px] font-bold text-cyan-700 uppercase tracking-widest flex items-center gap-1 border border-cyan-100 px-2 py-0.5 rounded-full bg-cyan-50">
                                 <BrainCircuit size={8} /> System 2 (Deep)
                             </span>
                        )}
                     </div>
                   )}
                   {msg.role === 'user' && (
                     <div className="flex items-center justify-end gap-2 mb-2 opacity-50">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#D97706]">The Architect</span>
                     </div>
                   )}
                   
                   <div className="text-stone-800">
                     {msg.isError ? msg.content : renderFormattedContent(msg.content)}
                   </div>

                 </div>
               </div>
             ))}
             <div ref={messagesEndRef} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePlayground;