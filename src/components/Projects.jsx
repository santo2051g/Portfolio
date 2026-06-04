import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './SectionHeader';

const projects = [
  {
    title: 'Disaster Preparedness & Education Platform',
    tag: 'EdTech · SIH Project', isAccent: true, num: '01',
    overview: 'A comprehensive digital platform built for the Smart India Hackathon that reached Top 50 nationally. Educates students and staff on disaster awareness, safety protocols, and emergency response through an engaging interactive experience.',
    description: 'The platform combines gamified learning modules with real-time alert systems and multilingual support to ensure accessibility across diverse communities. Scenario-based simulations built with Unity let users experience emergency situations safely, while an admin dashboard gives school staff full visibility into student progress. The React frontend was built with accessibility and mobile-responsiveness as first-class concerns throughout.',
    role: 'Full Stack Developer & UI Lead',
    tech: ['React', 'Unity', 'JavaScript', 'CSS3', 'REST API'],
    status: 'Completed',
  },
  {
    title: 'EduBridge AI',
    tag: 'AI / ML · Multimodal Assistant', isAccent: false, num: '02',
    overview: 'A multimodal AI-powered educational assistant for early childhood learners, combining cutting-edge AI technologies into a single cohesive platform for adaptive learning.',
    description: 'EduBridge AI integrates an OCR pipeline using EasyOCR for extracting text from images and PDFs, speech-to-text via OpenAI Whisper, and a document QA system built on LangChain with Pinecone as the vector store. Local LLM inference runs through Ollama, keeping responses private and fast. The system features role-based AI modes tailored separately for students, teachers, and parents — each receiving contextually appropriate responses through a clean Streamlit interface.',
    role: 'AI Engineer & Backend Developer',
    tech: ['Ollama', 'LangChain', 'Pinecone', 'Whisper', 'EasyOCR', 'Streamlit', 'Python'],
    status: 'Completed',
  },
  {
    title: 'MovieMate',
    tag: 'Full Stack · MERN', isAccent: true, num: '03',
    overview: 'A full-stack movie discovery and recommendation web application developed during the Bytes Lab MERN internship, demonstrating end-to-end product development skills.',
    description: 'MovieMate lets users browse, search, and receive personalized movie suggestions based on their watch history. The backend exposes a clean REST API built with Express.js and Node.js for all CRUD operations, while MongoDB Atlas handles storage through well-designed Mongoose schemas. JWT tokens provide secure stateless authentication. The React frontend connects via Axios, delivering a responsive movie browsing experience with smooth filtering by genre, rating, and release year.',
    role: 'Full Stack Developer (Intern)',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Axios', 'CSS3'],
    status: 'Completed · Internship',
  },
];

export default function Projects() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal();
  const refs = [r1, r2, r3];

  return (
    <section id="projects" className="py-14" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Projects" title="What I've Built"
          subtitle="Across hackathons, internships, and personal initiatives — AI systems, full-stack apps, and EdTech platforms." />

        <div className="space-y-6">
          {projects.map(({ title, tag, isAccent, num, overview, description, role, tech, status }, i) => {
            const colors = ['var(--accent)', 'var(--accent3)', 'var(--accent4)'];
            const color = colors[i % colors.length];
            return (
              <div key={title} ref={refs[i]} className="reveal card-hover"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: `4px solid ${color}` }}>

                {/* Header */}
                <div className="px-7 pt-6 pb-5" style={{ borderBottom: '1px solid var(--border)' }}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex items-start gap-5">
                      <span className="text-5xl font-black leading-none select-none hidden sm:block"
                        style={{ color, opacity: 0.15 }}>{num}</span>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest block mb-1" style={{ color }}>{tag}</span>
                        <h4 className="font-black text-2xl md:text-3xl leading-tight tracking-tight mb-1"
                          style={{ color: 'var(--text-head)' }}>{title}</h4>
                        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-mute)' }}>{role}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold border px-3 py-1 uppercase tracking-wider self-start shrink-0"
                      style={{ color, borderColor: color + '50', backgroundColor: color + '10' }}>{status}</span>
                  </div>
                </div>

                {/* Two-col body */}
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 px-7 py-6" style={{ borderRight: '1px solid var(--border)' }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color }}>Overview</p>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--text-body)' }}>{overview}</p>
                  </div>
                  <div className="md:col-span-3 px-7 py-6">
                    <p className="text-xs font-bold uppercase tracking-widest mb-3"
                      style={{ color: isAccent ? 'var(--accent2)' : 'var(--accent)' }}>How It Works</p>
                    <p className="text-sm leading-[1.9]" style={{ color: 'var(--text-mute)' }}>{description}</p>
                  </div>
                </div>

                {/* Tech */}
                <div className="px-7 py-4 flex flex-wrap gap-2" style={{ borderTop: '1px solid var(--border)' }}>
                  {tech.map(t => (
                    <span key={t} className="text-xs font-semibold px-3 py-1"
                      style={{ color: 'var(--text-body)', backgroundColor: 'var(--bg-hover)', border: '1px solid var(--border)' }}>{t}</span>
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
