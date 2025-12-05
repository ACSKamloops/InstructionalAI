import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import InteractivePlayground from './components/InteractivePlayground';
import RedZone from './components/RedZone';
import CodeOfConduct from './components/CodeOfConduct';
import Slideshow from './components/Slideshow';
import { Zone } from './types';

const App: React.FC = () => {
  const [currentZone, setCurrentZone] = useState<Zone>('intro');

  const renderContent = () => {
    switch (currentZone) {
      case 'intro':
        return <Intro onStart={() => setCurrentZone('green-zone')} />;
      case 'slides':
        return <Slideshow />;
      case 'green-zone':
        return <InteractivePlayground />;
      case 'red-zone':
        return <RedZone />;
      case 'code-of-conduct':
        return <CodeOfConduct />;
      default:
        return <Intro onStart={() => setCurrentZone('green-zone')} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Navigation currentZone={currentZone} setZone={setCurrentZone} />
      
      <main className="flex-1 h-[calc(100vh-80px)] md:h-screen overflow-y-auto scrollbar-hide pb-24 md:pb-0">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;