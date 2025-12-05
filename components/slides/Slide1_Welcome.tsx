import React from 'react';
import { Leaf, MapPin, Anchor } from 'lucide-react';

const Slide1_Welcome: React.FC = () => (
  <div className="flex flex-col md:flex-row h-full w-full overflow-hidden rounded-[2.5rem] border border-stone-200 shadow-2xl bg-[#FDFDF9]">
    {/* Left: The River (Visual Metaphor) */}
    <div className="w-full md:w-5/12 bg-teal-900 relative overflow-hidden flex items-center justify-center p-12">
       {/* Elegant, simple background texture */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
       <div className="absolute inset-0 bg-gradient-to-b from-teal-800/50 to-emerald-900/80"></div>
       
       <div className="relative z-10 text-center flex flex-col items-center">
           <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center mb-8 shadow-2xl ring-1 ring-white/30">
                <Anchor className="text-teal-100" size={48} />
           </div>
           <h3 className="text-white font-serif font-bold text-4xl tracking-wide mb-4">The Stein River</h3>
           <div className="h-1.5 w-16 bg-emerald-400 rounded-full mb-4"></div>
           <p className="text-teal-200 font-sans font-medium tracking-[0.2em] uppercase text-sm">The Safe Channel</p>
       </div>
    </div>

    {/* Right: The Text */}
    <div className="w-full md:w-7/12 p-12 md:p-20 flex flex-col justify-center bg-[#FDFDF9]">
      
      <div className="inline-flex items-center gap-3 bg-emerald-100/50 text-emerald-800 px-5 py-2 rounded-full w-fit mb-10 border border-emerald-200">
         <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></div>
         <span className="text-xs font-bold uppercase tracking-widest">Green Zone Strategy</span>
      </div>
      
      <h2 className="text-6xl font-serif font-bold text-stone-900 mb-10 leading-tight">
        Welcome to the <br/><span className="text-emerald-700">Green Zone</span>
      </h2>
      
      <div className="space-y-10">
         <div className="flex gap-6 items-start">
             <div className="w-1.5 h-16 bg-emerald-200 rounded-full mt-1 shrink-0"></div>
             <div>
                <strong className="text-stone-900 block text-2xl font-serif mb-2">Definition</strong>
                <p className="text-stone-600 text-lg leading-relaxed">Safe, authorized, low-risk experimentation.</p>
             </div>
         </div>
         <div className="flex gap-6 items-start">
             <div className="w-1.5 h-16 bg-emerald-200 rounded-full mt-1 shrink-0"></div>
             <div>
                <strong className="text-stone-900 block text-2xl font-serif mb-2">The Rule</strong>
                <p className="text-stone-600 text-lg leading-relaxed">Public data only. No student names. No sacred stories.</p>
             </div>
         </div>
         <div className="flex gap-6 items-start">
             <div className="w-1.5 h-16 bg-emerald-200 rounded-full mt-1 shrink-0"></div>
             <div>
                <strong className="text-stone-900 block text-2xl font-serif mb-2">The Goal</strong>
                <p className="text-stone-600 text-lg leading-relaxed">Use AI to reduce your workload, not your standards.</p>
             </div>
         </div>
      </div>
    </div>
  </div>
);

export default Slide1_Welcome;