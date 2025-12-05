import React from 'react';
import { ShieldCheck, Anchor, Eye, Scale, Feather } from 'lucide-react';

const SovereignCodeSlide: React.FC = () => (
  <div className="flex flex-col h-full items-center justify-center">
     
     {/* Visual Centerpiece */}
     <div className="mb-14 relative group">
         <div className="w-32 h-36 bg-stone-800 rounded-b-[4rem] rounded-t-3xl shadow-2xl flex items-center justify-center border-4 border-stone-700 relative z-10">
            <ShieldCheck size={64} className="text-teal-400" />
         </div>
         {/* Glow effect */}
         <div className="absolute -inset-8 bg-teal-500/20 blur-3xl rounded-full z-0 opacity-50 group-hover:opacity-80 transition-opacity"></div>
     </div>

     <h2 className="text-6xl font-serif font-bold text-stone-900 mb-16 tracking-tight">The Sovereign Code</h2>

     <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 max-w-6xl w-full px-8">
         
         {/* Item 1 */}
         <div className="flex gap-6 items-start group">
             <div className="bg-[#FDFDF9] p-4 rounded-2xl border border-stone-200 shadow-sm group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors">
                 <Feather size={32} className="text-stone-400 group-hover:text-teal-600 transition-colors" />
             </div>
             <div>
                 <strong className="block text-2xl text-stone-900 mb-2 font-bold group-hover:text-teal-900 transition-colors">I am the Architect.</strong>
                 <p className="text-stone-600 text-lg leading-relaxed">I design the lesson. The tool builds it.</p>
             </div>
         </div>

         {/* Item 2 */}
         <div className="flex gap-6 items-start group">
             <div className="bg-[#FDFDF9] p-4 rounded-2xl border border-stone-200 shadow-sm group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors">
                 <Anchor size={32} className="text-stone-400 group-hover:text-teal-600 transition-colors" />
             </div>
             <div>
                 <strong className="block text-2xl text-stone-900 mb-2 font-bold group-hover:text-teal-900 transition-colors">I am the Guardian.</strong>
                 <p className="text-stone-600 text-lg leading-relaxed">Sacred knowledge stays with the people, not the server.</p>
             </div>
         </div>

         {/* Item 3 */}
         <div className="flex gap-6 items-start group">
             <div className="bg-[#FDFDF9] p-4 rounded-2xl border border-stone-200 shadow-sm group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors">
                 <Eye size={32} className="text-stone-400 group-hover:text-teal-600 transition-colors" />
             </div>
             <div>
                 <strong className="block text-2xl text-stone-900 mb-2 font-bold group-hover:text-teal-900 transition-colors">I am the Filter.</strong>
                 <p className="text-stone-600 text-lg leading-relaxed">I verify every word before it reaches a student.</p>
             </div>
         </div>

         {/* Item 4 */}
         <div className="flex gap-6 items-start group">
             <div className="bg-[#FDFDF9] p-4 rounded-2xl border border-stone-200 shadow-sm group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors">
                 <Scale size={32} className="text-stone-400 group-hover:text-teal-600 transition-colors" />
             </div>
             <div>
                 <strong className="block text-2xl text-stone-900 mb-2 font-bold group-hover:text-teal-900 transition-colors">I am the Authority.</strong>
                 <p className="text-stone-600 text-lg leading-relaxed">Technology serves our culture. Not the other way around.</p>
             </div>
         </div>

     </div>
  </div>
);

export default SovereignCodeSlide;