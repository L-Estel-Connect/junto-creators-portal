export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
      <div
        aria-hidden
        className="junto-glow pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full blur-2xl sm:h-[28rem] sm:w-[28rem]"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink/60">
          Now Accepting Creators
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl">
          Turn your influence into a{" "}
          <span className="junto-gradient-text">Junto</span> career.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/60 sm:text-lg">
          Complete creator missions, grow your reach, and unlock real rewards.
          No experience required — just show up as you.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#missions"
            className="junto-gradient w-full rounded-full px-7 py-3.5 text-center text-base font-bold text-white shadow-lg shadow-coral/25 transition-transform active:scale-95 sm:w-auto"
          >
            Explore Missions
          </a>
          <a
            href="#missions"
            className="w-full rounded-full border border-ink/10 px-7 py-3.5 text-center text-base font-semibold text-ink transition-colors hover:bg-ink/5 sm:w-auto"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
