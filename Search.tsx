import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Phone, MapPin, Search } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BloodGroupBadge } from "@/components/BloodGroupBadge";
import { BLOOD_GROUPS, MOCK_DONORS, type BloodGroup } from "@/lib/donor-data";
export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Find Blood Donors — RaktSetu" },
      { name: "description", content: "Search verified blood donors by group and city. Instant contact, real-time availability." },
    ],
  }),
  component: SearchPage,
});
function SearchPage() {
  const [group, setGroup] = useState<BloodGroup | "ALL">("ALL");
  const [city, setCity] = useState("");
  const results = useMemo(() => {
    return MOCK_DONORS.filter((d) => {
      const gMatch = group === "ALL" || d.bloodGroup === group;
      const cMatch = !city.trim() || d.city.toLowerCase().includes(city.trim().toLowerCase());
      return gMatch && cMatch;
    });
  }, [group, city]);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-6">
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">Find a donor</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Filter by blood group and city. Reach out directly — donors update their availability after each donation.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
          <div className="grid gap-4 md:grid-cols-[1fr_2fr_auto] md:items-end">
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Blood group</label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <button
                  onClick={() => setGroup("ALL")}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    group === "ALL" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent"
                  }`}
                >
                  All
                </button>
                {BLOOD_GROUPS.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGroup(g)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                      group === g ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-accent"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="city" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">City</label>
              <div className="relative mt-2">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Mumbai, Delhi…"
                  className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div className="text-sm text-muted-foreground md:text-right">
              <span className="font-semibold text-foreground">{results.length}</span> donor{results.length === 1 ? "" : "s"}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20">
        {results.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <p className="font-display text-xl">No donors match your filters.</p>
            <p className="mt-1 text-sm text-muted-foreground">Try widening your search or raise a public blood request.</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {results.map((d) => (
              <article key={d.id} className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]">
                <div className="flex items-start justify-between gap-3">
                  <BloodGroupBadge group={d.bloodGroup} />
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                      d.available
                        ? "bg-success/10 text-success"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${d.available ? "bg-success" : "bg-muted-foreground"}`} />
                    {d.available ? "Available" : "Recently donated"}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{d.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {d.city}, {d.state}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-xs text-muted-foreground">
                    Last donated {new Date(d.lastDonation).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                  <a
                    href={`tel:${d.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-[var(--primary-glow)]"
                  >
                    <Phone className="h-3.5 w-3.5" /> Contact
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
