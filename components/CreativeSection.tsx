import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function CreativeSection() {
  return (
    <section className="bg-ink px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-wax">
            Tu contenido. Tu estilo.
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            No queremos convertirte en un anuncio.
          </h2>

          <div className="mt-5 space-y-3 text-base leading-relaxed text-white/65 sm:text-lg">
            <p>
              Queremos trabajar contigo precisamente porque ya sabes crear
              contenido para tu audiencia.
            </p>
            <p>
              Habla como hablas normalmente.
              <br />
              Usa tu humor.
              <br />
              Cuenta tu historia.
              <br />
              Adapta Junto a tu universo.
            </p>
          </div>

          <blockquote className="mt-9 border-l-2 border-coral pl-5">
            <p className="text-2xl font-bold italic leading-snug tracking-tight text-white sm:text-3xl">
              &ldquo;¿Lo publicarías si no pareciera una colaboración?&rdquo;
            </p>
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-wax sm:text-base">
            Si la respuesta es sí, probablemente vamos por buen camino.
          </p>
        </div>

        <ImagePlaceholder
          label="Grupo de amigos riendo juntos en una terraza de Madrid al atardecer"
          src="/images/creator-with-friends.png"
          tone="dark"
          className="aspect-[4/5] w-full"
        />
      </div>
    </section>
  );
}
