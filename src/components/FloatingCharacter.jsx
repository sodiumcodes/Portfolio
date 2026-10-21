import React, { useState, useEffect } from 'react';

const dialogueList = [
  "Need an AI Agent built? I specialize in LangChain workflows!",
  "I solved 500+ competitive programming problems!",
  "IIT Patna Computer Science student here (2024-2028).",
  "RetailPulse processed over 1 Million transactions!",
  "Click on any project to inspect quest details."
];

export default function FloatingCharacter({ speechText, onCharacterTalk, animKey }) {
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [speechVisible, setSpeechVisible] = useState(false);

  // Show speech bubble briefly only when user triggers a message or on mount, auto-hide after 5s
  useEffect(() => {
    // Only show if animKey > 0 (user performed an interaction)
    if (animKey > 0) {
      setSpeechVisible(true);
      const timer = setTimeout(() => {
        setSpeechVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [animKey]);

  const triggerCharacterInteraction = () => {
    const nextMessage = dialogueList[dialogueIndex];
    onCharacterTalk(nextMessage);
    setDialogueIndex((dialogueIndex + 1) % dialogueList.length);
    setSpeechVisible(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-none">
      
      {/* Auto-Hiding Speech Bubble */}
      {speechVisible && (
        <div 
          key={animKey}
          id="character-speech-bubble" 
          className="speech-bubble p-2.5 max-w-[240px] text-[10px] font-pixel pointer-events-auto shadow-lg pixel-notch-sm mb-1 animate-fade-in"
        >
          <span id="character-speech-text">{speechText}</span>
        </div>
      )}

      {/* Floating Pixel Character HUD matching the reference mockup */}
      <button 
        onClick={triggerCharacterInteraction}
        onMouseEnter={() => setSpeechVisible(true)}
        className="pointer-events-auto pixel-frame-gold pixel-notch cursor-pointer hover:scale-105 transition-transform"
        aria-label="Interact with Naina Bot"
      >
        <div className="pixel-frame-gold-inner pixel-notch px-3 py-2 flex items-center gap-3">
          <div className="character-face pixel-notch-sm shrink-0"></div>
          <div className="text-left font-pixel">
            <div className="text-[10px] text-[#d9a046] tracking-wider leading-none mb-1">
              NAINA BOT
            </div>
            <div className="text-[8px] text-[#8a8a98] tracking-wider leading-none">
              LVL 21 AI DEV
            </div>
          </div>
        </div>
      </button>

    </div>
  );
}
