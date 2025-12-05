import React from 'react';
import { Mail, UserCircle2, Shield, Check } from 'lucide-react';

const Slide8_DifficultEmail: React.FC = () => (
  <div className="flex flex-col h-full items-center justify-center">
    <div className="flex items-center gap-4 mb-12 bg-indigo-50 px-6 py-3 rounded-full border border-indigo-100">
        <Mail className="text-indigo-600" size={24}/>
        <h2 className="text-2xl font-serif font-bold text-slate-900">The Difficult Email</h2>
    </div>

    {/* Persona Selector UI */}
    <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-200 max-w-4xl w-full mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-400"></div>
        
        <h3 className="text-slate-400 font-bold text-center mb-8 uppercase tracking-widest text-xs">Select AI Persona</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
            {/* Locked Persona */}
            <div className="group rounded-2xl p-6 border border-slate-100 bg-slate-50 opacity-60 hover:opacity-100 transition-opacity cursor-not-allowed">
                <div className="w-12 h-12 bg-slate-200 rounded-full mb-4 mx-auto"></div>
                <h4 className="text-slate-500 font-bold text-sm text-center">The Enforcer</h4>
                <div className="h-1 w-8 bg-slate-200 mx-auto mt-2"></div>
            </div>

            {/* Selected Persona */}
            <div className="relative bg-gradient-to-b from-indigo-600 to-indigo-800 rounded-2xl p-6 shadow-xl transform scale-105 border-2 border-indigo-400 text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-indigo-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-sm flex items-center gap-1">
                    <Check size={10} strokeWidth={4} /> Selected
                </div>
                
                <div className="w-16 h-16 bg-white/20 rounded-full mb-4 mx-auto flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <UserCircle2 size={32} className="text-white" />
                </div>
                
                <h4 className="text-white font-bold text-lg mb-4">Compassionate Mediator</h4>
                
                <div className="space-y-2 text-left bg-indigo-900/50 p-3 rounded-xl border border-indigo-500/30">
                    <div className="flex justify-between text-xs text-indigo-100">
                        <span>Tone</span>
                        <span className="font-bold">Collaborative</span>
                    </div>
                    <div className="flex justify-between text-xs text-indigo-100">
                        <span>Technique</span>
                        <span className="font-bold">Sandwich Method</span>
                    </div>
                    <div className="flex justify-between text-xs text-indigo-100">
                        <span>Goal</span>
                        <span className="font-bold">Connection</span>
                    </div>
                </div>
            </div>

            {/* Locked Persona */}
            <div className="group rounded-2xl p-6 border border-slate-100 bg-slate-50 opacity-60 hover:opacity-100 transition-opacity cursor-not-allowed">
                <div className="w-12 h-12 bg-slate-200 rounded-full mb-4 mx-auto"></div>
                <h4 className="text-slate-500 font-bold text-sm text-center">The Bureaucrat</h4>
                <div className="h-1 w-8 bg-slate-200 mx-auto mt-2"></div>
            </div>
        </div>
    </div>

    <div className="flex gap-6 items-center bg-white p-6 rounded-2xl border border-indigo-100 shadow-sm max-w-2xl">
        <div className="bg-indigo-50 p-4 rounded-full shrink-0"><Shield className="text-indigo-600" size={24}/></div>
        <div>
            <h4 className="font-bold text-slate-900 text-lg mb-1">Role Priming</h4>
            <p className="text-slate-600 leading-relaxed">It gives you an emotional shield. The AI wears the mask so you don't have to absorb the stress of the conflict.</p>
        </div>
    </div>
  </div>
);

export default Slide8_DifficultEmail;