import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  headline: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
};

export default function SectionHeader({
  eyebrow,
  headline,
  description,
  tone = "light",
}: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span
        className={`text-xs font-semibold uppercase tracking-widest ${
          tone === "dark" ? "text-wax" : "text-coral"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {headline}
      </h2>
      {description ? (
        <div
          className={`mt-4 space-y-3 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-white/70" : "text-ink/60"
          }`}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
