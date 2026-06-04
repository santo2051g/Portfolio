import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './SectionHeader';

const profiles = [
  {
    name: 'LeetCode', url: 'https://leetcode.com/', label: 'LC', stat: '85+ Problems', isAccent: true,
    desc: 'My primary platform for algorithmic practice. I regularly solve problems across arrays, trees, dynamic programming, graphs, and binary search — building the problem-solving speed and pattern recognition needed for technical interviews at top product companies.',
  },
  {
    name: 'HackerRank', url: 'https://www.hackerrank.com/', label: 'HR', stat: 'Certified', isAccent: false,
    desc: 'Earned certifications in Java, Python, and MySQL through structured skill assessments. HackerRank\'s domain-based challenges helped me validate my proficiency in these languages with industry-recognized credentials that complement my project experience.',
  },
  {
    name: 'CodeChef', url: 'https://www.codechef.com/', label: 'CC', stat: '55+ Problems', isAccent: true,
    desc: 'Active in CodeChef contests and long challenges covering number theory, greedy algorithms, and implementation problems. Contest participation builds time-pressure problem solving habits that carry over directly into hackathons and fast-paced development environments.',
  },
  {
    name: 'GitHub', url: 'https://github.com/', label: 'GH', stat: 'Active', isAccent: false,
    desc: 'All personal and academic projects are version-controlled on GitHub with clean commit histories, structured README documentation, and organized repository layouts. It serves as my living portfolio of code and reflects my habits around professional software development.',
  },
  {
    name: 'LinkedIn', url: 'https://www.linkedin.com/', label: 'LI', stat: 'Connect', isAccent: false,
    desc: 'My professional profile showcasing education, internship experience, projects, skills, and certifications in one place. Open to networking with developers, recruiters, and industry professionals — always happy to connect and explore new opportunities.',
  },
];

export default function CodingProfiles() {
  const gridRef = useReveal();

  return (
    <section id="profiles" className="py-14" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Online Presence" title="Coding Profiles"
          subtitle="Active across competitive programming, certifications, open-source, and professional networking." />

        <div ref={gridRef} className="reveal grid md:grid-cols-2 gap-5">
          {profiles.map(({ name, url, label, stat, isAccent, desc }, i) => {
            const profileColors = ['var(--accent)', 'var(--accent3)', 'var(--accent4)', 'var(--accent2)', 'var(--accent3)'];
            const color = profileColors[i % profileColors.length];
            return (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                className="p-6 card-hover group block"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderTop: `3px solid ${color}`, transitionDelay: `${i * 0.07}s` }}
                onMouseEnter={e => e.currentTarget.style.borderColor = color}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black px-2 py-1 tracking-widest"
                      style={{ color, backgroundColor: color + '18' }}>{label}</span>
                    <span className="font-black text-xl transition-colors duration-200"
                      style={{ color: 'var(--text-head)' }}>{name}</span>
                    <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5"
                      style={{ color, backgroundColor: color + '12', border: `1px solid ${color}30` }}>{stat}</span>
                  </div>
                  <span className="text-lg transition-colors duration-200" style={{ color: 'var(--text-dim)' }}>↗</span>
                </div>
                <p className="text-sm leading-[1.85]" style={{ color: 'var(--text-mute)' }}>{desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
