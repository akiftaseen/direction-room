import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ProjectShell } from "@/components/project-shell";

export const Route = createFileRoute("/app/projects/$projectId")({
  component: ProjectLayout,
});

function ProjectLayout() {
  const { projectId } = Route.useParams();
  return (
    <ProjectShell projectId={projectId}>
      <Outlet />
    </ProjectShell>
  );
}
