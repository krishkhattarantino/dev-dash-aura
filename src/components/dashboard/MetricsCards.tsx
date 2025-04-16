
import { StatCard } from "./StatCard";
import { 
  FolderKanban, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  HourglassIcon, 
  XCircle
} from "lucide-react";

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Project Metrics */}
      <StatCard
        title="Total Projects"
        value="24"
        description="Active and upcoming projects"
        icon={FolderKanban}
        trend={{ value: 12, isPositive: true }}
      />
      
      <div className="grid grid-cols-3 gap-2">
        <StatCard
          title="Active"
          value="14"
          icon={CheckCircle}
          className="p-4"
        />
        <StatCard
          title="Paused"
          value="6"
          icon={HourglassIcon}
          className="p-4"
        />
        <StatCard
          title="Completed"
          value="4"
          icon={XCircle}
          className="p-4"
        />
      </div>
      
      {/* Developer Metrics */}
      <StatCard
        title="Total Developers"
        value="138"
        description="Across all teams"
        icon={Users}
        trend={{ value: 5, isPositive: true }}
      />
      
      {/* Certification Metrics */}
      <StatCard
        title="Certifications"
        value="95"
        description="Team certifications this year"
        icon={Award}
        trend={{ value: 23, isPositive: true }}
      />
    </div>
  );
}
