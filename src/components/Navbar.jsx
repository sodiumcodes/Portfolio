import React, { useState, useEffect } from 'react';

export default function Navbar({ onCharacterTalk }) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'quests', 'skilltree', 'achievements', 'terminal', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'START', talk: 'Welcome back to home base!' },
    { id: 'quests', label: 'QUESTS', talk: 'Check out my completed Quests & Projects!' },
    { id: 'skilltree', label: 'SKILL TREE', talk: 'Here are my unlocked Tech Skills!' },
    { id: 'achievements', label: 'ACHIEVEMENTS', talk: 'Review my unlocked Trophies & Milestones!' },
    { id: 'terminal', label: 'CONSOLE', talk: 'Access the Command Console directly!' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#09090c]/95 backdrop-blur-sm border-b border-[#1c1c26] py-3.5 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Player Badge / Level */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group" 
          onClick={() => onCharacterTalk('Welcome to my RPG Headquarters!')}
        >
          <div className="character-face shrink-0 pixel-notch-sm"></div>
          <div className="flex items-center gap-2.5">
            <span className="font-pixel text-[11px] text-[#d9a046] tracking-wider uppercase">
              NAINA DUGAR
            </span>
            <span className="text-[9px] font-pixel px-2 py-0.5 bg-[#121218] text-[#f0f0f5] border border-[#2a2a36] pixel-notch-sm">
              LVL 21
            </span>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[10px] font-pixel">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => onCharacterTalk(link.talk)}
                className={`transition-colors py-1 relative ${
                  isActive 
                    ? 'text-[#f0f0f5]' 
                    : 'text-[#8a8a98] hover:text-[#f0f0f5]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#d9a046] pixel-notch-sm" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Contact Button */}
        <div className="flex items-center">
          <a 
            href="#contact" 
            className="pixel-btn-ghost pixel-notch-sm"
          >
            <span className="pixel-btn-ghost-inner pixel-notch-sm text-[10px] py-1.5 px-3.5 tracking-wider">
              CONTACT
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
