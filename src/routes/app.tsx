import { createFileRoute, Outlet } from "@tanstack/react-router";
import { StudioShell } from "@/components/studio-shell";

export const Route = createFileRoute("/app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <StudioShell>
      <Outlet />
    </StudioShell>
  );
}
