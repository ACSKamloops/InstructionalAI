import React from 'react';
import { ShieldAlert, Bot, FileWarning, Fingerprint } from 'lucide-react';

const Slide9_RedZone: React.FC = () => (
  <div className="flex flex-col h-full items-center justify-center">
     <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 bg-red-600 text-white flex items-center justify-center rounded-2xl shadow-lg shadow-red-200 rotate-3">
            <ShieldAlert size={32} />
        </div>
        <h2 className="text-5xl font-serif font-bold text-red-600">THE RED ZONE</h2>
     </div>
     
     <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
         {/* Hallucination */}
         <div className="bg-white p-8 rounded-[2rem] border border-red-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group">
             <div className="bg-red-50 p-5 rounded-full mb-6 group-hover:bg-red-600 transition-colors duration-300">
                 <Bot size={32} className="text-red-600 group-hover:text-white transition-colors" />
             </div>
             <h3 className="font-bold text-slate-900 text-xl mb-3">Hallucinations</h3>
             <p className="text-slate-600 text-sm mb-8 leading-relaxed flex-1">The AI confidently invents facts, translations, or sources. It lies with perfect grammar.</p>
             <div className="w-full bg-slate-50 text-slate-900 py-3 rounded-xl text-xs font-bold uppercase tracking-widest border border-slate-200">
                 The Fix: <span className="text-red-600">You Verify</span>
             </div>
         </div>

         {/* Provenance Debt */}
         <div className="bg-white p-8 rounded-[2rem] border border-red-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group">
             <div className="bg-red-50 p-5 rounded-full mb-6 group-hover:bg-red-600 transition-colors duration-300">
                 <FileWarning size={32} className="text-red-600 group-hover:text-white transition-colors" />
             </div>
             <h3 className="font-bold text-slate-900 text-xl mb-3">Provenance Debt</h3>
             <p className="text-slate-600 text-sm mb-8 leading-relaxed flex-1">An "unpaid bill" for data. We do not feed sacred stories into a machine that doesn't own them.</p>
             <div className="w-full bg-slate-50 text-slate-900 py-3 rounded-xl text-xs font-bold uppercase tracking-widest border border-slate-200">
                 The Fix: <span className="text-red-600">You Author</span>
             </div>
         </div>

         {/* Privacy / PII */}
         <div className="bg-white p-8 rounded-[2rem] border border-red-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group">
             <div className="bg-red-50 p-5 rounded-full mb-6 group-hover:bg-red-600 transition-colors duration-300">
                 <Fingerprint size={32} className="text-red-600 group-hover:text-white transition-colors" />
             </div>
             <h3 className="font-bold text-slate-900 text-xl mb-3">Privacy (PII)</h3>
             <p className="text-slate-600 text-sm mb-8 leading-relaxed flex-1">No names. No grades. No private records. If it's private, it stays strictly offline.</p>
             <div className="w-full bg-slate-50 text-slate-900 py-3 rounded-xl text-xs font-bold uppercase tracking-widest border border-slate-200">
                 The Fix: <span className="text-red-600">Use "Student X"</span>
             </div>
         </div>
     </div>
  </div>
);

export default Slide9_RedZone;