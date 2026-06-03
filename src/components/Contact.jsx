const contacts = [
  {
    label: 'Email',
    value: 'santhoshap@example.com',
    href: 'mailto:santhoshap@example.com',
    accent: '#f59e0b',
    desc: 'Best way to reach me for project discussions, opportunities, or collaborations.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/santhoshap',
    href: 'https://www.linkedin.com/',
    accent: '#3b82f6',
    desc: 'Connect professionally — view my full profile, endorsements, and activity.',
  },
  {
    label: 'GitHub',
    value: 'github.com/santhoshap',
    href: 'https://github.com/',
    accent: '#f59e0b',
    desc: 'Explore my code, project repositories, and open-source contributions.',
  },
  {
    label: 'Phone',
    value: '+91 00000 00000',
    href: 'tel:+910000000000',
    accent: '#3b82f6',
    desc: 'Available for calls during IST business hours. WhatsApp also works.',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-14 border-t border-[#2a2218]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 h-px bg-[#f59e0b]"></span>
          <p className="text-[#f59e0b] text-xs font-bold tracking-[0.2em] uppercase">Contact</p>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">Get In Touch</h3>
        <p className="text-[#8a7a65] text-base mb-3 max-w-2xl leading-relaxed">
          I'm actively looking for internship and placement opportunities in AI, Full Stack Development, and Software Engineering. If you're a recruiter, fellow developer, or someone with an interesting project — let's talk.
        </p>
        <p className="text-[#5a5040] text-sm mb-8 max-w-xl leading-relaxed">
          Whether it's a quick question, a collaboration proposal, or a job opportunity — I respond to all messages. Don't hesitate to reach out through any of the channels below.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {contacts.map(({ label, value, href, accent, desc }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="bg-[#1a1612] border border-[#2a2218] p-5 hover:border-[#f59e0b]/50 transition-colors group"
              style={{ borderTopColor: accent, borderTopWidth: '2px' }}>
              <p className="text-xs font-black uppercase tracking-widest mb-1" style={{ color: accent }}>{label}</p>
              <p className="text-white text-base font-bold group-hover:text-[#f59e0b] transition-colors mb-2 break-all">{value}</p>
              <p className="text-[#7a6e5e] text-sm leading-relaxed">{desc}</p>
            </a>
          ))}
        </div>

        <div className="bg-[#1a1612] border border-[#f59e0b]/20 p-6">
          <p className="text-[#f59e0b] text-xs font-black uppercase tracking-widest mb-2">Response Time</p>
          <p className="text-[#a09880] text-base leading-relaxed">
            I typically respond within <span className="text-white font-semibold">24–48 hours</span>. For urgent matters, reaching out via phone or LinkedIn is the fastest option. I'm open to full-time placements, internships, freelance projects, and technical collaborations.
          </p>
        </div>
      </div>
    </section>
  );
}
