import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';
import { Github } from './Icons';
import QuestModal from './QuestModal';
import sociallyImg from '../assets/socially.png';
import insightFlowImg from '../assets/insight_flow.png';
import retailPulseImg from '../assets/retail_pulse.png';

export const questList = [
  {
    id: 'socially',
    questNum: 'QUEST 01',
    displayNum: '01/03',
    title: 'SOCIALLY',
    category: 'fullstack',
    xp: '1200 XP',
    description: 'Full-stack social platform with user authentication, custom attribute dynamic feed visibility (campus, batch, branch), and modular RESTful APIs.',
    stack: ['REACT', 'NODE', 'EXPRESS', 'SUPABASE'],
    details: [
      'Engineered modular backend architecture using controllers, routes, and middlewares.',
      'Implemented campus-wide authorization and dynamic feed visibility using user attributes (batch, campus, branch).',
      'Integrated Supabase schema for direct database security policies.'
    ],
    github: 'https://github.com/sodiumcodes/Socially',
    live: 'https://socially-nine-psi.vercel.app/#/feed',
    defaultImg: sociallyImg,
    imgKey: 'p1'
  },
  {
    id: 'insightflow',
    questNum: 'QUEST 02',
    displayNum: '02/03',
    title: 'INSIGHTFLOW-AI',
    category: 'ai',
    xp: '1500 XP',
    description: 'AI research assistant orchestrating multi-step LLM workflows for web extraction, search tool calling, and structured critic verification.',
    stack: ['PYTHON', 'LANGCHAIN', 'GROQ', 'TAVILY', 'BEAUTIFULSOUP'],
    details: [
      'Orchestrated multi-step LLM workflows for automated research and search extraction.',
      'Implemented Tavily search tool calling to query live web data dynamically.',
      'Integrated a Critic Agent to evaluate generated reports and output structured feedback.'
    ],
    github: 'https://github.com/sodiumcodes/InsightFlow-AI',
    live: 'https://insight-flow-ai-001.streamlit.app/',
    defaultImg: insightFlowImg,
    imgKey: 'p2'
  },
  {
    id: 'retailpulse',
    questNum: 'QUEST 03',
    displayNum: '03/03',
    title: 'RETAILPULSE',
    category: 'data',
    xp: '1000 XP',
    description: 'E-commerce analytics dashboard processing 1M+ transactions to compute geographical revenue, customer cohorts, and automated key findings.',
    stack: ['PYTHON', 'PANDAS', 'STREAMLIT', 'PLOTLY', 'NUMPY'],
    details: [
      'Cleaned and engineered pipelines for over 1 Million transactional e-commerce records.',
      'Calculated transaction revenue, customer cohorts, and product trend distributions.',
      'Built interactive Streamlit analytical dashboard with real-time dynamic country/year filters.'
    ],
    github: 'https://github.com/sodiumcodes/RetailPulse',
    live: 'dashboard-retail-pulse.vercel.app/',
    defaultImg: retailPulseImg,
    imgKey: 'p3'
  }
];

export default function Quests({ onCharacterTalk }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalQuest, setActiveModalQuest] = useState(null);
  const [questImages, setQuestImages] = useState({
    p1: sociallyImg,
    p2: insightFlowImg,
    p3: retailPulseImg
  });

  const touchStartX = useRef(0);
  const total = questList.length;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch Swipe on mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };

  const handleImageUpload = (key, e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setQuestImages((prev) => ({ ...prev, [key]: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOpenSpecs = (quest) => {
    setActiveModalQuest(quest);
    onCharacterTalk(`Inspecting specifications for ${quest.title}!`);
  };

  return (
    <>
      <section id="quests" className="pt-6 relative">
        
        {/* Section Header matching mockup */}
        <div className="text-center space-y-2 mb-10">
          {/* Three square dots */}
          <div className="flex justify-center gap-2 mb-1" aria-hidden="true">
            <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
            <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
            <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
          </div>

          <h2 className="pixel-title-3d text-2xl sm:text-3xl md:text-4xl">
            Choose Your Quest
          </h2>

          <p className="text-xs sm:text-sm text-[#8a8a98] font-sans">
            Click a side card to bring it to the center.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full overflow-hidden py-8 px-2 min-h-[580px] flex items-center justify-center select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full max-w-5xl h-[530px] flex items-center justify-center">
            {questList.map((quest, idx) => {
              // Calculate relative offset from currentIndex: -1 (left), 0 (center), 1 (right)
              let offset = idx - currentIndex;
              if (offset < -1) offset += total;
              if (offset > 1) offset -= total;

              const isCenter = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              // Compute transforms
              let transformClasses = '';
              let zIndex = 10;
              let opacity = 'opacity-35';
              let filter = 'grayscale(85%) brightness(0.65)';
              let pointerClass = 'cursor-pointer';

              if (isCenter) {
                transformClasses = 'translate-x-0 scale-100 sm:scale-105';
                zIndex = 30;
                opacity = 'opacity-100';
                filter = 'none';
                pointerClass = 'cursor-default';
              } else if (isLeft) {
                transformClasses = '-translate-x-[72%] sm:-translate-x-[64%] lg:-translate-x-[62%] scale-85 sm:scale-90';
                zIndex = 20;
              } else if (isRight) {
                transformClasses = 'translate-x-[72%] sm:translate-x-[64%] lg:translate-x-[62%] scale-85 sm:scale-90';
                zIndex = 20;
              } else {
                transformClasses = 'scale-75 opacity-0 pointer-events-none';
                zIndex = 0;
              }

              // Tech tag slicing: max 3 tags with +N
              const maxTags = 3;
              const displayedTags = quest.stack.slice(0, maxTags);
              const remainingCount = quest.stack.length - maxTags;

              return (
                <div
                  key={quest.id}
                  onClick={() => {
                    if (!isCenter) {
                      setCurrentIndex(idx);
                      onCharacterTalk(`Switched quest to ${quest.title}!`);
                    }
                  }}
                  style={{
                    zIndex,
                    filter: isCenter ? 'none' : filter
                  }}
                  className={`absolute top-0 w-[300px] sm:w-[360px] md:w-[380px] h-[520px] transition-all duration-500 ease-out carousel-stepped-transition ${transformClasses} ${opacity} ${pointerClass}`}
                >
                  {/* Card Wrapper: Gold border for center card, subtle dark frame for side cards */}
                  <div className={`w-full h-full pixel-notch-lg ${isCenter ? 'pixel-frame-gold' : 'pixel-frame-dark'}`}>
                    <div className={`w-full h-full pixel-notch-lg p-5 sm:p-6 flex flex-col justify-between ${isCenter ? 'pixel-frame-gold-inner' : 'pixel-frame-dark-inner'}`}>
                      
                      <div className="space-y-4">
                        
                        {/* Screenshot / Grid Area */}
                        <div className="relative aspect-[16/10] bg-[#09090c] border border-[#262634] pixel-notch overflow-hidden">
                          {isCenter && (
                            <div className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 bg-[#d9a046] text-[#09090c] text-[9px] font-pixel font-bold pixel-notch-sm">
                              SELECTED
                            </div>
                          )}

                          {questImages[quest.imgKey] ? (
                            <img 
                              src={questImages[quest.imgKey]} 
                              alt={quest.title} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-center p-2">
                              <p className="text-[10px] text-[#8a8a98] font-pixel">[ NO SCREENSHOT ]</p>
                              {isCenter && (
                                <label className="mt-2 inline-block px-2 py-1 bg-[#1a1a24] text-[9px] text-[#d9a046] border border-[#d9a046] pixel-notch-sm cursor-pointer hover:bg-[#d9a046] hover:text-black">
                                  ATTACH IMAGE
                                  <input 
                                    type="file" 
                                    accept="image/*" 
                                    className="hidden" 
                                    onChange={(e) => handleImageUpload(quest.imgKey, e)}
                                  />
                                </label>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Quest Number Label */}
                        <div className="text-[10px] font-pixel text-[#d9a046] tracking-wider">
                          {quest.questNum}
                        </div>

                        {/* Title */}
                        <h3 className={`font-pixel text-sm sm:text-base ${isCenter ? 'text-[#f0f0f5]' : 'text-[#8a8a98]'}`}>
                          {quest.title}
                        </h3>

                        {/* Description (2 lines clamp, readable font) */}
                        <p className="text-xs text-[#9da0b0] font-sans leading-relaxed line-clamp-2">
                          {quest.description}
                        </p>

                        {/* Tech Stack Tags (First 3 + N) */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {displayedTags.map((tech, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="px-2 py-0.5 bg-[#14141c] border border-[#2a2a38] text-[9px] font-pixel text-[#f0f0f5] pixel-notch-sm"
                            >
                              {tech}
                            </span>
                          ))}
                          {remainingCount > 0 && (
                            <span className="px-1.5 py-0.5 bg-[#14141c] border border-[#2a2a38] text-[9px] font-pixel text-[#d9a046] pixel-notch-sm">
                              +{remainingCount}
                            </span>
                          )}
                        </div>

                      </div>

                      {/* Footer Actions */}
                      <div className="pt-4 border-t border-[#1e1e28] flex items-center justify-between">
                        {isCenter ? (
                          <>
                            <button 
                              onClick={() => handleOpenSpecs(quest)}
                              className="text-[10px] font-pixel text-[#d9a046] hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              SPECS <ChevronRight className="w-3.5 h-3.5" />
                            </button>

                            <div className="flex items-center gap-2">
                              <a 
                                href={quest.github} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="pixel-btn px-2.5 py-1 text-[10px] pixel-notch-sm flex items-center gap-1"
                                title="Source Code"
                              >
                                <Github className="w-3.5 h-3.5" />
                              </a>
                              <a 
                                href={quest.live} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="pixel-btn-gold text-[10px] px-3 py-1.5 pixel-notch-sm"
                              >
                                LIVE
                              </a>
                            </div>
                          </>
                        ) : (
                          <div className="w-full flex items-center justify-between text-[#8a8a98]">
                            <span className="text-[10px] font-pixel flex items-center gap-1">
                              SPECS &gt;
                            </span>
                            <span className="text-[9px] font-pixel px-2 py-1 bg-[#14141c] border border-[#2a2a38] pixel-notch-sm">
                              LIVE
                            </span>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Square Dot Indicators below carousel */}
        <div className="flex justify-center items-center gap-3 mt-4">
          {questList.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => {
                setCurrentIndex(dotIdx);
                onCharacterTalk(`Viewing ${questList[dotIdx].title}`);
              }}
              className={`w-2.5 h-2.5 pixel-notch-sm transition-colors cursor-pointer ${
                currentIndex === dotIdx 
                  ? 'bg-[#d9a046] scale-110 shadow-[0_0_8px_#d9a046]' 
                  : 'bg-[#2a2a36] hover:bg-[#3e3e50]'
              }`}
              aria-label={`Go to Quest ${dotIdx + 1}`}
            />
          ))}
        </div>

      </section>

      {/* Quest Modal */}
      <QuestModal quest={activeModalQuest} onClose={() => setActiveModalQuest(null)} />
    </>
  );
}
