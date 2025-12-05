import React from 'react';
import { CheckSquare, RefreshCw, ArrowRight } from 'lucide-react';

const Slide6_RubricArchitect: React.FC = () => (
  <div className="flex flex-col h-full items-center justify-center">
    <div className="flex items-center gap-4 mb-12 bg-amber-50 px-6 py-3 rounded-full border border-amber-100">
        <CheckSquare className="text-amber-600" size={24}/>
        <h2 className="text-2xl font-serif font-bold text-slate-900">The Rubric Architect</h2>
    </div>

    <div className="flex items-center gap-8 w-full max-w-6xl justify-center mb-16 relative">
        
        {/* Step 1: Draft */}
        <div className="w-72 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm opacity-60 scale-95">
            <div className="mb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Draft 1 (The AI's Habit)</div>
            <h3 className="font-bold text-slate-800 mb-2">Academic Jargon</h3>
            <p className="text-xs text-slate-500 font-serif italic border-l-2 border-slate-200 pl-3">"Demonstrates pedagogical mastery of complex rhetorical devices..."</p>
            <div className="mt-4 bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded w-fit">Too Complex</div>
        </div>

        {/* The Loop Arrow */}
        <div className="flex flex-col items-center mx-4 relative z-10">
             <div className="bg-amber-100 p-4 rounded-full mb-3 shadow-inner">
                <RefreshCw className="text-amber-600 animate-spin-slow" size={32} />
             </div>
             <div className="bg-white border border-amber-200 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                 Iterative Verification
             </div>
        </div>

        {/* Step 2: Final */}
        <div className="w-72 bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200 shadow-xl relative z-10 transform scale-105">
            <div className="mb-4 text-xs font-bold text-amber-600 uppercase tracking-wider">Final Draft (Self-Corrected)</div>
            <h3 className="font-bold text-amber-900 mb-2">Student Friendly</h3>
            <p className="text-xs text-amber-800 font-serif italic border-l-2 border-amber-300 pl-3">"I can use strong words to convince my friend..."</p>
            <div className="mt-4 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded w-fit flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Verified
            </div>
        </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">The Problem</h4>
            <p className="text-slate-600 text-base">AI defaults to fancy, complex words. It tries to sound "smart" but just sounds confusing.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase tracking-wide">The Solution</h4>
            <p className="text-slate-600 text-base">Don't just ask for a rubric. Ask the AI to <span className="font-bold text-amber-600">critique its own work</span> for clarity before finalizing it.</p>
        </div>
    </div>
  </div>
);

export default Slide6_RubricArchitect;