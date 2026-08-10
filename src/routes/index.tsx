import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Hammer,
  Paintbrush,
  Wrench,
  Ruler,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  Star,
} from "lucide-react";

import deck1 from "@/assets/deck1.jpg.asset.json";
import deck2 from "@/assets/deck2.jpg.asset.json";
import deck3 from "@/assets/deck3.jpg.asset.json";
import deck4 from "@/assets/deck4.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deck Craft | Deck Building & Restoration in Richmond, VA" },
      {
        name: "description",
        content:
          "Richmond deck builders specializing in custom decks, rebuilds, board replacement, staining and full restorations. Free estimates across RVA.",
      },
      { property: "og:title", content: "Deck Craft | Richmond Deck Builders" },
      {
        property: "og:description",
        content:
          "Custom deck building and restoration in Greater Richmond, Virginia. Free on-site estimates.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Deck Craft RVA",
          description:
            "Deck building and restoration contractor serving Richmond, Virginia.",
          telephone: "+1-804-555-0142",
          areaServed: "Richmond, VA",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Richmond",
            addressRegion: "VA",
            addressCountry: "US",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "(804) 555-0142";
const PHONE_HREF = "tel:+18045550142";

const services = [
  {
    icon: Hammer,
    title: "Custom Deck Building",
    body: "Ground-level, multi-level and wrap-around decks engineered for Virginia weather and built to county code.",
  },
  {
    icon: Paintbrush,
    title: "Restoration & Staining",
    body: "Deep clean, sand, seal and solid-color stain that brings a tired, gray deck back to a rich, uniform finish.",
  },
  {
    icon: Wrench,
    title: "Repairs & Board Replacement",
    body: "Rotted boards, soft joists, wobbly rails and sagging stairs replaced without tearing out the whole structure.",
  },
  {
    icon: Ruler,
    title: "Railings, Stairs & Privacy",
    body: "Lattice screens, pergolas, custom stair runs and railing systems that match the lines of your home.",
  },
  {
    icon: ShieldCheck,
    title: "Inspections & Safety Fixes",
    body: "Ledger, flashing and footing inspections — the details that keep a deck attached to the house for good.",
  },
  {
    icon: Clock,
    title: "Seasonal Maintenance",
    body: "Annual wash-and-seal plans so the finish never gets far enough gone to need a full restoration again.",
  },
];

const gallery = [
  { src: deck1.url, alt: "Restored multi-level backyard deck with black lattice privacy screen in Richmond, VA" },
  { src: deck3.url, alt: "Rebuilt deck with wide cascading stairs and slate gray decking" },
  { src: deck2.url, alt: "Deck stairs and railing refinished in charcoal solid stain" },
  { src: deck4.url, alt: "Curved deck edge overlooking a shaded Richmond backyard garden" },
];

const steps = [
  { n: "01", t: "On-site walkthrough", d: "We measure, probe for rot and talk through what you actually want to use the space for." },
  { n: "02", t: "Fixed written quote", d: "Line-item pricing with materials, permits and timeline. No moving numbers mid-job." },
  { n: "03", t: "Build or restore", d: "One crew, start to finish. Site swept every evening — you keep your backyard." },
  { n: "04", t: "Walk it together", d: "Final inspection with you on the deck, plus care instructions for the finish." },
];

const areas = [
  "Richmond City", "Henrico", "Chesterfield", "Midlothian", "Glen Allen",
  "Short Pump", "Mechanicsville", "Bon Air", "Ashland", "Powhatan",
];

const testimonials = [
  {
    q: "Our 20-year-old deck was gray and splintering. They replaced the bad boards, rebuilt the stairs and stained it charcoal — it looks brand new.",
    n: "Karen M.",
    l: "Henrico",
  },
  {
    q: "Quoted three companies. Deck Craft was the only one who crawled under the deck before pricing it. Found a rotted ledger everyone else missed.",
    n: "Dave R.",
    l: "Midlothian",
  },
  {
    q: "Clean, on schedule, and the privacy lattice they added is exactly what we sketched on a napkin.",
    n: "Priya S.",
    l: "Glen Allen",
  },
];

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal-deep/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center bg-gold">
              <Hammer className="h-4 w-4 text-charcoal-deep" />
            </span>
            <span className="font-display text-lg font-600 uppercase tracking-widest text-background">
              Deck<span className="text-gold">Craft</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium uppercase tracking-wide text-background/70 md:flex">
            <a href="#services" className="transition-colors hover:text-gold">Services</a>
            <a href="#work" className="transition-colors hover:text-gold">Our Work</a>
            <a href="#process" className="transition-colors hover:text-gold">Process</a>
            <a href="#areas" className="transition-colors hover:text-gold">Service Area</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-gold px-4 py-2 text-sm font-semibold uppercase tracking-wide text-charcoal-deep transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate">
        <img
          src={deck1.url}
          alt="Freshly restored charcoal deck with steps and lattice privacy screen at a Richmond home"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/85 to-charcoal-deep/40" />
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-36">
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            <MapPin className="h-4 w-4" /> Richmond, Virginia
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] text-background sm:text-6xl">
            Decks built right.
            <br />
            <span className="text-gold">Old decks brought back.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
            A local, insured crew building custom decks and restoring weathered
            ones across Greater Richmond — from board replacement and rebuilt
            stairs to full sand-and-stain refinishes.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="bg-gold px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-widest text-charcoal-deep transition-opacity hover:opacity-90"
            >
              Get a free estimate
            </a>
            <a
              href="#work"
              className="border border-background/30 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-widest text-background transition-colors hover:border-gold hover:text-gold"
            >
              See recent work
            </a>
          </div>
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-background/15 pt-8 sm:grid-cols-4">
            {[
              ["15+", "Years in RVA"],
              ["400+", "Decks completed"],
              ["Licensed", "& fully insured"],
              ["Free", "On-site quotes"],
            ].map(([a, b]) => (
              <div key={b}>
                <dt className="font-display text-2xl font-bold text-gold">{a}</dt>
                <dd className="text-xs uppercase tracking-wider text-background/60">{b}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            What we do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase sm:text-4xl">
            Build, repair, restore
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether your deck needs a full rebuild or just a hard reset on the
            finish, we handle the whole scope with one crew.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="bg-card p-7">
              <s.icon className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Recent projects
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase text-background sm:text-4xl">
                Real decks, real Richmond backyards
              </h2>
            </div>
            <p className="max-w-sm text-sm text-background/60">
              Full restoration in Henrico: rotted boards swapped, stairs rebuilt,
              lattice privacy screens refinished, and the whole surface sealed in
              a solid charcoal stain.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {gallery.map((g, i) => (
              <figure
                key={g.src}
                className={`overflow-hidden ${i === 0 ? "sm:col-span-2" : ""}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 hover:scale-[1.03] ${
                    i === 0 ? "h-[22rem] md:h-[30rem]" : "h-72 md:h-80"
                  }`}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          How it goes
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold uppercase sm:text-4xl">
          Four steps, no surprises
        </h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="border-t-2 border-gold pt-5">
              <span className="font-display text-3xl font-bold text-gold/40">{s.n}</span>
              <h3 className="mt-2 font-display text-lg font-semibold uppercase tracking-wide">
                {s.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">
            Neighbors say it better
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.n} className="border-l-2 border-gold bg-card p-6">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">“{t.q}”</p>
                <footer className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                  {t.n} — {t.l}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Service area
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase sm:text-4xl">
              Serving Greater Richmond
            </h2>
            <p className="mt-4 text-muted-foreground">
              We work within about 40 minutes of downtown Richmond. If you're
              just outside the list, call anyway — we often make the trip.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2">
              {areas.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 shrink-0 text-gold" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="min-h-[20rem] overflow-hidden border border-border">
            <iframe
              title="Map of Deck Craft service area around Richmond, Virginia"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-78.05%2C37.30%2C-77.10%2C37.80&layer=mapnik"
              className="h-full min-h-[20rem] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="bg-charcoal-deep py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase text-background sm:text-4xl">
              Get your free estimate
            </h2>
            <p className="mt-4 text-background/70">
              Tell us what you've got and we'll come look at it. Most estimates
              are scheduled within 48 hours.
            </p>
            <div className="mt-8 space-y-4 text-background/80">
              <a href={PHONE_HREF} className="flex items-center gap-3 hover:text-gold">
                <Phone className="h-5 w-5 text-gold" /> {PHONE}
              </a>
              <a href="mailto:hello@deckcraftrva.com" className="flex items-center gap-3 hover:text-gold">
                <Mail className="h-5 w-5 text-gold" /> hello@deckcraftrva.com
              </a>
              <p className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" /> Mon–Sat, 7am – 6pm
              </p>
            </div>
          </div>

          <form
            className="bg-card p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div className="py-14 text-center">
                <Check className="mx-auto h-10 w-10 text-gold" />
                <h3 className="mt-4 font-display text-xl font-semibold uppercase">
                  Request received
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We'll call you back within one business day to schedule the
                  walkthrough.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
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
                    className="h-11 border border-input bg-background px-3 text-sm outline-none focus:border-gold"
                  >
                    <option>New deck build</option>
                    <option>Deck restoration / staining</option>
                    <option>Repairs &amp; board replacement</option>
                    <option>Railings, stairs or privacy screens</option>
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
                    className="border border-input bg-background p-3 text-sm outline-none focus:border-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 bg-gold px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-widest text-charcoal-deep transition-opacity hover:opacity-90"
                >
                  Request my estimate
                </button>
                <p className="text-xs text-muted-foreground">
                  No obligation. We never share your information.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="bg-charcoal-deep border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-background/50 sm:flex-row">
          <span className="font-display uppercase tracking-widest text-background/80">
            Deck<span className="text-gold">Craft</span> RVA
          </span>
          <span>Licensed &amp; insured · Richmond, Virginia</span>
          <span>© {new Date().getFullYear()} Deck Craft RVA</span>
        </div>
      </footer>
    </div>
  );
}

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
        className="h-11 border border-input bg-background px-3 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}
