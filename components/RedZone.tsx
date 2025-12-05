import React from 'react';
import { ShieldAlert, AlertTriangle, Fingerprint, Lock, Ban, EyeOff } from 'lucide-react';

const RedZone: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12 font-sans">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-8 ring-8 ring-red-50/50">
          <ShieldAlert className="w-10 h-10 text-red-600" />
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">The Red Zone</h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          The Red Zone is not just about avoiding inappropriate content. <br/>It is about preventing <span className="font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded">Data Sovereignty Risk</span> and managing <span className="font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded">Provenance Debt</span>.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* The Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-red-100 overflow-hidden">
           <div className="bg-red-600 p-6 flex items-center gap-3">
             <Ban className="text-white/90" size={24} />
             <h3 className="font-bold text-white text-lg tracking-wide">PROHIBITED ACTIVITIES</h3>
           </div>
           <ul className="divide-y divide-slate-100">
             <li className="p-8 flex gap-6 hover:bg-red-50/30 transition-colors">
                <div className="shrink-0 mt-1 bg-red-100 p-3 rounded-full h-fit"><Lock className="text-red-600" size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Sacred Knowledge</h4>
                  <p className="text-slate-600 leading-relaxed">NEVER input Nlaka'pamux legends, oral histories, or spiritual protocols. The AI creates "Pan-Indigenous" sludge.</p>
                </div>
             </li>
             <li className="p-8 flex gap-6 hover:bg-red-50/30 transition-colors">
                <div className="shrink-0 mt-1 bg-red-100 p-3 rounded-full h-fit"><Fingerprint className="text-red-600" size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Personal Data (PII)</h4>
                  <p className="text-slate-600 leading-relaxed">NEVER input student names, photos, or private records. We own our data.</p>
                </div>
             </li>
             <li className="p-8 flex gap-6 hover:bg-red-50/30 transition-colors">
                <div className="shrink-0 mt-1 bg-red-100 p-3 rounded-full h-fit"><AlertTriangle className="text-red-600" size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">The "Acting Elder"</h4>
                  <p className="text-slate-600 leading-relaxed">NEVER ask AI to "Act as an Elder". It is digitally disrespectful and leads to hallucination.</p>
                </div>
             </li>
           </ul>
        </div>

        {/* The Explanation */}
        <div className="space-y-8">
           <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-slate-800 rounded-full opacity-50"></div>
             <div className="relative z-10">
                <h3 className="font-serif font-bold text-2xl mb-4 text-teal-400">Provenance Debt</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                An "unpaid bill" for the data used to train the model. The AI scraped the internet without consent. If we feed our sacred stories into that machine, we are adding to that debt. We are giving away sovereignty.
                </p>
             </div>
           </div>

           <div className="bg-amber-50 p-8 rounded-3xl border border-amber-200">
             <div className="flex items-center gap-3 mb-4">
                <EyeOff className="text-amber-700" />
                <h3 className="font-bold text-amber-900 text-xl">The Sovereignty Rule</h3>
             </div>
             <p className="text-amber-900/80 italic text-lg mb-6 border-l-4 border-amber-300 pl-4 py-2">
                "Sacred knowledge, oral traditions, and family genealogies are strictly Offline. They are for human-to-human transmission only."
             </p>
             <div className="flex flex-wrap gap-3">
                {['Ownership', 'Control', 'Access', 'Possession'].map(tag => (
                    <span key={tag} className="bg-white px-3 py-1 rounded-full text-xs font-bold text-amber-800 uppercase tracking-widest border border-amber-100 shadow-sm">{tag}</span>
                ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RedZone;