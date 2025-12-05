import React from 'react';
import { Box, Lock, Sparkles } from 'lucide-react';

const Slide4_InterestSkin: React.FC = () => (
  <div className="flex flex-col h-full items-center justify-center">
     <div className="flex items-center gap-4 mb-16 bg-purple-50 px-6 py-3 rounded-full border border-purple-100">
        <Box className="text-purple-600" size={24}/>
        <h2 className="text-2xl font-serif font-bold text-slate-900">The Interest Skin</h2>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-16 mb-16 relative">
        
        {/* Connection Line */}
        <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-2 bg-slate-100 -z-10 rounded-full"></div>

        {/* Layer 1: Skeleton */}
        <div className="relative group perspective-1000">
            <div className="w-72 h-72 bg-slate-900 rounded-3xl border-4 border-slate-700 flex flex-col items-center justify-center relative shadow-2xl transform transition-transform group-hover:rotate-y-12">
                <Lock size={32} className="text-slate-500 mb-4" />
                <div className="text-center">
                     <span className="block font-mono font-bold text-3xl text-white mb-2 tracking-wider">2lw+2lh</span>
                     <span className="bg-slate-800 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-slate-700">Immutable Logic</span>
                </div>
                {/* Wireframe effect */}
                <div className="absolute inset-0 border border-white/5 rounded-2xl m-2"></div>
                <div className="absolute inset-0 border border-white/5 rounded-2xl m-4"></div>
            </div>
            <div className="absolute -bottom-10 left-0 w-full text-center">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">The Skeleton</span>
            </div>
        </div>

        {/* Plus Symbol */}
        <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border border-slate-100">
            <span className="text-2xl font-bold text-slate-300">+</span>
        </div>

        {/* Layer 2: Skin */}
        <div className="relative group perspective-1000">
            <div className="w-72 h-72 bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center relative border-4 border-white/50 overflow-hidden transform transition-transform group-hover:rotate-y-[-12deg]">
                {/* Texture */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/pixel-weave.png')]"></div>
                
                <Sparkles size={32} className="text-white mb-4 animate-pulse" />
                <div className="text-center relative z-10">
                     <span className="block font-serif font-bold text-3xl text-white mb-2 text-shadow-lg">Minecraft</span>
                     <span className="bg-white/20 backdrop-blur text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/30">Narrative Layer</span>
                </div>
            </div>
            <div className="absolute -bottom-10 left-0 w-full text-center">
                <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">The Skin</span>
            </div>
        </div>
    </div>

    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-3xl text-center">
        <p className="text-slate-700 text-lg leading-relaxed font-serif italic">
            "Structure Precedes Content. The math is the skeleton—it cannot bend. The story is the skin—make it look like a video game."
        </p>
    </div>
  </div>
);

export default Slide4_InterestSkin;