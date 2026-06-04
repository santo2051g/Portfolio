import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './SectionHeader';

const responsibilities = [
  {
    title: 'Full Stack Development',
    desc: 'Built MovieMate from scratch — designing the MongoDB schema, wiring up the Express.js API layer, and delivering the React frontend. Owned the entire MERN development lifecycle independently.',
  },
  {
    title: 'REST API Engineering',
    desc: 'Designed and documented RESTful APIs with Express.js and Node.js covering proper HTTP semantics, middleware chains, error handling patterns, and route organization that scale cleanly.',
  },
  {
    title: 'Frontend Development',
    desc: 'Developed a responsive, mobile-first React interface using component-based architecture and React state management. Consumed all backend APIs through Axios with proper loading and error states.',
  },
  {
    title: 'Database Integration',
    desc: 'Integrated MongoDB Atlas as a cloud database. Designed normalized collections, authored Mongoose schemas with validation, and implemented efficient CRUD query patterns throughout the application.',
  },
  {
    title: 'Authentication System',
    desc: 'Implemented JWT-based authentication covering secure user registration, login, token issuance, and protected route middleware on the server — following standard stateless auth best practices.',
  },
  {
    title: 'Code Quality',
    desc: 'Maintained consistent code quality using Git and GitHub with branch-based workflows, meaningful commit messages, and clean modular code that was easy to review and extend.',
  },
];

export default function Experience() {
  const cardRef = useReveal();

  return (
    <section id="experience" className="py-14" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Experience" title="Work History" />

        <div ref={cardRef} className="reveal"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '4px solid var(--accent3)' }}>

          {/* Role header */}
          <div className="px-7 py-6" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h4 className="font-black text-2xl md:text-3xl mb-1" style={{ color: 'var(--text-head)' }}>MERN Stack Developer Intern</h4>
                <p className="font-semibold text-lg" style={{ color: 'var(--accent)' }}>Bytes Lab</p>
                <p className="text-sm mt-0.5" style={{ color: 'var(--text-mute)' }}>Remote · Full-time · Project: MovieMate</p>
              </div>
              <span className="text-sm font-bold border-2 px-4 py-1.5 uppercase tracking-widest self-start shrink-0"
                style={{ color: 'var(--accent2)', borderColor: 'var(--accent2)' }}>1 Month</span>
            </div>
            <p className="text-base leading-[1.9] mt-5" style={{ color: 'var(--text-body)' }}>
              Completed a focused one-month MERN stack internship at Bytes Lab, a remote-first development company. I independently designed and built <strong style={{ color: 'var(--text-head)' }}>MovieMate</strong> — a full-stack movie recommendation web application — taking it from database design all the way to a deployed, working product. This experience gave me deep exposure to real-world API design patterns, professional development workflows, and the discipline required to deliver software on a deadline.
            </p>
          </div>

          {/* Responsibilities grid */}
          <div className="px-7 py-6" style={{ borderBottom: '1px solid var(--border)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: 'var(--accent3)' }}>Responsibilities</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {responsibilities.map(({ title, desc }) => (
                <div key={title} className="p-5 card-hover"
                  style={{ backgroundColor: 'var(--bg-hover)', border: '1px solid var(--border)' }}>
                  <p className="font-bold text-base mb-2" style={{ color: 'var(--text-head)' }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mute)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Takeaways para */}
          <div className="px-7 py-6">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--accent4)' }}>Key Takeaways</p>
            <p className="text-base leading-[1.9]" style={{ color: 'var(--text-body)' }}>
              This internship gave me a real-world understanding of MERN stack architecture and the full deployment workflow. I learned how to write scalable, maintainable backend code with Express.js, connect frontend and backend through clean API contracts, and manage async operations with proper error handling in Node.js. Working remotely with real deadlines also sharpened my communication, time management, and professional discipline significantly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
