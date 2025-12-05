
import React from 'react';
import { Bone, Gamepad2, BrainCircuit, Zap, Network, Eye, MessageSquare, AlertTriangle } from 'lucide-react';
import { TranslationMode, ChallengeIntensity } from '../types';

interface InputProps {
    data: any;
    onChange: (field: string, value: any) => void;
}

export const RemixInputs: React.FC<InputProps> = ({ data, onChange }) => (
    <>
        <div>
            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Translation Mode</label>
            <select
                className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50 mb-3"
                value={data.translationMode || TranslationMode.ACADEMIC_VERNACULAR}
                onChange={(e) => onChange('translationMode', e.target.value)}
            >
                <option value={TranslationMode.ACADEMIC_VERNACULAR}>Academic ↔ Plain Language</option>
                <option value={TranslationMode.TECHNICAL_NARRATIVE}>Technical ↔ Narrative Story</option>
                <option value={TranslationMode.LEGAL_OPERATIONAL}>Legal/Policy ↔ Actionable Checklist</option>
            </select>
        </div>
        <div>
            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Source Text</label>
            <textarea 
            className="w-full p-3.5 border border-stone-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-900/10 h-32 leading-relaxed text-stone-700 resize-none bg-stone-50"
            value={data.text || ''}
            onChange={(e) => onChange('text', e.target.value)}
            placeholder="Paste complex text..."
            />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Target Audience</label>
                <input 
                    className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                    value={data.grade || ''}
                    onChange={(e) => onChange('grade', e.target.value)}
                />
            </div>
            <div>
                <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Preserve Terms</label>
                <input 
                    className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                    value={data.terms || ''}
                    onChange={(e) => onChange('terms', e.target.value)}
                    placeholder="e.g. Alevin, Fry"
                />
            </div>
        </div>
    </>
);

export const InterestSkinInputs: React.FC<InputProps> = ({ data, onChange }) => (
    <>
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
            <div className="flex items-center gap-2 mb-2">
                <Bone size={14} className="text-amber-600"/>
                <label className="block text-[10px] font-bold text-amber-900 uppercase tracking-wider">The Skeleton (Immutable Logic)</label>
            </div>
            <input 
            className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white mb-2"
            value={data.topic || ''}
            onChange={(e) => onChange('topic', e.target.value)}
            placeholder="Core Concept (e.g., Slope as Rise/Run)"
            />
            <textarea 
            className="w-full p-2.5 border border-stone-200 rounded-lg text-xs bg-white h-20 resize-none"
            value={data.problem || ''}
            onChange={(e) => onChange('problem', e.target.value)}
            placeholder="Specific Problem Statement..."
            />
        </div>
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
            <div className="flex items-center gap-2 mb-2">
                <Gamepad2 size={14} className="text-purple-500"/>
                <label className="block text-[10px] font-bold text-purple-900 uppercase tracking-wider">The Skin (Student Interest)</label>
            </div>
            <input 
            className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white"
            value={data.interest || ''}
            onChange={(e) => onChange('interest', e.target.value)}
            placeholder="e.g., Basketball, Cooking, Gaming"
            />
        </div>
    </>
);

export const MetaphorMapperInputs: React.FC<InputProps> = ({ data, onChange }) => (
    <>
        <div className="p-4 rounded-xl bg-violet-50/50 border border-violet-100">
            <div className="flex items-center gap-2 mb-2">
                <Network size={14} className="text-violet-600"/>
                <label className="block text-[10px] font-bold text-violet-900 uppercase tracking-wider">System A - Target (Complex Concept)</label>
            </div>
            <textarea 
            className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white h-20 resize-none"
            value={data.target || ''}
            onChange={(e) => onChange('target', e.target.value)}
            placeholder="Describe the complex system you want to explain (you are the expert - teach the AI)"
            />
        </div>
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
            <div className="flex items-center gap-2 mb-2">
                <Network size={14} className="text-stone-600"/>
                <label className="block text-[10px] font-bold text-stone-700 uppercase tracking-wider">System B - Base (Familiar Reference)</label>
            </div>
            <textarea 
            className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white h-20 resize-none"
            value={data.base || ''}
            onChange={(e) => onChange('base', e.target.value)}
            placeholder="Describe the familiar system for comparison (you are the expert - teach the AI)"
            />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Mapping Strictness</label>
                <select
                    className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                    value={data.strictness || 'strict'}
                    onChange={(e) => onChange('strictness', e.target.value)}
                >
                    <option value="strict">Strict (1:1 Functional)</option>
                    <option value="loose">Loose (Conceptual)</option>
                </select>
            </div>
            <div>
                <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Include Friction Analysis</label>
                <div className="flex items-center gap-3 p-3 border border-stone-200 rounded-xl bg-stone-50">
                    <input
                        type="checkbox"
                        id="friction-toggle"
                        checked={data.includesFriction !== false}
                        onChange={(e) => onChange('includesFriction', e.target.checked)}
                        className="w-4 h-4 text-violet-600 rounded"
                    />
                    <label htmlFor="friction-toggle" className="text-sm text-stone-600">Show where analogy breaks</label>
                </div>
            </div>
        </div>
    </>
);

export const ProjectBreakerInputs: React.FC<InputProps> = ({ data, onChange }) => (
    <>
        <div>
            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">The Monolith (Task)</label>
            <textarea 
            className="w-full p-3.5 border border-stone-200 rounded-xl text-sm h-28 focus:ring-emerald-500/20 bg-stone-50 resize-none"
            value={data.task || ''}
            onChange={(e) => onChange('task', e.target.value)}
            />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Time Constraints</label>
                <input 
                className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                value={data.time || ''}
                onChange={(e) => onChange('time', e.target.value)}
                />
            </div>
            <div>
                <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Risk Tolerance</label>
                <select
                    className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                    value={data.riskTolerance || 'medium'}
                    onChange={(e) => onChange('riskTolerance', e.target.value)}
                >
                    <option value="low">Low (Flag everything)</option>
                    <option value="medium">Medium (Balanced)</option>
                    <option value="high">High (Major risks only)</option>
                </select>
            </div>
        </div>
        <div>
            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Domain Focus</label>
            <div className="grid grid-cols-2 gap-2">
                {['Technical', 'Regulatory', 'Community', 'Financial'].map((domain) => (
                    <label key={domain} className="flex items-center gap-2 p-2 border border-stone-200 rounded-lg bg-stone-50 cursor-pointer hover:bg-stone-100">
                        <input
                            type="checkbox"
                            checked={(data.domains || 'Technical, Community').includes(domain)}
                            onChange={(e) => {
                                const currentDomains = (data.domains || 'Technical, Community').split(', ').filter(d => d.trim());
                                if (e.target.checked) {
                                    // Only add if not already present
                                    if (!currentDomains.includes(domain)) {
                                        onChange('domains', [...currentDomains, domain].join(', '));
                                    }
                                } else {
                                    onChange('domains', currentDomains.filter(d => d !== domain).join(', '));
                                }
                            }}
                            className="w-4 h-4 text-emerald-600 rounded"
                        />
                        <span className="text-sm text-stone-600">{domain}</span>
                    </label>
                ))}
            </div>
        </div>
    </>
);

export const BlindSpotInputs: React.FC<InputProps> = ({ data, onChange }) => (
    <>
        <div>
            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Student Argument/Text</label>
            <textarea 
            className="w-full p-3.5 border border-stone-200 rounded-xl text-sm h-28 focus:ring-rose-500/20 bg-stone-50 resize-none"
            value={data.text || ''}
            onChange={(e) => onChange('text', e.target.value)}
            placeholder="Paste student work or summary..."
            />
        </div>
        <div className="grid grid-cols-1 gap-4">
            <div>
                <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Topic</label>
                <input 
                    className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                    value={data.topic || ''}
                    onChange={(e) => onChange('topic', e.target.value)}
                />
            </div>
            <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
                <div className="flex items-center gap-2 mb-2">
                    <Eye size={14} className="text-rose-600"/>
                    <label className="block text-[10px] font-bold text-rose-900 uppercase tracking-wider">Required Analytical Lenses</label>
                </div>
                <input 
                    className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white"
                    value={data.perspectives || ''}
                    onChange={(e) => onChange('perspectives', e.target.value)}
                    placeholder="e.g. Economic, Ecological, Historical, Relational"
                />
            </div>
            <div>
                <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Challenge Intensity</label>
                <select
                    className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                    value={data.intensity || ChallengeIntensity.MODERATE}
                    onChange={(e) => onChange('intensity', e.target.value)}
                >
                    <option value={ChallengeIntensity.GENTLE}>Gentle (Supportive, exploratory)</option>
                    <option value={ChallengeIntensity.MODERATE}>Moderate (Balanced)</option>
                    <option value={ChallengeIntensity.RIGOROUS}>Rigorous (Demanding evidence)</option>
                </select>
            </div>
        </div>
    </>
);

export const SyntaxScaffolderInputs: React.FC<InputProps> = ({ data, onChange }) => (
    <>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4">
            <div className="flex items-start gap-2">
                <AlertTriangle size={16} className="text-amber-600 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-800">
                    <strong>Important:</strong> AI generates English scenarios ONLY. Human instructor/Elder provides all actual language instruction. AI will NOT attempt any translation or language generation.
                </p>
            </div>
        </div>
        <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-100 mb-4">
            <div className="flex items-center gap-2 mb-2">
                <MessageSquare size={14} className="text-teal-600"/>
                <label className="block text-[10px] font-bold text-teal-900 uppercase tracking-wider">Target Grammar Structure</label>
            </div>
            <input 
            className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white mb-2"
            value={data.rule || ''}
            onChange={(e) => onChange('rule', e.target.value)}
            placeholder="e.g. Transitive Verbs, Possessives, Conditionals"
            />
            <input 
            className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white"
            value={data.structure || ''}
            onChange={(e) => onChange('structure', e.target.value)}
            placeholder="Structure pattern (e.g., Subject + Verb + Object)"
            />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Context/Setting</label>
                <input 
                    className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                    value={data.context || ''}
                    onChange={(e) => onChange('context', e.target.value)}
                    placeholder="e.g. Fishing, Cooking, Community"
                />
            </div>
            <div>
                <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Scenario Complexity</label>
                <select
                    className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                    value={data.difficulty || 'Beginner'}
                    onChange={(e) => onChange('difficulty', e.target.value)}
                >
                    <option value="Beginner">Beginner (Simple sentences)</option>
                    <option value="Intermediate">Intermediate (Compound)</option>
                    <option value="Advanced">Advanced (Complex contexts)</option>
                </select>
            </div>
        </div>
    </>
);

export const RubricInputs: React.FC<InputProps> = ({ data, onChange }) => (
    <>
        <div>
            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Draft Criteria (Jargon)</label>
            <textarea 
            className="w-full p-3.5 border border-stone-200 rounded-xl text-sm h-20 bg-stone-50 resize-none"
            value={data.criteria || ''}
            onChange={(e) => onChange('criteria', e.target.value)}
            />
        </div>
        <div>
            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Self-Critique</label>
            <input 
            className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
            value={data.critique || ''}
            onChange={(e) => onChange('critique', e.target.value)}
            placeholder="Why is this too hard?"
            />
        </div>
    </>
);

export const EmailInputs: React.FC<InputProps> = ({ data, onChange }) => (
    <>
        <div>
            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Situation</label>
            <textarea 
            className="w-full p-3.5 border border-stone-200 rounded-xl text-sm h-20 bg-stone-50 resize-none"
            value={data.situation || ''}
            onChange={(e) => onChange('situation', e.target.value)}
            />
        </div>
        <div>
            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Adopt Persona</label>
            <input 
            className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
            value={data.persona || ''}
            onChange={(e) => onChange('persona', e.target.value)}
            />
        </div>
    </>
);

export const DeepDiverInputs: React.FC<InputProps> = ({ data, onChange }) => (
    <>
        <div className="p-4 rounded-xl bg-cyan-50/50 border border-cyan-100">
            <label className="block text-[11px] font-bold text-cyan-900 mb-3 uppercase tracking-wide">Cognitive Mode</label>
            <div className="flex bg-white rounded-lg p-1 border border-cyan-100 shadow-sm">
                <button 
                    onClick={() => onChange('mode', 'fast')}
                    className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${data.mode === 'fast' ? 'bg-cyan-100 text-cyan-800 shadow-sm' : 'text-stone-400 hover:text-cyan-600'}`}
                >
                    <div className="flex items-center justify-center gap-2"><Zap size={14}/> System 1 (Fast Triage)</div>
                </button>
                <button 
                    onClick={() => onChange('mode', 'slow')}
                    className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${data.mode === 'slow' ? 'bg-cyan-100 text-cyan-800 shadow-sm' : 'text-stone-400 hover:text-cyan-600'}`}
                >
                    <div className="flex items-center justify-center gap-2"><BrainCircuit size={14}/> System 2 (Deep Analysis)</div>
                </button>
            </div>
            {data.mode === 'slow' && (
                <p className="text-[10px] text-cyan-700 mt-2 px-1">
                    System 2 includes Assumption Excavation and Counter-Hypothesis Generation
                </p>
            )}
        </div>
        <div>
            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Scenario to Analyze</label>
            <textarea 
            className="w-full p-3.5 border border-stone-200 rounded-xl text-sm h-28 focus:ring-cyan-500/50 bg-stone-50 resize-none transition-all"
            value={data.scenario || ''}
            onChange={(e) => onChange('scenario', e.target.value)}
            placeholder="Describe the situation requiring analysis..."
            />
        </div>
    </>
);