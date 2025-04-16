
import { Pie, PieChart, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { DashboardCard } from "./DashboardCard";
import { Users } from "lucide-react";

const data = [
  { name: "Available", value: 30, color: "#10b981" },
  { name: "Allocated", value: 60, color: "#3b82f6" },
  { name: "On Leave", value: 10, color: "#f59e0b" },
];

export function TeamOverview() {
  return (
    <DashboardCard 
      title="Team Overview" 
      description="Current team allocation and availability"
    >
      <div className="flex flex-col space-y-8">
        <div className="flex items-center">
          <div className="bg-primary/10 p-4 rounded-full">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <div className="ml-4">
            <p className="text-3xl font-bold">138</p>
            <p className="text-sm text-muted-foreground">Total Active Developers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-4">Bandwidth Distribution</h4>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Billability Legend</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="h-3 w-3 rounded-full bg-success mr-2"></span>
                <span className="text-sm">Billable (82 developers)</span>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 rounded-full bg-destructive mr-2"></span>
                <span className="text-sm">Unavailable (23 developers)</span>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 rounded-full bg-warning mr-2"></span>
                <span className="text-sm">Partial Availability (18 developers)</span>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 rounded-full bg-info mr-2"></span>
                <span className="text-sm">Bench (15 developers)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
