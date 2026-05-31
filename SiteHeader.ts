import { Link } from "@tanstack/react-router";
import { Droplet } from "lucide-react";
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform group-hover:scale-105">
            <Droplet className="h-5 w-5 fill-current" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">RaktSetu</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/search" className="transition-colors hover:text-foreground [&.active]:text-foreground">Find Donor</Link>
          <Link to="/request" className="transition-colors hover:text-foreground [&.active]:text-foreground">Request Blood</Link>
          <Link to="/register" className="transition-colors hover:text-foreground [&.active]:text-foreground">Become a Donor</Link>
        </nav>
        <Link
          to="/register"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:bg-[var(--primary-glow)] sm:inline-flex"
        >
          Donate
        </Link>
      </div>
    </header>
  );
}
