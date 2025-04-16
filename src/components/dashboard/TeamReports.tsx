
import { DashboardCard } from "./DashboardCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Calendar, BarChart2 } from "lucide-react";

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
    availability: "Full",
  },
  {
    id: "2",
    name: "Mike Johnson",
    role: "Tech Lead",
    avatar: "/placeholder.svg",
    initials: "MJ",
    projects: ["Mobile Auth", "Dashboard UI"],
    availability: "Partial",
  },
  {
    id: "3",
    name: "Emma Davis",
    role: "Full Stack Developer",
    avatar: "/placeholder.svg",
    initials: "ED",
    projects: ["User Management", "Analytics"],
    availability: "Full",
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
            {/* Team Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center p-4 bg-muted rounded-lg">
                <Users className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{team.members}</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-primary/10 rounded-lg">
                <Calendar className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{team.projects}</p>
                  <p className="text-sm text-muted-foreground">Active Projects</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-secondary rounded-lg">
                <BarChart2 className="h-5 w-5 mr-3" />
                <div>
                  <p className="text-2xl font-bold">{team.utilization}%</p>
                  <p className="text-sm text-muted-foreground">Utilization</p>
                </div>
              </div>
            </div>

            {/* Team Members Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Member</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Projects</TableHead>
                    <TableHead>Availability</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={member.avatar} alt={member.name} />
                            <AvatarFallback>{member.initials}</AvatarFallback>
                          </Avatar>
                          {member.name}
                        </div>
                      </TableCell>
                      <TableCell>{member.role}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          {member.projects.map((project) => (
                            <span key={project} className="text-sm">
                              {project}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                            member.availability === "Full"
                              ? "bg-success/15 text-success"
                              : "bg-warning/15 text-warning"
                          }`}
                        >
                          {member.availability}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </DashboardCard>
  );
}
