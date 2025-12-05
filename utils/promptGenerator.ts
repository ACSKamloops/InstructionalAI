
import { ToolType } from '../types';

export const getSystemInstruction = (tool: ToolType): string => {
    switch (tool) {
      case ToolType.REMIX:
        return "You are an expert Special Education teacher and local curriculum specialist. You strictly follow Chain-of-Thought reasoning. You must Identify terms first, then Strategize, then Remix, then Verify.";
      case ToolType.INTEREST_SKIN:
        return "You are a Creative Math Designer who specializes in gamified learning. You strictly adhere to 'Structure Precedes Content'. The academic logic must remain immutable, while the narrative skin changes to match the student's interest.";
      case ToolType.METAPHOR_MAPPER:
        return "You are a Systems Thinking Expert. You specialize in Analogical Mapping. You must map the functions of a Target System onto a Base System with strict adherence to functional relationships. You must identify where the metaphor fails (Gap Analysis).";
      case ToolType.PROJECT_BREAKER:
        return "You are an expert Executive Function Coach. You use Tree-of-Thought decomposition to break large tasks into parallel branches (Phases) and then into micro-steps. Your output must be a 'Quest Log'.";
      case ToolType.BLIND_SPOT:
        return "You are a Critical Debate Coach and Red Team Analyst. You analyze student arguments to identify 'Blind Spots'—perspectives or data that are missing. You DO NOT write the content; you generate Challenge Questions to force the student to think deeper.";
      case ToolType.SYNTAX_SCAFFOLDER:
        return "You are a Linguistics Drill Instructor for language revitalization. You generally DO NOT speak the local language. You speak English. Your task is to generate English 'Bridge Scenarios' that set up a student to practice specific grammar rules. You must NOT translate.";
      case ToolType.RUBRIC_ARCHITECT:
        return "You are a Curriculum Assessment Specialist. You use 'Iterative Verification'. You never accept the first draft. You always critique it for age-appropriateness and simplicity before finalizing.";
      case ToolType.DIFFICULT_EMAIL:
        return "You are a Compassionate School Administrator. You use 'Role Priming' to adopt a specific, supportive persona. You use the 'Sandwich Method' (Connection - Issue - Solution).";
      case ToolType.DEEP_DIVER:
        return "You are a Senior Behavioral Specialist. You are capable of 'System 1' (Reactive) and 'System 2' (Deep Reasoning) thinking. When in System 2 mode, you MUST output your internal monologue inside <thinking> tags before providing the strategy.";
      default:
        return "You are a helpful teaching assistant.";
    }
};

export const constructPrompt = (tool: ToolType, inputs: any): string => {
    switch (tool) {
      case ToolType.REMIX:
        return `Task: Apply the "Remix Method" using Chain-of-Thought reasoning.
        
Step 1: Identify the most critical academic terms (e.g., ${inputs.terms}).
Step 2: Rewrite the text for ${inputs.grade}, but KEEP the critical terms.
Step 3: Verify your work. Did you keep the science/logic accurate?

Source Text: "${inputs.text}"`;
      
      case ToolType.INTEREST_SKIN:
        return `Task: Create a "${inputs.interest} Challenge" based on this topic: ${inputs.topic}.

Constraint - Structure Precedes Content:
1. The Core Logic: The problem MUST require using ${inputs.topic}. This logic cannot change.
2. The Skin: Contextualize this as ${inputs.interest}.
3. The Specific Problem: ${inputs.problem}

Output Format:
- Narrative Hook
- The Mission (The Problem)
- The Hint`;

      case ToolType.METAPHOR_MAPPER:
        return `Task: Explain [Target System: ${inputs.target}] by mapping it to [Base System: ${inputs.base}].
        
Constraint - Functional Isomorphism (${inputs.strictness}):
1. Identify 4 key actors in the Target System.
2. Identify 4 key actors in the Base System that correspond functionally.
3. Interaction Analysis: Explain "When A does [Action], it is like when B does [Action] because..."
4. Gap Analysis: Explicitly state one way this metaphor FAILS (where the comparison breaks down).`;

      case ToolType.PROJECT_BREAKER:
        return `Task: Break down this assignment into a "Tree of Steps": "${inputs.task}" due in ${inputs.time}.

Technique: Tree-of-Thought Decomposition.
1. Create 3 main Branches (Phases).
2. Break each branch into micro-tasks (20 mins each).
Output: Present this as a "Quest Log" checklist. Keep the tone encouraging.`;

      case ToolType.BLIND_SPOT:
        return `Task: Identify the "Blind Spots" in this student argument about: ${inputs.topic}.

Input Text: "${inputs.text}"

Process:
1. Summarize the student's core thesis.
2. Scan for these perspectives: ${inputs.perspectives}.
3. Detect Absence: Which lens is missing or under-represented?
4. Output: Generate 3 specific "Challenge Questions" that force the student to consider that missing lens. DO NOT write the essay for them.`;

      case ToolType.SYNTAX_SCAFFOLDER:
        return `Task: Create 5 "Translation Scenarios" for a student to practice [Grammar Rule: ${inputs.rule}].

Context: ${inputs.context}.
Difficulty: ${inputs.difficulty}.

Method:
1. Generate a short English sentence that *forces* the use of the specific rule (e.g. requires a transitive object).
2. Do NOT provide the translation.
3. Provide a visual description of the scene so the student can visualize the action.
4. Verify: Ensure the English sentence isn't passive voice if that confuses the rule.`;

      case ToolType.RUBRIC_ARCHITECT:
        return `Task: Create a student-friendly rubric for: "${inputs.criteria}".
        
Process (Iterative Verification):
1. Draft 1: Write it in standard academic language.
2. Critique: Identify why this is too complex (e.g. "${inputs.critique}").
3. Final Polish: Rewrite into "I Can" statements suitable for the student.`;

      case ToolType.DIFFICULT_EMAIL:
        return `Task: Draft an email to a parent/guardian about: "${inputs.situation}".
        
Persona: ${inputs.persona}.
Constraints:
- Tone: Collaborative, not accusatory.
- Method: Sandwich Method (Positive - Challenge - Positive).
- Call to Action: Ask for a solution we can work on together.`;

      case ToolType.DEEP_DIVER:
        if (inputs.mode === "fast") {
            return `Task: Provide a quick, immediate reaction strategy for this scenario.
Scenario: ${inputs.scenario}
Constraint: Use System 1 thinking. Be efficient and directive. Do not over-analyze.`;
        } else {
            return `Task: Analyze this behavioral incident using System 2 Hybrid Reasoning.

Scenario: "${inputs.scenario}"

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
      
      default:
        return "";
    }
};