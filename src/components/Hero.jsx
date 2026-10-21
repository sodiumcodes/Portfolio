import React, { useState, useRef } from 'react';
import profilePic from '../assets/picture_for_portfolio.jpg';

export default function Hero({ onCharacterTalk }) {
  const [photoUrl, setPhotoUrl] = useState(profilePic);
  const fileInputRef = useRef(null);

  const handleContainerClick = () => {
    if (fileInputRef.current) {
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

  return (
    <section id="hero" className="pt-8 md:pt-12 relative">
      {/* Sparse decorative pixel stars matching the mockup */}
      <span className="pixel-star absolute top-2 left-[48%] w-2.5 h-2.5 opacity-60" aria-hidden="true" />
      <span className="pixel-star absolute bottom-32 left-[50%] w-2 h-2 opacity-50" style={{ animationDelay: '1.5s' }} aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Stats, Headline, Bio, HP/XP bars & Buttons */}
        <div className="lg:col-span-7 space-y-7">
          
          {/* Status Tag */}
          <div className="inline-block pixel-frame-dark pixel-notch-sm">
            <div className="pixel-frame-dark-inner pixel-notch-sm px-3.5 py-1.5 text-[10px] font-pixel text-[#d9a046] tracking-wider">
              STATUS: READY FOR NEXT QUEST
            </div>
          </div>

          {/* 3D Main Headline in Title Case */}
          <h1 className="pixel-title-3d-lg text-3xl sm:text-4xl lg:text-[42px] leading-tight space-y-2">
            <div>AI Developer &amp;</div>
            <div>Full-Stack</div>
            <div>Engineer</div>
          </h1>

          {/* Bio text - clean Inter font, normal sentence case, ~55ch */}
          <p className="text-sm sm:text-base text-[#9da0b0] font-sans leading-relaxed max-w-[54ch]">
            Building autonomous multi-agent workflows, RAG architecture, and high-performance web apps. B.Sc. in Computer Science &amp; Data Analytics at IIT Patna.
          </p>

          {/* HP and XP Segmented Bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg pt-1">
            <div>
              <div className="flex justify-between text-[10px] font-pixel mb-1.5 text-[#d9a046]">
                <span>HP</span>
                <span>100/100</span>
              </div>
              <div className="pixel-bar-bg pixel-notch-sm">
                <div className="pixel-bar-segments"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[10px] font-pixel mb-1.5 text-[#d9a046]">
                <span>XP</span>
                <span>500+ DSA</span>
              </div>
              <div className="pixel-bar-bg pixel-notch-sm">
                <div className="pixel-bar-segments" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#quests" 
              className="pixel-btn-gold pixel-notch-sm"
            >
              VIEW QUEST LOG
            </a>

            <a 
              href="https://github.com/sodiumcodes" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pixel-btn-ghost pixel-notch-sm"
            >
              <span className="pixel-btn-ghost-inner pixel-notch-sm">
                GITHUB
              </span>
            </a>

            <a 
              href="https://linkedin.com/in/nainadugar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pixel-btn-ghost pixel-notch-sm"
            >
              <span className="pixel-btn-ghost-inner pixel-notch-sm">
                LINKEDIN
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: Player Profile Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[420px] pixel-frame-gold pixel-notch-lg">
            <div className="pixel-frame-gold-inner pixel-notch-lg p-6 sm:p-8 space-y-5">
              
              <div className="text-center font-pixel text-xs text-[#d9a046] tracking-wider">
                PLAYER PROFILE
              </div>

              {/* Dashed photo placeholder container */}
              <div 
                id="hero-photo-container"
                onClick={handleContainerClick}
                className="relative aspect-square image-placeholder-frame flex flex-col items-center justify-center p-4 cursor-pointer group overflow-hidden pixel-notch"
                title="Click to change profile picture"
              >
                {photoUrl ? (
                  <img 
                    id="hero-photo-img"
                    src={photoUrl} 
                    alt="Naina Dugar" 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                ) : (
                  <div className="text-center space-y-2">
                    <p className="text-xs text-[#8a8a98] font-sans">Your profile photo</p>
                    <span className="inline-block px-2 py-1 bg-[#1a1a24] text-[9px] font-pixel text-[#d9a046] border border-[#3a3a48] pixel-notch-sm">
                      CLICK TO UPLOAD
                    </span>
                  </div>
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

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
