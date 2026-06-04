import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './SectionHeader';

const skillGroups = [
  {
    category: 'Programming Languages', isAccent: true,
    desc: 'My foundation in programming spans C, C++, Python, Java, and MySQL. These languages cover everything from systems-level memory management and OOP to scripting, data processing, and relational database queries — giving me flexibility across different problem domains.',
    skills: ['C', 'C++', 'Python', 'Java', 'MySQL'],
  },
  {
    category: 'Core CS Concepts', isAccent: false,
    desc: 'A strong grasp of Data Structures, Algorithms, and Object-Oriented Programming forms the backbone of how I approach problems. These fundamentals drive my competitive programming practice and inform how I architect clean, efficient solutions in every project.',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'Problem Solving', 'System Design'],
  },
  {
    category: 'Web Technologies', isAccent: true,
    desc: 'Full-stack development experience from pixel-perfect UI to scalable backend APIs and databases. I work across the entire MERN stack — building React frontends, Node.js/Express.js APIs, and MongoDB data layers — delivering complete, production-ready web applications.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'AI / ML Stack', isAccent: false,
    desc: 'Hands-on experience building multimodal AI pipelines using LangChain, Ollama, and Pinecone. I have worked with Whisper for speech recognition, EasyOCR for document parsing, and Streamlit for rapid AI app interfaces — all applied in real projects like EduBridge AI.',
    skills: ['LangChain', 'Ollama', 'Pinecone', 'Whisper', 'EasyOCR', 'Streamlit', 'Prompt Engineering'],
  },
  {
    category: 'Tools & Platforms', isAccent: true,
    desc: 'Proficient with the full developer toolchain — VS Code for development, Git and GitHub for version control and collaboration, Figma and Canva for design and prototyping, Unity for game-based simulations, and Postman for API testing and debugging.',
    skills: ['VS Code', 'GitHub', 'Git', 'Figma', 'Canva', 'Unity', 'Postman'],
  },
];

export default function Skills() {
  const gridRef = useReveal();

  const colors = ['var(--accent)', 'var(--accent3)', 'var(--accent2)', 'var(--accent4)', 'var(--accent3)'];

  return (
    <section id="skills" className="py-14" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Skills" title="What I Work With"
          subtitle="A curated stack built through coursework, projects, internships, and self-learning — from low-level programming to AI pipelines." />

        <div ref={gridRef} className="reveal grid md:grid-cols-2 gap-5">
          {skillGroups.map(({ category, isAccent, desc, skills }, i) => {
            const color = colors[i % colors.length];
            return (
              <div key={category} className="p-6 card-hover"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderTop: `3px solid ${color}`, transitionDelay: `${i * 0.07}s` }}>
                <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color }}>{category}</p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-body)' }}>{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="skill-tag text-sm px-3 py-1.5 font-medium cursor-default"
                      style={{ color: 'var(--text-body)', backgroundColor: 'var(--bg-hover)', border: '1px solid var(--border)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
