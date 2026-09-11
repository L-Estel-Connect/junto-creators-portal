import type { Mission } from "@/lib/missions";
import RichText from "@/components/RichText";

export default function MissionCard({
  mission,
  onSelect,
}: {
  mission: Mission;
  onSelect: (mission: Mission) => void;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm shadow-ink/[0.03] transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-coral/10 sm:p-7 ${
        mission.featured ? "border-coral/30 ring-1 ring-coral/15" : "border-ink/5"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${mission.gradient} text-base font-semibold text-white`}
        >
          {mission.number}
        </div>
        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold leading-none text-coral">
            {mission.reward}
          </span>
          <span className="mt-1 text-[11px] font-medium uppercase tracking-wide text-ink/40">
            {mission.format}
          </span>
        </div>
      </div>

      {mission.badge ? (
        <span className="mt-4 inline-flex w-fit items-center rounded-full bg-ink/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink/60">
          {mission.badge}
        </span>
      ) : null}

      <h3
        lang="en"
        className="mt-4 text-lg font-semibold uppercase tracking-tight text-ink sm:text-xl"
      >
        {mission.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-ink/70">
        {mission.subtitle}
      </p>

      <div className="mt-3 flex-1 space-y-3 text-sm leading-relaxed text-ink/60">
        <RichText text={mission.description} />
      </div>

      <button
        type="button"
        onClick={() => onSelect(mission)}
        className="junto-gradient mt-6 w-full rounded-full px-5 py-3.5 text-sm font-semibold tracking-wide text-white shadow-sm shadow-coral/20 transition-transform active:scale-95"
      >
        {mission.ctaLabel}
      </button>
    </article>
  );
}
