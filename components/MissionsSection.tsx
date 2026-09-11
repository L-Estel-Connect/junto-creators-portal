"use client";

import { useState } from "react";
import { missions, type Mission } from "@/lib/missions";
import SectionHeader from "@/components/SectionHeader";
import MissionGrid from "@/components/MissionGrid";
import ApplicationModal from "@/components/ApplicationModal";

export default function MissionsSection() {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(
    null
  );

  return (
    <section id="misiones" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Misiones abiertas"
          headline="Elige cómo quieres contar Junto."
          description={
            <p>
              Escoge la idea que mejor encaje con tu contenido. O sorpréndenos
              con la tuya.
            </p>
          }
        />

        <div className="mt-12">
          <MissionGrid missions={missions} onSelect={setSelectedMission} />
        </div>
      </div>

      <ApplicationModal
        key={selectedMission?.id ?? "closed"}
        mission={selectedMission}
        onClose={() => setSelectedMission(null)}
      />
    </section>
  );
}
