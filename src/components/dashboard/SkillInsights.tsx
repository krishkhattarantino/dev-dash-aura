
import { DashboardCard } from "./DashboardCard";
import { Lightbulb, Check, ChevronRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

// Mock data
const techSkills = [
  { name: "React", count: 32 },
  { name: "TypeScript", count: 28 },
  { name: "Node.js", count: 24 },
  { name: "AWS", count: 21 },
  { name: "Python", count: 18 },
  { name: "GraphQL", count: 15 },
  { name: "Docker", count: 14 },
  { name: "Vue.js", count: 12 },
  { name: "Kubernetes", count: 11 },
  { name: "Go", count: 9 },
  { name: "MongoDB", count: 8 },
  { name: "SQL", count: 7 },
];

const trainingRequests = [
  { 
    id: "1", 
    developer: "Alex Johnson", 
    training: "AWS Solutions Architect", 
    priority: "high",
    status: "pending"
  },
  { 
    id: "2", 
    developer: "Sarah Lee", 
    training: "React Advanced Patterns", 
    priority: "medium",
    status: "approved"
  },
  { 
    id: "3", 
    developer: "John Smith", 
    training: "Kubernetes Administration", 
    priority: "medium",
    status: "pending"
  },
];

const teamInterests = [
  {
    id: "1",
    name: "AI & Machine Learning",
    interested: 24,
    skill: 8,
    progress: 33,
  },
  {
    id: "2",
    name: "Microservices Architecture",
    interested: 18,
    skill: 12,
    progress: 67,
  },
  {
    id: "3",
    name: "Blockchain Development",
    interested: 11,
    skill: 3,
    progress: 27,
  },
];

export function SkillInsights() {
  return (
    <DashboardCard 
      title="Skill & Training Insights" 
      description="Team skills, training requests, and interests"
      action={
        <Button variant="outline" size="sm">
          Skills Matrix
        </Button>
      }
    >
      <div className="space-y-6">
        {/* Tech Stack Tag Cloud */}
        <div>
          <h4 className="font-medium mb-4">Trending Tech Stacks</h4>
          <div className="flex flex-wrap gap-2">
            {techSkills.map((skill) => (
              <div 
                key={skill.name}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm font-medium",
                  skill.count > 25 ? "bg-primary text-primary-foreground" :
                  skill.count > 15 ? "bg-primary/20 text-primary" :
                  skill.count > 10 ? "bg-secondary text-secondary-foreground" :
                  "bg-muted text-muted-foreground"
                )}
                style={{
                  fontSize: `${Math.max(0.75, Math.min(1.25, 0.75 + (skill.count / 32) * 0.5))}rem`
                }}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Training Requests */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-2" />
              <h4 className="font-medium">Pending Training Requests</h4>
            </div>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          
          <div className="space-y-3">
            {trainingRequests.map((request) => (
              <div 
                key={request.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div>
                  <div className="font-medium">{request.developer}</div>
                  <div className="text-sm text-muted-foreground">
                    {request.training}
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={cn(
                    "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium mr-2",
                    request.priority === "high" ? "bg-destructive/15 text-destructive" : 
                    request.priority === "medium" ? "bg-warning/15 text-warning" : 
                    "bg-info/15 text-info"
                  )}>
                    {request.priority}
                  </span>
                  <Button variant="outline" size="sm">
                    {request.status === "approved" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      "Review"
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Skill Interest */}
        <div>
          <h4 className="font-medium mb-4">Team Skill Interests</h4>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            {teamInterests.map((interest) => (
              <div 
                key={interest.id} 
                className="p-4 border rounded-lg flex flex-col"
              >
                <div className="font-medium mb-2">{interest.name}</div>
                <div className="text-sm text-muted-foreground mb-2">
                  {interest.interested} developers interested
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {interest.skill} have the skill
                </div>
                <Progress value={interest.progress} className="h-2 mb-2" />
                <div className="text-xs text-muted-foreground">
                  {interest.progress}% skill coverage
                </div>
                <Button variant="ghost" size="sm" className="mt-auto w-full flex justify-between items-center">
                  <span>Training Plan</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
