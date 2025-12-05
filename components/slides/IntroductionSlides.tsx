import React from 'react';
import { Anchor, Zap, ShieldAlert } from 'lucide-react';

export const WelcomeSlide: React.FC = () => (
  <div className="flex flex-col md:flex-row items-center gap-12 h-full justify-center">
    <div className="bg-slate-800 p-6 rounded-3xl shadow-2xl border-4 border-slate-700 w-48 shrink-0 flex flex-col gap-6 items-center">
       <div className="w-32 h-32 rounded-full bg-slate-900/50 border-4 border-slate-600 opacity-30"></div>
       <div className="w-32 h-32 rounded-full bg-slate-900/50 border-4 border-slate-600 opacity-30"></div>
       <div className="w-32 h-32 rounded-full bg-green-500 border-4 border-green-600 shadow-[0_0_50px_rgba(34,197,94,0.6)] animate-pulse"></div>
    </div>
    <div className="max-w-xl space-y-8">
      <h2 className="text-5xl font-serif font-bold text-slate-900">Welcome to the <span className="text-green-600">Green Zone</span></h2>
      <ul className="space-y-6">
        <li className="flex gap-4 items-start">
          <div className="w-4 h-4 bg-green-500 rounded-full mt-2 shrink-0"></div>
          <div>
            <strong className="block text-xl text-slate-900 mb-1">Definition</strong>
            <p className="text-lg text-slate-600">Safe, authorized, low-risk experimentation.</p>
          </div>
        </li>
        <li className="flex gap-4 items-start">
          <div className="w-4 h-4 bg-green-500 rounded-full mt-2 shrink-0"></div>
          <div>
            <strong className="block text-xl text-slate-900 mb-1">The Rule</strong>
            <p className="text-lg text-slate-600">Public data only. No student names. No sacred stories.</p>
          </div>
        </li>
        <li className="flex gap-4 items-start">
          <div className="w-4 h-4 bg-green-500 rounded-full mt-2 shrink-0"></div>
          <div>
            <strong className="block text-xl text-slate-900 mb-1">The Goal</strong>
            <p className="text-lg text-slate-600">Use AI to reduce your workload, not your standards.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export const PilotCoPilotSlide: React.FC = () => (
  <div className="flex flex-col h-full">
    <div className="h-1/2 bg-sky-100 rounded-3xl mb-8 relative overflow-hidden border border-sky-200 flex items-end justify-center pb-0">
       <div className="absolute inset-0 bg-gradient-to-b from-sky-300 to-sky-100 opacity-50"></div>
       {/* Cockpit Visual Metaphor */}
       <div className="flex justify-center items-end gap-20 w-full px-20 relative z-10">
           <div className="flex flex-col items-center">
               <span className="bg-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-slate-800 shadow-sm mb-4">Teacher (Pilot)</span>
               <div className="w-64 h-32 bg-slate-800 rounded-t-full border-4 border-slate-700 relative">
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-2 bg-slate-600 rounded-full"></div>
                   <div className="absolute top-1/2 left-4 w-2 h-16 bg-slate-600 rounded-full -mt-8"></div>
                   <div className="absolute top-1/2 right-4 w-2 h-16 bg-slate-600 rounded-full -mt-8"></div>
               </div>
               <div className="h-20 w-80 bg-slate-900 rounded-t-xl mt-[-10px]"></div>
           </div>
           <div className="flex flex-col items-center opacity-80">
               <span className="bg-teal-50 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-teal-800 shadow-sm mb-4">AI (Co-Pilot)</span>
                <div className="w-64 h-32 bg-slate-300 rounded-t-full border-4 border-slate-400 relative">
                     <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-teal-400 rounded-full blur-xl opacity-50"></div>
                </div>
                <div className="h-20 w-80 bg-slate-400 rounded-t-xl mt-[-10px]"></div>
           </div>
       </div>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-800">
        <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Anchor size={18}/> You are the Pilot</h3>
        <p className="text-sm text-slate-600 leading-relaxed">You are always in command. Your professional judgment, ethics, and expertise guide every decision.</p>
      </div>
      <div className="bg-teal-50 p-6 rounded-2xl border-l-4 border-teal-500">
        <h3 className="font-bold text-teal-900 mb-2 flex items-center gap-2"><Zap size={18}/> AI is the Co-Pilot</h3>
        <p className="text-sm text-teal-800 leading-relaxed">It runs checklists, drafts plans, and manages systems. It can suggest a route, but it <span className="font-bold underline decoration-red-400 decoration-2">never steers.</span></p>
      </div>
      <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500">
        <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2"><ShieldAlert size={18}/> Your Mission</h3>
        <p className="text-sm text-red-800 leading-relaxed">You are accountable for the final destination. <span className="font-bold">Never trust the Co-Pilot blindly.</span></p>
      </div>
    </div>
  </div>
);