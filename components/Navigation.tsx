import React from 'react';
import { Zone } from '../types';
import { Compass, Leaf, ShieldAlert, ScrollText, Presentation, Hexagon, Activity } from 'lucide-react';

interface NavigationProps {
  currentZone: Zone;
  setZone: (zone: Zone) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentZone, setZone }) => {
  const navItems = [
    { id: 'intro', label: 'The Nexus', icon: Compass },
    { id: 'slides', label: 'Workshop Deck', icon: Presentation },
    { id: 'green-zone', label: 'The Lab', icon: Leaf },
    { id: 'red-zone', label: 'Red Zone', icon: ShieldAlert },
    { id: 'code-of-conduct', label: 'Sovereign Code', icon: ScrollText },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#FDFBF7] border-t border-stone-200 p-2 md:static md:w-72 md:h-screen md:border-r md:border-t-0 flex flex-col z-50 shadow-lg md:shadow-none font-sans">
      <div className="hidden md:flex flex-col gap-1 mb-12 px-6 pt-10">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#1E3A8A] rounded-lg flex items-center justify-center text-[#D97706] shadow-md">
                <Hexagon size={24} strokeWidth={2.5} />
            </div>
            <div className="h-px bg-stone-300 flex-1"></div>
        </div>
        <h1 className="font-serif font-bold text-[#1E3A8A] text-2xl leading-none tracking-tight">
          NEXUS <br/><span className="text-sm font-sans font-bold text-[#D97706] tracking-widest uppercase">Sovereign AI</span>
        </h1>
      </div>

      <div className="flex md:flex-col justify-around md:justify-start gap-2 md:px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentZone === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setZone(item.id as Zone)}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-lg transition-all duration-200 font-medium ${
                isActive 
                  ? 'bg-[#1E3A8A] text-white shadow-md transform md:translate-x-1' 
                  : 'text-stone-500 hover:bg-stone-100 hover:text-[#1E3A8A]'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-[#D97706]' : 'text-stone-400'} />
              <span className="hidden md:block">{item.label}</span>
            </button>
          );
        })}
      </div>
      
      <div className="hidden md:block mt-auto px-6 pb-8">
        <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm">
           <div className="flex items-center gap-2 mb-2">
               <Activity size={14} className="text-[#D97706] animate-pulse" />
               <h4 className="font-bold text-[#1E3A8A] text-xs uppercase tracking-wider">System Status</h4>
           </div>
           <p className="text-xs text-stone-500 leading-relaxed font-medium">
             Nexus Protocol Active.<br/>
             Sovereignty Checks: <span className="text-green-600">Online</span>
           </p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;