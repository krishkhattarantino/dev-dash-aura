
import { DashboardCard } from "./DashboardCard";
import { Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { cn } from "@/lib/utils";

// Mock data
const weeklyData = [
  { day: "Mon", hours: 8.5, billable: 7.5 },
  { day: "Tue", hours: 9.0, billable: 8.0 },
  { day: "Wed", hours: 7.5, billable: 6.5 },
  { day: "Thu", hours: 8.0, billable: 7.0 },
  { day: "Fri", hours: 6.5, billable: 5.5 },
  { day: "Sat", hours: 2.0, billable: 1.5 },
  { day: "Sun", hours: 0, billable: 0 },
];

const missingEntries = [
  {
    id: "1",
    developer: "Alex Johnson",
    project: "Cloud Migration",
    date: "Apr 15, 2025",
    hours: 8,
    status: "pending"
  },
  {
    id: "2",
    developer: "Maria Garcia",
    project: "API Gateway",
    date: "Apr 14, 2025",
    hours: 4,
    status: "missing"
  },
  {
    id: "3",
    developer: "John Smith",
    project: "Mobile Auth",
    date: "Apr 13, 2025",
    hours: 6,
    status: "pending"
  },
];

export function TimesheetSummary() {
  return (
    <DashboardCard 
      title="Timesheet Summary" 
      description="Weekly hours and billable time"
      action={
        <div className="flex items-center space-x-2">
          <Switch id="billable-mode" defaultChecked />
          <Label htmlFor="billable-mode" className="text-sm">
            Show Billable
          </Label>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Chart */}
        <div className="h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                domain={[0, 10]} 
                ticks={[0, 2, 4, 6, 8, 10]} 
              />
              <Tooltip />
              <Bar dataKey="hours" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
              <Bar dataKey="billable" fill="#10b981" radius={[4, 4, 0, 0]} barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Missing Entries */}
        <div>
          <div className="flex items-center mb-4">
            <AlertCircle className="h-4 w-4 mr-2 text-warning" />
            <h4 className="font-medium">Missing Timesheet Entries</h4>
          </div>
          
          <div className="space-y-3">
            {missingEntries.map((entry) => (
              <div 
                key={entry.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div>
                  <div className="font-medium">{entry.developer}</div>
                  <div className="text-xs text-muted-foreground">
                    {entry.project} • {entry.date}
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={cn(
                    "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium mr-2",
                    entry.status === "missing" ? "bg-destructive/15 text-destructive" : "bg-warning/15 text-warning"
                  )}>
                    {entry.status === "missing" ? "Missing" : "Pending"}
                  </span>
                  <Button variant="outline" size="sm">Remind</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-muted rounded-lg text-center">
            <p className="text-2xl font-bold">41.5</p>
            <p className="text-xs text-muted-foreground">Hours This Week</p>
          </div>
          <div className="p-4 bg-primary/10 rounded-lg text-center">
            <p className="text-2xl font-bold">36.0</p>
            <p className="text-xs text-muted-foreground">Billable Hours</p>
          </div>
          <div className="p-4 bg-success/10 rounded-lg text-center">
            <p className="text-2xl font-bold">87%</p>
            <p className="text-xs text-muted-foreground">Billability</p>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
