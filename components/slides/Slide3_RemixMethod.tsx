import React from 'react';
import { Layers, ArrowRight, Sparkles, FileText, Search } from 'lucide-react';

const Slide3_RemixMethod: React.FC = () => (
  <div className="flex flex-col h-full items-center justify-center">
    <div className="flex items-center gap-4 mb-16 bg-blue-50 px-6 py-3 rounded-full border border-blue-100">
        <Layers className="text-blue-600" size={24}/>
        <h2 className="text-2xl font-serif font-bold text-slate-900">The Remix Method</h2>
    </div>

    {/* Process Flow Graphic */}
    <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mb-16 px-4">
        
        {/* Step 1 */}
        <div className="w-64 h-72 bg-white rounded-3xl border border-slate-200 shadow-xl flex flex-col relative overflow-hidden group">
            <div className="bg-slate-50 p-4 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Input</span>
            </div>
            <div className="p-6 flex flex-col items-center justify-center flex-1">
                 <FileText size={48} className="text-slate-300 mb-4" />
                 <h3 className="font-bold text-slate-900 text-lg">Complex Text</h3>
                 <p className="text-sm text-slate-500 mt-2 text-center">Grade 12 Science<br/>Dense Vocabulary</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-300"></div>
        </div>

        <div className="hidden md:flex flex-col items-center text-slate-300">
             <div className="w-12 h-[2px] bg-slate-300"></div>
        </div>

        {/* Step 2 (The Key) - Central Processor */}
        <div className="w-72 h-80 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center p-6 transform md:scale-110 z-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full mb-6 border border-white/20 shadow-inner">
                <Search size={40} className="text-white" />
            </div>
            <h3 className="font-bold text-white text-xl mb-2 tracking-wide">Chain-of-Thought</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">"Stop. Identify the critical terms first."</p>
            <div className="bg-white text-blue-800 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                Logic Filter Active
            </div>
        </div>

        <div className="hidden md:flex flex-col items-center text-slate-300">
             <div className="w-12 h-[2px] bg-slate-300"></div>
        </div>

        {/* Step 3 */}
        <div className="w-64 h-72 bg-white rounded-3xl border border-green-100 shadow-xl flex flex-col relative overflow-hidden group">
            <div className="bg-green-50 p-4 border-b border-green-100">
                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Output</span>
            </div>
            <div className="p-6 flex flex-col items-center justify-center flex-1">
                 <div className="relative">
                    <FileText size={48} className="text-green-200 mb-4" />
                    <Sparkles size={24} className="text-green-500 absolute -top-2 -right-2 animate-pulse" />
                 </div>
                 <h3 className="font-bold text-slate-900 text-lg">Accessible Text</h3>
                 <p className="text-sm text-slate-500 mt-2 text-center">Grade 6 Reading Level<br/><span className="font-bold text-green-600">Vocabulary Kept</span></p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500"></div>
        </div>
    </div>

    <div className="bg-white border-l-4 border-blue-500 p-8 rounded-r-2xl shadow-sm max-w-3xl">
        <p className="text-slate-700 text-lg leading-relaxed italic font-serif">
            "Differentiation usually means 'oversimplifying'. We lose the science. The Remix Method fixes this by protecting the vocabulary before simplifying the syntax."
        </p>
    </div>
  </div>
);

export default Slide3_RemixMethod;