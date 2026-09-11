import type { Mission } from "@/lib/missions";
import MissionCard from "@/components/MissionCard";

export default function MissionGrid({
  missions,
  onSelect,
}: {
  missions: Mission[];
  onSelect: (mission: Mission) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {missions.map((mission) => (
        <MissionCard key={mission.id} mission={mission} onSelect={onSelect} />
      ))}
    </div>
  );
}
