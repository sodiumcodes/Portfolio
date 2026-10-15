import React, { useState } from 'react';

const dialogueList = [
  "Need an AI Agent built? I specialize in LangChain workflows!",
  "I solved 500+ competitive programming problems!",
  "IIT Patna Computer Science student here (2024-2028).",
  "RetailPulse processed over 1 Million transactions!",
  "Click on my projects to inspect quest details."
];

export default function FloatingCharacter({ speechText, onCharacterTalk, animKey }) {
  const [dialogueIndex, setDialogueIndex] = useState(0);

  const triggerCharacterInteraction = () => {
    const nextMessage = dialogueList[dialogueIndex];
    onCharacterTalk(nextMessage);
    setDialogueIndex((dialogueIndex + 1) % dialogueList.length);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 pointer-events-none">
      
      {/* Animated Speech Bubble */}
      <div 
        key={animKey}
        id="character-speech-bubble" 
        className="speech-bubble p-3 max-w-xs text-xs font-pixel pointer-events-auto shadow-lg animate-bounce"
      >
        <span id="character-speech-text">{speechText}</span>
      </div>

      {/* Floating Pixel Character Sprite Button */}
      <button 
        onClick={triggerCharacterInteraction} 
        className="pixel-box-gold p-2 cursor-pointer pointer-events-auto hover:scale-105 transition-transform flex items-center gap-3"
      >
        <div className="character-face"></div>
        <div className="hidden sm:block text-left">
          <div className="font-pixel text-[10px] text-[#d9a046]">NAINA BOT</div>
          <div className="text-[9px] text-[#8a8a98]">LVL 21 AI DEV</div>
        </div>
      </button>
    </div>
  );
}
