export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <span className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
          Junto
        </span>
        <div className="flex items-center gap-3">
          <span className="hidden rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/60 sm:inline-block">
            Creator Program
          </span>
          <a
            href="#missions"
            className="junto-gradient rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-coral/20 transition-transform active:scale-95 sm:px-5"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
