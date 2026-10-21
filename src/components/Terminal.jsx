import React, { useState, useRef, useEffect } from 'react';

export default function Terminal() {
  const [outputLines, setOutputLines] = useState([
    { text: "> System initialized. Welcome traveler to Naina Dugar's RPG console.", color: "text-[#8a8a98]" },
    { text: "> Type 'help' to view all available commands.", color: "text-[#d9a046]" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [outputLines]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cmd = inputValue.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setOutputLines([]);
      setInputValue('');
      return;
    }

    let responseText = '';
    switch (cmd) {
      case 'help':
        responseText = "Available commands: 'about', 'skills', 'quests', 'contact', 'clear'";
        break;
      case 'about':
        responseText = "Naina Dugar — AI & Full-Stack Developer @ IIT Patna (2024-2028). Passions: LLMs, Agents, RAG.";
        break;
      case 'skills':
        responseText = "Skills: Python, JS, React, Node, Express, LangChain, Tavily, Supabase, SQL, Pandas.";
        break;
      case 'quests':
        responseText = "Quests: Socially (FullStack), InsightFlow-AI (Multi-Agent), RetailPulse (Data Pipeline).";
        break;
      case 'contact':
        responseText = "Email: nainadugar.official@gmail.com | Phone: +91 9079171274";
        break;
      default:
        responseText = `Unknown command: '${cmd}'. Type 'help' for options.`;
    }

    setOutputLines(prev => [
      ...prev,
      { text: `> ${cmd}`, color: "text-[#f0f0f5]" },
      { text: responseText, color: "text-[#d9a046]" }
    ]);
    setInputValue('');
  };

  return (
    <section id="terminal" className="pt-6 relative space-y-10">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8">
        <div className="flex justify-center gap-2 mb-1" aria-hidden="true">
          <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
          <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
          <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
        </div>

        <h2 className="pixel-title-3d text-2xl sm:text-3xl md:text-4xl">
          Quest Console
        </h2>

        <p className="text-xs sm:text-sm text-[#8a8a98] font-sans">
          Type commands like 'help', 'about', 'skills', or 'contact'
        </p>
      </div>

      {/* Terminal Screen Frame */}
      <div className="max-w-4xl mx-auto pixel-frame-dark pixel-notch-lg">
        <div className="pixel-frame-dark-inner pixel-notch-lg p-5 sm:p-7 space-y-4 bg-[#09090c]">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#20202c] pb-3 text-[10px] font-pixel text-[#8a8a98]">
            <span className="text-[#d9a046]">NAINA_BOT v2.6 TERMINAL</span>
            <span className="hidden sm:inline">TYPE 'help' FOR COMMANDS</span>
          </div>

          {/* Terminal Output Buffer */}
          <div 
            id="terminal-output" 
            ref={outputRef}
            className="font-mono text-xs sm:text-[13px] text-[#f0f0f5] space-y-2 h-52 overflow-y-auto pr-2 leading-relaxed"
          >
            {outputLines.map((line, idx) => (
              <p key={idx} className={line.color}>{line.text}</p>
            ))}
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2.5 pt-3 border-t border-[#20202c]">
            <span className="text-[#d9a046] font-pixel text-xs">&gt;</span>
            <input 
              type="text" 
              id="terminal-input" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter command..." 
              className="flex-1 bg-transparent text-xs sm:text-[13px] text-[#f0f0f5] font-mono focus:outline-none placeholder:text-[#5a5a68]" 
            />
            <button 
              type="submit" 
              className="pixel-btn-gold text-[10px] px-3.5 py-1.5 pixel-notch-sm"
            >
              RUN
            </button>
          </form>

        </div>
      </div>

    </section>
  );
}
