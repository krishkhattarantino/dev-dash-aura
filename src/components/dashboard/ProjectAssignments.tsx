
import { DashboardCard } from "./DashboardCard";
import { Calendar, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "./StatusBadge";
import { cn } from "@/lib/utils";

// Mock data
const projects = [
  {
    id: "1",
    name: "Cloud Migration Platform",
    status: "active",
    startDate: "Apr 12, 2025",
    endDate: "Jul 30, 2025",
    utilization: 85,
    team: [
      { name: "Alex Johnson", avatar: "/placeholder.svg", initials: "AJ", role: "Lead Developer" },
      { name: "Maria Garcia", avatar: "/placeholder.svg", initials: "MG", role: "Frontend Developer" },
      { name: "John Smith", avatar: "/placeholder.svg", initials: "JS", role: "Backend Developer" },
      { name: "Sarah Lee", avatar: "/placeholder.svg", initials: "SL", role: "UX Designer" },
    ],
  },
  {
    id: "2",
    name: "Finance Dashboard Redesign",
    status: "warning",
    startDate: "Mar 5, 2025",
    endDate: "May 15, 2025",
    utilization: 68,
    team: [
      { name: "David Miller", avatar: "/placeholder.svg", initials: "DM", role: "Tech Lead" },
      { name: "Emma Wilson", avatar: "/placeholder.svg", initials: "EW", role: "UI Developer" },
      { name: "James Taylor", avatar: "/placeholder.svg", initials: "JT", role: "Full Stack Developer" },
    ],
  },
  {
    id: "3",
    name: "API Gateway Implementation",
    status: "success",
    startDate: "May 1, 2025",
    endDate: "Aug 20, 2025",
    utilization: 92,
    team: [
      { name: "Priya Sharma", avatar: "/placeholder.svg", initials: "PS", role: "Backend Lead" },
      { name: "Carlos Diaz", avatar: "/placeholder.svg", initials: "CD", role: "Cloud Architect" },
      { name: "Lucy Chen", avatar: "/placeholder.svg", initials: "LC", role: "Backend Developer" },
      { name: "Tom Wilson", avatar: "/placeholder.svg", initials: "TW", role: "DevOps Engineer" },
    ],
  },
  {
    id: "4",
    name: "Mobile App Authentication",
    status: "error",
    startDate: "Apr 20, 2025",
    endDate: "Jun 10, 2025",
    utilization: 45,
    team: [
      { name: "Robert Kim", avatar: "/placeholder.svg", initials: "RK", role: "Mobile Lead" },
      { name: "Nina Patel", avatar: "/placeholder.svg", initials: "NP", role: "iOS Developer" },
      { name: "Michael Brown", avatar: "/placeholder.svg", initials: "MB", role: "Android Developer" },
    ],
  },
];

export function ProjectAssignments() {
  return (
    <DashboardCard 
      title="Project Assignments" 
      description="Current project allocations and team assignments"
      action={
        <Button variant="outline" size="sm">
          All Projects
        </Button>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Project Name</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Assigned Devs</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Timeline</span>
                </div>
              </th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Utilization</th>
              <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
              <th className="text-right py-3 px-4 font-medium text-muted-foreground"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b hover:bg-muted/50 transition-colors">
                <td className="py-4 px-4">
                  <div className="font-medium">{project.name}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex -space-x-2">
                    {project.team.slice(0, 3).map((member, i) => (
                      <Avatar key={i} className="h-8 w-8 border-2 border-background">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                    ))}
                    {project.team.length > 3 && (
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground text-xs border-2 border-background">
                        +{project.team.length - 3}
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm">
                    {project.startDate} → {project.endDate}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="w-full bg-secondary rounded-full h-2 max-w-[150px]">
                    <div
                      className={cn(
                        "h-2 rounded-full",
                        project.utilization > 85 ? "bg-success" : 
                        project.utilization > 60 ? "bg-primary" : 
                        project.utilization > 40 ? "bg-warning" : "bg-destructive"
                      )}
                      style={{ width: `${project.utilization}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{project.utilization}% Utilized</div>
                </td>
                <td className="py-4 px-4">
                  <StatusBadge
                    status={
                      project.status === "active" ? "info" :
                      project.status === "success" ? "success" :
                      project.status === "warning" ? "warning" : "error"
                    }
                    label={
                      project.status === "active" ? "In Progress" :
                      project.status === "success" ? "On Track" :
                      project.status === "warning" ? "At Risk" : "Delayed"
                    }
                  />
                </td>
                <td className="py-4 px-4 text-right">
                  <Button variant="ghost" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}
