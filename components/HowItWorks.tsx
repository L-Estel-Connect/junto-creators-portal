import SectionHeader from "@/components/SectionHeader";
import ProcessStep from "@/components/ProcessStep";
import { processSteps } from "@/lib/process-steps";

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-ink/[0.02] px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Así funciona"
          headline="Primero te aprobamos. Después creas."
          description={
            <p>Tu colaboración y tu recompensa quedan confirmadas antes de crear.</p>
          }
        />

        <ol className="mt-12">
          {processSteps.map((step, i) => (
            <ProcessStep
              key={step.number}
              step={step}
              isLast={i === processSteps.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
