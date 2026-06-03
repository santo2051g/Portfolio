export default function Footer() {
  return (
    <footer className="border-t border-[#2a2218] py-5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-white font-black text-sm tracking-tighter">
          A.P.<span className="text-[#f59e0b]">SANTHOSH</span>
        </span>
        <p className="text-[#5a5040] text-xs font-medium">© {new Date().getFullYear()} A.P. Santhosh. All rights reserved.</p>
      </div>
    </footer>
  );
}
