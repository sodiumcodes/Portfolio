import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { Gamepad2 } from 'lucide-react';
import './GameIntro.css';

const STATUS_ITEMS = [
  { text: 'Projects ✅', threshold: 35 },
  { text: 'Skills ✅', threshold: 60 },
];

const TOTAL_SEGMENTS = 20;

// Deterministic lightweight pixel star particles
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${((i * 19 + 7) % 92) + 4}%`,
  top: `${((i * 23 + 11) % 88) + 6}%`,
  size: i % 4 === 0 ? '5px' : i % 2 === 0 ? '3px' : '4px',
  duration: `${3.2 + (i % 3) * 0.8}s`,
  delay: `${(i * 0.25) % 2}s`
}));

// Safely query top-level portfolio sections
const getTopLevelSections = () => {
  if (typeof document === 'undefined') return [];
  const targets = [
    document.querySelector('header'),
    document.querySelector('#hero'),
    document.querySelector('#quests'),
    document.querySelector('#skilltree'),
    document.querySelector('#achievements'),
    document.querySelector('#terminal'),
    document.querySelector('#contact'),
    document.querySelector('#character-speech-bubble')?.closest('.fixed') || document.querySelector('.fixed.bottom-4.right-4')
  ].filter(Boolean);

  return targets;
};

export default function GameIntro({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [exitPhase, setExitPhase] = useState('idle'); // 'idle' | 'glitching' | 'sliding'

  const progressTimerRef = useRef(null);
  const autoContinueTimerRef = useRef(null);
  const timeoutsRef = useRef([]);
  const hasTriggeredExitRef = useRef(false);

  // Hide sections before first paint and prevent background scrolling
  useLayoutEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const sections = getTopLevelSections();
    sections.forEach((el) => {
      el.classList.add('intro-hidden');
    });

    return () => {
      document.body.style.overflow = originalOverflow;
      sections.forEach((el) => {
        el.classList.remove('intro-hidden', 'intro-reveal');
      });
    };
  }, []);

  // Exit transition handler (glitch -> slide up & random reveal -> finish)
  const handleContinue = useCallback(() => {
    if (hasTriggeredExitRef.current) return;
    hasTriggeredExitRef.current = true;

    if (autoContinueTimerRef.current) {
      clearTimeout(autoContinueTimerRef.current);
      autoContinueTimerRef.current = null;
    }

    const sections = getTopLevelSections();
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reduced motion fallback: simple fade-out without glitch or random reveal
    if (prefersReducedMotion) {
      sections.forEach((el) => {
        el.classList.remove('intro-hidden', 'intro-reveal');
      });
      document.body.style.overflow = '';
      if (onComplete) {
        onComplete();
      }
      return;
    }

    // Phase 4a: Glitch for 0.5s
    setExitPhase('glitching');

    const glitchTimer = setTimeout(() => {
      // Phase 4b: Overlay slides upward (0.6s)
      setExitPhase('sliding');

      // Phase 4c: Random part-by-part reveal while overlay slides away
      const shuffled = [...sections].sort(() => Math.random() - 0.5);
      const delayBetweenSections = 175; // 150-250ms range

      shuffled.forEach((el, index) => {
        const revealTimer = setTimeout(() => {
          el.classList.remove('intro-hidden');
          el.classList.add('intro-reveal');
        }, index * delayBetweenSections);

        timeoutsRef.current.push(revealTimer);
      });

      // Phase 4d: Finish reveal, cleanup all temporary classes & styles, restore scrolling
      const totalRevealTime = (shuffled.length - 1) * delayBetweenSections + 400; // ~1.6s
      const finishTimer = setTimeout(() => {
        shuffled.forEach((el) => {
          el.classList.remove('intro-hidden', 'intro-reveal');
        });
        document.body.style.overflow = '';
        if (onComplete) {
          onComplete();
        }
      }, totalRevealTime);

      timeoutsRef.current.push(finishTimer);
    }, 500);

    timeoutsRef.current.push(glitchTimer);
  }, [onComplete]);

  // Loading sequence (approx 3.5s total to reach 100%)
  useEffect(() => {
    let current = 0;
    const intervalTime = 35; // 100 steps * 35ms = 3500ms

    progressTimerRef.current = setInterval(() => {
      current += 1;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        setIsLoaded(true);
        clearInterval(progressTimerRef.current);
        progressTimerRef.current = null;
      } else {
        setProgress(current);
      }
    }, intervalTime);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, []);

  // 7-second auto-continue timer and keyboard listener
  useEffect(() => {
    if (!isLoaded) return;

    autoContinueTimerRef.current = setTimeout(() => {
      handleContinue();
    }, 7000);

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleContinue();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (autoContinueTimerRef.current) {
        clearTimeout(autoContinueTimerRef.current);
      }
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLoaded, handleContinue]);

  // Clean up all active timers on unmount
  useEffect(() => {
    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (autoContinueTimerRef.current) clearTimeout(autoContinueTimerRef.current);
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, []);

  const filledSegments = Math.round((progress / 100) * TOTAL_SEGMENTS);

  let overlayPhaseClass = '';
  if (exitPhase === 'glitching') {
    overlayPhaseClass = 'intro-exit-glitch';
  } else if (exitPhase === 'sliding') {
    overlayPhaseClass = 'intro-exit-slide';
  }

  return (
    <div
      id="game-intro-overlay"
      onClick={isLoaded ? handleContinue : undefined}
      className={`fixed inset-0 z-[9999] bg-[#0a0a0c] text-[#f0f0f5] flex flex-col justify-center items-center p-4 sm:p-6 select-none overflow-hidden ${overlayPhaseClass}`}
      style={{
        cursor: isLoaded ? 'pointer' : 'default'
      }}
    >
      {/* Floating Pixel Star Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="game-particle absolute bg-[#d9a046]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
              boxShadow: '0 0 3px #d9a046'
            }}
          />
        ))}
      </div>

      {/* Retro Scanlines and Soft Vignette */}
      <div className="game-scanlines absolute inset-0 pointer-events-none opacity-50"></div>
      <div className="game-vignette absolute inset-0 pointer-events-none"></div>

      {/* Main Arcade Boot Container */}
      <div className="relative z-10 w-full max-w-lg pixel-box-gold p-6 sm:p-8 space-y-6 text-center shadow-2xl bg-[#16161a]">
        
        {/* Bouncing Pixel Icon & Header */}
        <div className="flex flex-col items-center space-y-3">
          <div className="game-icon-bounce p-3 bg-[#24242a] border-2 border-[#d9a046] text-[#d9a046] shadow-[0_4px_0_0_#0a0a0c]">
            <Gamepad2 className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <h1 className="font-pixel text-sm sm:text-lg md:text-xl text-[#d9a046] game-title-glow leading-relaxed tracking-wider">
              sodiumcodes
            </h1>
            <p className="font-retro text-[10px] sm:text-xs text-[#8a8a98] tracking-widest uppercase">
              AI DEVELOPER &amp; FULL-STACK ENGINEER
            </p>
          </div>
        </div>

        {/* Chunky Segmented Loading Bar */}
        <div className="space-y-2 text-left">
          <div className="flex justify-between items-center text-[10px] sm:text-xs font-pixel text-[#d9a046]">
            <span>INITIALIZING...</span>
            <span className="text-[#f0f0f5]">{progress}%</span>
          </div>

          <div
            className={`p-1 bg-[#0a0a0c] border-2 sm:border-4 border-[#f0f0f5] shadow-[0_4px_0_0_#0a0a0c] flex gap-1 h-6 sm:h-7 ${
              isLoaded ? 'game-bar-flash' : ''
            }`}
          >
            {Array.from({ length: TOTAL_SEGMENTS }).map((_, index) => {
              const filled = index < filledSegments;
              return (
                <div
                  key={index}
                  className={`flex-1 transition-colors duration-75 ${
                    filled
                      ? 'bg-[#d9a046] shadow-[0_0_4px_#d9a046]'
                      : 'bg-[#24242a]'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Status Lines with Pop Animation */}
        <div className="space-y-2 pt-1 text-left min-h-[105px]">
          {STATUS_ITEMS.map((item, index) => {
            const isVisible = progress >= item.threshold;
            if (!isVisible) return null;

            return (
              <div
                key={index}
                className="game-line-pop flex items-center gap-2 text-xs sm:text-sm font-retro text-[#f0f0f5]"
              >
                <span className="text-[#d9a046] font-pixel text-[11px] sm:text-xs">✔</span>
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>

        {/* Prompt & 7-Second Auto-Continue Timer */}
        {isLoaded ? (
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleContinue();
            }}
            role="button"
            tabIndex={0}
            className="pt-4 border-t-2 border-[#24242a] cursor-pointer group focus:outline-none"
            aria-label="Press Enter to start"
          >
            <div className="flex items-center justify-center gap-2 flex-wrap text-xs sm:text-sm font-pixel text-[#d9a046] group-hover:text-[#f0b454] transition-colors">
              <span className="game-prompt-blink">PRESS ENTER TO START</span>
              <span className="inline-block px-1.5 py-0.5 bg-[#24242a] border border-[#f0f0f5] text-[9px] sm:text-[10px] text-[#f0f0f5] shadow-[0_2px_0_0_#f0f0f5]">
                ENTER ↵
              </span>
            </div>

            {/* 7-Second Visual Shrinking Timer Bar */}
            <div className="w-full bg-[#24242a] h-1.5 mt-3 overflow-hidden border border-[#3a3a42]">
              <div className="game-shrink-timer h-full bg-[#d9a046]"></div>
            </div>

            <p className="text-[9px] sm:text-[10px] font-retro text-[#8a8a98] mt-2 text-center opacity-80">
              [ Tap or click to start ]
            </p>
          </div>
        ) : (
          <div className="pt-4 border-t-2 border-[#24242a] text-center">
            <span className="text-[10px] font-pixel text-[#8a8a98] tracking-wider animate-pulse">
              SYNCING REQUESTS...
            </span>
          </div>
        )}

      </div>
    </div>
  );
}
