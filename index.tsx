import { createFileRoute } from "@tanstack/react-router";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartPulse, MapPin, ShieldCheck, Clock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BloodGroupBadge } from "@/components/BloodGroupBadge";
import { BLOOD_GROUPS, STATS } from "@/lib/donor-data";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your App" },
      { name: "description", content: "Replace this with a one-sentence description of your app." },
      { property: "og:title", content: "Your App" },
      { property: "og:description", content: "Replace this with a one-sentence description of your app." },
      { title: "RaktSetu — Find blood donors near you in minutes" },
      { name: "description", content: "A centralized blood donor platform connecting donors, hospitals, and patients with real-time availability and verified contacts." },
      { property: "og:title", content: "RaktSetu — Find blood donors near you" },
      { property: "og:description", content: "Search verified donors by blood group and city. Request blood in emergencies. Save lives." },
    ],
  }),
  component: Index,
  component: Home,
});
// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
function Home() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#fcfbf8" }}
    >
      <img
        data-lovable-blank-page-placeholder="REMOVE_THIS"
        src="https://cdn.gpteng.co/blank-app-v1.svg"
        alt="Your app will live here!"
      />
    <div className="min-h-screen bg-background">
      <SiteHeader />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "24px 24px",
            color: "var(--foreground)",
          }}
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 md:grid-cols-2 md:items-center md:pt-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Live network · {STATS.requestsToday} requests today
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Every second matters.<br />
              <span className="text-primary">Find a donor</span> in minutes.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              RaktSetu connects patients and hospitals with a verified network of blood donors across India — searchable by group and location, available in real time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/search"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-all hover:bg-[var(--primary-glow)]"
              >
                Find a donor
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Become a donor
              </Link>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                { v: STATS.donors.toLocaleString(), l: "Donors" },
                { v: STATS.cities, l: "Cities" },
                { v: STATS.livesSaved.toLocaleString(), l: "Lives saved" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl font-semibold text-foreground">{s.v}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
          {/* Visual */}
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-3xl opacity-30 blur-3xl"
              style={{ background: "var(--gradient-hero)" }}
            />
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Available groups</p>
                  <p className="font-display text-2xl font-semibold">Real-time inventory</p>
                </div>
                <HeartPulse className="h-7 w-7 text-primary" />
              </div>
              <div className="mt-6 grid grid-cols-4 gap-4">
                {BLOOD_GROUPS.map((g) => (
                  <div key={g} className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/50 p-3">
                    <BloodGroupBadge group={g} size="sm" />
                    <span className="text-xs text-muted-foreground">
                      {Math.floor(Math.random() * 80) + 12} units
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/request"
                className="mt-6 flex items-center justify-between rounded-xl bg-secondary px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Urgent? Raise a blood request
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Built for emergencies, designed for trust.</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            From the moment a request goes out to the moment a donor confirms, every step is fast, secure, and verifiable.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: MapPin, title: "Location-aware search", desc: "Filter by city and blood group to surface the nearest available donors first." },
              { icon: Clock, title: "Real-time availability", desc: "Donors mark availability after each donation — no stale contacts, no wasted calls." },
              { icon: ShieldCheck, title: "Secure & verified", desc: "Phone-verified donors and encrypted contact sharing protect every party." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1">
                <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div
          className="relative overflow-hidden rounded-3xl p-12 text-center text-primary-foreground"
          style={{ background: "var(--gradient-hero)" }}
        >
          <h2 className="font-display text-4xl font-semibold md:text-5xl">One pint can save three lives.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Join thousands of donors quietly keeping families together. Registration takes under a minute.
          </p>
          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
          >
            Register as a donor
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
