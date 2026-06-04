import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 50,
      backgroundColor: scrolled ? 'var(--bg)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'background-color 0.3s ease, border-color 0.3s ease',
    }}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-black text-base tracking-tighter" style={{ color: 'var(--text-head)' }}>
          A.P.<span style={{ color: 'var(--accent)' }}>SANTHOSH</span>
        </span>

        <ul className="hidden md:flex gap-7 items-center">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className="text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
                style={{ color: 'var(--text-mute)' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-mute)'}
              >{l}</a>
            </li>
          ))}
          {/* Theme toggle */}
          <li>
            <button onClick={toggle}
              className="w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-200"
              style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)', color: 'var(--text-body)' }}
              title={dark ? 'Switch to Light' : 'Switch to Dark'}>
              {dark
                ? <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                : <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
              }
            </button>
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggle}
            className="w-8 h-8 flex items-center justify-center rounded-full border"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)', color: 'var(--text-body)' }}>
            {dark
              ? <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              : <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
            }
          </button>
          <button onClick={() => setOpen(!open)} style={{ color: 'var(--text-mute)' }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--text-mute)' }}>{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
