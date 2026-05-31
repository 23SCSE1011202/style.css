import { Droplet } from "lucide-react";
export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Droplet className="h-4 w-4 fill-primary text-primary" />
          <span>RaktSetu — every drop counts.</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} RaktSetu. Built with care.
        </p>
      </div>
    </footer>
  );
}
