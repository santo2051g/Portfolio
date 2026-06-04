export default function Footer() {
  return (
    <footer className="py-5" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-black text-sm tracking-tighter" style={{ color: 'var(--text-head)' }}>
          A.P.<span style={{ color: 'var(--accent)' }}>SANTHOSH</span>
        </span>
        <p className="text-xs font-medium" style={{ color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} A.P. Santhosh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
