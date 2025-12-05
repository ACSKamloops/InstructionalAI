import React from 'react';
import { Layers, ChevronRight, Box, Mountain } from 'lucide-react';

export const RemixMethodSlide: React.FC = () => (
  <div className="flex flex-col h-full max-w-6xl mx-auto w-full">
    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3 shrink-0">
       <span className="bg-blue-100 p-2 rounded-xl"><Layers className="text-blue-600" size={28}/></span>
       Tool: The Remix Method
    </h2>
    
    {/* Main Content Area - Grid for better structure */}
    <div className="flex-1 grid md:grid-cols-[1fr_auto_1fr] gap-4 min-h-0 mb-6">
        
        {/* Left Card: Input */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-100 p-4">
                <p className="font-serif text-slate-500 italic font-medium">Original Complex Text (Grade 12)</p>
            </div>
            <div className="p-6 flex-1 bg-white text-slate-600 font-serif leading-relaxed text-base space-y-4 overflow-y-auto">
                <p>Mitochondria function as autonomous organelles responsible for oxidative phosphorylation, generating Adenosine Triphosphate (ATP) to fuel cellular metabolism.</p>
                <p>Photosynthesis is the photo-chemical process where chlorophyll absorbs photons to synthesize carbohydrates from inorganic carbon dioxide and water.</p>
                <p>Osmosis defines the passive diffusion of solvent molecules across a semi-permeable membrane along the osmotic gradient to establish equilibrium.</p>
            </div>
        </div>

        {/* Arrow Connector */}
        <div className="flex items-center justify-center">
            <div className="bg-white p-2 rounded-full border border-slate-200 shadow-md text-blue-600">
                <ChevronRight size={24} />
            </div>
        </div>

        {/* Right Card: Output */}
        <div className="bg-blue-50/50 rounded-2xl border border-blue-100 shadow-sm flex flex-col overflow-hidden">
             <div className="bg-blue-100/50 border-b border-blue-200/50 p-4">
                <p className="font-serif text-blue-900 font-bold">Remixed Output (Grade 6)</p>
             </div>
             <div className="p-6 flex-1 text-slate-700 leading-relaxed text-base space-y-4 overflow-y-auto">
                <p>
                    Cells function like tiny batteries because they use <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded border border-green-200 font-bold text-sm mx-1">Mitochondria</span> to create the energy they need to work.
                </p>
                <p>
                    Plants are able to make their own food from sunlight and water through a special process known as <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded border border-green-200 font-bold text-sm mx-1">Photosynthesis</span>.
                </p>
                <p>
                    Water travels through thin walls to make sure there is an equal amount on both sides using <span className="bg-green-100 text-green-800 px-1.5 py-0.5 rounded border border-green-200 font-bold text-sm mx-1">Osmosis</span>.
                </p>
             </div>
        </div>
    </div>

    {/* Bottom Explainer Cards - Compact */}
    <div className="grid md:grid-cols-3 gap-4 shrink-0">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
            <strong className="block text-slate-900 mb-1 text-sm font-bold uppercase tracking-wide">The Problem</strong>
            <p className="text-sm text-slate-600 leading-relaxed">Simplifying text often leads to "oversimplifying" and losing key academic vocabulary.</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
            <strong className="block text-slate-900 mb-1 text-sm font-bold uppercase tracking-wide">The Solution</strong>
            <p className="text-sm text-slate-600 leading-relaxed">Use "Chain-of-Thought" (CoT) prompting to separate difficulty from vocabulary.</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
            <strong className="block text-slate-900 mb-1 text-sm font-bold uppercase tracking-wide">How It Works</strong>
            <p className="text-sm text-slate-600 leading-relaxed">We force the Co-Pilot to <span className="font-bold text-blue-600">Analyze</span> terms before rewriting.</p>
        </div>
    </div>
  </div>
);

export const InterestSkinSlide: React.FC = () => (
  <div className="flex flex-col h-full items-center">
     <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8 flex items-center gap-3">
       <span className="bg-purple-100 p-2 rounded-xl"><Box className="text-purple-600" size={32}/></span>
       Tool: The Interest Skin
    </h2>
    <div className="relative w-full max-w-2xl h-64 mb-10 flex items-center justify-center">
         {/* Visual: Skeleton vs Skin */}
         <div className="w-48 h-48 border-4 border-slate-400 bg-transparent absolute transform -translate-x-12 rotate-[-10deg] flex items-center justify-center">
            <span className="font-mono font-bold text-slate-500">MATH<br/>LOGIC</span>
         </div>
         <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-emerald-600 absolute transform translate-x-12 rotate-[5deg] shadow-xl flex items-center justify-center rounded-xl overflow-hidden border-4 border-emerald-700">
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 opacity-30">
                {Array.from({length: 16}).map((_, i) => <div key={i} className="border border-black/20"></div>)}
            </div>
            <span className="font-bold text-white text-shadow relative z-10 text-center">STUDENT<br/>INTEREST<br/><span className="text-xs font-normal">(Minecraft)</span></span>
         </div>
         <div className="absolute bottom-0 left-0 text-xs font-bold text-slate-400 uppercase tracking-widest">The Skeleton (Immutable)</div>
         <div className="absolute top-0 right-0 text-xs font-bold text-emerald-600 uppercase tracking-widest">The Skin (Changeable)</div>
    </div>
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full max-w-3xl">
        <ul className="space-y-3">
            <li className="flex gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div><p className="text-slate-700"><strong>The Problem:</strong> Students tune out abstract worksheets irrelevant to their lives.</p></li>
            <li className="flex gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div><p className="text-slate-700"><strong>The Solution:</strong> Apply "Structure Precedes Content".</p></li>
            <li className="flex gap-3"><div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div><p className="text-slate-700"><strong>The Constraint:</strong> Tell the AI: "The Core Math is 2lw+2lh+2wh. This logic cannot change."</p></li>
        </ul>
    </div>
  </div>
);

export const ProjectBreakerSlide: React.FC = () => (
  <div className="flex flex-col h-full">
    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-3">
       <span className="bg-emerald-100 p-2 rounded-xl"><Mountain className="text-emerald-600" size={32}/></span>
       Tool: The Project Breaker
    </h2>
    <div className="flex-1 relative flex items-end justify-center pb-8">
         {/* Mountain Visual */}
         <div className="absolute bottom-0 w-full max-w-3xl h-64">
             <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-xl">
                 <path d="M50 5 L10 50 L90 50 Z" fill="#cbd5e1" />
                 <path d="M50 5 L65 50 L90 50 Z" fill="#94a3b8" />
                 {/* Steps */}
                 <path d="M20 45 L30 45 L35 40 L25 40 Z" fill="#10b981" className="animate-pulse" style={{animationDelay: '0s'}} />
                 <path d="M30 38 L40 38 L45 33 L35 33 Z" fill="#10b981" className="animate-pulse" style={{animationDelay: '1s'}} />
                 <path d="M40 30 L50 30 L55 25 L45 25 Z" fill="#10b981" className="animate-pulse" style={{animationDelay: '2s'}} />
                 <text x="50" y="5" textAnchor="middle" className="text-[4px] font-bold fill-slate-800">THE ESSAY</text>
             </svg>
         </div>
         <div className="relative z-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 shadow-lg max-w-2xl mb-4">
            <h3 className="font-bold text-slate-900 mb-2">Addressing Executive Dysfunction</h3>
            <p className="text-slate-600 text-sm mb-4">Students get paralyzed by large projects. We use <strong>Tree-of-Thought (ToT)</strong> to break the monolith into a "Quest Log" of achievable micro-steps.</p>
            <div className="flex gap-2">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">Research</span>
                <ChevronRight size={14} className="text-slate-400 mt-1"/>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">Drafting</span>
                <ChevronRight size={14} className="text-slate-400 mt-1"/>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">Review</span>
            </div>
         </div>
    </div>
  </div>
);