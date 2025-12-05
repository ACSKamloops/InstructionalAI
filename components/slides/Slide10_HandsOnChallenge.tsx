import React from 'react';
import { Layers, Box, Mountain, ArrowRight } from 'lucide-react';

const Slide10_HandsOnChallenge: React.FC = () => (
  <div className="flex flex-col h-full items-center justify-center max-w-7xl mx-auto">
    <div className="text-center mb-16">
        <h2 className="text-6xl font-serif font-bold text-stone-900 mb-6">The Hands-On Challenge</h2>
        <p className="text-2xl text-stone-500 font-light italic">"We are done talking. It's time to paddle."</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8 w-full px-4">
        {/* Mission 1 */}
        <div className="bg-[#FDFDF9] rounded-[2.5rem] shadow-xl border border-stone-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer relative h-96 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-3 bg-blue-500"></div>
            <div className="p-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                    <span className="text-blue-600 font-black uppercase tracking-widest text-xs bg-blue-50 px-4 py-2 rounded-full">Mission 01</span>
                    <Layers className="text-blue-500" size={32} />
                </div>
                <h3 className="font-serif font-bold text-3xl text-stone-900 mb-4 group-hover:text-blue-600 transition-colors">The Remix</h3>
                <p className="text-stone-600 text-lg leading-relaxed mb-auto">
                    Pick a dense paragraph from next week's lesson. Simplify it while keeping the vocabulary.
                </p>
                <div className="flex items-center gap-3 text-blue-600 font-bold text-base mt-8 group-hover:translate-x-2 transition-transform">
                    Start Engine <ArrowRight size={20} />
                </div>
            </div>
        </div>

        {/* Mission 2 */}
        <div className="bg-[#FDFDF9] rounded-[2.5rem] shadow-xl border border-stone-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer relative h-96 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-3 bg-purple-500"></div>
            <div className="p-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                    <span className="text-purple-600 font-black uppercase tracking-widest text-xs bg-purple-50 px-4 py-2 rounded-full">Mission 02</span>
                    <Box className="text-purple-500" size={32} />
                </div>
                <h3 className="font-serif font-bold text-3xl text-stone-900 mb-4 group-hover:text-purple-600 transition-colors">Interest Skin</h3>
                <p className="text-stone-600 text-lg leading-relaxed mb-auto">
                    Take a dry math or grammar rule. Wrap it in a "Minecraft" or "Basketball" skin.
                </p>
                <div className="flex items-center gap-3 text-purple-600 font-bold text-base mt-8 group-hover:translate-x-2 transition-transform">
                    Start Engine <ArrowRight size={20} />
                </div>
            </div>
        </div>

        {/* Mission 3 */}
        <div className="bg-[#FDFDF9] rounded-[2.5rem] shadow-xl border border-stone-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer relative h-96 flex flex-col">
            <div className="absolute top-0 left-0 w-full h-3 bg-emerald-500"></div>
            <div className="p-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                    <span className="text-emerald-600 font-black uppercase tracking-widest text-xs bg-emerald-50 px-4 py-2 rounded-full">Mission 03</span>
                    <Mountain className="text-emerald-500" size={32} />
                </div>
                <h3 className="font-serif font-bold text-3xl text-stone-900 mb-4 group-hover:text-emerald-600 transition-colors">Project Breaker</h3>
                <p className="text-stone-600 text-lg leading-relaxed mb-auto">
                    Identify a big upcoming assignment. Break it down into a "Quest Log" of 20-minute wins.
                </p>
                <div className="flex items-center gap-3 text-emerald-600 font-bold text-base mt-8 group-hover:translate-x-2 transition-transform">
                    Start Engine <ArrowRight size={20} />
                </div>
            </div>
        </div>
    </div>
  </div>
);

export default Slide10_HandsOnChallenge;