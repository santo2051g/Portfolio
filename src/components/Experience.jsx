const responsibilities = [
  {
    title: 'Full Stack Development',
    desc: 'Built MovieMate end-to-end — from database schema design in MongoDB to responsive UI in React, covering the full MERN development lifecycle.',
  },
  {
    title: 'REST API Engineering',
    desc: 'Designed and implemented RESTful APIs using Express.js and Node.js with proper routing, middleware, error handling, and HTTP status conventions.',
  },
  {
    title: 'Frontend Development',
    desc: 'Developed responsive, mobile-first React interfaces with component-based architecture, state management, and Axios for API consumption.',
  },
  {
    title: 'Database Integration',
    desc: 'Integrated MongoDB Atlas as cloud database, designed collections, wrote Mongoose schemas, and handled CRUD operations efficiently.',
  },
  {
    title: 'Authentication System',
    desc: 'Implemented JWT-based user authentication with secure login, registration, and protected route middleware on the backend.',
  },
  {
    title: 'Code Quality & Collaboration',
    desc: 'Used Git and GitHub for version control, followed branch-based workflows, and maintained clean, readable code with consistent conventions.',
  },
];

const learnings = [
  'Real-world MERN stack architecture and deployment workflow',
  'Writing scalable, maintainable backend code with Express.js',
  'Connecting frontend and backend with clean API contracts',
  'Managing async operations and error handling in Node.js',
  'Working in a remote professional environment with deadlines',
];

export default function Experience() {
  return (
    <section id="experience" className="py-14 border-t border-[#2a2218]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 h-px bg-[#f59e0b]"></span>
          <p className="text-[#f59e0b] text-xs font-bold tracking-[0.2em] uppercase">Experience</p>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8">Work History</h3>

        <div className="bg-[#1a1612] border border-[#2a2218] border-l-4 border-l-[#3b82f6]">
          <div className="p-6 border-b border-[#2a2218]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h4 className="text-white font-black text-2xl">MERN Stack Developer Intern</h4>
                <p className="text-[#3b82f6] font-bold text-base mt-1">Bytes Lab</p>
                <p className="text-[#5a5040] text-sm mt-0.5">Remote · Full-time Internship</p>
              </div>
              <div className="flex flex-col gap-2 sm:items-end">
                <span className="text-xs font-bold text-[#f59e0b] border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-3 py-1 uppercase tracking-widest self-start sm:self-auto">
                  1 Month
                </span>
                <span className="text-xs text-[#5a5040] font-medium">Project: MovieMate</span>
              </div>
            </div>
            <p className="text-[#8a7e6e] text-base leading-relaxed mt-4">
              Completed a focused one-month MERN stack internship at Bytes Lab, a remote-first development company. During this period, I independently designed and built MovieMate — a full-stack movie recommendation web application — while learning professional development practices and real-world API design patterns.
            </p>
          </div>

          <div className="p-6 border-b border-[#2a2218]">
            <p className="text-[#f59e0b] text-xs font-black uppercase tracking-widest mb-4">Responsibilities</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {responsibilities.map(({ title, desc }) => (
                <div key={title} className="border border-[#2a2218] p-4 bg-[#12100e]">
                  <p className="text-white font-bold text-sm mb-1">{title}</p>
                  <p className="text-[#7a6e5e] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6">
            <p className="text-[#3b82f6] text-xs font-black uppercase tracking-widest mb-4">Key Takeaways</p>
            <div className="space-y-2">
              {learnings.map(l => (
                <div key={l} className="flex items-start gap-3 text-base text-[#a09880]">
                  <span className="text-[#f59e0b] font-black shrink-0 mt-0.5">✦</span>
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
