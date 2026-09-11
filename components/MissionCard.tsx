"use client";

import { useState } from "react";
import type { Mission } from "@/lib/missions";

export default function MissionCard({ mission }: { mission: Mission }) {
  const [started, setStarted] = useState(false);

  return (
    <div className="group flex flex-col rounded-3xl border border-ink/5 bg-white p-6 shadow-sm shadow-ink/[0.03] transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-coral/10 sm:p-7">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${mission.gradient} text-lg font-extrabold text-white`}
        >
          {mission.number}
        </div>
        <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink/50">
          {mission.effort}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-ink">{mission.title}</h3>
      <p className="mt-1 text-sm font-semibold text-coral">
        {mission.tagline}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">
        {mission.description}
      </p>

      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="text-sm font-bold text-ink/80">{mission.reward}</span>

        <button
          type="button"
          onClick={() => setStarted(true)}
          disabled={started}
          className={
            started
              ? "cursor-default rounded-full bg-ink/5 px-5 py-2.5 text-sm font-bold text-ink/40"
              : "junto-gradient rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-coral/20 transition-transform active:scale-95"
          }
        >
          {started ? "Mission Started ✓" : "Start Mission"}
        </button>
      </div>
    </div>
  );
}
