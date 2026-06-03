const achievements = [
  {
    title: 'Top 50 Teams — Smart India Hackathon',
    detail: 'Competed nationally in SIH 2024, reaching Top 50 out of thousands of teams across India. Built the Disaster Preparedness & Education Platform, showcasing teamwork, rapid prototyping, and problem-solving under pressure.',
    accent: '#f59e0b',
    badge: 'National Level',
  },
  {
    title: '7th Place — DATATHON 24-Hour Hackathon',
    detail: 'Secured 7th position in a high-intensity 24-hour data hackathon. Worked on real-world datasets, applied analytical thinking, and presented insights within strict time limits.',
    accent: '#f59e0b',
    badge: 'Hackathon',
  },
  {
    title: '85+ Problems Solved on LeetCode',
    detail: 'Consistently solving algorithmic problems on LeetCode across arrays, strings, dynamic programming, trees, and graphs — strengthening DSA fundamentals for interviews.',
    accent: '#3b82f6',
    badge: 'DSA',
  },
  {
    title: '55+ Problems Solved on CodeChef',
    detail: 'Active competitive programmer on CodeChef with regular participation in contests. Solved problems spanning number theory, greedy algorithms, and implementation challenges.',
    accent: '#3b82f6',
    badge: 'CP',
  },
];

const certifications = [
  {
    name: 'Java Programming',
    issuers: 'Oracle & HackerRank',
    desc: 'Certified in core Java concepts including OOP, collections, exception handling, and multithreading — validated by both Oracle and HackerRank.',
    accent: '#f59e0b',
  },
  {
    name: 'Python Programming',
    issuers: 'Infosys Springboard & HackerRank',
    desc: 'Dual certification in Python covering data types, control flow, functions, file handling, and basic scripting through Infosys Springboard and HackerRank.',
    accent: '#3b82f6',
  },
  {
    name: 'MySQL Intermediate',
    issuers: 'HackerRank',
    desc: 'Certified in intermediate SQL — complex queries, joins, subqueries, aggregation, and database design through HackerRank structured assessment.',
    accent: '#f59e0b',
  },
  {
    name: 'C++ Programming',
    issuers: 'Simplilearn',
    desc: 'Completed C++ course covering memory management, pointers, STL, templates, and object-oriented programming fundamentals.',
    accent: '#3b82f6',
  },
  {
    name: 'AI Tools & Applications',
    issuers: 'IEEE CIS',
    desc: 'Certified by IEEE Computational Intelligence Society on practical AI tools, industry applications, and responsible use of AI in engineering.',
    accent: '#f59e0b',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-14 border-t border-[#2a2218]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 h-px bg-[#f59e0b]"></span>
          <p className="text-[#f59e0b] text-xs font-bold tracking-[0.2em] uppercase">Recognition</p>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">Achievements &amp; Certifications</h3>
        <p className="text-[#8a7a65] text-base mb-8 max-w-2xl">
          Validated through national hackathons, competitive programming platforms, and industry-recognized certification programs.
        </p>

        <div className="mb-10">
          <p className="text-[#f59e0b] text-xs font-black uppercase tracking-widest mb-4">Achievements</p>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map(({ title, detail, accent, badge }) => (
              <div key={title} className="bg-[#1a1612] border border-[#2a2218] p-5 hover:border-[#f59e0b]/30 transition-colors"
                style={{ borderLeftColor: accent, borderLeftWidth: '3px' }}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="text-white font-bold text-base leading-snug">{title}</p>
                  <span className="text-xs font-black px-2 py-0.5 shrink-0 uppercase tracking-widest"
                    style={{ color: accent, background: `${accent}15`, border: `1px solid ${accent}30` }}>{badge}</span>
                </div>
                <p className="text-[#7a6e5e] text-sm leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[#3b82f6] text-xs font-black uppercase tracking-widest mb-4">Certifications</p>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map(({ name, issuers, desc, accent }) => (
              <div key={name} className="bg-[#1a1612] border border-[#2a2218] p-5 hover:border-[#3b82f6]/30 transition-colors"
                style={{ borderLeftColor: accent, borderLeftWidth: '3px' }}>
                <p className="text-white font-bold text-base mb-1">{name}</p>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accent }}>{issuers}</p>
                <p className="text-[#7a6e5e] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
