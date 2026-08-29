const tz = "America/Los_Angeles";

export function formatDate(iso: string | null | undefined) {
  if (!iso) return "—";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    timeZone: tz,
  }).format(new Date(iso));
}

export function formatDateTime(iso: string | null | undefined) {
  if (!iso) return "—";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: tz,
  }).format(new Date(iso));
}

export function formatRelative(iso: string) {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const delta = now - then;
  const abs = Math.abs(delta);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const min = Math.round(abs / 60000);
  if (min < 60) return rtf.format(delta > 0 ? -min : min, "minute");
  const hrs = Math.round(min / 60);
  if (hrs < 36) return rtf.format(delta > 0 ? -hrs : hrs, "hour");
  const days = Math.round(hrs / 24);
  return rtf.format(delta > 0 ? -days : days, "day");
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}
