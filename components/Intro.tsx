import React from 'react';
import { ArrowRight, Hexagon, Cpu, Sparkles, Anchor, Scale } from 'lucide-react';

interface IntroProps {
  onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] px-6 text-center max-w-7xl mx-auto">
      
      {/* Hero Badge */}
      <div className="mb-12 animate-in fade-in zoom-in duration-700">
        <div className="inline-flex items-center gap-3 bg-white px-6 py-2 rounded-full shadow-sm border border-stone-200 ring-1 ring-stone-100">
           <span className="text-xs font-bold text-[#1E3A8A] tracking-widest uppercase">The Sovereign Initiative</span>
           <div className="w-1 h-1 rounded-full bg-stone-300"></div>
           <span className="text-xs font-bold text-[#D97706] tracking-widest uppercase">Day One</span>
        </div>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#1E3A8A] mb-8 leading-tight tracking-tight">
        NEXUS
      </h1>
      
      <p className="text-xl md:text-3xl text-stone-600 mb-16 max-w-4xl leading-relaxed font-light">
        The Intersection of <span className="font-bold text-[#1E3A8A] border-b-2 border-blue-200">Ancient Wisdom</span> and <span className="font-bold text-[#D97706] border-b-2 border-amber-200">Future Intelligence</span>.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl mb-16 text-left">
        {/* Tradition Card */}
        <div className="bg-[#1E3A8A] text-white p-10 rounded-[2rem] shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="bg-blue-800/50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-blue-700">
                <Anchor size={24} className="text-blue-200" />
            </div>
            <h3 className="font-bold text-2xl mb-4 tracking-wide">Tradition</h3>
            <p className="text-blue-100 leading-relaxed text-lg mb-8">
              The roots. The sovereignty. The authority. We use technology to amplify our culture, never to replace it.
            </p>
            <div className="mt-auto border-t border-blue-800 pt-4 flex items-center gap-2 text-sm font-bold text-[#D97706] uppercase tracking-widest">
                The Architect
            </div>
          </div>
        </div>

        {/* Technology Card */}
        <div className="bg-white p-10 rounded-[2rem] border border-stone-200 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full -ml-16 -mb-16 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-amber-100">
                <Cpu size={24} className="text-[#D97706]" />
            </div>
            <h3 className="font-bold text-slate-900 text-2xl mb-4 tracking-wide">Technology</h3>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              The engine. The scale. The capability. It creates the scaffolding so you can focus on the connection.
            </p>
            <div className="mt-auto border-t border-stone-100 pt-4 flex items-center gap-2 text-sm font-bold text-[#1E3A8A] uppercase tracking-widest">
                The Engine
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={onStart}
        className="group relative bg-[#1E3A8A] hover:bg-blue-900 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all shadow-2xl hover:-translate-y-1 flex items-center gap-5 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-500/30 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        <Sparkles className="text-[#D97706] group-hover:rotate-12 transition-transform" />
        Enter The Nexus
        <ArrowRight className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </button>

      <div className="mt-12 flex gap-8 text-xs font-bold text-stone-400 uppercase tracking-widest">
        <span className="flex items-center gap-2"><Scale size={14}/> Sovereign Data</span>
        <span>•</span>
        <span className="flex items-center gap-2"><Hexagon size={14}/> Nexus Protocol</span>
        <span>•</span>
        <span className="flex items-center gap-2"><Cpu size={14}/> Human Authority</span>
      </div>
    </div>
  );
};

export default Intro;