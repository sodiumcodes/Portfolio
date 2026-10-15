import React, { useState, useRef, useEffect } from 'react';
import { TerminalSquare } from 'lucide-react';

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
    <section id="terminal" className="space-y-6">
      <div className="border-b-4 border-[#24242a] pb-4">
        <h2 className="font-pixel text-xl sm:text-2xl text-[#d9a046] flex items-center gap-3">
          <TerminalSquare className="w-6 h-6" /> QUEST CONSOLE & TERMINAL
        </h2>
        <p className="text-xs text-[#8a8a98] mt-1">Type commands like 'help', 'about', 'skills', or 'contact'</p>
      </div>

      <div className="pixel-box p-4 sm:p-6 bg-[#0a0a0c] space-y-4">
        <div className="flex items-center justify-between border-b border-[#24242a] pb-3 text-xs text-[#8a8a98]">
          <span className="font-pixel text-[#d9a046]">NAINA_BOT v2.6 TERMINAL</span>
          <span>TYPE 'help' FOR COMMANDS</span>
        </div>

        {/* Terminal Output Buffer */}
        <div 
          id="terminal-output" 
          ref={outputRef}
          className="font-retro text-xs text-[#f0f0f5] space-y-2 h-48 overflow-y-auto pr-2"
        >
          {outputLines.map((line, idx) => (
            <p key={idx} className={line.color}>{line.text}</p>
          ))}
        </div>

        {/* Terminal Input Form */}
        <form onSubmit={handleSubmit} className="flex gap-2 pt-2 border-t border-[#24242a]">
          <span className="text-[#d9a046] font-pixel text-xs">&gt;</span>
          <input 
            type="text" 
            id="terminal-input" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter command..." 
            className="flex-1 bg-transparent text-xs text-[#f0f0f5] font-retro focus:outline-none" 
          />
          <button type="submit" className="pixel-btn-gold px-3 py-1 text-xs font-pixel">RUN</button>
        </form>
      </div>
    </section>
  );
}
