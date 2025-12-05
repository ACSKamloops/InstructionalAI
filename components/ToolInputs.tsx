
import React from 'react';
import { Bone, Gamepad2, Thermometer, BrainCircuit, Zap, Network, Eye, MessageSquare } from 'lucide-react';

interface InputProps {
    data: any;
    onChange: (field: string, value: any) => void;
}

export const RemixInputs: React.FC<InputProps> = ({ data, onChange }) => (
    <>
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
                <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Keep Terms</label>
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
                <label className="block text-[10px] font-bold text-amber-900 uppercase tracking-wider">The Skeleton (Immutable)</label>
            </div>
            <input 
            className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white mb-2"
            value={data.topic || ''}
            onChange={(e) => onChange('topic', e.target.value)}
            placeholder="Core Logic"
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
                <label className="block text-[10px] font-bold text-purple-900 uppercase tracking-wider">The Skin (Interest)</label>
            </div>
            <input 
            className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white"
            value={data.interest || ''}
            onChange={(e) => onChange('interest', e.target.value)}
            placeholder="Student Interest"
            />
        </div>
    </>
);

export const MetaphorMapperInputs: React.FC<InputProps> = ({ data, onChange }) => (
    <>
        <div className="p-4 rounded-xl bg-violet-50/50 border border-violet-100">
            <div className="flex items-center gap-2 mb-2">
                <Network size={14} className="text-violet-600"/>
                <label className="block text-[10px] font-bold text-violet-900 uppercase tracking-wider">Target System (Complex)</label>
            </div>
            <input 
            className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white"
            value={data.target || ''}
            onChange={(e) => onChange('target', e.target.value)}
            placeholder="e.g. Human Immune System"
            />
        </div>
        <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
            <label className="block text-[10px] font-bold text-stone-500 mb-2 uppercase tracking-wider">Base System (Familiar)</label>
            <input 
            className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white"
            value={data.base || ''}
            onChange={(e) => onChange('base', e.target.value)}
            placeholder="e.g. A Hockey Team"
            />
        </div>
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
        <div>
            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Time Constraints</label>
            <input 
            className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
            value={data.time || ''}
            onChange={(e) => onChange('time', e.target.value)}
            />
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
                    <label className="block text-[10px] font-bold text-rose-900 uppercase tracking-wider">Required Lenses (To Scan For)</label>
                </div>
                <input 
                    className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white"
                    value={data.perspectives || ''}
                    onChange={(e) => onChange('perspectives', e.target.value)}
                    placeholder="e.g. Ecological, Indigenous, Economic"
                />
            </div>
        </div>
    </>
);

export const SyntaxScaffolderInputs: React.FC<InputProps> = ({ data, onChange }) => (
    <>
        <div className="p-4 rounded-xl bg-teal-50/50 border border-teal-100 mb-4">
            <div className="flex items-center gap-2 mb-2">
                <MessageSquare size={14} className="text-teal-600"/>
                <label className="block text-[10px] font-bold text-teal-900 uppercase tracking-wider">Grammar Rule</label>
            </div>
            <input 
            className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-white"
            value={data.rule || ''}
            onChange={(e) => onChange('rule', e.target.value)}
            placeholder="e.g. Transitive Verbs"
            />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Context</label>
                <input 
                    className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                    value={data.context || ''}
                    onChange={(e) => onChange('context', e.target.value)}
                    placeholder="e.g. Fishing"
                />
            </div>
            <div>
                <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Difficulty</label>
                <select
                    className="w-full p-3 border border-stone-200 rounded-xl text-sm bg-stone-50"
                    value={data.difficulty || 'Beginner'}
                    onChange={(e) => onChange('difficulty', e.target.value)}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
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
                    <div className="flex items-center justify-center gap-2"><Zap size={14}/> System 1 (Fast)</div>
                </button>
                <button 
                    onClick={() => onChange('mode', 'slow')}
                    className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${data.mode === 'slow' ? 'bg-cyan-100 text-cyan-800 shadow-sm' : 'text-stone-400 hover:text-cyan-600'}`}
                >
                    <div className="flex items-center justify-center gap-2"><BrainCircuit size={14}/> System 2 (Deep)</div>
                </button>
            </div>
        </div>
        <div>
            <label className="block text-[11px] font-bold text-stone-500 mb-2 uppercase tracking-wide">Behavioral Scenario</label>
            <textarea 
            className="w-full p-3.5 border border-stone-200 rounded-xl text-sm h-28 focus:ring-cyan-500/50 bg-stone-50 resize-none transition-all"
            value={data.scenario || ''}
            onChange={(e) => onChange('scenario', e.target.value)}
            />
        </div>
    </>
);