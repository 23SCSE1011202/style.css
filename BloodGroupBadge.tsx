import type { BloodGroup } from "@/lib/donor-data";
import { cn } from "@/lib/utils";
export function BloodGroupBadge({ group, size = "md" }: { group: BloodGroup; size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "h-9 w-9 text-xs",
    md: "h-12 w-12 text-sm",
    lg: "h-20 w-20 text-xl",
  };
  return (
    <span
      className={cn(
        "inline-grid place-items-center rounded-full bg-gradient-to-br from-primary to-[var(--primary-glow)] font-display font-bold text-primary-foreground shadow-[var(--shadow-elegant)]",
        sizes[size],
      )}
    >
      {group}
    </span>
  );
}
