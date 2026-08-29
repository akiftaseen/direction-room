import { Link, useRouterState } from "@tanstack/react-router";
import {
  FolderKanban,
  Gavel,
  Home,
  Plus,
  Settings,
  Stamp,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import { Mark } from "@/components/mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/lib/store";

const nav = [
  { to: "/app", label: "Home", icon: Home, exact: true },
  { to: "/app/clients", label: "Clients", icon: Users },
  { to: "/app/projects", label: "Projects", icon: FolderKanban },
  { to: "/app/reviews", label: "Reviews", icon: Stamp },
  { to: "/app/decisions", label: "Decisions", icon: Gavel },
  { to: "/app/settings", label: "Settings", icon: Settings },
];

export function StudioShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const workspace = useAppStore((s) => s.workspace);

  return (
    <div className="min-h-dvh bg-bg">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-56 flex-col border-r border-line bg-surface-2/80 px-3 py-4 md:flex">
        <Link to="/app" className="mb-6 flex items-center gap-2 px-2 text-ink">
          <Mark className="text-pine" />
          <span className="font-display text-base tracking-tight">Direction Room</span>
        </Link>
        <nav className="flex flex-1 flex-col gap-0.5">
          {nav.map((item) => {
            const active = item.exact
              ? pathname === item.to
              : pathname === item.to || pathname.startsWith(item.to + "/");
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex h-11 items-center gap-2.5 rounded-md px-2.5 text-sm transition-colors duration-150",
                  active
                    ? "bg-pine text-pine-fg"
                    : "text-ink-soft hover:bg-bg-warm hover:text-ink",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto rounded-md bg-surface px-3 py-3 shadow-border">
          <p className="text-xs text-muted">Workspace</p>
          <p className="mt-0.5 text-sm font-medium">{workspace.name}</p>
          <p className="text-xs text-faint">{workspace.leadName}</p>
        </div>
      </aside>

      <div className="md:pl-56">
        <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-line bg-bg/90 px-4 py-3 backdrop-blur-sm md:px-8">
          <Link to="/app" className="flex items-center gap-2 md:hidden">
            <Mark className="text-pine size-6" />
            <span className="font-display text-base">Direction Room</span>
          </Link>
          <p className="hidden text-sm text-muted md:block">
            {workspace.name}
            <span className="mx-2 text-line-strong">/</span>
            Decision layer
          </p>
          <Button size="sm" asChild>
            <Link to="/app/projects/new">
              <Plus className="size-4" />
              New project
            </Link>
          </Button>
        </header>
        <div className="px-4 py-6 md:px-8 md:py-8">{children}</div>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-line bg-surface md:hidden">
        {nav.slice(0, 5).map((item) => {
          const active = item.exact
            ? pathname === item.to
            : pathname === item.to || pathname.startsWith(item.to + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex h-14 flex-1 flex-col items-center justify-center gap-0.5 text-[10px]",
                active ? "text-pine" : "text-muted",
              )}
            >
              <Icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="h-14 md:hidden" />
    </div>
  );
}
