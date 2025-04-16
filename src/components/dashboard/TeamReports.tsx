
import { DashboardCard } from "./DashboardCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TeamMetricsSection } from "./TeamMetricsSection";
import { TeamMembersTable } from "./TeamMembersTable";

// Mock data
const teams = [
  {
    id: "dev-team",
    name: "Development",
    members: 42,
    projects: 8,
    utilization: 87,
  },
  {
    id: "qa-team",
    name: "Quality Assurance",
    members: 18,
    projects: 6,
    utilization: 92,
  },
  {
    id: "devops-team",
    name: "DevOps",
    members: 12,
    projects: 4,
    utilization: 84,
  },
];

const teamMembers = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Senior Developer",
    avatar: "/placeholder.svg",
    initials: "SC",
    projects: ["Cloud Migration", "API Gateway"],
    availability: "Full" as const,
  },
  {
    id: "2",
    name: "Mike Johnson",
    role: "Tech Lead",
    avatar: "/placeholder.svg",
    initials: "MJ",
    projects: ["Mobile Auth", "Dashboard UI"],
    availability: "Partial" as const,
  },
  {
    id: "3",
    name: "Emma Davis",
    role: "Full Stack Developer",
    avatar: "/placeholder.svg",
    initials: "ED",
    projects: ["User Management", "Analytics"],
    availability: "Full" as const,
  },
];

export function TeamReports() {
  return (
    <DashboardCard 
      title="Team Reports" 
      description="Detailed view of team performance and allocation"
    >
      <Tabs defaultValue="dev-team" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {teams.map((team) => (
            <TabsTrigger key={team.id} value={team.id} className="text-sm">
              {team.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {teams.map((team) => (
          <TabsContent key={team.id} value={team.id} className="space-y-6">
            <TeamMetricsSection
              members={team.members}
              projects={team.projects}
              utilization={team.utilization}
            />
            <TeamMembersTable members={teamMembers} />
          </TabsContent>
        ))}
      </Tabs>
    </DashboardCard>
  );
}
