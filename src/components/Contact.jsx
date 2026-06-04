import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './SectionHeader';

const contacts = [
  { label: 'Email', value: 'santhoshap@example.com', href: 'mailto:santhoshap@example.com', isAccent: true, desc: 'Best way to reach me for project discussions, opportunities, or collaborations.' },
  { label: 'LinkedIn', value: 'linkedin.com/in/santhoshap', href: 'https://www.linkedin.com/', isAccent: false, desc: 'Connect professionally — view my full profile, endorsements, and activity.' },
  { label: 'GitHub', value: 'github.com/santhoshap', href: 'https://github.com/', isAccent: true, desc: 'Explore my code, project repositories, and open-source contributions.' },
  { label: 'Phone', value: '+91 00000 00000', href: 'tel:+910000000000', isAccent: false, desc: 'Available for calls during IST business hours. WhatsApp also works.' },
];

export default function Contact() {
  const cardsRef = useReveal();
  const noteRef = useReveal();

  return (
    <section id="contact" className="py-14" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Contact" title="Get In Touch"
          subtitle="Actively looking for internship and placement opportunities in AI, Full Stack, and Software Engineering." />

        <p className="text-sm mb-6 max-w-xl leading-relaxed" style={{ color: 'var(--text-mute)' }}>
          Whether it's a quick question, collaboration proposal, or job opportunity — I respond to all messages. Don't hesitate to reach out.
        </p>

        <div ref={cardsRef} className="reveal grid sm:grid-cols-2 gap-4 mb-5">
          {contacts.map(({ label, value, href, isAccent, desc }, i) => {
            const contactColors = ['var(--accent)', 'var(--accent3)', 'var(--accent4)', 'var(--accent2)'];
            const color = contactColors[i];
            return (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="p-5 block card-hover group"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderTop: `2px solid ${color}`, transitionDelay: `${i * 0.08}s` }}
                onMouseEnter={e => e.currentTarget.style.borderColor = color}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color }}>{label}</p>
                <p className="text-base font-bold mb-2 break-all transition-colors duration-200"
                  style={{ color: 'var(--text-head)' }}>{value}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mute)' }}>{desc}</p>
              </a>
            );
          })}
        </div>

        <div ref={noteRef} className="reveal p-5"
          style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--accent)' }}>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>Response Time</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-body)' }}>
            I typically respond within <strong style={{ color: 'var(--text-head)' }}>24–48 hours</strong>. For urgent matters, phone or LinkedIn is fastest. Open to placements, internships, freelance projects, and technical collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}
