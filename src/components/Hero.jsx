import React, { useState, useRef } from 'react';
import { Sword, UserPlus } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import profilePic from '../assets/picture_for_portfolio.jpg';

export default function Hero({ onCharacterTalk }) {
  const [photoUrl, setPhotoUrl] = useState(profilePic);
  const fileInputRef = useRef(null);

  const handleContainerClick = () => {
    if (!photoUrl && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoUrl(event.target.result);
        onCharacterTalk('Awesome photo attached to Player Profile!');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = (e) => {
    e.stopPropagation();
    setPhotoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="hero" className="pt-6">
      <div className="pixel-box-gold p-6 sm:p-10 space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Character Stats & Bio */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#24242a] border border-[#f0f0f5] text-xs font-pixel text-[#d9a046]">
              <span className="w-2 h-2 bg-[#d9a046] animate-ping"></span>
              STATUS: READY FOR NEXT QUEST
            </div>

            <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-[#f0f0f5] leading-relaxed">
              AI DEVELOPER & FULL-STACK ENGINEER
            </h1>

            <p className="text-sm md:text-base text-[#8a8a98] leading-relaxed">
              Building Autonomous Multi-Agent Workflows, RAG Architecture, and High-Performance Web Applications. Currently pursuing B.Sc. in Computer Science & Data Analytics at <strong className="text-[#f0f0f5]">IIT Patna (2024 - 2028)</strong>.
            </p>

            {/* HUD Health & XP Bars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div>
                <div className="flex justify-between text-xs font-pixel mb-1 text-[#f0f0f5]">
                  <span>HP (DATA LOGIC)</span>
                  <span>100/100</span>
                </div>
                <div className="pixel-bar-bg">
                  <div className="pixel-bar-fill"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-pixel mb-1 text-[#d9a046]">
                  <span>XP (500+ DSA SOLVED)</span>
                  <span>MAX LEVEL</span>
                </div>
                <div className="pixel-bar-bg">
                  <div className="pixel-bar-fill" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#quests" className="pixel-btn-gold px-5 py-3 text-xs font-pixel flex items-center gap-2">
                <Sword className="w-4 h-4" /> VIEW QUEST LOG
              </a>
              <a href="https://github.com/sodiumcodes" target="_blank" rel="noopener noreferrer" className="pixel-btn px-5 py-3 text-xs font-pixel flex items-center gap-2">
                <Github className="w-4 h-4" /> GITHUB
              </a>
              <a href="https://linkedin.com/in/nainadugar" target="_blank" rel="noopener noreferrer" className="pixel-btn px-5 py-3 text-xs font-pixel flex items-center gap-2">
                <Linkedin className="w-4 h-4" /> LINKEDIN
              </a>
            </div>
          </div>

          {/* Photo Attachment Frame */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-full max-w-xs pixel-box p-4 space-y-4 text-center">
              <div className="font-pixel text-xs text-[#d9a046]">PLAYER PROFILE PHOTO</div>
              
              <div 
                id="hero-photo-container" 
                onClick={handleContainerClick}
                className="relative aspect-square image-placeholder-frame flex flex-col items-center justify-center p-4 cursor-pointer group overflow-hidden"
              >
                {!photoUrl && (
                  <div id="hero-placeholder-text" className="space-y-2">
                    <UserPlus className="w-8 h-8 text-[#8a8a98] mx-auto group-hover:text-[#d9a046]" />
                    <p className="text-xs text-[#8a8a98] font-retro">[ ADD YOUR AVATAR / PHOTO HERE ]</p>
                    <span className="inline-block px-2 py-1 bg-[#24242a] text-[10px] text-[#f0f0f5] border border-[#f0f0f5]">CLICK TO ATTACH</span>
                  </div>
                )}
                {photoUrl && (
                  <img 
                    id="hero-photo-img" 
                    src={photoUrl} 
                    alt="Naina Dugar" 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                )}
                <input 
                  type="file" 
                  id="hero-photo-input" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*" 
                  className="hidden" 
                />
              </div>
              <div className="text-[10px] text-[#8a8a98]">CLASS: AI ARCHITECT</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
