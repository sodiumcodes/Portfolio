import React from 'react';

export default function QuestModal({ quest, onClose }) {
  if (!quest) return null;

  return (
    <div id="quest-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="pixel-box-gold max-w-xl w-full p-6 space-y-6 relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 pixel-btn px-2 py-1 text-xs"
        >
          X
        </button>
        <div id="modal-quest-content">
          <div className="flex justify-between items-center border-b-2 border-[#24242a] pb-3">
            <h3 className="font-pixel text-sm text-[#d9a046]">{quest.title}</h3>
          </div>
          <div className="space-y-4 pt-2">
            
            <div>
              <div className="text-[10px] font-pixel text-[#8a8a98] mb-2"></div>
              <ul className="space-y-2 text-xs text-[#f0f0f5]">
                {quest.details.map((d, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#d9a046] font-pixel">&gt;</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
