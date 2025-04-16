
import { DashboardCard } from "./DashboardCard";
import { StatusBadge } from "./StatusBadge";
import { Github, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// Mock data
const commits = [
  {
    id: "1",
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg",
      initials: "AJ",
    },
    repo: "frontend-dashboard",
    message: "Fix responsive layout issues on mobile",
    time: "10 minutes ago",
  },
  {
    id: "2",
    user: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg",
      initials: "SC",
    },
    repo: "api-service",
    message: "Add pagination to user endpoint",
    time: "2 hours ago",
  },
  {
    id: "3",
    user: {
      name: "Miguel Rodriguez",
      avatar: "/placeholder.svg",
      initials: "MR",
    },
    repo: "auth-module",
    message: "Improve token refresh logic",
    time: "5 hours ago",
  },
];

// Top performers
const topPerformers = [
  {
    id: "1",
    name: "Emma Davis",
    role: "Senior Frontend Developer",
    avatar: "/placeholder.svg",
    initials: "ED",
    badge: "Star Performer",
    points: 87,
  },
  {
    id: "2",
    name: "David Wilson",
    role: "Backend Developer",
    avatar: "/placeholder.svg",
    initials: "DW",
    badge: "Rising Star",
    points: 76,
  },
  {
    id: "3",
    name: "Priya Sharma",
    role: "DevOps Engineer",
    avatar: "/placeholder.svg",
    initials: "PS",
    badge: "Tech Innovator",
    points: 72,
  },
  {
    id: "4",
    name: "Thomas Lee",
    role: "Senior Backend Developer",
    avatar: "/placeholder.svg",
    initials: "TL",
    badge: "Team Leader",
    points: 68,
  },
];

export function DeveloperActivity() {
  return (
    <DashboardCard 
      title="Developer Activity" 
      description="Recent activity and top performers"
      action={
        <Button variant="outline" size="sm">
          View All
        </Button>
      }
    >
      <div className="space-y-6">
        {/* GitHub Commits */}
        <div>
          <div className="flex items-center mb-4">
            <Github className="h-4 w-4 mr-2" />
            <h4 className="font-medium">Recent GitHub Commits</h4>
          </div>
          <div className="space-y-4">
            {commits.map((commit) => (
              <div key={commit.id} className="flex items-start space-x-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={commit.user.avatar} alt={commit.user.name} />
                  <AvatarFallback>{commit.user.initials}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-sm">{commit.user.name}</span>
                    <span className="text-xs text-muted-foreground">→</span>
                    <span className="text-xs font-medium text-primary">{commit.repo}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{commit.message}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {commit.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Jira Points */}
        <div>
          <h4 className="font-medium mb-4">Weekly Jira Story Points</h4>
          <div className="flex items-center space-x-4">
            <div className="bg-primary/10 rounded-lg p-4 text-center flex-1">
              <p className="text-2xl font-bold">124</p>
              <p className="text-xs text-muted-foreground">Points Completed</p>
            </div>
            <div className="bg-secondary rounded-lg p-4 text-center flex-1">
              <p className="text-2xl font-bold">156</p>
              <p className="text-xs text-muted-foreground">Points Planned</p>
            </div>
            <div className="bg-muted rounded-lg p-4 text-center flex-1">
              <p className="text-2xl font-bold">79%</p>
              <p className="text-xs text-muted-foreground">Completion Rate</p>
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div>
          <h4 className="font-medium mb-4">Top Performers</h4>
          <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-thin">
            {topPerformers.map((performer) => (
              <div 
                key={performer.id} 
                className="min-w-[240px] p-4 border rounded-lg shadow-sm flex flex-col items-center text-center space-y-3 hover:border-primary transition-colors"
              >
                <Avatar className="h-14 w-14">
                  <AvatarImage src={performer.avatar} alt={performer.name} />
                  <AvatarFallback>{performer.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h5 className="font-medium">{performer.name}</h5>
                  <p className="text-xs text-muted-foreground">{performer.role}</p>
                </div>
                <StatusBadge status="success" label={performer.badge} />
                <p className="text-sm font-medium">{performer.points} points</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
