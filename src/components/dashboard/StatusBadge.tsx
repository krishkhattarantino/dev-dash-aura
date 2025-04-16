
import { cn } from "@/lib/utils";

type StatusType = 'success' | 'warning' | 'error' | 'info' | 'default';

interface StatusBadgeProps {
  status: StatusType;
  label: string;
  className?: string;
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        status === "success" && "bg-success/15 text-success",
        status === "warning" && "bg-warning/15 text-warning",
        status === "error" && "bg-destructive/15 text-destructive",
        status === "info" && "bg-info/15 text-info",
        status === "default" && "bg-muted text-muted-foreground",
        className
      )}
    >
      {label}
    </span>
  );
}
