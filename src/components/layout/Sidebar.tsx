
import { useState } from 'react';
import { cn } from "@/lib/utils";
import { 
  Home, 
  Users, 
  Calendar, 
  BarChart3, 
  FileText, 
  Settings, 
  Code2, 
  Github,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface SidebarLinkProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarLink = ({ icon: Icon, label, active, onClick }: SidebarLinkProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-lg w-full transition-colors",
      active 
        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" 
        : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
    )}
  >
    <Icon className="h-5 w-5" />
    <span className="truncate">{label}</span>
  </button>
);

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div 
      className={cn(
        "h-screen sticky top-0 bg-sidebar flex flex-col border-r border-sidebar-border transition-all duration-300",
        collapsed ? "w-[70px]" : "w-[240px]"
      )}
    >
      {/* Logo */}
      <div className="flex items-center h-16 px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
            EM
          </div>
          {!collapsed && <span className="text-sidebar-foreground font-semibold">EMS Dashboard</span>}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {[
          { icon: Home, label: "Dashboard" },
          { icon: Users, label: "Teams" },
          { icon: BarChart3, label: "Projects" },
          { icon: Calendar, label: "Schedule" },
          { icon: FileText, label: "Reports" },
          { icon: Code2, label: "Skills" },
          { icon: Github, label: "Dev Activity" },
        ].map(item => (
          <div key={item.label} className={cn(collapsed && "w-10 mx-auto")}>
            {collapsed ? (
              <button 
                onClick={() => setActiveItem(item.label)}
                className={cn(
                  "p-2 rounded-lg flex items-center justify-center w-10 h-10 transition-colors",
                  activeItem === item.label 
                    ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
              </button>
            ) : (
              <SidebarLink 
                icon={item.icon}
                label={item.label}
                active={activeItem === item.label}
                onClick={() => setActiveItem(item.label)}
              />
            )}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="p-3 border-t border-sidebar-border">
        {collapsed ? (
          <button 
            onClick={() => setActiveItem("Settings")}
            className={cn(
              "p-2 rounded-lg flex items-center justify-center w-10 h-10 transition-colors mx-auto",
              activeItem === "Settings" 
                ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
            )}
          >
            <Settings className="h-5 w-5" />
          </button>
        ) : (
          <SidebarLink 
            icon={Settings}
            label="Settings"
            active={activeItem === "Settings"}
            onClick={() => setActiveItem("Settings")}
          />
        )}
      </div>

      {/* Collapse Button */}
      <div className="p-3 border-t border-sidebar-border flex justify-center">
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-sidebar-accent/50 text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}
