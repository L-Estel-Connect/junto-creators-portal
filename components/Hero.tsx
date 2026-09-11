import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
      <div
        aria-hidden
        className="junto-glow pointer-events-none absolute -top-24 right-[-15%] h-72 w-72 rounded-full blur-2xl sm:h-[30rem] sm:w-[30rem]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-coral">
            Crea con Junto 🧡
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Crea contenido.
            <br />
            Publícalo en tu perfil.
            <br />
            <span className="junto-gradient-text">Cobra por ello.</span>
          </h1>

          {/* Reward is placed right after the headline so it stays above the fold on mobile. */}
          <div className="mt-7 flex justify-center lg:justify-start">
            <div className="junto-gradient inline-flex flex-col items-center gap-1 rounded-3xl px-8 py-5 text-white shadow-xl shadow-coral/25">
              <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                100 €
              </span>
              <span className="text-center text-xs font-semibold uppercase tracking-wide text-white/90 sm:text-sm">
                por cada Reel / TikTok aprobado y publicado
              </span>
            </div>
          </div>

          <div className="mx-auto mt-7 max-w-xl space-y-4 text-base leading-relaxed text-ink/65 lg:mx-0 sm:text-lg">
            <p className="font-semibold text-ink">¿Creas contenido en Madrid?</p>
            <p>
              Buscamos creators que quieran presentar Junto con su propio
              estilo, humor y personalidad.
            </p>
            <p>
              No buscamos anuncios tradicionales ni vídeos que parezcan
              publicidad.
            </p>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm font-semibold leading-relaxed text-ink/80 lg:mx-0 sm:text-base">
            Tú eliges la misión.
            <br />
            Tú propones cómo contarla.
            <br />
            Nosotros aprobamos la colaboración antes de que empieces a crear.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 lg:items-start">
            <a
              href="#misiones"
              className="junto-gradient w-full rounded-full px-8 py-4 text-center text-base font-extrabold tracking-wide text-white shadow-lg shadow-coral/25 transition-transform active:scale-95 sm:w-auto"
            >
              VER MISIONES
            </a>
            <p className="text-xs font-medium text-ink/50 sm:text-sm">
              No necesitas crear nada para solicitar una misión.
            </p>
          </div>
        </div>

        <ImagePlaceholder
          label="Espacio para foto o vídeo de creators de Junto"
          className="aspect-[4/5] w-full lg:aspect-[3/4]"
        />
      </div>
    </section>
  );
}
