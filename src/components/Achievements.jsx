import React from 'react';
import { Trophy, Award, Crown, Users } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="space-y-8">
      <div className="border-b-4 border-[#24242a] pb-4">
        <h2 className="font-pixel text-xl sm:text-2xl text-[#d9a046] flex items-center gap-3">
          <Trophy className="w-6 h-6" /> ACHIEVEMENTS UNLOCKED
        </h2>
        <p className="text-xs text-[#8a8a98] mt-1">Milestones & Competitive Programming Rewards</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Achievement 1 */}
        <div className="pixel-box-gold p-6 space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-[#24242a] border-2 border-[#d9a046] text-[#d9a046]">
              <Award className="w-6 h-6" />
            </div>
          </div>

          <h3 className="font-pixel text-sm text-[#f0f0f5]">500+ DSA PROBLEMS SOLVED</h3>
          <p className="text-xs text-[#8a8a98] leading-relaxed">
            Conquered 200+ algorithm challenges each on LeetCode and GeeksforGeeks platforms.
          </p>

          <div className="pt-2">
            <div className="flex justify-between text-[10px] font-pixel mb-1 text-[#d9a046]">
              <span>PROGRESS</span>
              <span>100% UNLOCKED</span>
            </div>
            <div className="pixel-bar-bg">
              <div className="pixel-bar-fill"></div>
            </div>
          </div>
        </div>

        {/* Achievement 2 */}
        <div className="pixel-box-gold p-6 space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-[#24242a] border-2 border-[#d9a046] text-[#d9a046]">
              <Crown className="w-6 h-6" />
            </div>
          </div>

          <h3 className="font-pixel text-sm text-[#f0f0f5]">SECOND CODING DOJO CHAMPION</h3>
          <p className="text-xs text-[#8a8a98] leading-relaxed">
            Secured 1st position in the Intra-College Coding Dojo competition under real-time constraints.
          </p>

          <div className="pt-2">
            <div className="flex justify-between text-[10px] font-pixel mb-1 text-[#d9a046]">
              <span>RANK</span>
              <span>#1 GOLD MEDAL</span>
            </div>
            <div className="pixel-bar-bg">
              <div className="pixel-bar-fill"></div>
            </div>
          </div>
        </div>

        {/* Achievement 3 */}
        <div className="pixel-box-gold p-6 space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-[#24242a] border-2 border-[#d9a046] text-[#d9a046]">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <h3 className="font-pixel text-sm text-[#f0f0f5]">EVENT ORGANIZER & HOST</h3>
          <p className="text-xs text-[#8a8a98] leading-relaxed">
            Organized and hosted 6 technical & cultural college events, managing execution and teams.
          </p>

          <div className="pt-2">
            <div className="flex justify-between text-[10px] font-pixel mb-1 text-[#d9a046]">
              <span>EVENTS</span>
              <span>6/6 EXECUTED</span>
            </div>
            <div className="pixel-bar-bg">
              <div className="pixel-bar-fill"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
