import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Heart } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BLOOD_GROUPS } from "@/lib/donor-data";
export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Become a Donor — RaktSetu" },
      { name: "description", content: "Register as a blood donor and help save lives in your community." },
    ],
  }),
  component: RegisterPage,
});
function RegisterPage() {
  const [done, setDone] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };
  if (done) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
          <h1 className="mt-6 font-display text-4xl font-semibold">Welcome to RaktSetu</h1>
          <p className="mt-3 text-muted-foreground">
            You're now part of a life-saving network. We'll reach out when someone in your area needs your blood group.
          </p>
        </div>
        <SiteFooter />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-12 md:grid-cols-[1fr_1.4fr]">
        <aside className="md:sticky md:top-24 md:self-start">
          <span className="inline-grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Heart className="h-5 w-5 fill-current" />
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight">Become a donor</h1>
          <p className="mt-3 text-muted-foreground">
            Registering takes under a minute. Your details stay private until you choose to share them with a requester.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Free, lifetime registration", "Notified only for matches near you", "Control your availability anytime"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-success" /> {t}
              </li>
            ))}
          </ul>
        </aside>
        <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <Field label="Full name" required>
            <input required className={inputCls} placeholder="Your name" />
          </Field>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Blood group" required>
              <select required className={inputCls} defaultValue="">
                <option value="" disabled>Select</option>
                {BLOOD_GROUPS.map((g) => <option key={g}>{g}</option>)}
              </select>
            </Field>
            <Field label="Age" required>
              <input required type="number" min={18} max={65} className={inputCls} placeholder="18 – 65" />
            </Field>
            <Field label="City" required>
              <input required className={inputCls} placeholder="City" />
            </Field>
            <Field label="State" required>
              <input required className={inputCls} placeholder="State" />
            </Field>
            <Field label="Phone" required>
              <input required type="tel" className={inputCls} placeholder="+91 …" />
            </Field>
            <Field label="Email">
              <input type="email" className={inputCls} placeholder="you@example.com" />
            </Field>
          </div>
          <label className="flex items-start gap-2 text-sm text-muted-foreground">
            <input type="checkbox" required className="mt-1 h-4 w-4 accent-[oklch(var(--primary))]" />
            I consent to be contacted by patients or hospitals matching my blood group.
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-colors hover:bg-[var(--primary-glow)]"
          >
            Register as donor
          </button>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}
const inputCls =
  "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";
function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
