import React from 'react';
import { CheckCircle2, Ban, User, Database } from 'lucide-react';

const CodeOfConduct: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Stein Valley AI Code of Conduct</h2>
        <p className="text-xl text-slate-500 font-serif italic">"The Teacher is the Pilot. The AI is the Co-Pilot. The Land is the Authority."</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Green Zone Summary */}
        <div className="bg-white rounded-2xl p-8 border border-green-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
           <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-green-100 p-3 rounded-xl"><CheckCircle2 className="text-green-700" size={28} /></div>
                    <h3 className="font-bold text-green-900 text-xl">1. The Green Zone (Go Ahead!)</h3>
                </div>
                <ul className="space-y-4 text-slate-700">
                    <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></span><span><strong className="text-slate-900">Remixing:</strong> Leveling text & translating instructions.</span></li>
                    <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></span><span><strong className="text-slate-900">Brainstorming:</strong> Lesson hooks & "Interest Skins".</span></li>
                    <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></span><span><strong className="text-slate-900">Drafting:</strong> Creating first drafts of quizzes/rubrics.</span></li>
                    <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></span><span><strong className="text-slate-900">Structure:</strong> Breaking down projects (Project Breaker).</span></li>
                </ul>
           </div>
        </div>

        {/* Red Zone Summary */}
        <div className="bg-white rounded-2xl p-8 border border-red-200 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
           <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-red-100 p-3 rounded-xl"><Ban className="text-red-700" size={28} /></div>
                    <h3 className="font-bold text-red-900 text-xl">2. The Red Zone (Stop!)</h3>
                </div>
                <ul className="space-y-4 text-slate-700">
                    <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></span><span><strong className="text-slate-900">Sacred Knowledge:</strong> No legends or spiritual protocols.</span></li>
                    <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></span><span><strong className="text-slate-900">PII:</strong> No student names or private records.</span></li>
                    <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></span><span><strong className="text-slate-900">The Voice:</strong> Never ask AI to "Act as an Elder".</span></li>
                    <li className="flex gap-3 items-start"><span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></span><span><strong className="text-slate-900">Grading:</strong> Assessment is a human duty.</span></li>
                </ul>
           </div>
        </div>

        {/* Pilot Rule */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
           <div className="flex items-center gap-4 mb-4">
             <div className="bg-slate-200 p-2 rounded-xl"><User className="text-slate-800" size={24} /></div>
             <h3 className="font-bold text-slate-900 text-lg">3. The Pilot Rule</h3>
           </div>
           <p className="text-slate-700 leading-relaxed">
             You are the Pilot. You must read, check, and verify EVERYTHING. AI can hallucinate. You are responsible for the truth in your classroom.
           </p>
        </div>

        {/* Sovereignty Rule */}
        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
           <div className="flex items-center gap-4 mb-4">
             <div className="bg-amber-100 p-2 rounded-xl"><Database className="text-amber-800" size={24} /></div>
             <h3 className="font-bold text-amber-900 text-lg">4. The Sovereignty Rule</h3>
           </div>
           <p className="text-amber-900 leading-relaxed">
             We own our data. If knowledge belongs to the Community, it stays in the Community. We refuse Provenance Debt.
           </p>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;