
import { useState } from "react";
import { DashboardCard } from "./DashboardCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { DownloadCloud, FileText, Filter } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "./StatusBadge";

// Mock data
const teams = [
  { id: "frontend", name: "Frontend Team" },
  { id: "backend", name: "Backend Team" },
  { id: "mobile", name: "Mobile Team" },
  { id: "devops", name: "DevOps Team" },
];

// Team members data
const teamMembers = {
  "frontend": [
    { id: "1", name: "Alex Johnson", role: "Senior Developer", utilization: 95, availability: "Allocated", projects: ["Dashboard Redesign", "Customer Portal"] },
    { id: "2", name: "Sarah Chen", role: "UI Developer", utilization: 85, availability: "Partial", projects: ["Dashboard Redesign"] },
    { id: "3", name: "David Kim", role: "React Developer", utilization: 75, availability: "Available", projects: ["Marketing Site"] },
    { id: "4", name: "Emma Davis", role: "UX Designer", utilization: 90, availability: "Allocated", projects: ["Customer Portal", "Admin Console"] },
  ],
  "backend": [
    { id: "5", name: "Miguel Rodriguez", role: "API Developer", utilization: 80, availability: "Allocated", projects: ["Payment Gateway", "User Service"] },
    { id: "6", name: "Priya Sharma", role: "Senior Backend Dev", utilization: 95, availability: "Allocated", projects: ["Authentication System"] },
    { id: "7", name: "John Smith", role: "Database Specialist", utilization: 70, availability: "Partial", projects: ["Data Migration", "Analytics API"] },
  ],
  "mobile": [
    { id: "8", name: "Nina Patel", role: "iOS Developer", utilization: 85, availability: "Allocated", projects: ["Mobile App v2"] },
    { id: "9", name: "Tom Wilson", role: "Android Developer", utilization: 90, availability: "Allocated", projects: ["Mobile App v2"] },
    { id: "10", name: "Lisa Johnson", role: "React Native Dev", utilization: 65, availability: "Partial", projects: ["Features Module"] },
  ],
  "devops": [
    { id: "11", name: "Carlos Diaz", role: "Cloud Architect", utilization: 90, availability: "Allocated", projects: ["Infrastructure", "CI/CD Pipeline"] },
    { id: "12", name: "Fatima Ali", role: "SRE", utilization: 85, availability: "Allocated", projects: ["Monitoring System"] },
    { id: "13", name: "Ryan Thomas", role: "DevOps Engineer", utilization: 75, availability: "Available", projects: ["Deployment Automation"] },
  ],
};

export function TeamReports() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <DashboardCard 
      title="Team Reports" 
      description="Detailed reports for each team"
      action={
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-1" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <DownloadCloud className="h-4 w-4 mr-1" />
            Export
          </Button>
        </div>
      }
    >
      <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          {teams.map((team) => (
            <TabsTrigger key={team.id} value={team.id}>
              {team.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {teams.map((team) => (
          <TabsContent key={team.id} value={team.id}>
            <div className="space-y-6">
              {/* Team Stats */}
              <div className="grid grid-cols-4 gap-4">
                <div className="p-4 bg-muted rounded-lg text-center">
                  <p className="text-2xl font-bold">{teamMembers[team.id as keyof typeof teamMembers].length}</p>
                  <p className="text-xs text-muted-foreground">Team Members</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <p className="text-2xl font-bold">
                    {Math.round(
                      teamMembers[team.id as keyof typeof teamMembers].reduce(
                        (acc, member) => acc + member.utilization, 0
                      ) / teamMembers[team.id as keyof typeof teamMembers].length
                    )}%
                  </p>
                  <p className="text-xs text-muted-foreground">Avg. Utilization</p>
                </div>
                <div className="p-4 bg-success/10 rounded-lg text-center">
                  <p className="text-2xl font-bold">
                    {teamMembers[team.id as keyof typeof teamMembers].filter(
                      (member) => member.availability === "Allocated"
                    ).length}
                  </p>
                  <p className="text-xs text-muted-foreground">Fully Allocated</p>
                </div>
                <div className="p-4 bg-warning/10 rounded-lg text-center">
                  <p className="text-2xl font-bold">
                    {teamMembers[team.id as keyof typeof teamMembers].filter(
                      (member) => member.availability === "Available"
                    ).length}
                  </p>
                  <p className="text-xs text-muted-foreground">Available</p>
                </div>
              </div>

              {/* Team Members Table */}
              <div>
                <div className="flex items-center mb-4">
                  <FileText className="h-4 w-4 mr-2" />
                  <h4 className="font-medium">Team Details</h4>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Projects</TableHead>
                      <TableHead>Utilization</TableHead>
                      <TableHead>Availability</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teamMembers[team.id as keyof typeof teamMembers].map((member) => (
                      <TableRow key={member.id}>
                        <TableCell className="font-medium">{member.name}</TableCell>
                        <TableCell>{member.role}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {member.projects.map((project, i) => (
                              <span 
                                key={i} 
                                className="inline-flex text-xs bg-secondary px-2 py-1 rounded-full"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="w-full bg-secondary rounded-full h-2 max-w-[100px]">
                            <div
                              className={
                                member.utilization > 85 ? "bg-success h-2 rounded-full" : 
                                member.utilization > 60 ? "bg-primary h-2 rounded-full" : 
                                member.utilization > 40 ? "bg-warning h-2 rounded-full" : "bg-destructive h-2 rounded-full"
                              }
                              style={{ width: `${member.utilization}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">{member.utilization}%</div>
                        </TableCell>
                        <TableCell>
                          <StatusBadge
                            status={
                              member.availability === "Available" ? "success" :
                              member.availability === "Partial" ? "warning" : "info"
                            }
                            label={member.availability}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </DashboardCard>
  );
}
