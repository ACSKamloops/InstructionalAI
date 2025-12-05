import React from 'react';
import { CheckSquare, FileText, ShieldAlert, Mail, Zap } from 'lucide-react';

export const RubricArchitectSlide: React.FC = () => (
  <div className="flex flex-col h-full">
    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
       <span className="bg-amber-100 p-2 rounded-xl"><CheckSquare className="text-amber-600" size={32}/></span>
       Tool: The Rubric Architect
    </h2>
     <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8 overflow-hidden relative">
         <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rotate-0 shadow-md transform translate-x-0 translate-y-0">
            ITERATIVE VERIFICATION
         </div>
         <table className="w-full text-sm">
             <thead>
                 <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                     <th className="p-3 text-left">Criteria</th>
                     <th className="p-3 text-left">4 (Exceeds)</th>
                     <th className="p-3 text-left">3 (Proficient)</th>
                     <th className="p-3 text-left">2 (Developing)</th>
                 </tr>
             </thead>
             <tbody className="divide-y divide-slate-100">
                 <tr>
                     <td className="p-3 font-bold text-slate-800">Visual Aids</td>
                     <td className="p-3 text-slate-600">Demonstrates mastery...</td>
                     <td className="p-3 text-slate-600">Demonstrates competence...</td>
                     <td className="p-3 text-slate-600 relative">
                         <span className="line-through opacity-30">Uses some aids</span>
                         <span className="block text-red-600 font-medium">Needs improvement in clarity</span>
                         <div className="absolute -top-2 -right-2 text-[10px] bg-red-100 text-red-700 px-1 rounded border border-red-200">AI Self-Correction</div>
                     </td>
                 </tr>
                 <tr>
                     <td className="p-3 font-bold text-slate-800">Eye Contact</td>
                     <td className="p-3 text-slate-600">Consistently engages...</td>
                     <td className="p-3 text-slate-600">Frequently looks up...</td>
                     <td className="p-3 text-slate-600">Reads from notes...</td>
                 </tr>
             </tbody>
         </table>
     </div>
     <div className="grid md:grid-cols-2 gap-8">
        <div>
           <h4 className="font-bold text-slate-900">The Solution</h4>
           <p className="text-slate-600">Use <strong>Iterative Verification</strong>. Ask the AI to draft the rubric, then critique its own work for clarity before finalizing it.</p>
        </div>
        <div>
           <h4 className="font-bold text-slate-900">Why It Works</h4>
           <p className="text-slate-600">It forces the AI to check student-friendliness and remove "hallucinated" complexity.</p>
        </div>
     </div>
  </div>
);

export const FlashcardFactorySlide: React.FC = () => (
  <div className="flex flex-col h-full">
    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
       <span className="bg-pink-100 p-2 rounded-xl"><FileText className="text-pink-600" size={32}/></span>
       Tool: The Flashcard Factory
    </h2>
    <div className="flex-1 bg-slate-100 rounded-3xl p-8 relative overflow-hidden flex items-center justify-center">
         {/* Factory Conveyor Belt Visual */}
         <div className="flex gap-4 items-center animate-in slide-in-from-right duration-1000">
             {[1,2,3].map(i => (
                 <div key={i} className="bg-white w-40 h-56 rounded-xl shadow-lg border border-slate-200 p-4 flex flex-col gap-2 relative">
                     <div className="w-full h-24 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center">
                         <div className="text-xs text-slate-300">Image Placeholder</div>
                     </div>
                     <div className="h-4 bg-slate-100 w-3/4 rounded"></div>
                     <div className="h-4 bg-slate-100 w-1/2 rounded"></div>
                     <div className="mt-auto border-t border-slate-100 pt-2">
                         <div className="text-[10px] text-slate-400 uppercase">Teacher Translation:</div>
                         <div className="h-6 border-b border-slate-300"></div>
                     </div>
                 </div>
             ))}
         </div>
         <div className="absolute bottom-0 w-full h-4 bg-slate-300">
             <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#94a3b8_10px,#94a3b8_20px)] opacity-20"></div>
         </div>
    </div>
     <div className="mt-8 bg-red-50 border border-red-200 p-4 rounded-xl flex gap-4 items-center">
         <ShieldAlert className="text-red-600 shrink-0" size={24}/>
         <p className="text-red-900 text-sm font-medium">
             <strong>Red Zone Warning:</strong> NEVER ask the AI to translate or generate Indigenous languages. It will hallucinate. The AI builds the English scaffold; YOU provide the sovereign knowledge.
         </p>
     </div>
  </div>
);

export const DifficultEmailSlide: React.FC = () => (
  <div className="flex flex-col h-full items-center">
    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
       <span className="bg-indigo-100 p-2 rounded-xl"><Mail className="text-indigo-600" size={32}/></span>
       Tool: The Difficult Email
    </h2>
    <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl">
        <div className="space-y-6">
            <div>
                <strong className="text-lg block text-slate-900">The Problem</strong>
                <p className="text-slate-600">Writing emails about sensitive issues (behavior, attendance) is emotionally draining.</p>
            </div>
            <div>
                <strong className="text-lg block text-slate-900">The Solution</strong>
                <p className="text-slate-600">Use 'Role Priming' + 'Tone Constraints'.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                <h4 className="font-bold text-indigo-900 mb-2">Prompt Strategy</h4>
                <ul className="text-sm text-indigo-800 space-y-2">
                    <li>• <strong>Role:</strong> "Compassionate Mediator"</li>
                    <li>• <strong>Tone:</strong> "Collaborative, not accusatory"</li>
                    <li>• <strong>Method:</strong> "Sandwich Method" (Positive-Challenge-Positive)</li>
                </ul>
            </div>
        </div>
        <div className="relative">
            <div className="absolute inset-0 bg-slate-200 transform rotate-3 rounded-xl"></div>
            <div className="relative bg-white p-8 rounded-xl shadow-lg border border-slate-200">
                 <h3 className="font-serif font-bold text-2xl mb-4 text-slate-800">Peace Treaty</h3>
                 <div className="space-y-3 font-serif text-slate-600">
                     <p>Dear Parent,</p>
                     <p>We miss seeing [Student X] in our morning circle...</p>
                     <p className="bg-yellow-100/50 -mx-1 px-1">We want to partner with you to solve this...</p>
                 </div>
                 <Zap className="absolute -top-4 -right-4 text-yellow-500 fill-yellow-500" size={32}/>
            </div>
        </div>
    </div>
  </div>
);