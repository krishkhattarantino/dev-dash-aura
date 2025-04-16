
import { Users, Calendar, BarChart2 } from "lucide-react";

interface TeamMetricsProps {
  members: number;
  projects: number;
  utilization: number;
}

export function TeamMetricsSection({ members, projects, utilization }: TeamMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex items-center p-4 bg-muted rounded-lg">
        <Users className="h-5 w-5 mr-3 text-primary" />
        <div>
          <p className="text-2xl font-bold">{members}</p>
          <p className="text-sm text-muted-foreground">Team Members</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-primary/10 rounded-lg">
        <Calendar className="h-5 w-5 mr-3 text-primary" />
        <div>
          <p className="text-2xl font-bold">{projects}</p>
          <p className="text-sm text-muted-foreground">Active Projects</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-secondary rounded-lg">
        <BarChart2 className="h-5 w-5 mr-3" />
        <div>
          <p className="text-2xl font-bold">{utilization}%</p>
          <p className="text-sm text-muted-foreground">Utilization</p>
        </div>
      </div>
    </div>
  );
}
