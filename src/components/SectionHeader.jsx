import { useReveal } from '../hooks/useReveal';

export function SectionHeader({ label, title, subtitle }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-6 h-px" style={{ backgroundColor: 'var(--accent)' }}></span>
        <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>{label}</p>
      </div>
      <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-2" style={{ color: 'var(--text-head)' }}>{title}</h3>
      <span className="heading-line mb-2"></span>
      {subtitle && <p className="text-base max-w-2xl mt-2" style={{ color: 'var(--text-mute)' }}>{subtitle}</p>}
    </div>
  );
}
