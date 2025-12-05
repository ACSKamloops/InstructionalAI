
import { ToolType, TranslationMode, ChallengeIntensity } from '../types';

// Helper to get translation mode label
const getTranslationModeLabel = (mode?: string): string => {
    switch (mode) {
        case TranslationMode.ACADEMIC_VERNACULAR:
        case 'academic_vernacular':
            return 'Academic to Plain Language';
        case TranslationMode.TECHNICAL_NARRATIVE:
        case 'technical_narrative':
            return 'Technical Specifications to Narrative Story';
        case TranslationMode.LEGAL_OPERATIONAL:
        case 'legal_operational':
            return 'Legal/Policy Language to Actionable Checklist';
        default:
            return 'Academic to Plain Language';
    }
};

// Helper to get challenge intensity description
const getChallengeIntensityDesc = (intensity?: string): string => {
    switch (intensity) {
        case ChallengeIntensity.GENTLE:
        case 'gentle':
            return 'supportive and exploratory';
        case ChallengeIntensity.RIGOROUS:
        case 'rigorous':
            return 'challenging and demanding strong evidence';
        case ChallengeIntensity.MODERATE:
        case 'moderate':
        default:
            return 'balanced between support and challenge';
    }
};

export const getSystemInstruction = (tool: ToolType): string => {
    switch (tool) {
      case ToolType.REMIX:
        return `You are The Epistemic Translator - an expert in knowledge transfer across registers. You strictly follow Chain-of-Thought reasoning with Fidelity Verification.

CRITICAL CONSTRAINTS:
- You NEVER generate any non-English language content
- You NEVER attempt to translate INTO Indigenous or local languages
- You preserve critical academic terminology while adapting register
- You always produce a Distortion Report identifying where nuance may have been lost

Your phases: ANALYSIS → SYNTHESIS → VERIFICATION → OUTPUT`;

      case ToolType.INTEREST_SKIN:
        return `You are a Creative Learning Designer who specializes in gamified education. You strictly adhere to 'Structure Precedes Content'. 

IMMUTABLE RULE: The academic/mathematical/scientific logic MUST remain unchanged. Only the narrative context (the "skin") adapts to student interests.

You treat students as capable engineers and problem-solvers, not passive recipients.`;

      case ToolType.METAPHOR_MAPPER:
        return `You are The Isomorphic Analyst - a Systems Thinking Expert specializing in structural analogies.

CRITICAL CONSTRAINTS:
- The USER is the domain expert - they teach YOU about both systems
- You identify structural isomorphisms (functional relationships)
- You ALWAYS produce a "Friction Report" showing where the analogy breaks down
- You NEVER assume cultural or specialized knowledge - ask if uncertain

Your output reveals the underlying architecture common to both systems.`;

      case ToolType.PROJECT_BREAKER:
        return `You are The Recursive Architect - an expert Executive Function Coach.

You decompose projects across four domains:
1. TECHNICAL (skills, tools, deliverables)
2. REGULATORY (deadlines, requirements, approvals)
3. COMMUNITY (stakeholders, collaboration, communication)
4. FINANCIAL (budget, resources, costs)

You identify dependencies, risk surfaces, and critical paths. Your output empowers students with a clear "Quest Log" that makes overwhelming tasks manageable.`;

      case ToolType.BLIND_SPOT:
        return `You are The Epistemic Auditor - a Critical Analysis Specialist operating in distinct phases.

PHASE 1: CLAIM EXTRACTION - Identify all claims made in the argument
PHASE 2: SOURCE AUDIT - Does the evidence actually support the claims?
PHASE 3: PERSPECTIVE SCAN - Apply required analytical lenses (Economic, Ecological, Historical, Relational)
PHASE 4: ADVERSARIAL CHALLENGE - Generate Devil's Advocate questions

CRITICAL: You DO NOT write content for the student. You generate Challenge Questions that force deeper thinking. Include confidence levels for your findings.`;

      case ToolType.SYNTAX_SCAFFOLDER:
        return `You are The Linguistic Architect - a specialist in generating English-language practice scenarios.

ABSOLUTE PROHIBITION: You MUST NEVER generate, write, or attempt to translate ANY non-English language. You CANNOT write in Indigenous languages, local languages, or any language other than English. This is non-negotiable.

Your role: Generate English scenarios that create communicative contexts requiring specific grammatical structures. The human instructor/Elder provides ALL actual language instruction.

Output: English scenarios with visual descriptions that set up practice opportunities.`;

      case ToolType.RUBRIC_ARCHITECT:
        return `You are a Curriculum Assessment Specialist using Iterative Verification.

Process:
1. Draft in standard academic language
2. Self-critique for age-appropriateness and clarity
3. Rewrite into "I Can" statements students actually understand

Never accept the first draft. Always question: "Would a student at this level understand what success looks like?"`;

      case ToolType.DIFFICULT_EMAIL:
        return `You are a Compassionate School Administrator skilled in sensitive communication.

You use Role Priming to adopt supportive personas and the Sandwich Method (Connection → Issue → Path Forward).

Your emails are collaborative, never accusatory. They acknowledge complexity and invite partnership in solutions.`;

      case ToolType.DEEP_DIVER:
        return `You are The Cognitive Archaeologist - a Senior Behavioral Specialist with dual-system reasoning capability.

SYSTEM 1 (Fast): Immediate triage for straightforward situations
SYSTEM 2 (Deep): Multi-layer analysis with visible reasoning for complex situations

When in System 2 mode:
- Use <thinking> tags to show your reasoning process
- EXCAVATE ASSUMPTIONS: What are we taking for granted?
- GENERATE COUNTER-HYPOTHESES: What alternative explanations exist?
- Consider trauma-informed, equity, and systemic perspectives`;

      default:
        return "You are a helpful teaching assistant focused on supporting student learning with intellectual rigor and respect.";
    }
};

export const constructPrompt = (tool: ToolType, inputs: any): string => {
    switch (tool) {
      case ToolType.REMIX:
        const translationMode = getTranslationModeLabel(inputs.translationMode);
        return `Task: Apply the "Epistemic Translation" method using Chain-of-Thought reasoning.

TRANSLATION MODE: ${translationMode}

=== PHASE 1: ANALYSIS ===
Extract the core elements from the source text.
Identify critical terms that MUST be preserved: ${inputs.terms}
Note the logical/scientific relationships that must remain accurate.

=== PHASE 2: SYNTHESIS ===
Target audience: ${inputs.grade}
Rewrite the text while:
- KEEPING all critical academic terms (${inputs.terms})
- Adapting sentence complexity for the audience
- Preserving all logical/causal relationships
- Using concrete examples where helpful

=== PHASE 3: VERIFICATION ===
Check your translation:
- Did you preserve all critical terms?
- Is the science/logic still accurate?
- Would the target audience understand this?

=== PHASE 4: OUTPUT ===
Provide:
1. The translated text
2. A DISTORTION REPORT listing:
   - Which nuances may have been simplified
   - Which relationships might be less clear
   - Confidence level (High/Medium/Low) in fidelity

SOURCE TEXT:
"${inputs.text}"`;
      
      case ToolType.INTEREST_SKIN:
        return `Task: Create a "${inputs.interest} Challenge" for topic: ${inputs.topic}

=== IMMUTABLE SKELETON (Core Logic) ===
Academic concept: ${inputs.topic}
This logic CANNOT be changed. All calculations/relationships must remain mathematically/scientifically accurate.

=== CHANGEABLE SKIN (Narrative Context) ===
Student interest: ${inputs.interest}
Apply this interest as the story wrapper around the immutable logic.

=== THE SPECIFIC CHALLENGE ===
${inputs.problem}

=== OUTPUT FORMAT ===
**🎯 The Setup** (Narrative hook that connects to their interest)

**⚡ The Mission** (The actual problem, clearly stated with all numbers/data)

**💡 The Hint** (A conceptual nudge, not the answer)

**🔬 Why This Matters** (Real-world connection)`;

      case ToolType.METAPHOR_MAPPER:
        const frictionAnalysis = inputs.includesFriction !== false;
        return `Task: Analyze structural isomorphisms between two systems.

=== TARGET SYSTEM (Complex concept to understand) ===
${inputs.target}

=== BASE SYSTEM (Familiar domain for comparison) ===
${inputs.base}

=== MAPPING STRICTNESS: ${inputs.strictness?.toUpperCase() || 'STRICT'} ===
${inputs.strictness === 'loose' ? 'Focus on conceptual parallels; some flexibility allowed.' : 'Require precise 1:1 functional correspondences.'}

=== ANALYSIS PROTOCOL ===

**PHASE 1: Actor Identification**
Identify 4-5 key actors/components in EACH system.

**PHASE 2: Functional Mapping**
Create explicit mappings: "X in System A → Y in System B because they both [function]"

**PHASE 3: Interaction Analysis**
Explain: "When [Actor A] does [Action], it is like when [Actor B] does [Action] because..."

${frictionAnalysis ? `**PHASE 4: FRICTION REPORT**
CRITICAL: Explicitly identify where this analogy BREAKS DOWN:
- What aspects of the Target System have NO equivalent in the Base System?
- What might students MISUNDERSTAND if they take the metaphor too literally?
- What important nuances are LOST in this comparison?` : ''}`;

      case ToolType.PROJECT_BREAKER:
        const domains = inputs.domains || 'Technical, Community';
        const riskLevel = inputs.riskTolerance || 'medium';
        return `Task: Decompose this project into an actionable Quest Log.

=== THE MONOLITH ===
"${inputs.task}"

=== CONSTRAINTS ===
Timeline: ${inputs.time}
Domain Focus: ${domains}
Risk Tolerance: ${riskLevel}

=== DECOMPOSITION PROTOCOL ===

**PHASE 1: Domain Branches**
Create main branches for each relevant domain:
${domains.includes('Technical') ? '- 🔧 TECHNICAL: Skills, tools, deliverables' : ''}
${domains.includes('Regulatory') ? '- 📋 REGULATORY: Deadlines, requirements, approvals' : ''}
${domains.includes('Community') ? '- 👥 COMMUNITY: Stakeholders, collaboration' : ''}
${domains.includes('Financial') ? '- 💰 FINANCIAL: Budget, resources' : ''}

**PHASE 2: Micro-Tasks**
Break each branch into ~20-minute tasks.

**PHASE 3: Dependency Mapping**
Identify: What MUST happen before what?

**PHASE 4: Risk Surface Analysis**
Based on ${riskLevel} risk tolerance, flag:
- Where could this fail?
- What are the warning signs?
- What's the backup plan?

**PHASE 5: Critical Path**
Highlight the sequence of tasks that determines the minimum timeline.

=== OUTPUT: QUEST LOG ===
Present as an encouraging, gamified checklist with:
- Clear checkboxes
- Time estimates
- Dependencies noted
- Risk flags where appropriate`;

      case ToolType.BLIND_SPOT:
        const intensity = getChallengeIntensityDesc(inputs.intensity);
        return `Task: Conduct an Epistemic Audit of this student argument.

=== TOPIC ===
${inputs.topic}

=== STUDENT'S ARGUMENT ===
"${inputs.text}"

=== REQUIRED ANALYTICAL LENSES ===
${inputs.perspectives}

=== CHALLENGE INTENSITY: ${(inputs.intensity || 'moderate').toUpperCase()} ===
Your questioning should be ${intensity}.

=== AUDIT PROTOCOL ===

**PHASE 1: CLAIM EXTRACTION**
List every explicit and implicit claim in the argument.
Format: "Claim 1: [statement] | Evidence provided: [yes/no/partial]"

**PHASE 2: SOURCE AUDIT**
For each claim, assess: Does the evidence actually support this?
Flag unsupported assertions.

**PHASE 3: PERSPECTIVE SCAN**
Scan through each required lens:
${inputs.perspectives?.split(',').map((p: string) => `- ${p.trim()}: [Present/Absent/Partial]`).join('\n') || '- Economic\n- Ecological\n- Historical\n- Relational'}

**PHASE 4: ADVERSARIAL CHALLENGE**
Generate 4-5 specific Challenge Questions that:
- Target the weakest points
- Force consideration of missing perspectives  
- Push for evidence and specificity
- Are ${intensity}

CRITICAL: DO NOT write content for the student. Only generate questions.

**CONFIDENCE ASSESSMENT**
Rate your confidence in each finding: High/Medium/Low`;

      case ToolType.SYNTAX_SCAFFOLDER:
        const grammarStructure = inputs.structure || inputs.rule;
        return `Task: Generate English Practice Scenarios for grammar instruction.

⚠️ ABSOLUTE PROHIBITION ⚠️
You MUST NOT generate ANY non-English text.
You MUST NOT translate, transliterate, or write in ANY Indigenous or local language.
The human instructor provides ALL language other than English.

=== TARGET GRAMMAR ===
Rule: ${inputs.rule}
Structure: ${grammarStructure}

=== CONTEXT ===
Setting: ${inputs.context}
Difficulty: ${inputs.difficulty}

=== GENERATION PROTOCOL ===

Create 5 English scenarios that REQUIRE the target grammatical structure:

For each scenario, provide:

**Scenario [#]: [Brief Title]**
- 📸 Visual: [Describe what the student should picture - be specific and vivid]
- 🗣️ English Prompt: [A clear English sentence using the target structure]
- 🎯 Grammar Focus: [What specific element this practices]
- ✓ Verification: [Confirm the sentence requires the target structure]

=== QUALITY CHECKS ===
- Avoid passive voice if it would confuse the target structure
- Use concrete, visualizable actions
- Progress from simpler to more complex within the 5 scenarios
- Ensure cultural neutrality - no assumptions about student background`;

      case ToolType.RUBRIC_ARCHITECT:
        return `Task: Create a student-friendly rubric using Iterative Verification.

=== TARGET CRITERIA ===
"${inputs.criteria}"

=== ITERATION PROTOCOL ===

**DRAFT 1: Academic Language**
Write the rubric in standard professional/academic language.

**SELF-CRITIQUE**
Identify problems: "${inputs.critique}"
- What jargon would confuse students?
- What assumptions are embedded?
- Is the success criteria actually clear?

**DRAFT 2: Student Translation**
Rewrite each criterion as an "I Can" statement that a student would actually understand.
Format: "I can [observable action] by [specific evidence]"

**FINAL VERIFICATION**
- Would the target student understand what success looks like?
- Could they self-assess using these criteria?
- Are the levels clearly differentiated?`;

      case ToolType.DIFFICULT_EMAIL:
        return `Task: Draft a sensitive communication using Role Priming.

=== SITUATION ===
"${inputs.situation}"

=== ADOPTED PERSONA ===
${inputs.persona}

=== COMMUNICATION PROTOCOL ===

**Structure: The Sandwich Method**

1. **CONNECTION** (Opening)
   - Acknowledge the relationship
   - Express genuine care/positive intent
   - Set collaborative tone

2. **THE MATTER** (Body)
   - State the situation factually, not judgmentally
   - Use "I" statements and observations
   - Acknowledge complexity/context where appropriate
   - Avoid blame or accusation

3. **PATH FORWARD** (Closing)
   - Propose concrete next steps
   - Invite partnership in solution
   - Leave door open for dialogue
   - End with warmth

=== CONSTRAINTS ===
- Tone: Collaborative, never accusatory
- Length: Concise but complete
- Action: Clear call to partnership`;

      case ToolType.DEEP_DIVER:
        if (inputs.mode === "fast") {
            return `Task: System 1 Triage - Immediate Response Protocol

=== SCENARIO ===
${inputs.scenario}

=== SYSTEM 1 PARAMETERS ===
Mode: Fast/Reactive
Goal: Efficient, directive guidance
Constraint: Do not over-analyze

=== OUTPUT ===
Provide:
1. **Immediate Action** (What to do right now)
2. **Key Principle** (Why this approach)
3. **Follow-up Trigger** (When to escalate to System 2)`;
        } else {
            return `Task: System 2 Deep Analysis - Cognitive Archaeology Protocol

=== SCENARIO ===
"${inputs.scenario}"

=== SYSTEM 2 ACTIVATION ===

<thinking>
**STEP 1: DISENGAGE SYSTEM 1**
Pause reactive interpretations. What assumptions am I making?

**STEP 2: ASSUMPTION EXCAVATION**
What are we taking for granted about:
- The student's intentions?
- The context/triggers?
- Our own biases?

**STEP 3: COUNTER-HYPOTHESIS GENERATION**
Generate 3-4 alternative interpretations beyond the obvious:
- What if this is about [X] rather than [Y]?
- What systemic factors might be at play?
- What don't we know that we should find out?

**STEP 4: MULTI-LENS ANALYSIS**
Apply these perspectives:
- Trauma-Informed: What might this behavior be protecting?
- Equity Lens: Are there systemic factors?
- Developmental: Is this age-appropriate struggle?
- Relational: What's happening in their relationships?

**STEP 5: INTERVENTION CALCULUS**
Weigh options:
- Immediate intervention: Pros/Cons
- De-escalation first: Pros/Cons
- Systemic approach: Pros/Cons
</thinking>

=== STRATEGY OUTPUT ===
Based on the deep analysis above:

**Understanding** (What we now see)

**3-Step Intervention Plan**
1. Immediate: [Action]
2. Short-term: [Follow-up]
3. Long-term: [Systemic support]

**Monitoring Indicators** (How we'll know if this is working)`;
        }
      
      default:
        return "";
    }
};