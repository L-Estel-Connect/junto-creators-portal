const steps = [
  "Elige",
  "Propón",
  "Recibe aprobación",
  "Confirma tu colaboración",
  "Crea",
  "Publica",
  "Cobra",
];

export default function FinalCTA() {
  return (
    <section className="junto-gradient px-5 py-16 text-center sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-widest text-white/80">
          ¿Ready?
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Elige tu primera misión.
        </h2>
        <p className="mt-3 text-base font-medium text-white/85 sm:text-lg">
          No necesitas grabar nada todavía.
        </p>

        <ol className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2">
          {steps.map((step, i) => (
            <li
              key={step}
              className="rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white sm:text-sm"
            >
              {i + 1}. {step}
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-10 max-w-md text-xl font-extrabold leading-snug tracking-tight text-white sm:text-2xl">
          100 € POR REEL / TIKTOK APROBADO Y PUBLICADO
        </p>

        <a
          href="#misiones"
          className="mt-8 inline-block w-full rounded-full bg-white px-8 py-4 text-base font-extrabold tracking-wide text-coral shadow-lg shadow-ink/10 transition-transform active:scale-95 sm:w-auto"
        >
          VER MISIONES
        </a>
      </div>
    </section>
  );
}
