export default function Footer() {
  return (
    <footer className="border-t border-ink/5 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="text-lg font-bold tracking-tight text-ink">
          Junto
        </span>
        <div className="flex flex-col items-center gap-1.5 text-sm font-medium text-ink/60 sm:flex-row sm:gap-5">
          <a
            href="https://instagram.com/junto.xo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            @junto.xo
          </a>
          <a
            href="mailto:contact@getjunto.co"
            className="transition-colors hover:text-ink"
          >
            contact@getjunto.co
          </a>
        </div>
      </div>
    </footer>
  );
}
