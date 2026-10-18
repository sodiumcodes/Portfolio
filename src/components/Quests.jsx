import React, { useState } from 'react';
import { Scroll, Image as ImageIcon, ChevronRight, ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import QuestModal from './QuestModal';
import sociallyImg from '../assets/socially.png';
import insightFlowImg from '../assets/insight_flow.png';
import retailPulseImg from '../assets/retail_pulse.png';

export const questData = {
  socially: {
    title: "QUEST: SOCIALLY PLATFORM",
    xp: "1200 XP",
    stack: ["React.js", "Node.js", "Express.js", "Supabase"],
    details: [
      "Engineered modular backend architecture using controllers, routes, and middlewares.",
      "Implemented campus-wide authorization and dynamic feed visibility using user attributes (batch, campus, branch).",
      "Integrated Supabase schema for direct database security policies."
    ]
  },
  insightflow: {
    title: "QUEST: INSIGHTFLOW-AI ASSISTANT",
    xp: "1500 XP",
    stack: ["Python", "LangChain", "Groq", "Tavily", "BeautifulSoup"],
    details: [
      "Orchestrated multi-step LLM workflows for automated research and search extraction.",
      "Implemented Tavily search tool calling to query live web data dynamically.",
      "Integrated a Critic Agent to evaluate generated reports and output structured feedback."
    ]
  },
  retailpulse: {
    title: "QUEST: RETAILPULSE ANALYTICS",
    xp: "1000 XP",
    stack: ["Python", "Pandas", "NumPy", "Plotly", "Streamlit"],
    details: [
      "Cleaned and engineered pipelines for over 1 Million transactional e-commerce records.",
      "Calculated transaction revenue, customer cohorts, and product trend distributions.",
      "Built interactive Streamlit analytical dashboard with real-time dynamic country/year filters."
    ]
  }
};

export default function Quests({ onCharacterTalk }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalQuest, setActiveModalQuest] = useState(null);
  const [questImages, setQuestImages] = useState({
    p1: sociallyImg,
    p2: insightFlowImg,
    p3: retailPulseImg
  });

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    onCharacterTalk(`Filtered Quests for ${category.toUpperCase()} category!`);
  };

  const handleImageUpload = (key, e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setQuestImages(prev => ({ ...prev, [key]: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenModal = (key) => {
    setActiveModalQuest(questData[key]);
    onCharacterTalk("Inspecting detailed quest specifications!");
  };

  const handleCloseModal = () => {
    setActiveModalQuest(null);
  };

  return (
    <>
      <section id="quests" className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-4 border-[#24242a] pb-4">
          <div>
            <h2 className="font-pixel text-xl sm:text-2xl text-[#d9a046] flex items-center gap-3">
              <Scroll className="w-6 h-6" /> ACTIVE QUEST LOG
            </h2>
            <p className="text-xs text-[#8a8a98] mt-1">Completed Software Engineering & AI Projects</p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 font-pixel text-xs">
            <button 
              onClick={() => handleFilterClick('all')} 
              className={`quest-filter-btn ${activeFilter === 'all' ? 'pixel-btn-gold' : 'pixel-btn'} px-3 py-2`}
            >
              ALL
            </button>
            <button 
              onClick={() => handleFilterClick('fullstack')} 
              className={`quest-filter-btn ${activeFilter === 'fullstack' ? 'pixel-btn-gold' : 'pixel-btn'} px-3 py-2`}
            >
              FULLSTACK
            </button>
            <button 
              onClick={() => handleFilterClick('ai')} 
              className={`quest-filter-btn ${activeFilter === 'ai' ? 'pixel-btn-gold' : 'pixel-btn'} px-3 py-2`}
            >
              AI AGENTS
            </button>
            <button 
              onClick={() => handleFilterClick('data')} 
              className={`quest-filter-btn ${activeFilter === 'data' ? 'pixel-btn-gold' : 'pixel-btn'} px-3 py-2`}
            >
              DATA
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Quest 1: Socially */}
          {(activeFilter === 'all' || activeFilter === 'fullstack') && (
            <div className="quest-card pixel-box p-5 space-y-4 flex flex-col justify-between" data-category="fullstack">
              <div className="space-y-4">
                {/* Image Placeholder Frame */}
                <div className="relative aspect-video image-placeholder-frame flex flex-col items-center justify-center p-2 text-center" id="p1-frame">
                  {!questImages.p1 && (
                    <div id="p1-placeholder-text">
                      <ImageIcon className="w-6 h-6 text-[#8a8a98] mx-auto mb-1" />
                      <p className="text-[10px] text-[#8a8a98]">[ SCREENSHOT PLACEHOLDER ]</p>
                      <label className="mt-2 inline-block px-2 py-1 bg-[#24242a] text-[9px] text-[#f0f0f5] border border-[#f0f0f5] cursor-pointer hover:border-[#d9a046]">
                        ATTACH IMAGE
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden quest-file-input" 
                          data-target="p1"
                          onChange={(e) => handleImageUpload('p1', e)}
                        />
                      </label>
                    </div>
                  )}
                  {questImages.p1 && (
                    <img id="p1-img" src={questImages.p1} alt="Socially Screenshot" className="absolute inset-0 w-full h-full object-cover" />
                  )}
                </div>

                <h3 className="font-pixel text-base text-[#f0f0f5]">SOCIALLY</h3>
                <p className="text-xs text-[#8a8a98] leading-relaxed">
                  Full-stack social platform with user authentication, custom attribute dynamic feed visibility (campus, batch, branch), and modular RESTful APIs.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-[#24242a] border border-[#3a3a42] text-[10px]">React.js</span>
                  <span className="px-2 py-0.5 bg-[#24242a] border border-[#3a3a42] text-[10px]">Node.js</span>
                  <span className="px-2 py-0.5 bg-[#24242a] border border-[#3a3a42] text-[10px]">Express</span>
                  <span className="px-2 py-0.5 bg-[#24242a] border border-[#3a3a42] text-[10px]">Supabase</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#24242a] flex items-center justify-between">
                <button 
                  onClick={() => handleOpenModal('socially')} 
                  className="text-xs font-pixel text-[#d9a046] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  SPECS <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <div className="flex gap-2">
                  <a href="https://github.com/sodiumcodes/Socially" target="_blank" rel="noopener noreferrer" className="pixel-btn px-2 py-1 text-xs" title="GitHub Source">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://socially-nine-psi.vercel.app/#/feed" target="_blank" rel="noopener noreferrer" className="pixel-btn-gold px-2 py-1 text-xs" title="Live Demo">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Quest 2: InsightFlow-AI */}
          {(activeFilter === 'all' || activeFilter === 'ai') && (
            <div className="quest-card pixel-box p-5 space-y-4 flex flex-col justify-between" data-category="ai">
              <div className="space-y-4">

                {/* Image Placeholder Frame */}
                <div className="relative aspect-video image-placeholder-frame flex flex-col items-center justify-center p-2 text-center" id="p2-frame">
                  {!questImages.p2 && (
                    <div id="p2-placeholder-text">
                      <ImageIcon className="w-6 h-6 text-[#8a8a98] mx-auto mb-1" />
                      <p className="text-[10px] text-[#8a8a98]">[ SCREENSHOT PLACEHOLDER ]</p>
                      <label className="mt-2 inline-block px-2 py-1 bg-[#24242a] text-[9px] text-[#f0f0f5] border border-[#f0f0f5] cursor-pointer hover:border-[#d9a046]">
                        ATTACH IMAGE
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden quest-file-input" 
                          data-target="p2"
                          onChange={(e) => handleImageUpload('p2', e)}
                        />
                      </label>
                    </div>
                  )}
                  {questImages.p2 && (
                    <img id="p2-img" src={questImages.p2} alt="InsightFlow-AI Screenshot" className="absolute inset-0 w-full h-full object-cover" />
                  )}
                </div>

                <h3 className="font-pixel text-base text-[#f0f0f5]">INSIGHTFLOW-AI</h3>
                <p className="text-xs text-[#8a8a98] leading-relaxed">
                  AI research assistant orchestrating multi-step LLM workflows for web extraction, search tool calling, and structured critic verification.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-[#24242a] border border-[#3a3a42] text-[10px]">Python</span>
                  <span className="px-2 py-0.5 bg-[#24242a] border border-[#3a3a42] text-[10px]">LangChain</span>
                  <span className="px-2 py-0.5 bg-[#24242a] border border-[#3a3a42] text-[10px]">Groq</span>
                  <span className="px-2 py-0.5 bg-[#24242a] border border-[#3a3a42] text-[10px]">Tavily</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#24242a] flex items-center justify-between">
                <button 
                  onClick={() => handleOpenModal('insightflow')} 
                  className="text-xs font-pixel text-[#d9a046] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  SPECS <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <div className="flex gap-2">
                  <a href="https://github.com/sodiumcodes/InsightFlow-AI" target="_blank" rel="noopener noreferrer" className="pixel-btn px-2 py-1 text-xs" title="GitHub Source">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://insight-flow-ai-001.streamlit.app/" target="_blank" rel="noopener noreferrer" className="pixel-btn-gold px-2 py-1 text-xs" title="Live Demo">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Quest 3: RetailPulse */}
          {(activeFilter === 'all' || activeFilter === 'data') && (
            <div className="quest-card pixel-box p-5 space-y-4 flex flex-col justify-between" data-category="data">
              <div className="space-y-4">
                {/* Image Placeholder Frame */}
                <div className="relative aspect-video image-placeholder-frame flex flex-col items-center justify-center p-2 text-center" id="p3-frame">
                  {!questImages.p3 && (
                    <div id="p3-placeholder-text">
                      <ImageIcon className="w-6 h-6 text-[#8a8a98] mx-auto mb-1" />
                      <p className="text-[10px] text-[#8a8a98]">[ SCREENSHOT PLACEHOLDER ]</p>
                      <label className="mt-2 inline-block px-2 py-1 bg-[#24242a] text-[9px] text-[#f0f0f5] border border-[#f0f0f5] cursor-pointer hover:border-[#d9a046]">
                        ATTACH IMAGE
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden quest-file-input" 
                          data-target="p3"
                          onChange={(e) => handleImageUpload('p3', e)}
                        />
                      </label>
                    </div>
                  )}
                  {questImages.p3 && (
                    <img id="p3-img" src={questImages.p3} alt="RetailPulse Screenshot" className="absolute inset-0 w-full h-full object-cover" />
                  )}
                </div>

                <h3 className="font-pixel text-base text-[#f0f0f5]">RETAILPULSE</h3>
                <p className="text-xs text-[#8a8a98] leading-relaxed">
                  E-commerce analytics dashboard processing 1M+ transactions to compute geographical revenue, customer cohorts, and automated key findings.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 bg-[#24242a] border border-[#3a3a42] text-[10px]">Python</span>
                  <span className="px-2 py-0.5 bg-[#24242a] border border-[#3a3a42] text-[10px]">Pandas</span>
                  <span className="px-2 py-0.5 bg-[#24242a] border border-[#3a3a42] text-[10px]">Plotly</span>
                  <span className="px-2 py-0.5 bg-[#24242a] border border-[#3a3a42] text-[10px]">Streamlit</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#24242a] flex items-center justify-between">
                <button 
                  onClick={() => handleOpenModal('retailpulse')} 
                  className="text-xs font-pixel text-[#d9a046] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  SPECS <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <div className="flex gap-2">
                  <a href="https://github.com/sodiumcodes/RetailPulse" target="_blank" rel="noopener noreferrer" className="pixel-btn px-2 py-1 text-xs" title="GitHub Source">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://retail-pulse-sales-dashboard.streamlit.app/" target="_blank" rel="noopener noreferrer" className="pixel-btn-gold px-2 py-1 text-xs" title="Live Demo">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      <QuestModal quest={activeModalQuest} onClose={handleCloseModal} />
    </>
  );
}
