
import { useState } from "react";
import { DashboardCard } from "./DashboardCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent 
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Users, Calendar, BarChart2 } from "lucide-react";

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
  const [expandedMembers, setExpandedMembers] = useState<string[]>([]);

  const toggleMemberExpand = (memberId: string) => {
    setExpandedMembers(prev => 
      prev.includes(memberId) 
        ? prev.filter(id => id !== memberId) 
        : [...prev, memberId]
    );
  };

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
            {/* Team Metrics Section */}
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

            {/* Team Members Section with Collapsible Details */}
            <div className="bg-card rounded-md border">
              <div className="p-4 border-b">
                <h3 className="font-medium">Team Members</h3>
              </div>
              <div className="divide-y">
                {teamMembers.map((member) => (
                  <Collapsible 
                    key={member.id} 
                    open={expandedMembers.includes(member.id)}
                    className="w-full"
                  >
                    <div className="p-4 flex items-center justify-between hover:bg-muted/50 cursor-pointer"
                      onClick={() => toggleMemberExpand(member.id)}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={member.availability === "Full" ? "default" : "outline"}>
                          {member.availability}
                        </Badge>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            {expandedMembers.includes(member.id) ? 
                              <ChevronUp className="h-4 w-4" /> : 
                              <ChevronDown className="h-4 w-4" />
                            }
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                    </div>
                    <CollapsibleContent>
                      <div className="px-4 py-3 bg-muted/30">
                        <h4 className="text-sm font-medium mb-2">Assigned Projects</h4>
                        <div className="space-y-2">
                          {member.projects.map((project) => (
                            <div key={project} className="bg-background p-2 rounded-md text-sm flex justify-between">
                              <span>{project}</span>
                              <span className="text-primary text-xs">Active</span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 flex justify-end">
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </DashboardCard>
  );
}
