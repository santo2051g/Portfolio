import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './SectionHeader';

const info = [
  { label: 'Degree', value: 'B.E. CS & Business Systems' },
  { label: 'College', value: 'Sri Eshwar College of Engineering' },
  { label: 'Location', value: 'Tamil Nadu, India' },
  { label: 'CGPA', value: '7.54 / 10.0' },
  { label: 'Focus', value: 'AI, Full Stack, Product Dev' },
  { label: 'Status', value: 'Open to Opportunities' },
];

const interests = [
  'Artificial Intelligence', 'Machine Learning', 'MERN Stack',
  'Multimodal AI Systems', 'Competitive Programming',
  'UI/UX Design', 'Game Development',
];

export default function About() {
  const bodyRef = useReveal();
  const interestRef = useReveal();

  return (
    <section id="about" className="py-14" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="About Me" title="Who I Am" />

        <div ref={bodyRef} className="reveal grid md:grid-cols-3 gap-6 mb-8">

          {/* Bio — 2 cols */}
          <div className="md:col-span-2 p-6 card-hover"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderTop: '3px solid var(--accent)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>Background</p>
            <p className="text-base leading-[1.9] mb-4" style={{ color: 'var(--text-body)' }}>
              I'm <strong style={{ color: 'var(--text-head)' }}>A.P. Santhosh</strong>, a B.E. Computer Science and Business Systems student at{' '}
              <strong style={{ color: 'var(--accent)' }}>Sri Eshwar College of Engineering</strong>. My journey started with competitive programming and core CS fundamentals — DSA, OOP, and systems design. From there I grew into full-stack MERN development and later into building AI-driven applications using LangChain, Ollama, Pinecone, EasyOCR, and Whisper.
            </p>
            <p className="text-base leading-[1.9] mb-4" style={{ color: 'var(--text-body)' }}>
              I represented my college at the <strong style={{ color: 'var(--accent)' }}>Smart India Hackathon</strong>, reaching the Top 50 teams nationally. I also secured <strong style={{ color: 'var(--accent)' }}>7th place</strong> at the DATATHON 24-Hour Hackathon — an experience that sharpened my ability to solve high-pressure, real-world data challenges under tight deadlines.
            </p>
            <p className="text-base leading-[1.9]" style={{ color: 'var(--text-body)' }}>
              I believe great software lives at the intersection of technical depth and business awareness — exactly what my CS &amp; Business Systems program has trained me for. I'm actively seeking internship and placement opportunities where I can build impactful products and grow fast.
            </p>
          </div>

          {/* Info card — 1 col */}
          <div className="p-6 card-hover"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderTop: '3px solid var(--accent3)' }}>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent3)' }}>Details</p>
            <div className="space-y-3">
              {info.map(({ label, value }) => (
                <div key={label} className="pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-mute)' }}>{label}</p>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-head)' }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests */}
        <div ref={interestRef} className="reveal p-6"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent4)' }}>Areas of Interest</p>
          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <span key={item} className="skill-tag text-sm font-medium px-4 py-2 cursor-default"
                style={{ color: 'var(--text-body)', backgroundColor: 'var(--bg-hover)', border: '1px solid var(--border)' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
