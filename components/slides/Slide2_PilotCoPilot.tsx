import React from 'react';
import { User, Cpu, Compass } from 'lucide-react';

const Slide2_PilotCoPilot: React.FC = () => (
  <div className="flex flex-col h-full items-center justify-center max-w-7xl mx-auto">
    <div className="mb-12 text-center">
        <h2 className="text-5xl font-serif font-bold text-stone-900 mb-4">The Pilot vs. Co-Pilot</h2>
        <p className="text-xl text-stone-500 font-medium">The most important rule of the river.</p>
    </div>
    
    {/* Simplified Canoe Visual */}
    <div className="relative w-full mb-16 px-4">
        <div className="w-full max-w-4xl mx-auto h-40 bg-amber-900 rounded-b-[6rem] rounded-t-xl relative flex justify-between items-start px-8 md:px-24 shadow-2xl z-10 border-t-4 border-amber-950">
            
            {/* Stern (Pilot) */}
            <div className="relative -top-16 flex flex-col items-center group">
                <div className="bg-white p-6 rounded-2xl shadow-xl border-4 border-stone-800 mb-4 z-20">
                    <User size={48} className="text-stone-800" />
                </div>
                <div className="bg-stone-800 text-white px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-widest shadow-lg z-20">The Pilot (You)</div>
                {/* Paddle */}
                <div className="absolute top-10 -right-12 w-3 h-32 bg-amber-950 rounded-full transform -rotate-12 z-0"></div>
            </div>

            {/* Bow (Co-Pilot) */}
            <div className="relative -top-16 flex flex-col items-center group">
                <div className="bg-white p-6 rounded-2xl shadow-xl border-4 border-teal-500 mb-4 z-20">
                    <Cpu size={48} className="text-teal-600" />
                </div>
                <div className="bg-teal-600 text-white px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-widest shadow-lg z-20">The Co-Pilot (AI)</div>
                {/* Paddle */}
                <div className="absolute top-10 -left-12 w-3 h-32 bg-amber-950 rounded-full transform rotate-12 z-0"></div>
            </div>
        </div>
        
        {/* Water */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-24 bg-blue-100/50 rounded-full blur-xl -z-10"></div>
    </div>

    {/* Responsibility Cards */}
    <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        <div className="bg-[#FDFDF9] p-10 rounded-[2.5rem] border border-stone-200 shadow-lg hover:shadow-xl transition-all">
            <h3 className="font-serif font-bold text-stone-900 mb-4 text-2xl flex items-center gap-3">
                <div className="bg-stone-100 p-2 rounded-lg"><Compass className="text-stone-700" size={24}/></div>
                The Pilot (Stern)
            </h3>
            <ul className="space-y-3 text-lg text-stone-600">
                <li className="flex gap-3 items-center"><span className="w-2 h-2 bg-stone-400 rounded-full"></span> You sit in the back.</li>
                <li className="flex gap-3 items-center"><span className="w-2 h-2 bg-stone-400 rounded-full"></span> You decide where this lesson goes.</li>
                <li className="flex gap-3 items-center"><span className="w-2 h-2 bg-stone-400 rounded-full"></span> <span className="font-bold text-stone-900">If the canoe crashes, the Pilot is responsible.</span></li>
            </ul>
        </div>
        <div className="bg-teal-50/50 p-10 rounded-[2.5rem] border border-teal-100 shadow-lg hover:shadow-xl transition-all">
            <h3 className="font-serif font-bold text-teal-900 mb-4 text-2xl flex items-center gap-3">
                <div className="bg-teal-100 p-2 rounded-lg"><Cpu className="text-teal-700" size={24}/></div>
                The Co-Pilot (Bow)
            </h3>
            <ul className="space-y-3 text-lg text-teal-800">
                <li className="flex gap-3 items-center"><span className="w-2 h-2 bg-teal-400 rounded-full"></span> Infinite energy to paddle.</li>
                <li className="flex gap-3 items-center"><span className="w-2 h-2 bg-teal-400 rounded-full"></span> Scans the horizon for rocks.</li>
                <li className="flex gap-3 items-center"><span className="w-2 h-2 bg-teal-400 rounded-full"></span> <span className="font-bold bg-teal-200/50 px-2 rounded">Never steers the boat.</span></li>
            </ul>
        </div>
    </div>
  </div>
);

export default Slide2_PilotCoPilot;