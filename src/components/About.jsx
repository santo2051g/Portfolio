const info = [
  { label: 'Degree', value: 'B.E. Computer Science & Business Systems' },
  { label: 'College', value: 'Sri Eshwar College of Engineering' },
  { label: 'Location', value: 'Tamil Nadu, India' },
  { label: 'CGPA', value: '7.54 / 10.0' },
  { label: 'Focus Areas', value: 'AI, Full Stack, Product Dev' },
  { label: 'Status', value: 'Open to Opportunities' },
];

const interests = [
  'Artificial Intelligence & Machine Learning',
  'Full Stack Web Development (MERN)',
  'Multimodal AI Systems',
  'Competitive Programming',
  'UI/UX Design with Figma',
  'Game Development with Unity',
];

export default function About() {
  return (
    <section id="about" className="py-14 border-t border-[#2a2218]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 h-px bg-[#f59e0b]"></span>
          <p className="text-[#f59e0b] text-xs font-bold tracking-[0.2em] uppercase">About Me</p>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8">Who I Am</h3>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
          <div className="space-y-4">
            <p className="text-[#a09880] text-base leading-relaxed">
              I'm <span className="text-white font-semibold">A.P. Santhosh</span>, a B.E. Computer Science and Business Systems student at <span className="text-[#f59e0b] font-semibold">Sri Eshwar College of Engineering</span>. I'm passionate about building intelligent, scalable, and user-centric products that solve real problems.
            </p>
            <p className="text-[#a09880] text-base leading-relaxed">
              My journey started with competitive programming and core CS fundamentals — DSA, OOP, and systems design. From there, I grew into full-stack development with the MERN stack, and later into AI-driven applications using LangChain, Ollama, Pinecone, and multimodal tools like EasyOCR and Whisper.
            </p>
            <p className="text-[#a09880] text-base leading-relaxed">
              I represented my college at the <span className="text-[#f59e0b] font-semibold">Smart India Hackathon</span>, reaching the Top 50 teams nationally. I also secured <span className="text-[#f59e0b] font-semibold">7th place</span> at the DATATHON 24-Hour Hackathon, which pushed me to solve high-pressure data challenges under tight time constraints.
            </p>
            <p className="text-[#a09880] text-base leading-relaxed">
              I believe great software is built at the intersection of technical depth and business awareness — which is exactly what my CS &amp; Business Systems program has trained me for. I'm currently seeking internship or placement opportunities where I can contribute meaningfully and grow fast.
            </p>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              {info.map(({ label, value }) => (
                <div key={label} className="bg-[#1a1612] border border-[#2a2218] border-l-2 border-l-[#f59e0b] px-4 py-3 flex items-center justify-between">
                  <p className="text-[#5a5040] text-xs font-bold uppercase tracking-widest">{label}</p>
                  <p className="text-white text-sm font-semibold text-right">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="text-[#3b82f6] text-xs font-black uppercase tracking-widest mb-4">Areas of Interest</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {interests.map(i => (
              <div key={i} className="bg-[#1a1612] border border-[#2a2218] px-4 py-3 flex items-center gap-3 hover:border-[#f59e0b]/40 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0"></span>
                <p className="text-[#e2d9cc] text-sm font-medium">{i}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
