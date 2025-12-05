import React from 'react';
import { FileText, PenTool, Sparkles, TreeDeciduous } from 'lucide-react';

const Slide7_FlashcardFactory: React.FC = () => (
  <div className="flex flex-col h-full items-center justify-center">
    <div className="flex items-center gap-4 mb-16 bg-pink-50 px-8 py-4 rounded-full border border-pink-100 shadow-sm">
        <FileText className="text-pink-600" size={32}/>
        <h2 className="text-3xl font-serif font-bold text-stone-900">The Flashcard Factory</h2>
    </div>

    {/* The Card Visual */}
    <div className="relative group perspective-1000 mb-16">
        <div className="w-96 bg-[#FDFDF9] rounded-[2rem] shadow-2xl border border-stone-200 overflow-hidden transform transition-transform duration-500 hover:rotate-1 hover:scale-105">
            
            {/* Top Half: AI Work (Digital) */}
            <div className="bg-stone-50 p-10 border-b border-dashed border-stone-300 relative">
                <div className="absolute top-5 right-5 bg-stone-200 text-stone-600 text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles size={12} /> The Scaffold
                </div>
                
                <div className="flex justify-center mb-8">
                    <div className="w-28 h-28 bg-white border border-stone-200 rounded-3xl flex items-center justify-center shadow-inner">
                        <TreeDeciduous size={64} className="text-stone-700" />
                    </div>
                </div>
                <h3 className="text-center font-sans font-black text-4xl text-stone-800 tracking-tight mb-2">TREE</h3>
                <p className="text-center text-sm text-stone-500 font-medium">Noun • A woody perennial plant.</p>
            </div>

            {/* Bottom Half: Human Work (Analog) */}
            <div className="bg-[#FFFDF5] p-10 relative">
                <div className="absolute top-5 right-5 bg-pink-100 text-pink-700 text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider flex items-center gap-1.5">
                    <PenTool size={12} /> The Spirit
                </div>
                
                <div className="h-24 flex items-end justify-center pb-2">
                    <div className="w-full border-b-2 border-stone-800 border-opacity-10 relative text-center group-hover:border-opacity-30 transition-all">
                         {/* Handwritten Font Simulation or Blank */}
                         <span className="font-serif text-3xl text-stone-400 italic relative -bottom-2 opacity-30">
                            (Write here)
                         </span>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <span className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Teacher Handwriting Only</span>
                </div>
            </div>
        </div>
    </div>

    <div className="bg-stone-800 text-stone-100 p-8 rounded-3xl max-w-3xl text-center shadow-xl">
        <h4 className="font-bold text-pink-300 uppercase tracking-widest text-xs mb-3">Sovereignty Rule</h4>
        <p className="text-2xl leading-relaxed font-serif">
            "We never ask AI to translate. It will hallucinate. <br/>The AI builds the scaffold. <span className="text-pink-300 font-bold border-b-2 border-pink-400/30 pb-1">You write the spirit by hand.</span>"
        </p>
    </div>
  </div>
);

export default Slide7_FlashcardFactory;