
import { Layout } from "@/components/layout/Layout";
import { MetricsCards } from "@/components/dashboard/MetricsCards";
import { TeamOverview } from "@/components/dashboard/TeamOverview";
import { DeveloperActivity } from "@/components/dashboard/DeveloperActivity";
import { ProjectAssignments } from "@/components/dashboard/ProjectAssignments";
import { TimesheetSummary } from "@/components/dashboard/TimesheetSummary";
import { SkillInsights } from "@/components/dashboard/SkillInsights";
import { TeamReports } from "@/components/dashboard/TeamReports";

export default function Index() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Top Metrics Cards */}
        <MetricsCards />
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TeamOverview />
          <DeveloperActivity />
        </div>
        
        {/* Full Width Components */}
        <ProjectAssignments />
        
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TimesheetSummary />
          <SkillInsights />
        </div>
        
        {/* Team Reports (Full Width) */}
        <TeamReports />
      </div>
    </Layout>
  );
}
