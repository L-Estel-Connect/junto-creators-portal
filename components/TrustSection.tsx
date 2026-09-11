import SectionHeader from "@/components/SectionHeader";

const checklist = [
  "Tu misión",
  "Tu concepto",
  "Tu recompensa de 100 €",
  "Tu método de pago",
  "Las condiciones de publicación",
  "Tu acuerdo de colaboración",
];

const flowSteps = ["APROBADO", "CREA", "SUBE", "PUBLICA", "COBRA"];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TrustSection() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Tu trabajo está protegido"
          headline="No creas primero para descubrir después si te pagamos."
          description={<p>Antes de empezar tendrás confirmado:</p>}
        />

        <ul className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
          {checklist.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-ink/5 bg-white px-4 py-3.5 text-sm font-semibold text-ink shadow-sm shadow-ink/[0.02]"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                <CheckIcon />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
          {flowSteps.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              <span className="junto-gradient rounded-full px-4 py-2 text-xs font-extrabold tracking-wide text-white sm:px-5 sm:py-2.5 sm:text-sm">
                {step}
              </span>
              {i < flowSteps.length - 1 && (
                <span aria-hidden className="text-ink/30">
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
