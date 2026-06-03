import { useState } from 'react';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#12100e]/95 backdrop-blur-sm border-b border-[#f59e0b]/20">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-white font-black text-base tracking-tighter">
          A.P.<span className="text-[#f59e0b]">SANTHOSH</span>
        </span>
        <ul className="hidden md:flex gap-6">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className="text-xs font-bold text-[#a09880] hover:text-[#f59e0b] transition-colors tracking-widest uppercase">{l}</a>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-[#a09880] hover:text-[#f59e0b]" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#1a1612] border-t border-[#f59e0b]/20 px-6 py-3 flex flex-col gap-3">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-xs font-bold text-[#a09880] hover:text-[#f59e0b] uppercase tracking-widest transition-colors">{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
