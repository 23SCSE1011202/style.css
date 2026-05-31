import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BLOOD_GROUPS } from "@/lib/donor-data";
export const Route = createFileRoute("/request")({
  head: () => ({
    meta: [
      { title: "Request Blood — RaktSetu" },
      { name: "description", content: "Raise an urgent blood request and reach nearby donors instantly." },
    ],
  }),
  component: RequestPage,
});
function RequestPage() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
          <h1 className="mt-6 font-display text-4xl font-semibold">Request sent</h1>
          <p className="mt-3 text-muted-foreground">
            We've notified matching donors in your area. You'll receive confirmations on your phone shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold hover:bg-secondary"
          >
            Raise another request
          </button>
        </div>
        <SiteFooter />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          <AlertTriangle className="h-3.5 w-3.5" /> Emergency request
        </div>
        <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">Request blood</h1>
        <p className="mt-3 text-muted-foreground">Fill in the details below. Verified donors will be notified instantly.</p>
        <form onSubmit={onSubmit} className="mt-10 space-y-6 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Patient name" required>
              <input required className={inputCls} placeholder="Full name" />
            </Field>
            <Field label="Blood group" required>
              <select required className={inputCls} defaultValue="">
                <option value="" disabled>Select group</option>
                {BLOOD_GROUPS.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </Field>
            <Field label="Units needed" required>
              <input required type="number" min={1} max={20} defaultValue={1} className={inputCls} />
            </Field>
            <Field label="Urgency" required>
              <select required className={inputCls} defaultValue="High">
                <option>Critical (within hours)</option>
                <option>High (within 24 hours)</option>
                <option>Scheduled (within a week)</option>
              </select>
            </Field>
            <Field label="Hospital" required>
              <input required className={inputCls} placeholder="Hospital name" />
            </Field>
            <Field label="City" required>
              <input required className={inputCls} placeholder="City" />
            </Field>
            <Field label="Contact name" required>
              <input required className={inputCls} placeholder="Your name" />
            </Field>
            <Field label="Phone" required>
              <input required type="tel" className={inputCls} placeholder="+91 …" />
            </Field>
          </div>
          <Field label="Additional notes">
            <textarea rows={3} className={inputCls} placeholder="Anything else donors should know?" />
          </Field>
          <button
            type="submit"
            className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-colors hover:bg-[var(--primary-glow)]"
          >
            Send request
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
