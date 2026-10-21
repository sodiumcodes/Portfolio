import React from 'react';
import { Award, Crown, Users } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      id: 'dsa',
      icon: Award,
      title: '500+ DSA PROBLEMS SOLVED',
      desc: 'Conquered 200+ algorithm challenges each across LeetCode and GeeksforGeeks platforms.',
      label: 'PROGRESS',
      value: '100% UNLOCKED',
      progress: '100%'
    },
    {
      id: 'champion',
      icon: Crown,
      title: 'CODING DOJO CHAMPION',
      desc: 'Secured 1st position in the Intra-College Coding Dojo competition under real-time constraints.',
      label: 'RANK',
      value: '#1 GOLD MEDAL',
      progress: '100%'
    },
    {
      id: 'events',
      icon: Users,
      title: 'EVENT ORGANIZER & HOST',
      desc: 'Organized and hosted 6 technical & cultural college events, managing execution and cross-functional teams.',
      label: 'EVENTS',
      value: '6/6 EXECUTED',
      progress: '100%'
    }
  ];

  return (
    <section id="achievements" className="pt-6 relative space-y-10">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8">
        <div className="flex justify-center gap-2 mb-1" aria-hidden="true">
          <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
          <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
          <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
        </div>

        <h2 className="pixel-title-3d text-2xl sm:text-3xl md:text-4xl">
          Achievements Unlocked
        </h2>

        <p className="text-xs sm:text-sm text-[#8a8a98] font-sans">
          Milestones &amp; Competitive Programming Rewards
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((item) => {
          const Icon = item.icon;
          return (
            <div 
              key={item.id} 
              className="pixel-frame-dark pixel-notch hover:-translate-y-1 transition-transform"
            >
              <div className="pixel-frame-dark-inner pixel-notch p-6 sm:p-7 space-y-5 flex flex-col justify-between h-full">
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-[#14141c] border border-[#d9a046] text-[#d9a046] pixel-notch-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-pixel text-xs sm:text-sm text-[#f0f0f5] leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#9da0b0] font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="flex justify-between text-[10px] font-pixel mb-1.5 text-[#d9a046]">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className="pixel-bar-bg pixel-notch-sm">
                    <div className="pixel-bar-segments" style={{ width: item.progress }}></div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
