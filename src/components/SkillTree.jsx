import React from 'react';
import { Cpu, Bot, Terminal as TerminalIcon, Layout, Server, Database, BarChart2 } from 'lucide-react';

export default function SkillTree({ onCharacterTalk }) {
  return (
    <section id="skilltree" className="space-y-8">
      <div className="border-b-4 border-[#24242a] pb-4">
        <h2 className="font-pixel text-xl sm:text-2xl text-[#d9a046] flex items-center gap-3">
          <Cpu className="w-6 h-6" /> UNLOCKED SKILL TREE
        </h2>
        <p className="text-xs text-[#8a8a98] mt-1">Interactive Technical Mastery Branches</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Branch 1: AI & GenAI */}
        <div 
          className="pixel-box p-5 space-y-4 hover:border-[#d9a046] transition-all cursor-pointer" 
          onClick={() => onCharacterTalk('AI & Agentic Workflows are my core specialty!')}
        >
          <div className="flex items-center gap-3 pb-3 border-b border-[#24242a]">
            <div className="p-2 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046]">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-pixel text-xs text-[#f0f0f5]">AI</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046] font-pixel">LLMs</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046] font-pixel">AI AGENTS</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">Multi-Agent</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">Tool Calling</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">Embeddings</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">Vector DBs</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046] font-pixel">RAG</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">LangChain</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">Tavily</span>
          </div>
        </div>

        {/* Branch 2: Core Languages */}
        <div 
          className="pixel-box p-5 space-y-4 hover:border-[#d9a046] transition-all cursor-pointer" 
          onClick={() => onCharacterTalk('I use Python for AI pipelines and JavaScript for full-stack build!')}
        >
          <div className="flex items-center gap-3 pb-3 border-b border-[#24242a]">
            <div className="p-2 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046]">
              <TerminalIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-pixel text-xs text-[#f0f0f5]">LANGUAGES</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046] font-pixel">PYTHON</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046] font-pixel">JAVASCRIPT</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">DSA</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">Algorithms</span>
          </div>
        </div>

        {/* Branch 3: Frontend */}
        <div 
          className="pixel-box p-5 space-y-4 hover:border-[#d9a046] transition-all cursor-pointer" 
          onClick={() => onCharacterTalk('Responsive interfaces built with React.js!')}
        >
          <div className="flex items-center gap-3 pb-3 border-b border-[#24242a]">
            <div className="p-2 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046]">
              <Layout className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-pixel text-xs text-[#f0f0f5]">FRONTEND</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046] font-pixel">REACT.JS</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">Responsive UI</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">Tailwind CSS</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">State Flow</span>
          </div>
        </div>

        {/* Branch 4: Backend */}
        <div 
          className="pixel-box p-5 space-y-4 hover:border-[#d9a046] transition-all cursor-pointer" 
          onClick={() => onCharacterTalk('Node.js & Express REST APIs with DB integrations!')}
        >
          <div className="flex items-center gap-3 pb-3 border-b border-[#24242a]">
            <div className="p-2 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046]">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-pixel text-xs text-[#f0f0f5]">BACKEND</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">Node.js</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">Express.js</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046] font-pixel">REST APIs</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">JWT Auth</span>
          </div>
        </div>

        {/* Branch 5: Databases & Tools */}
        <div 
          className="pixel-box p-5 space-y-4 hover:border-[#d9a046] transition-all cursor-pointer" 
          onClick={() => onCharacterTalk('Structured SQL & Supabase database management!')}
        >
          <div className="flex items-center gap-3 pb-3 border-b border-[#24242a]">
            <div className="p-2 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046]">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-pixel text-xs text-[#f0f0f5]">DATABASES</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">MongoDB</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046] font-pixel">Supabase</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">SQL</span>
          </div>
        </div>

        {/* Branch 6: Data & Visualization */}
        <div 
          className="pixel-box p-5 space-y-4 hover:border-[#d9a046] transition-all cursor-pointer" 
          onClick={() => onCharacterTalk('Pandas, NumPy & BeautifulSoup for web scraping!')}
        >
          <div className="flex items-center gap-3 pb-3 border-b border-[#24242a]">
            <div className="p-2 bg-[#24242a] border border-[#f0f0f5] text-[#d9a046]">
              <BarChart2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-pixel text-xs text-[#f0f0f5]">DATA TOOLS</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">Pandas</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">NumPy</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">Plotly</span>
            <span className="px-2.5 py-1 bg-[#24242a] border border-[#3a3a42]">BeautifulSoup</span>
          </div>
        </div>

      </div>
    </section>
  );
}
