type ImagePlaceholderProps = {
  label: string;
  className?: string;
  tone?: "light" | "dark";
};

export default function ImagePlaceholder({
  label,
  className = "",
  tone = "light",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center overflow-hidden rounded-3xl ${
        tone === "dark"
          ? "border border-white/10 bg-white/5"
          : "border border-ink/10 bg-gradient-to-br from-wax/40 via-biscuit/30 to-tangerine/30"
      } ${className}`}
    >
      <span
        className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${
          tone === "dark"
            ? "bg-white/10 text-white/70"
            : "bg-white/70 text-ink/50"
        }`}
      >
        Foto próximamente
      </span>
    </div>
  );
}
