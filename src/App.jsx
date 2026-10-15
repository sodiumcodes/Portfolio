import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quests from './components/Quests';
import SkillTree from './components/SkillTree';
import Achievements from './components/Achievements';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import FloatingCharacter from './components/FloatingCharacter';

export default function App() {
  const [speechText, setSpeechText] = useState('Greetings! I am Naina Bot. Click me or explore my quests!');
  const [animKey, setAnimKey] = useState(0);

  const handleCharacterTalk = (message) => {
    setSpeechText(message);
    setAnimKey(prev => prev + 1);
  };

  return (
    <>
      {/* TOP RPG HUD NAV HEADER */}
      <Navbar onCharacterTalk={handleCharacterTalk} />

      {/* MAIN CONTENT AREA */}
      <main className="pt-24 pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <Hero onCharacterTalk={handleCharacterTalk} />
        <Quests onCharacterTalk={handleCharacterTalk} />
        <SkillTree onCharacterTalk={handleCharacterTalk} />
        <Achievements />
        <Terminal />
        <Contact onCharacterTalk={handleCharacterTalk} />
      </main>

      {/* PERSISTENT FLOATING PIXEL CHARACTER HUD */}
      <FloatingCharacter 
        speechText={speechText} 
        onCharacterTalk={handleCharacterTalk} 
        animKey={animKey} 
      />
    </>
  );
}
