import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="26" height="26" rx="3" fill="currentColor" />
      <path
        d="M10 22V10h12v8.5"
        fill="none"
        stroke="var(--color-pine-fg)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="20.5" cy="21.5" r="1.5" fill="var(--color-pine-fg)" />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2 text-ink", className)}>
      <Mark className="text-pine" />
      <span className="font-display text-lg tracking-tight">Direction Room</span>
    </span>
  );
}
