export function CheckBadge() {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.4 11.3 3.7 8.6l1.1-1.1 1.6 1.6 4.2-4.2 1.1 1.1-5.3 5.3Z"
        />
      </svg>
    </span>
  );
}

export function PlaceholderArt({
  caption,
  variant = "dark",
}: {
  caption: string;
  variant?: "dark" | "soft";
}) {
  const dark = variant === "dark";

  return (
    <div
      className={`art-grid relative isolate min-h-[220px] overflow-hidden rounded-[24px] p-6 sm:min-h-[280px] ${
        dark ? "bg-[#0c2a44]/55 text-white" : "bg-primary-soft text-ink"
      }`}
    >
      <div
        className={`absolute right-8 top-8 h-24 w-24 rounded-[20px] ${
          dark ? "bg-white/10" : "bg-primary/15"
        }`}
      />
      <div
        className={`absolute bottom-10 left-10 h-16 w-36 rounded-full ${
          dark ? "bg-primary/40" : "bg-primary/20"
        }`}
      />
      <div
        className={`absolute bottom-16 right-14 h-20 w-20 rotate-12 rounded-[12px] ${
          dark ? "border border-white/25" : "border border-primary/30"
        }`}
      />
      <p className="relative z-10 max-w-[16rem] text-sm font-medium leading-relaxed">
        {caption}
      </p>
    </div>
  );
}
