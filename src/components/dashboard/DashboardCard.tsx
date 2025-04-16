
import { cn } from "@/lib/utils";
import React from "react";

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export function DashboardCard({
  title,
  description,
  action,
  className,
  children,
  ...props
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-md animate-fade-in",
        className
      )}
      {...props}
    >
      <div className="flex flex-row items-center justify-between p-6 pb-2">
        <div className="space-y-1.5">
          <h3 className="font-semibold tracking-tight text-lg">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {action && <div>{action}</div>}
      </div>
      <div className="p-6 pt-2">{children}</div>
    </div>
  );
}
