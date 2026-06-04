import { useReveal } from '../hooks/useReveal';
import { SectionHeader } from './SectionHeader';

const achievements = [
  {
    title: 'Top 50 Teams — Smart India Hackathon',
    badge: 'National Level', isAccent: true,
    detail: 'Competed in SIH 2024, one of India\'s largest national hackathons, and reached the Top 50 teams out of thousands of entries across the country. Our team built the Disaster Preparedness & Education Platform — a full-stack React and Unity application that showcased rapid prototyping, strong teamwork, and the ability to deliver a polished product under intense time pressure.',
  },
  {
    title: '7th Place — DATATHON 24-Hour Hackathon',
    badge: 'Hackathon', isAccent: true,
    detail: 'Secured 7th position in a high-intensity 24-hour data hackathon that challenged participants to extract meaningful insights from complex, real-world datasets. The experience pushed my ability to think analytically under pressure, work with unfamiliar data quickly, and present findings in a clear and compelling way within a strict time limit.',
  },
  {
    title: '85+ Problems Solved on LeetCode',
    badge: 'DSA', isAccent: false,
    detail: 'Consistently practicing algorithmic problem solving on LeetCode across arrays, strings, dynamic programming, trees, graphs, and binary search. This regular practice strengthens my DSA fundamentals and builds the problem-solving intuition needed for technical interviews at product companies.',
  },
  {
    title: '55+ Problems Solved on CodeChef',
    badge: 'Competitive Programming', isAccent: false,
    detail: 'Active participant in CodeChef contests and long challenges. I have solved problems spanning number theory, greedy algorithms, implementation, and combinatorics — building competitive programming habits that translate directly into faster and cleaner code in real projects.',
  },
];

const certifications = [
  { name: 'Java Programming', issuers: 'Oracle & HackerRank', desc: 'OOP, collections, exception handling, and multithreading validated by Oracle and HackerRank.', isAccent: true },
  { name: 'Python Programming', issuers: 'Infosys Springboard & HackerRank', desc: 'Data types, control flow, functions, and scripting. Dual-certified by Infosys Springboard and HackerRank.', isAccent: false },
  { name: 'MySQL Intermediate', issuers: 'HackerRank', desc: 'Complex queries, joins, subqueries, aggregation, and database design through HackerRank assessment.', isAccent: true },
  { name: 'C++ Programming', issuers: 'Simplilearn', desc: 'Memory management, pointers, STL, templates, and OOP fundamentals — Simplilearn certified.', isAccent: false },
  { name: 'AI Tools & Applications', issuers: 'IEEE CIS', desc: 'Practical AI tools, industry applications, and responsible AI in engineering — IEEE CIS certified.', isAccent: true },
];

export default function Achievements() {
  const achRef = useReveal();
  const certRef = useReveal();

  return (
    <section id="achievements" className="py-14" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Recognition" title="Achievements & Certifications"
          subtitle="Validated through national hackathons, competitive programming platforms, and industry certification programs." />

        {/* Achievements - 2 col large cards */}
        <div ref={achRef} className="reveal grid md:grid-cols-2 gap-5 mb-8">
          {achievements.map(({ title, badge, isAccent, detail }, i) => {
            const achColors = ['var(--accent)', 'var(--accent4)', 'var(--accent3)', 'var(--accent2)'];
            const color = achColors[i % achColors.length];
            return (
              <div key={title} className="p-6 card-hover"
                style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderTop: `3px solid ${color}`, transitionDelay: `${i * 0.08}s` }}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h4 className="font-bold text-lg leading-snug" style={{ color: 'var(--text-head)' }}>{title}</h4>
                  <span className="text-xs font-bold px-2 py-1 shrink-0 uppercase tracking-widest"
                    style={{ color, backgroundColor: color + '15', border: `1px solid ${color}30` }}>{badge}</span>
                </div>
                <p className="text-sm leading-[1.85]" style={{ color: 'var(--text-mute)' }}>{detail}</p>
              </div>
            );
          })}
        </div>

        {/* Certifications - 3 col compact cards */}
        <div ref={certRef} className="reveal">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--accent2)' }}>Certifications</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map(({ name, issuers, desc, isAccent }, i) => {
              const certColors = ['var(--accent3)', 'var(--accent2)', 'var(--accent4)', 'var(--accent)', 'var(--accent3)'];
              const color = certColors[i % certColors.length];
              return (
                <div key={name} className="p-5 card-hover"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)',
                    borderLeft: `3px solid ${color}`, transitionDelay: `${i * 0.07}s` }}>
                  <p className="font-bold text-base mb-1" style={{ color: 'var(--text-head)' }}>{name}</p>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color }}>{issuers}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mute)' }}>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
