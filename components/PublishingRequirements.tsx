import { publishingRequirements } from "@/lib/publishing-requirements";

export default function PublishingRequirements() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          Requisitos de publicación
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink/60 sm:text-lg">
          Cada misión tendrá su propio brief y verás todas las condiciones
          antes de aceptar.
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {publishingRequirements.map((requirement) => (
            <li
              key={requirement}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink/70"
            >
              {requirement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
