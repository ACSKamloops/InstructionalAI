import React from 'react';
import { Mountain, CheckCircle2, ArrowDown } from 'lucide-react';

const Slide5_ProjectBreaker: React.FC = () => (
  <div className="flex flex-col h-full items-center justify-center">
    <div className="flex items-center gap-4 mb-10 bg-emerald-50 px-6 py-3 rounded-full border border-emerald-100">
        <Mountain className="text-emerald-600" size={24}/>
        <h2 className="text-2xl font-serif font-bold text-slate-900">The Project Breaker</h2>
    </div>

    <div className="flex flex-col items-center w-full max-w-4xl">
        
        {/* The Monolith */}
        <div className="bg-slate-800 text-white w-full max-w-md p-6 rounded-2xl shadow-xl border-b-8 border-slate-900 text-center mb-4 relative z-10">
            <h3 className="text-2xl font-serif font-bold tracking-wide">The 5-Page Essay</h3>
            <span className="text-xs text-slate-400 uppercase tracking-widest mt-2 block">The Monolith (Paralysis)</span>
        </div>

        {/* Transition */}
        <div className="h-16 flex items-center justify-center text-emerald-400">
             <ArrowDown size={32} className="animate-bounce" />
        </div>

        {/* The Tree / Steps */}
        <div className="grid md:grid-cols-3 gap-6 w-full">
             {/* Branch 1 */}
             <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md flex flex-col gap-3 group hover:border-emerald-300 transition-colors">
                 <div className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest w-fit">Phase 1: Research</div>
                 <div className="space-y-2">
                     <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-emerald-400" /> Find 1 source (20m)
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-emerald-400" /> Watch video (15m)
                     </div>
                 </div>
             </div>

             {/* Branch 2 */}
             <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md flex flex-col gap-3 group hover:border-emerald-300 transition-colors">
                 <div className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest w-fit">Phase 2: Drafting</div>
                 <div className="space-y-2">
                     <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-emerald-400" /> Write Intro (20m)
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-emerald-400" /> Bullet points (20m)
                     </div>
                 </div>
             </div>

             {/* Branch 3 */}
             <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md flex flex-col gap-3 group hover:border-emerald-300 transition-colors">
                 <div className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest w-fit">Phase 3: Polish</div>
                 <div className="space-y-2">
                     <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-emerald-400" /> Spell check (10m)
                     </div>
                     <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-emerald-400" /> Add Title (5m)
                     </div>
                 </div>
             </div>
        </div>
    </div>
    
    <div className="mt-12 text-center max-w-2xl">
         <p className="text-lg text-slate-600 font-serif italic">
             "We use Tree-of-Thought reasoning to break the mountain down into gravel—tiny, achievable micro-tasks."
         </p>
    </div>
  </div>
);

export default Slide5_ProjectBreaker;