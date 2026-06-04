import { useTypewriter } from '../hooks/useTypewriter';

const roles = ['AI Developer', 'Full Stack Developer', 'MERN Stack Dev', 'Problem Solver'];

const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '85+', label: 'LeetCode Problems' },
  { value: '7.54', label: 'CGPA' },
  { value: '5+', label: 'Certifications' },
];

export default function Hero() {
  const role = useTypewriter(roles, 75, 1600);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-14" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12 w-full">

        {/* Badge */}
        <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="pulse-dot"></span>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: 'var(--accent)' }}>
              Available for Internships &amp; Placements
            </p>
          </div>
        </div>

        {/* Name */}
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter mb-5" style={{ color: 'var(--text-head)' }}>
            A.P.<span style={{ color: 'var(--accent)' }}>SANTHOSH</span>
          </h1>
        </div>

        {/* Typewriter role */}
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-1 h-7 rounded-sm" style={{ backgroundColor: 'var(--accent2)' }}></span>
            <h2 className="text-xl md:text-2xl font-semibold tracking-wide typewriter-cursor min-h-[1.5em]" style={{ color: 'var(--text-body)' }}>
              {role}
            </h2>
          </div>
        </div>

        {/* Bio */}
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-base md:text-lg max-w-2xl mb-3 leading-relaxed" style={{ color: 'var(--text-body)' }}>
            B.E. Computer Science &amp; Business Systems student at Sri Eshwar College of Engineering. Building intelligent AI systems and scalable full-stack web applications with the MERN stack.
          </p>
          <p className="text-base max-w-2xl mb-8 leading-relaxed" style={{ color: 'var(--text-mute)' }}>
            From multimodal AI pipelines with LangChain and Pinecone, to gamified EdTech platforms with React and Unity — I thrive at the intersection of AI, engineering, and product thinking.
          </p>
        </div>

        {/* Buttons */}
        <div className="animate-fade-up flex flex-wrap gap-3 mb-10" style={{ animationDelay: '0.5s' }}>
          <a href="#projects"
            className="px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--accent)', color: '#fff' }}>
            View Projects
          </a>
          <a href="/resume.pdf" download
            className="px-6 py-2.5 text-sm font-bold uppercase tracking-widest border-2 transition-all duration-200 hover:-translate-y-0.5"
            style={{ borderColor: 'var(--accent2)', color: 'var(--accent2)' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--accent2)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent2)'; }}>
            Download Resume
          </a>
          <a href="#contact"
            className="px-6 py-2.5 text-sm font-bold uppercase tracking-widest border transition-all duration-200 hover:-translate-y-0.5"
            style={{ borderColor: 'var(--border)', color: 'var(--text-mute)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-mute)'; }}>
            Contact Me
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up grid grid-cols-2 sm:grid-cols-4 gap-3 pt-7"
          style={{ borderTop: '1px solid var(--border)', animationDelay: '0.65s' }}>
          {stats.map(({ value, label }, i) => {
            const statColors = ['var(--accent)', 'var(--accent3)', 'var(--accent2)', 'var(--accent4)'];
            return (
            <div key={label} className="p-4 card-hover"
              style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
                borderTop: `2px solid ${statColors[i]}` }}>
              <p className="stat-value text-3xl font-black leading-none mb-1" style={{ color: statColors[i] }}>{value}</p>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-mute)' }}>{label}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
