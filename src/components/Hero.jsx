const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '85+', label: 'LeetCode Problems' },
  { value: '7.54', label: 'CGPA' },
  { value: '5+', label: 'Certifications' },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-14 bg-[#12100e]">
      <div className="max-w-6xl mx-auto px-6 py-12 w-full">

        <div className="mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#f59e0b]"></span>
              <p className="text-[#f59e0b] text-xs font-bold tracking-[0.25em] uppercase">Available for Internships &amp; Placements</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-4">
              A.P.<span className="text-[#f59e0b]">SANTHOSH</span>
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <span className="w-1 h-7 bg-[#3b82f6]"></span>
              <h2 className="text-xl md:text-2xl font-semibold text-[#e2d9cc] tracking-wide">
                AI &amp; Full Stack Developer
              </h2>
            </div>

            <p className="text-[#8a7e6e] text-base md:text-lg max-w-2xl mb-3 leading-relaxed font-medium">
              B.E. Computer Science &amp; Business Systems student at Sri Eshwar College of Engineering. I build intelligent systems powered by AI and scalable full-stack web applications using the MERN stack.
            </p>
            <p className="text-[#6a5e50] text-base max-w-2xl mb-8 leading-relaxed">
              From training multimodal AI pipelines with LangChain and Pinecone, to building gamified EdTech platforms with React and Unity — I thrive at the intersection of AI, engineering, and product thinking.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="px-6 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-black text-sm font-bold uppercase tracking-widest transition-colors">
                View Projects
              </a>
              <a href="/resume.pdf" download className="px-6 py-2.5 border-2 border-[#3b82f6] text-[#3b82f6] hover:bg-[#3b82f6] hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">
                Download Resume
              </a>
              <a href="#contact" className="px-6 py-2.5 border border-[#3a3530] text-[#a09880] hover:border-[#f59e0b] hover:text-[#f59e0b] text-sm font-bold uppercase tracking-widest transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#2a2218] pt-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-[#1a1612] border border-[#2a2218] p-4">
              <p className="text-3xl font-black text-[#f59e0b] leading-none mb-1">{value}</p>
              <p className="text-xs text-[#7a6e5e] font-bold uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
