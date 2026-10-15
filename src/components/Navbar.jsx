import React from 'react';
import { Mail } from 'lucide-react';

export default function Navbar({ onCharacterTalk }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0a0c] border-b-4 border-[#24242a] py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        
        {/* Logo / Player Info */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group" 
          onClick={() => onCharacterTalk('Welcome to my RPG Headquarters!')}
        >
          <div className="character-face shrink-0"></div>
          <div>
            <div className="font-pixel text-xs text-[#d9a046] tracking-wider uppercase flex items-center gap-2">
              <span>NAINA DUGAR</span>
              <span className="text-[9px] px-1.5 py-0.5 bg-[#24242a] text-[#f0f0f5] border border-[#f0f0f5]">LVL 21</span>
            </div>
            <div className="text-xs text-[#8a8a98] mt-0.5">CS & Data Analytics @ IIT Patna</div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-pixel">
          <a 
            href="#hero" 
            onClick={() => onCharacterTalk('Welcome back to home base!')} 
            className="text-[#f0f0f5] hover:text-[#d9a046] transition-colors"
          >
            START
          </a>
          <a 
            href="#quests" 
            onClick={() => onCharacterTalk('Check out my completed Quests & Projects!')} 
            className="text-[#f0f0f5] hover:text-[#d9a046] transition-colors"
          >
            QUESTS
          </a>
          <a 
            href="#skilltree" 
            onClick={() => onCharacterTalk('Here are my unlocked Tech Skills!')} 
            className="text-[#f0f0f5] hover:text-[#d9a046] transition-colors"
          >
            SKILL TREE
          </a>
          <a 
            href="#achievements" 
            onClick={() => onCharacterTalk('Review my unlocked Trophies & Milestones!')} 
            className="text-[#f0f0f5] hover:text-[#d9a046] transition-colors"
          >
            ACHIEVEMENTS
          </a>
          <a 
            href="#terminal" 
            onClick={() => onCharacterTalk('Access the Command Console directly!')} 
            className="text-[#f0f0f5] hover:text-[#d9a046] transition-colors"
          >
            CONSOLE
          </a>
        </nav>

        {/* Quick Action */}
        <div className="flex items-center gap-3">
          <a href="#contact" className="pixel-btn px-3 py-2 text-xs font-pixel text-[#d9a046] flex items-center gap-2">
            <Mail className="w-4 h-4" /> CONTACT
          </a>
        </div>
      </div>
    </header>
  );
}
