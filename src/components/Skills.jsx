const skillGroups = [
  {
    category: 'Programming Languages',
    color: 'text-[#f59e0b]',
    accent: '#f59e0b',
    desc: 'Strong foundation in multiple languages for systems, web, and AI development.',
    skills: ['C', 'C++', 'Python', 'Java', 'MySQL'],
  },
  {
    category: 'Core CS Concepts',
    color: 'text-[#3b82f6]',
    accent: '#3b82f6',
    desc: 'Solid grasp of algorithmic thinking and object-oriented design patterns.',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'Problem Solving', 'System Design Basics'],
  },
  {
    category: 'Web Technologies',
    color: 'text-[#f59e0b]',
    accent: '#f59e0b',
    desc: 'Full-stack development experience from UI to backend APIs and databases.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'AI / ML Stack',
    color: 'text-[#3b82f6]',
    accent: '#3b82f6',
    desc: 'Hands-on experience building multimodal AI systems and intelligent pipelines.',
    skills: ['LangChain', 'Ollama', 'Pinecone', 'Whisper', 'EasyOCR', 'Streamlit', 'Prompt Engineering'],
  },
  {
    category: 'Tools & Platforms',
    color: 'text-[#f59e0b]',
    accent: '#f59e0b',
    desc: 'Proficient with modern developer tooling, design, and collaboration platforms.',
    skills: ['VS Code', 'GitHub', 'Git', 'Figma', 'Canva', 'Unity', 'Postman'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-14 border-t border-[#2a2218]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 h-px bg-[#f59e0b]"></span>
          <p className="text-[#f59e0b] text-xs font-bold tracking-[0.2em] uppercase">Skills</p>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">What I Work With</h3>
        <p className="text-[#7a6e5e] text-base mb-8 max-w-2xl">
          A curated stack built through coursework, projects, internships, and self-learning — covering everything from low-level programming to AI pipelines.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map(({ category, color, accent, desc, skills }) => (
            <div key={category} className="bg-[#1a1612] border border-[#2a2218] p-5 hover:border-[#f59e0b]/40 transition-colors"
              style={{ borderTopColor: accent, borderTopWidth: '2px' }}>
              <p className={`${color} text-xs font-black uppercase tracking-widest mb-1`}>{category}</p>
              <p className="text-[#5a5040] text-xs mb-4 leading-relaxed">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill}
                    className="text-sm text-[#e2d9cc] bg-[#211d17] border border-[#2e2820] px-3 py-1 font-medium hover:border-[#f59e0b]/60 hover:text-[#f59e0b] transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
