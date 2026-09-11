export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/5 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <span className="text-lg font-extrabold tracking-tight text-ink">
          Junto
        </span>
        <p className="text-xs font-medium uppercase tracking-wide text-ink/40">
          Creator Program · Private Preview
        </p>
      </div>
    </footer>
  );
}
