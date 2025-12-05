
import React, { useState, useRef, useEffect } from 'react';
import { ToolType, ChatMessage } from '../types';
import { generateGeminiResponse } from '../services/geminiService';
import { TOOLS } from '../data/tools';
import { SCENARIOS } from '../data/scenarios';
import { constructPrompt, getSystemInstruction } from '../utils/promptGenerator';
import { RemixInputs, InterestSkinInputs, ProjectBreakerInputs, RubricInputs, EmailInputs, DeepDiverInputs } from './ToolInputs';
import { Play, RotateCcw, Sparkles, AlertCircle, Eye, EyeOff, BrainCircuit, Mic, Link, Bone, Network, Activity, Volume2, RefreshCw, Shield, Lightbulb, Zap, BookOpen, Layers, Gamepad2, Ear, CheckSquare, Mail } from 'lucide-react';

const InteractivePlayground: React.FC = () => {
  const [activeTool, setActiveTool] = useState<ToolType>(ToolType.REMIX);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [showPromptPreview, setShowPromptPreview] = useState(false);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('');
  
  // Dynamic State for all tools
  const [inputData, setInputData] = useState<any>({});

  // Load Demo Data
  const loadScenario = (tool: ToolType, scenarioId?: string) => {
    const scenarios = SCENARIOS[tool];
    if (!scenarios || scenarios.length === 0) {
        // Initialize default empty state for tool if no scenarios
        if (tool === ToolType.DEEP_DIVER) setInputData({ mode: 'slow', scenario: '' });
        else setInputData({});
        return;
    }

    const scenario = scenarioId 
        ? scenarios.find(s => s.id === scenarioId) 
        : scenarios[0];
    
    if (!scenario) return;

    setSelectedScenarioId(scenario.id);
    // Deep copy data to avoid reference issues
    const initData = { ...scenario.data };
    
    // Ensure default mode for deep diver if not present
    if (tool === ToolType.DEEP_DIVER && !initData.mode) {
        initData.mode = 'slow';
    }
    
    setInputData(initData);
    setMessages([]);
  };

  // Initial Load & Tool Change
  useEffect(() => {
    loadScenario(activeTool);
  }, [activeTool]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (field: string, value: any) => {
      setInputData(prev => ({ ...prev, [field]: value }));
  };

  const handleRun = async () => {
    setIsLoading(true);
    const userPrompt = constructPrompt(activeTool, inputData);
    
    // Add user message to UI
    let displayPrompt = `Running ${currentToolDef.title}...`;
    setMessages(prev => [...prev, { role: 'user', content: displayPrompt }]);

    try {
      const response = await generateGeminiResponse(
        'gemini-2.5-flash',
        userPrompt,
        getSystemInstruction(activeTool)
      );
      setMessages(prev => [...prev, { role: 'model', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', content: "The Nexus encountered a disruption. Please try again.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const currentToolDef = TOOLS.find(t => t.id === activeTool) || TOOLS[0];
  const currentScenario = SCENARIOS[activeTool]?.find(s => s.id === selectedScenarioId);

  // --- HELPERS ---
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
        case 'Layers': return <Layers className={className} />;
        case 'Gamepad2': return <Gamepad2 className={className} />;
        case 'BrainCircuit': return <BrainCircuit className={className} />;
        case 'Zap': return <Zap className={className} />;
        case 'Ear': return <Ear className={className} />;
        case 'CheckSquare': return <CheckSquare className={className} />;
        case 'Mail': return <Mail className={className} />;
        default: return <BookOpen className={className} />;
    }
  };

  const renderMetaphorIcon = (metaphor: string) => {
      if (metaphor === 'The Chain') return <Link className="text-blue-600" size={32} />;
      if (metaphor === 'The Skeleton') return <Bone className="text-amber-600" size={32} />;
      if (metaphor === 'The Tree') return <Network className="text-emerald-600" size={32} />;
      if (metaphor === 'The Switch') return <Activity className="text-cyan-600" size={32} />;
      if (metaphor === 'The Stethoscope') return <Volume2 className="text-rose-600" size={32} />;
      if (metaphor === 'The Mirror') return <RefreshCw className="text-indigo-600" size={32} />;
      if (metaphor === 'The Shield') return <Shield className="text-stone-600" size={32} />;
      return <Lightbulb className="text-amber-500" size={32} />;
  }

  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-[#1E3A8A]">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    let isInThinkingBlock = false;

    return lines.map((line, i) => {
      const trimmed = line.trim();
      
      if (trimmed.includes('<thinking>')) {
          isInThinkingBlock = true;
          return <div key={i} className="flex items-center gap-2 text-cyan-700 font-bold text-[10px] uppercase tracking-wider mt-4 mb-2 bg-cyan-50 p-2 rounded-t-lg border-t border-l border-r border-cyan-100 w-fit"><BrainCircuit size={12}/> System 2 Analysis Active</div>;
      }
      if (trimmed.includes('</thinking>')) {
          isInThinkingBlock = false;
          return <div key={i} className="h-4 border-b border-cyan-100 mb-4"></div>;
      }

      if (isInThinkingBlock) {
          return (
            <div key={i} className="text-cyan-900/80 text-xs font-mono pl-4 border-l-2 border-cyan-200 bg-cyan-50/30 pr-2 py-0.5">
                {trimmed.replace('<thinking>', '').replace('</thinking>', '')}
            </div>
          );
      }

      if (!trimmed) return <div key={i} className="h-2" />;

      if (trimmed.startsWith('###') || (trimmed.startsWith('**') && trimmed.includes(':') && trimmed.length < 50)) {
         return (
             <h3 key={i} className="text-base font-bold text-[#1E3A8A] mt-5 mb-2 flex items-center gap-2">
                 {formatText(trimmed.replace(/^#+\s/, ''))}
             </h3>
         );
      }

      if (trimmed.startsWith('* ') || trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
        const content = trimmed.replace(/^[*•-]\s/, '');
        return (
          <div key={i} className="flex gap-2.5 mb-2 pl-1">
            <div className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-[#D97706]"></div>
            <p className="text-sm text-slate-700 leading-relaxed">{formatText(content)}</p>
          </div>
        );
      }

      if (/^\d+\.\s/.test(trimmed)) {
          const [num, ...rest] = trimmed.split('.');
          return (
             <div key={i} className="flex gap-2.5 mb-2 pl-1">
                 <span className="shrink-0 font-bold text-[#D97706] text-sm w-4">{num}.</span>
                 <p className="text-sm text-slate-700 leading-relaxed">{formatText(rest.join('.').trim())}</p>
             </div>
          )
      }

      return <p key={i} className="text-sm text-slate-700 leading-relaxed mb-2">{formatText(trimmed)}</p>;
    });
  };

  return (
    <div className="flex flex-col h-full bg-[#FDFBF7] font-sans">
      {/* Tool Navigation Bar */}
      <div className="flex overflow-x-auto gap-3 p-3 bg-white border-b border-stone-200 shadow-sm z-10 sticky top-0 scrollbar-hide">
        {TOOLS.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 min-w-[200px] ${
              activeTool === tool.id
                ? `${tool.color} shadow-sm ring-1`
                : 'bg-white border-stone-100 text-stone-500 hover:bg-stone-50 hover:border-stone-300'
            }`}
          >
            <div className={`p-1.5 rounded-lg ${activeTool === tool.id ? 'bg-white/60' : 'bg-stone-50'}`}>
              {renderIcon(tool.icon, activeTool === tool.id ? "w-5 h-5" : "w-5 h-5 text-stone-300")}
            </div>
            <div className="text-left">
              <div className="font-bold text-sm tracking-tight">{tool.title}</div>
              <div className="text-[10px] opacity-80 uppercase tracking-wide font-medium truncate max-w-[140px]">{tool.subtitle}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* Left Panel: The Map (Configuration) */}
        <div className="w-full lg:w-5/12 p-5 overflow-y-auto border-r border-stone-200 bg-[#FDFBF7]">
          <div className="max-w-xl mx-auto space-y-5">
            
            {/* Mechanism Card */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                    <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                        {renderMetaphorIcon(currentToolDef.visualMetaphor)}
                    </div>
                    <div>
                        <h3 className="font-serif font-bold text-[#1E3A8A] text-base flex items-center gap-2">
                            {currentToolDef.visualMetaphor}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 bg-stone-50 px-2 py-0.5 rounded-full border border-stone-100">
                                {currentToolDef.technicalMechanism}
                        </span>
                    </div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed pl-3 border-l-2 border-stone-100 ml-1">
                  {currentToolDef.whyItWorks}
                </p>
            </div>

            {/* Scenario Selector */}
            {SCENARIOS[activeTool] && SCENARIOS[activeTool].length > 0 && (
                <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm">
                    <label className="block text-[10px] font-bold text-stone-400 mb-2 uppercase tracking-wide px-1">Select Real-World Scenario</label>
                    <select 
                        value={selectedScenarioId}
                        onChange={(e) => loadScenario(activeTool, e.target.value)}
                        className="w-full p-2.5 border border-stone-200 rounded-lg text-sm bg-stone-50 text-[#1E3A8A] font-medium focus:ring-2 focus:ring-blue-500/20 outline-none mb-2"
                    >
                        {SCENARIOS[activeTool].map(s => (
                            <option key={s.id} value={s.id}>{s.label}</option>
                        ))}
                    </select>
                    {currentScenario && (
                        <div className="bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400 block mb-1">Context</span>
                            <p className="text-xs text-blue-900 leading-relaxed italic">"{currentScenario.teacherStory}"</p>
                        </div>
                    )}
                </div>
            )}

            {/* Inputs Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-[11px] font-extrabold text-stone-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Play size={10} className="fill-current" /> Nexus Inputs
                </h3>
              </div>
              
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-5">
                {activeTool === ToolType.REMIX && <RemixInputs data={inputData} onChange={handleInputChange} />}
                {activeTool === ToolType.INTEREST_SKIN && <InterestSkinInputs data={inputData} onChange={handleInputChange} />}
                {activeTool === ToolType.PROJECT_BREAKER && <ProjectBreakerInputs data={inputData} onChange={handleInputChange} />}
                {activeTool === ToolType.RUBRIC_ARCHITECT && <RubricInputs data={inputData} onChange={handleInputChange} />}
                {activeTool === ToolType.DIFFICULT_EMAIL && <EmailInputs data={inputData} onChange={handleInputChange} />}
                {activeTool === ToolType.DEEP_DIVER && <DeepDiverInputs data={inputData} onChange={handleInputChange} />}
              </div>

              {/* Prompt Preview Toggle */}
              <div className="flex items-center justify-between px-2 pt-1">
                 <button 
                   onClick={() => setShowPromptPreview(!showPromptPreview)}
                   className="flex items-center gap-2 text-[11px] font-bold text-stone-400 hover:text-stone-600 transition-colors uppercase tracking-wider"
                 >
                   {showPromptPreview ? <EyeOff size={12} /> : <Eye size={12} />}
                   {showPromptPreview ? "Hide Internal Logic" : "View Internal Logic"}
                 </button>
              </div>

              {showPromptPreview && (
                <div className="bg-[#1E3A8A] rounded-xl p-4 text-[10px] font-mono text-blue-100 overflow-x-auto border border-blue-900 shadow-inner">
                  <div className="flex items-center gap-2 text-[#D97706] mb-2 border-b border-blue-800 pb-2">
                     <BrainCircuit size={12} />
                     <span className="font-bold">GENERATED PROMPT (What the AI sees)</span>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed opacity-80">
                    {constructPrompt(activeTool, inputData)}
                  </pre>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={handleRun}
                  disabled={isLoading}
                  className="group relative w-full flex items-center justify-center gap-3 bg-[#1E3A8A] hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl disabled:opacity-80 disabled:cursor-not-allowed overflow-hidden ring-4 ring-stone-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  {isLoading ? (
                    <RotateCcw className="animate-spin text-[#D97706]" size={18} />
                  ) : (
                    <Sparkles size={18} className="text-[#D97706]" />
                  )}
                  {isLoading ? "Nexus is Processing..." : "Launch Nexus"}
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 mx-auto max-w-xl bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 flex gap-3 shadow-sm items-start">
             <div className="shrink-0 mt-0.5"><AlertCircle size={16} className="text-amber-600" /></div>
             <div className="leading-relaxed">
               <span className="font-bold text-amber-800">Pilot Rule Enforced: </span> 
               You must read, check, and verify EVERYTHING. The machine can hallucinate.
             </div>
          </div>
        </div>

        {/* Right Panel: The Paddle (Output) */}
        <div className="w-full lg:w-7/12 bg-white flex flex-col h-[600px] lg:h-auto border-l border-stone-200 shadow-2xl lg:shadow-none z-0 relative">
           <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-white/95 backdrop-blur-md sticky top-0 z-10">
              <span className="font-bold text-[#1E3A8A] flex items-center gap-2.5 text-[11px] uppercase tracking-widest">
                <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-[#D97706] animate-ping' : 'bg-[#D97706]'}`}></div>
                Nexus Output Stream
              </span>
              <button 
                onClick={() => setMessages([])} 
                className="text-[10px] uppercase font-bold tracking-wider text-stone-400 hover:text-red-500 transition-colors px-3 py-1.5 rounded-full hover:bg-red-50"
              >
                Clear History
              </button>
           </div>
           
           <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
             {messages.length === 0 && (
               <div className="h-full flex flex-col items-center justify-center text-stone-300 p-8 text-center opacity-60">
                  <div className="bg-stone-50 p-6 rounded-3xl mb-4 border border-stone-100">
                     {renderIcon(currentToolDef.icon, "w-8 h-8 text-stone-300")}
                  </div>
                  <h3 className="font-serif font-bold text-stone-400 text-lg mb-2">Ready to {currentToolDef.title.split(":")[1]}</h3>
                  <p className="text-sm text-stone-400 max-w-xs leading-relaxed">
                    Configure the parameters on the left (The Map) to guide the Nexus.
                  </p>
               </div>
             )}
             
             {messages.map((msg, idx) => (
               <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
                 
                 <div className={`max-w-3xl rounded-2xl p-5 shadow-sm border text-base ${
                   msg.role === 'user' 
                     ? 'bg-stone-50 text-stone-600 border-stone-200/60 rounded-br-sm' 
                     : msg.isError 
                        ? 'bg-red-50 text-red-900 border-red-100'
                        : 'bg-white text-stone-800 border-blue-100 rounded-bl-sm shadow-md ring-1 ring-blue-500/10'
                 }`}>
                   {msg.role === 'model' && (
                     <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-50">
                        <div className="bg-blue-50 p-1 rounded-md border border-blue-100">
                            <Sparkles size={12} className="text-[#1E3A8A]" />
                        </div>
                        <span className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-widest">Nexus Response</span>
                        {activeTool === ToolType.DEEP_DIVER && inputData.mode === 'fast' && (
                             <span className="ml-auto text-[9px] font-bold text-cyan-500 uppercase tracking-widest flex items-center gap-1 border border-cyan-100 px-2 py-0.5 rounded-full bg-cyan-50">
                                 <Zap size={8} /> System 1 (Fast)
                             </span>
                        )}
                        {activeTool === ToolType.DEEP_DIVER && inputData.mode === 'slow' && (
                             <span className="ml-auto text-[9px] font-bold text-cyan-700 uppercase tracking-widest flex items-center gap-1 border border-cyan-100 px-2 py-0.5 rounded-full bg-cyan-50">
                                 <BrainCircuit size={8} /> System 2 (Deep)
                             </span>
                        )}
                     </div>
                   )}
                   {msg.role === 'user' && (
                     <div className="flex items-center justify-end gap-2 mb-2 opacity-50">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#D97706]">The Architect</span>
                     </div>
                   )}
                   
                   <div className="text-stone-800">
                     {msg.isError ? msg.content : renderFormattedContent(msg.content)}
                   </div>

                 </div>
               </div>
             ))}
             <div ref={messagesEndRef} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePlayground;
