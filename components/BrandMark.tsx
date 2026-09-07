import Link from "next/link";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-primary text-white ${
        compact ? "px-3 py-1.5" : "px-3.5 py-2"
      }`}
      aria-label="Центр услуг — на главную"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        aria-hidden="true"
        className="shrink-0"
      >
        <path fill="currentColor" d="M8 1.2 14.8 8 8 14.8 1.2 8 8 1.2Z" />
      </svg>
      <span className="text-sm font-semibold tracking-tight">Центр услуг</span>
    </Link>
  );
}
