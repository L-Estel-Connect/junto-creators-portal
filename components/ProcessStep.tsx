import type { ProcessStep as ProcessStepType } from "@/lib/process-steps";

export default function ProcessStep({
  step,
  isLast,
}: {
  step: ProcessStepType;
  isLast: boolean;
}) {
  const isReward = step.variant === "reward";

  return (
    <li className="relative flex gap-4 pb-9 last:pb-0 sm:gap-6">
      <div className="flex flex-col items-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-extrabold text-white">
          {step.number}
        </span>
        {!isLast && (
          <span aria-hidden className="mt-1 w-px flex-1 bg-ink/10" />
        )}
      </div>

      <div className="flex-1 pt-1.5">
        <h3 className="text-lg font-extrabold text-ink sm:text-xl">
          {step.title}
        </h3>

        {step.paragraphs.length > 0 && (
          <div className="mt-2 space-y-1.5 text-sm leading-relaxed text-ink/60 sm:text-base">
            {step.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}

        {step.highlight ? (
          isReward ? (
            <div className="junto-gradient mt-4 inline-flex items-center rounded-2xl px-5 py-3.5 text-base font-extrabold tracking-tight text-white shadow-lg shadow-coral/25 sm:text-lg">
              {step.highlight}
            </div>
          ) : (
            <span className="mt-3 inline-flex items-center rounded-full bg-coral/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-coral sm:text-sm">
              {step.highlight}
            </span>
          )
        ) : null}

        {step.after && step.after.length > 0 && (
          <div className="mt-2.5 space-y-1.5 text-sm leading-relaxed text-ink/60 sm:text-base">
            {step.after.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
