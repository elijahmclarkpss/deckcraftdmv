import { useState } from "react";
import { Check, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, formatOpeningHours } from "@/lib/business";
import { useServerFn } from '@tanstack/react-start';
import { submitEstimate } from '@/lib/estimates.functions';
import { estimateSchema } from '@/lib/estimate-validation';
const PHONE = "(804) 399-9722";
const PHONE_HREF = "tel:+18043999722";
export function EstimateSection() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const submit = useServerFn(submitEstimate);
  return (<section id="quote" className="gold-sheen bg-ink py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold" aria-label={business.estimateArea}>Free Estimate</p>
            <h2 className="mt-4 font-display text-3xl tracking-wide sm:text-4xl">
              Tell us what you've got. We'll come look at it.
            </h2>
            <p className="mt-5 text-foreground/70">
              Most estimates are scheduled within 48 hours. No deposit to book the visit, no obligation after it.
            </p>
            <div className="mt-8 space-y-4 text-foreground/80">
              <a href={PHONE_HREF} className="flex items-center gap-3 hover:text-gold">
                <Phone className="h-5 w-5 text-gold" /> {PHONE}
              </a>
              <a href="mailto:deckcraftdmv@gmail.com" className="flex items-center gap-3 hover:text-gold">
                <Mail className="h-5 w-5 text-gold" /> deckcraftdmv@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold" /> Richmond, Virginia
              </p>
              <p className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-gold" /> {formatOpeningHours(business.openingHoursSpecification)}
              </p>
            </div>
          </div>

          <form
            className="rounded-3xl border border-border bg-card soft-card p-6 sm:p-8"
            onSubmit={async (e) => {
              e.preventDefault();
              if (pending) return;
              const fields = new FormData(e.currentTarget);
              const parsed = estimateSchema.safeParse({
                name: fields.get('name'), phone: fields.get('phone'), email: fields.get('email'),
                address: fields.get('address'), project: fields.get('project'), details: fields.get('details'),
                website: fields.get('website'), pageUrl: window.location.href,
              });
              if (!parsed.success) { setError('Please check your name, phone, email and project details.'); return; }
              setPending(true); setError('');
              try {
                const result = await submit({ data: parsed.data });
                if (result.success) setSent(true);
                else setError(result.message);
              } catch { setError('We could not complete your request. Please call or text (804) 399-9722.'); }
              finally { setPending(false); }
            }}
          >
            {sent ? (
              <div className="py-16 text-center">
                <Check className="mx-auto h-10 w-10 text-gold" />
                <h3 className="mt-4 font-display text-xl">Request received</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We'll call you back within one business day to schedule the walkthrough.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                <div hidden aria-hidden="true"><label htmlFor="estimate-website">Website</label><input id="estimate-website" name="website" tabIndex={-1} autoComplete="off" maxLength={200} /></div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <Field label="Street address / neighborhood" name="address" />
                <div className="grid gap-1.5">
                  <label htmlFor="project" className="text-xs font-semibold uppercase tracking-wider">
                    Project type
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-gold"
                  >
                    <option>New deck build</option>
                    <option>Deck restoration / staining</option>
                    <option>Repairs &amp; board replacement</option>
                    <option>Railings, stairs or privacy screens</option>
                    <option>Annual maintenance plan</option>
                    <option>Not sure — need an inspection</option>
                  </select>
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="details" className="text-xs font-semibold uppercase tracking-wider">
                    Project details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    maxLength={1000}
                    placeholder="Approx. size, age of the deck, what's bothering you about it…"
                    className="rounded-xl border border-input bg-background p-3 text-sm outline-none focus:border-gold"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={pending}
                  className="mt-2 h-auto rounded-full bg-gold px-6 py-4 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {pending ? 'Sending request…' : 'Request my estimate'}
                </Button>
                {error && <p role="alert" className="text-sm text-foreground">{error}</p>}
                <p className="text-xs text-muted-foreground">No obligation. We never share your information.</p>
              </div>
            )}
          </form>
        </div>
      </section>); }
function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={200}
        className="h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}
