const profiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/',
    label: 'LC',
    stat: '85+ Problems',
    desc: 'Solving algorithmic challenges across arrays, trees, DP, and graphs. Focused on improving problem-solving speed and accuracy for technical interviews.',
    accent: '#f59e0b',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/',
    label: 'HR',
    stat: 'Certified',
    desc: 'Earned certifications in Java, Python, and MySQL. Completed structured skill assessments and domain challenges validated by HackerRank badges.',
    accent: '#3b82f6',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/',
    label: 'CC',
    stat: '55+ Problems',
    desc: 'Participated in regular contests and long challenges. Solved problems in greedy, number theory, and implementation across multiple difficulty levels.',
    accent: '#f59e0b',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    label: 'GH',
    stat: 'Active',
    desc: 'Version-controlled all personal and academic projects. Clean commit history, README documentation, and organized repository structure.',
    accent: '#3b82f6',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    label: 'LI',
    stat: 'Connect',
    desc: 'Professional profile showcasing education, projects, skills, and certifications. Open to networking with developers, recruiters, and industry professionals.',
    accent: '#3b82f6',
  },
];

export default function CodingProfiles() {
  return (
    <section id="profiles" className="py-14 border-t border-[#2a2218]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-6 h-px bg-[#f59e0b]"></span>
          <p className="text-[#f59e0b] text-xs font-bold tracking-[0.2em] uppercase">Online Presence</p>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">Coding Profiles</h3>
        <p className="text-[#8a7a65] text-base mb-8 max-w-2xl">
          Active across multiple platforms — competitive programming, certifications, open-source, and professional networking.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profiles.map(({ name, url, label, stat, desc, accent }) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer"
              className="bg-[#1a1612] border border-[#2a2218] p-5 hover:border-[#f59e0b]/50 transition-colors group block"
              style={{ borderTopColor: accent, borderTopWidth: '2px' }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black px-2 py-0.5 tracking-widest"
                    style={{ color: accent, background: `${accent}15` }}>{label}</span>
                  <span className="text-white font-black text-lg group-hover:text-[#f59e0b] transition-colors">{name}</span>
                </div>
                <span className="text-[#3a3530] group-hover:text-[#f59e0b] transition-colors">↗</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>{stat}</p>
              <p className="text-[#7a6e5e] text-sm leading-relaxed">{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
