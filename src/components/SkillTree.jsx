import React from 'react';
import { Bot, Terminal as TerminalIcon, Layout, Server, Database, BarChart2 } from 'lucide-react';

export default function SkillTree({ onCharacterTalk }) {
  const branches = [
    {
      id: 'ai',
      icon: Bot,
      title: 'AI & AGENTS',
      talk: 'AI & Agentic Workflows are my core specialty!',
      primarySkills: ['LLMs', 'AI Agents', 'RAG'],
      secondarySkills: ['Multi-Agent', 'Tool Calling', 'Embeddings', 'Vector DBs', 'LangChain', 'Tavily']
    },
    {
      id: 'languages',
      icon: TerminalIcon,
      title: 'LANGUAGES',
      talk: 'I use Python for AI pipelines and JavaScript for full-stack build!',
      primarySkills: ['Python', 'JavaScript'],
      secondarySkills: ['DSA', 'Algorithms', 'Data Structures', 'TypeScript']
    },
    {
      id: 'frontend',
      icon: Layout,
      title: 'FRONTEND',
      talk: 'Responsive interfaces built with React.js!',
      primarySkills: ['React.js', 'Tailwind CSS'],
      secondarySkills: ['Responsive UI', 'State Flow', 'Component Architecture', 'HTML5/CSS3']
    },
    {
      id: 'backend',
      icon: Server,
      title: 'BACKEND',
      talk: 'Node.js & Express REST APIs with DB integrations!',
      primarySkills: ['Node.js', 'REST APIs'],
      secondarySkills: ['Express.js', 'JWT Auth', 'Middleware', 'Microservices']
    },
    {
      id: 'databases',
      icon: Database,
      title: 'DATABASES',
      talk: 'Structured SQL & Supabase database management!',
      primarySkills: ['Supabase', 'SQL'],
      secondarySkills: ['MongoDB', 'PostgreSQL', 'Schema Design', 'Data Security']
    },
    {
      id: 'data',
      icon: BarChart2,
      title: 'DATA TOOLS',
      talk: 'Pandas, NumPy & BeautifulSoup for web scraping!',
      primarySkills: ['Pandas', 'NumPy'],
      secondarySkills: ['Plotly', 'Streamlit', 'BeautifulSoup', 'Data Pipelines']
    }
  ];

  return (
    <section id="skilltree" className="pt-6 relative space-y-10">
      
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8">
        <div className="flex justify-center gap-2 mb-1" aria-hidden="true">
          <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
          <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
          <span className="w-2 h-2 bg-[#d9a046] pixel-notch-sm"></span>
        </div>

        <h2 className="pixel-title-3d text-2xl sm:text-3xl md:text-4xl">
          Unlocked Skill Tree
        </h2>

        <p className="text-xs sm:text-sm text-[#8a8a98] font-sans">
          Interactive Technical Mastery Branches
        </p>
      </div>

      {/* Grid of Skill Branches with generous spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {branches.map((branch) => {
          const Icon = branch.icon;
          return (
            <div 
              key={branch.id}
              className="pixel-frame-dark pixel-notch cursor-pointer group hover:-translate-y-1 transition-transform"
              onClick={() => onCharacterTalk(branch.talk)}
            >
              <div className="pixel-frame-dark-inner pixel-notch p-6 space-y-5">
                
                {/* Branch Header */}
                <div className="flex items-center gap-3.5 pb-3 border-b border-[#1f1f2a]">
                  <div className="p-2 bg-[#14141c] border border-[#2e2e3e] text-[#d9a046] pixel-notch-sm group-hover:border-[#d9a046] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-pixel text-xs text-[#f0f0f5] tracking-wider group-hover:text-[#d9a046] transition-colors">
                      {branch.title}
                    </h3>
                  </div>
                </div>

                {/* Skills Tags: prominent ones in amber pixel font, others in clean readable sans */}
                <div className="flex flex-wrap gap-2 text-xs">
                  {branch.primarySkills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-2.5 py-1 bg-[#1a1a24] border border-[#d9a046] text-[#d9a046] font-pixel text-[10px] pixel-notch-sm"
                    >
                      {skill}
                    </span>
                  ))}
                  {branch.secondarySkills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-2.5 py-1 bg-[#121218] border border-[#2a2a38] text-[#c0c0d0] font-sans text-xs font-normal pixel-notch-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
