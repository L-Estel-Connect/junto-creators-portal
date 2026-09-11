import { missions } from "@/lib/missions";
import MissionCard from "@/components/MissionCard";

export default function MissionsSection() {
  return (
    <section id="missions" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Your Creator Missions
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink/60 sm:text-lg">
            Five ways to get started. Complete them at your own pace and
            build your creator profile as you go.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </div>
    </section>
  );
}
