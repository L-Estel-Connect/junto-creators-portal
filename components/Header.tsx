export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
          Junto
        </a>
        <nav className="flex items-center gap-3 sm:gap-5">
          <a
            href="#como-funciona"
            className="hidden text-sm font-medium text-ink/70 transition-colors hover:text-ink sm:inline-block"
          >
            Cómo funciona
          </a>
          <a
            href="#misiones"
            className="junto-gradient rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-coral/20 transition-transform active:scale-95 sm:px-5"
          >
            Ver misiones
          </a>
        </nav>
      </div>
    </header>
  );
}
