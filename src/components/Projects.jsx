const projects = [
  {
    title: 'Disaster Preparedness & Education Platform',
    tag: 'EdTech · SIH Project',
    accent: '#f59e0b',
    overview: 'A comprehensive digital platform designed to educate students and staff on disaster awareness, safety protocols, and emergency response. Built as part of the Smart India Hackathon submission that reached the Top 50 nationally.',
    details: [
      'Gamified learning modules to engage students in disaster safety education',
      'Real-time alert system to notify users during emergency situations',
      'Multilingual support enabling access for diverse regional communities',
      'Interactive quizzes and scenario-based simulations using Unity game engine',
      'Admin dashboard for school staff to monitor student progress and alerts',
      'Mobile-responsive React frontend with smooth navigation and accessibility',
    ],
    role: 'Full Stack Developer & UI Lead',
    tech: ['React', 'Unity', 'JavaScript', 'CSS3', 'REST API'],
    status: 'Completed',
  },
  {
    title: 'EduBridge AI',
    tag: 'AI / ML · Multimodal Assistant',
    accent: '#3b82f6',
    overview: 'A multimodal AI-powered educational assistant designed for early childhood learners. Combines OCR, speech recognition, document question-answering, and role-based AI responses to create an adaptive learning environment.',
    details: [
      'OCR pipeline with EasyOCR to extract and process text from images and PDFs',
      'Speech-to-text transcription using OpenAI Whisper for voice-based input',
      'Document QA system built with LangChain and Pinecone vector database',
      'Local LLM inference using Ollama for privacy-preserving AI responses',
      'Role-based response system — separate modes for students, teachers, and parents',
      'Streamlit frontend for rapid prototyping and clean user interaction',
      'Context-aware prompting strategies using LangChain chains and agents',
    ],
    role: 'AI Engineer & Backend Developer',
    tech: ['Ollama', 'LangChain', 'Pinecone', 'Whisper', 'EasyOCR', 'Streamlit', 'Python'],
    status: 'Completed',
  },
  {
    title: 'MovieMate',
    tag: 'Full Stack · MERN',
    accent: '#f59e0b',
    overview: 'A full-stack movie discovery and recommendation web application developed during the Bytes Lab MERN internship. Users can browse, search, and get personalized movie suggestions powered by a Node.js backend and MongoDB database.',
    details: [
      'User authentication with JWT-based secure login and registration',
      'Movie search and filter functionality by genre, rating, and release year',
      'Recommendation engine suggesting movies based on user watch history',
      'RESTful APIs built with Express.js for all CRUD operations',
      'MongoDB Atlas integration for cloud-hosted movie and user data storage',
      'Responsive React frontend with clean card-based UI for movie listings',
      'Axios-based API integration connecting frontend and backend seamlessly',
    ],
    role: 'Full Stack Developer (Intern)',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Axios', 'CSS3'],
    status: 'Completed · Internship Project',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-14 border-t border-[#2a2218]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 h-px bg-[#f59e0b]"></span>
          <p className="text-[#f59e0b] text-xs font-bold tracking-[0.2em] uppercase">Projects</p>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">What I've Built</h3>
        <p className="text-[#8a7a65] text-base mb-8 max-w-2xl">
          Projects built across hackathons, internships, and personal initiatives — covering AI systems, full-stack apps, and EdTech platforms.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(({ title, tag, accent, overview, details, role, tech, status }) => (
            <div key={title}
              className="bg-[#1a1612] border border-[#2a2218] hover:border-[#f59e0b]/40 transition-colors flex flex-col"
              style={{ borderTopColor: accent, borderTopWidth: '3px' }}>

              {/* Card Header */}
              <div className="p-6 border-b border-[#2a2218]">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-xs font-black uppercase tracking-widest" style={{ color: accent }}>{tag}</span>
                  <span className="text-xs font-bold border px-2 py-0.5 uppercase tracking-widest shrink-0"
                    style={{ color: accent, borderColor: `${accent}40`, background: `${accent}12` }}>{status}</span>
                </div>
                {/* BIG title */}
                <h4 className="text-white font-black text-3xl md:text-4xl leading-tight mb-2 tracking-tight">{title}</h4>
                <p className="text-[#5a5040] text-xs font-bold uppercase tracking-widest">{role}</p>
              </div>

              {/* Overview */}
              <div className="px-6 pt-4 pb-3">
                <p className="text-[#a09880] text-sm leading-relaxed">{overview}</p>
              </div>

              {/* Features — small text, 1-col list */}
              <div className="px-6 pb-4 flex-1">
                <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: accent === '#f59e0b' ? '#3b82f6' : '#f59e0b' }}>
                  Key Features
                </p>
                <ul className="space-y-1.5">
                  {details.map(d => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="text-xs font-black mt-0.5 shrink-0" style={{ color: accent }}>→</span>
                      <span className="text-xs text-[#7a6a55] leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="px-6 py-4 border-t border-[#2a2218] flex flex-wrap gap-2">
                {tech.map(t => (
                  <span key={t} className="text-xs font-bold text-[#a09880] bg-[#211d17] px-3 py-1 border border-[#2e2820]">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
