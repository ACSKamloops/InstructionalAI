import React from 'react';
import { ShieldAlert, Users, HeartHandshake, CheckSquare } from 'lucide-react';

export const RedZoneSlide: React.FC = () => (
  <div className="flex flex-col h-full items-center justify-center text-center">
     <div className="w-32 h-32 bg-red-600 text-white flex items-center justify-center rounded-3xl rotate-45 mb-10 shadow-2xl">
         <ShieldAlert size={64} className="-rotate-45"/>
     </div>
     <h2 className="text-5xl font-serif font-bold text-red-600 mb-8">THE RED ZONE</h2>
     
     <div className="grid md:grid-cols-3 gap-8 text-left max-w-5xl w-full">
         <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
             <h3 className="font-bold text-red-900 text-xl mb-3">Hallucinations</h3>
             <p className="text-red-800/80 mb-4">The AI confidently invents facts, translations, or sources.</p>
             <div className="bg-white px-3 py-1 rounded-full text-xs font-bold text-red-600 inline-block border border-red-200">The Fix: You must verify.</div>
         </div>
         <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
             <h3 className="font-bold text-red-900 text-xl mb-3">Provenance Debt</h3>
             <p className="text-red-800/80 mb-4">The AI output has no sources. We "own" any plagiarism or errors it makes.</p>
             <div className="bg-white px-3 py-1 rounded-full text-xs font-bold text-red-600 inline-block border border-red-200">The Fix: You are the author.</div>
         </div>
         <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
             <h3 className="font-bold text-red-900 text-xl mb-3">PII (Personal Data)</h3>
             <p className="text-red-800/80 mb-4">NEVER input student names, grades, or personal stories.</p>
             <div className="bg-white px-3 py-1 rounded-full text-xs font-bold text-red-600 inline-block border border-red-200">The Fix: Use "Student X".</div>
         </div>
     </div>
  </div>
);

export const HandsOnChallengeSlide: React.FC = () => (
  <div className="flex flex-col md:flex-row gap-12 h-full items-center">
     <div className="flex-1 space-y-8">
         <h2 className="text-4xl font-serif font-bold text-slate-900">The Hands-On Challenge</h2>
         <div className="space-y-6">
             <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shrink-0">1</div>
                 <div>
                     <h4 className="font-bold text-slate-900 text-lg">Identify a Chore</h4>
                     <p className="text-slate-600">Pick one real administrative or planning task you have to do this week.</p>
                 </div>
             </div>
             <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shrink-0">2</div>
                 <div>
                     <h4 className="font-bold text-slate-900 text-lg">Select the Tool</h4>
                     <ul className="mt-2 space-y-2 text-sm text-slate-600">
                         <li>• Need to adjust complexity? <strong className="text-teal-600">Remix Method</strong></li>
                         <li>• Need to boost engagement? <strong className="text-purple-600">Interest Skin</strong></li>
                         <li>• Need to support planning? <strong className="text-emerald-600">Project Breaker</strong></li>
                         <li>• Need tone help? <strong className="text-indigo-600">Difficult Email</strong></li>
                     </ul>
                 </div>
             </div>
             <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold shrink-0">3</div>
                 <div>
                     <h4 className="font-bold text-slate-900 text-lg">Execute & Pilot Check</h4>
                     <p className="text-slate-600">Run the prompt. Read the output. Does it meet your standards? Edit until it's yours.</p>
                 </div>
             </div>
         </div>
     </div>
     <div className="flex-1 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center">
         <Users size={120} className="text-slate-200" />
         <div className="absolute text-center">
             <p className="font-serif font-bold text-slate-400 text-xl">Workshop Mode Active</p>
             <p className="text-slate-400 text-sm mt-2">Open the "Green Zone" to begin.</p>
         </div>
     </div>
  </div>
);

export const ClosingSlide: React.FC = () => (
  <div className="flex flex-col h-full justify-center">
     <h2 className="text-5xl font-serif font-bold text-slate-900 mb-12 text-center">Workload vs. Standards</h2>
     <div className="grid md:grid-cols-2 gap-12 items-center">
         <div className="space-y-6 text-lg text-slate-700">
             <p className="flex items-center gap-3"><span className="w-2 h-2 bg-teal-500 rounded-full"></span> The Goal Was Never Just to Save Time.</p>
             <p className="flex items-center gap-3"><strong className="text-teal-700">The Goal is to Reinvest Time.</strong></p>
             <div className="pl-5 space-y-2 border-l-2 border-slate-200">
                 <p>Less time on formatting, <span className="font-bold text-slate-900">more time on feedback.</span></p>
                 <p>Less time on drafting, <span className="font-bold text-slate-900">more time on connecting.</span></p>
             </div>
             <p className="pt-4 text-xl font-serif italic text-slate-500">"Use the Co-Pilot to manage the machine so the Pilot can focus on the humans."</p>
         </div>
         <div className="flex justify-center">
             <HeartHandshake size={200} className="text-teal-100" />
         </div>
     </div>
  </div>
);

export const PilotsPledgeSlide: React.FC = () => (
  <div className="flex flex-col h-full items-center justify-center">
     <div className="bg-[#fdfbf7] p-12 rounded-xl shadow-2xl border-8 border-double border-slate-200 max-w-3xl w-full relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-6 bg-slate-900 text-white px-6 py-2 rounded-full font-serif font-bold tracking-widest uppercase shadow-lg">
            The Pilot's Pledge
         </div>
         <ul className="space-y-8 mt-4">
             <li className="flex gap-4">
                 <div className="shrink-0 bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center"><CheckSquare size={16}/></div>
                 <div>
                     <strong className="block text-xl text-slate-900 mb-1">I am the Pilot.</strong>
                     <p className="text-slate-600">The AI is my tool. I am always in command and accountable for the final output.</p>
                 </div>
             </li>
             <li className="flex gap-4">
                 <div className="shrink-0 bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center"><CheckSquare size={16}/></div>
                 <div>
                     <strong className="block text-xl text-slate-900 mb-1">I protect my students.</strong>
                     <p className="text-slate-600">I will never input personal or sensitive information into a public AI.</p>
                 </div>
             </li>
             <li className="flex gap-4">
                 <div className="shrink-0 bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center"><CheckSquare size={16}/></div>
                 <div>
                     <strong className="block text-xl text-slate-900 mb-1">I verify everything.</strong>
                     <p className="text-slate-600">I will treat all AI-generated content as a first draft that requires my expert review and revision.</p>
                 </div>
             </li>
             <li className="flex gap-4">
                 <div className="shrink-0 bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center"><CheckSquare size={16}/></div>
                 <div>
                     <strong className="block text-xl text-slate-900 mb-1">I maintain my standards.</strong>
                     <p className="text-slate-600">My professional judgment is the final filter. I use AI to enhance my craft, not replace it.</p>
                 </div>
             </li>
         </ul>
     </div>
  </div>
);