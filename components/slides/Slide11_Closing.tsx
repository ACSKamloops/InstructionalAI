import React from 'react';
import { Heart, Clock, ArrowRight, Sun } from 'lucide-react';

const Slide11_Closing: React.FC = () => (
  <div className="flex flex-col h-full items-center justify-center relative overflow-hidden bg-[#FDFDF9] w-full rounded-[3rem]">
     {/* Background Ambience */}
     <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-3xl -mr-32 -mt-32"></div>
     <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-3xl -ml-32 -mb-32"></div>

     <div className="relative z-10 text-center mb-16 max-w-5xl">
         <div className="inline-flex items-center gap-2.5 bg-orange-50 text-orange-700 px-5 py-2 rounded-full border border-orange-100 mb-8 shadow-sm">
             <Sun size={20} className="animate-spin-slow" />
             <span className="text-sm font-bold uppercase tracking-widest">The Promise</span>
         </div>
         <h2 className="text-6xl md:text-7xl font-serif font-bold text-stone-900 leading-tight">
           Technology as a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Scaffold</span>,<br/>
           Not a Replacement.
         </h2>
     </div>

     <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full px-8">
         
         {/* Card 1: The Machine */}
         <div className="flex-1 bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-xl flex flex-col items-center text-center relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-1.5 bg-stone-200"></div>
             <div className="bg-stone-50 p-6 rounded-full mb-6">
                 <Clock size={48} className="text-stone-400" />
             </div>
             <h3 className="font-bold text-stone-700 text-2xl mb-3 uppercase tracking-wide">Automate the Routine</h3>
             <p className="text-stone-500 mb-8 leading-relaxed text-lg">Formatting, Scheduling, Logistics.</p>
             <div className="mt-auto text-sm font-bold text-stone-400 uppercase tracking-widest bg-stone-50 px-6 py-3 rounded-xl">
                 Buying Back Time
             </div>
         </div>

         {/* Visual Flow */}
         <div className="flex items-center justify-center text-orange-300">
             <ArrowRight size={56} className="hidden md:block" />
             <ArrowRight size={40} className="md:hidden rotate-90" />
         </div>

         {/* Card 2: The Human (Highlighted) */}
         <div className="flex-1 bg-gradient-to-br from-orange-50 to-amber-50 p-10 rounded-[2.5rem] border border-orange-100 shadow-2xl flex flex-col items-center text-center relative overflow-hidden transform md:scale-105 z-10">
             <div className="absolute top-0 left-0 w-full h-1.5 bg-orange-400"></div>
             <div className="bg-white p-6 rounded-full mb-6 shadow-md ring-8 ring-orange-100">
                 <Heart size={48} className="text-orange-500 fill-orange-500" />
             </div>
             <h3 className="font-bold text-orange-900 text-2xl mb-3 uppercase tracking-wide">Amplify the Human</h3>
             <p className="text-orange-800/80 mb-8 leading-relaxed font-medium text-lg">Mentoring, Listening, Connecting.</p>
             <div className="mt-auto text-sm font-bold text-orange-600 uppercase tracking-widest bg-white px-6 py-3 rounded-xl shadow-sm border border-orange-100">
                 Reinvesting Time
             </div>
         </div>
     </div>

     <div className="mt-20 text-center px-4">
         <p className="text-3xl font-serif text-stone-800 italic">
             "Every hour saved on paperwork is an hour returned to the student."
         </p>
     </div>
  </div>
);

export default Slide11_Closing;