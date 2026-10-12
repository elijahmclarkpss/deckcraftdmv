import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Plus,
  Hammer,
  Paintbrush,
  Wrench,
  CalendarCheck,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import heroGrayDeck from "@/assets/hero-gray-deck.jpg";
import grayStairs from "@/assets/gray-stairs.jpg";
import newDeckWhiteRail from "@/assets/new-deck-white-rail.jpg";
import grayDeckSteps from "@/assets/gray-deck-steps.jpg";
import redStairs from "@/assets/red-stairs.jpg";
import grayDeckYard from "@/assets/gray-deck-yard.jpg";
import stageBefore from "@/assets/stage-before.jpg";
import stageNewBoards from "@/assets/stage-new-boards.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deck Craft RVA | Deck Building & Restoration in Richmond, VA" },
      {
        name: "description",
        content:
          "Richmond deck builders specializing in custom decks, rebuilds, board replacement, railings, staining and full restorations. Free estimates across RVA.",
      },
      { property: "og:title", content: "Deck Craft RVA | Richmond Deck Builders" },
      {
        property: "og:description",
        content: "Custom deck building and restoration in Greater Richmond, Virginia. Free on-site estimates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Deck Craft RVA",
          description: "Deck building and restoration contractor serving Richmond, Virginia.",
          telephone: "+1-804-399-9722",
          areaServed: "Richmond, VA",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "118",
          },
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

const PHONE = "(804) 399-9722";
const PHONE_HREF = "tel:+18043999722";

const tickerReviews = [
  { q: "Our 20-year-old deck was gray and splintering — now it looks brand new.", n: "Karen M." },
  { q: "The only company that crawled under the deck before quoting it.", n: "Dave R." },
  { q: "Clean crew, on schedule, swept the site every single evening.", n: "Priya S." },
  { q: "Rebuilt our stairs and railing in two days. Rock solid now.", n: "Tom B." },
  { q: "The charcoal stain landed perfectly even across old and new boards.", n: "Alicia W." },
  { q: "Found rot three other bidders missed. Saved us a full rebuild later.", n: "Greg H." },
];

const services = [
  {
    icon: Hammer,
    title: "New Deck Construction",
    price: "from $42 / sq ft",
    body: "Ground-level platforms, multi-level layouts, wrap-arounds and curved edges — permitted, properly footed, and framed for Virginia freeze-thaw.",
    img: newDeckWhiteRail,
    alt: "New deck with white railings and composite boards built behind a Richmond-area home",
    includes: [
      "Design + permit handling",
      "Concrete footings below frost line",
      "Flashed ledger connection",
      "Composite or pressure-treated decking",
    ],
  },
  {
    icon: Paintbrush,
    title: "Restoration & Staining",
    price: "from $6 / sq ft",
    body: "Strip, sand, replace the boards that are gone, then seal with a solid-color stain that lands even across old and new wood.",
    img: grayDeckSteps,
    alt: "Weathered deck restored with solid charcoal stain and rebuilt cascading stairs",
    includes: [
      "Deep clean + mildew treatment",
      "Board replacement as needed",
      "Full sand and re-fasten",
      "Two-coat premium stain",
    ],
  },
  {
    icon: Wrench,
    title: "Repairs, Stairs & Railings",
    price: "from $650",
    body: "Soft boards, bouncing joists, wobbly rails, stair runs that never felt right. We fix the failure instead of selling you a teardown.",
    img: redStairs,
    alt: "Rebuilt deck stairs and railings finished in a red stain with lattice skirting",
    includes: [
      "Rot + structural inspection",
      "Code-compliant railing systems",
      "Rebuilt stair stringers",
      "Lattice + privacy screens",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Annual Maintenance",
    price: "$389 / year",
    body: "One spring visit: wash off the pollen and mildew, spot-treat, then refresh the top coat before UV gets through it.",
    img: grayDeckYard,
    alt: "Curved charcoal deck overlooking a shaded Richmond backyard garden",
    includes: [
      "Spring wash + mildew treatment",
      "Fastener + board check",
      "Sealant refresh coat",
      "Priority repair scheduling",
    ],
  },
];

const materials = ["TREX", "TIMBERTECH", "SIMPSON STRONG-TIE", "BEHR PREMIUM", "FIBERON"];

const areaGroups = [
  {
    county: "City of Richmond",
    blurb: "From the Fan to the Northside — decks on every kind of city lot.",
    places: [
      "The Fan",
      "Museum District",
      "Carytown",
      "Church Hill",
      "Manchester",
      "Forest Hill",
      "Northside",
      "Westover Hills",
    ],
  },
  {
    county: "Henrico County",
    blurb: "West End to East End, Short Pump to Sandston.",
    places: ["Short Pump", "Glen Allen", "Innsbrook", "Lakeside", "Tuckahoe", "Varina"],
  },
  {
    county: "Chesterfield County",
    blurb: "Midlothian to Chester and everything between.",
    places: ["Midlothian", "Bon Air", "Brandermill", "Woodlake", "Chester", "Powhatan"],
  },
  {
    county: "Hanover County",
    blurb: "Mechanicsville and Ashland — full Hanover coverage.",
    places: ["Mechanicsville", "Ashland"],
  },
];

const faqs = [
  {
    q: "How long does a deck project take?",
    a: "A restoration and stain is usually 2–4 days. A new build runs 1–2 weeks depending on size, permits and inspection scheduling. We give you a firm window at the estimate.",
  },
  {
    q: "Do you handle permits?",
    a: "Yes. For new builds and structural rebuilds we pull the county or city permit and meet the inspector on site. That's included in the quote.",
  },
  {
    q: "What if it rains?",
    a: "Framing continues in light rain. Staining does not — the finish needs a dry window to cure, so we reschedule that step rather than trap moisture under the coat.",
  },
  {
    q: "Can my old deck be saved?",
    a: "Usually. Most decks that look finished have good structure under a failed surface. We inspect the framing, ledger and footings first and tell you honestly which way is cheaper long-term.",
  },
  {
    q: "Composite or wood?",
    a: "Composite costs more up front and almost nothing after. Pressure-treated wood is cheaper to install and needs sealing every 2–3 years. We'll price both at the estimate.",
  },
  {
    q: "How do I pay?",
    a: "A deposit at scheduling, the balance when you've walked the finished deck with us. Check, card or transfer — no payment before the work starts.",
  },
];

const gallery = [
  heroGrayDeck,
  grayDeckSteps,
  newDeckWhiteRail,
  redStairs,
  grayStairs,
  grayDeckYard,
].map((src, i) => ({
  src,
  alt: `Richmond deck project photo ${i + 1} by Deck Craft RVA`,
}));

const stages = [
  {
    label: "Before",
    img: stageBefore,
    alt: "Worn, mildewed deck with rotted boards pulled up before restoration",
  },
  {
    label: "Boards Replaced",
    img: stageNewBoards,
    alt: "New pressure-treated deck boards and rebuilt cascading stairs installed",
  },
  {
    label: "Stained",
    img: heroGrayDeck,
    alt: "The same deck finished in a solid charcoal stain with wide steps",
  },
];

function StageCarousel() {
  return (
    <Carousel opts={{ loop: true }} className="overflow-hidden rounded-3xl">
      <CarouselContent>
        {stages.map((st, i) => (
          <CarouselItem key={st.label} className="relative">
            <img src={st.img} alt={st.alt} loading="lazy" className="h-[26rem] w-full rounded-3xl object-cover" />
            <span className="absolute left-8 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {i + 1} · {st.label}
            </span>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 border-gold/40 bg-ink/70 text-gold hover:bg-ink hover:text-gold" />
      <CarouselNext className="right-4 border-gold/40 bg-ink/70 text-gold hover:bg-ink hover:text-gold" />
    </Carousel>
  );
}

function Index() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="border border-gold/60 px-3 py-1.5 font-display text-base tracking-[0.15em] text-gold">
              DC
            </span>
            <span className="hidden font-display text-sm tracking-[0.22em] text-foreground sm:block">DECK CRAFT</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-foreground/80 lg:flex">
            <a href="#services" className="transition-colors hover:text-gold">
              Services
            </a>
            <a href="#work" className="transition-colors hover:text-gold">
              Our Work
            </a>
            <a href="#area" className="transition-colors hover:text-gold">
              Service Area
            </a>
            <a href="#faq" className="transition-colors hover:text-gold">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="hidden items-center gap-2 text-sm text-foreground/85 hover:text-gold md:flex"
            >
              <Phone className="h-4 w-4 text-gold" /> {PHONE}
            </a>
            <a
              href="#quote"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroGrayDeck}
          alt="Freshly restored charcoal deck with wide steps and black lattice privacy screens at a Richmond home"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/75 to-ink/90" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-5 pb-32 pt-28 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Deck Building &amp; Restoration · Richmond, VA
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] tracking-wide sm:text-6xl">
            Your deck, rebuilt right.
            <span className="mt-2 block text-gold">PROTECT YOUR INVESTMENT.</span>
          </h1>
          <p className="mt-6 max-w-xl text-foreground/80">
            Custom builds, full restorations, staining and structural repairs across the Richmond metro — from one crew,
            start to finish.
          </p>
          <a
            href="#quote"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get a Free Estimate <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-7 flex items-center gap-2 text-sm text-foreground/80">
            <span className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            118 five-star reviews in Richmond
          </div>
        </div>

        {/* Review ticker */}
        <div className="absolute inset-x-0 bottom-0 border-t border-border bg-ink/85 py-4 backdrop-blur">
          <div className="flex w-max animate-[marquee_44s_linear_infinite] gap-10 pr-10">
            {[...tickerReviews, ...tickerReviews].map((r, i) => (
              <span key={i} className="flex shrink-0 items-center gap-3 text-sm">
                <span className="text-gold">“</span>
                <span className="text-foreground/75">{r.q}</span>
                <span className="text-muted-foreground">{r.n}</span>
                <span className="text-border">|</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="border-b border-border bg-ink py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-5">
          <h2 className="max-w-[15rem] text-center font-display text-lg text-foreground lg:text-left">
            The Materials We Use and Trust
          </h2>
          {materials.map((m) => (
            <span key={m} className="text-sm font-semibold tracking-[0.2em] text-foreground/45">
              {m}
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <StageCarousel />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">About Us</p>
          <h2 className="mt-4 font-display text-3xl tracking-wide">One crew, from demo to final walkthrough.</h2>
          <p className="mt-5 leading-relaxed text-foreground/75">
            We've been building and restoring decks in the Richmond area since 2011 — no subcontractor handoffs, no
            rotating faces in your backyard.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/70">
            Full custom build, rebuild after twenty Virginia summers, or a sand-and-stain that makes a tired deck look
            new again: same treatment every time. Pressure-treated framing, properly set fasteners, and a finish applied
            in the right weather window so it actually cures.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              ["6", "Years in RVA"],
              ["200+", "Decks completed"],
              ["5★", "Google rating"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-2xl text-gold">{n}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Services</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-wide sm:text-4xl">
            Everything your deck could need, priced up front.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((s) => (
              <article key={s.title} className="overflow-hidden rounded-2xl border border-border bg-card soft-card">
                <img src={s.img} alt={s.alt} loading="lazy" className="h-56 w-full object-cover" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <s.icon className="h-5 w-5 text-gold" />
                      <h3 className="font-display text-xl">{s.title}</h3>
                    </div>
                    <span className="shrink-0 rounded-full border border-gold/40 px-3 py-1 text-xs text-gold">
                      {s.price}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">{s.body}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.includes.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#quote"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                  >
                    Get this quoted <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl px-5 py-20 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Our Work</p>
        <h2 className="mt-4 font-display text-3xl tracking-wide sm:text-4xl">Recent decks around Richmond.</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <img
              key={i}
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="h-72 w-full rounded-3xl object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          ))}
        </div>
      </section>

      {/* Service area */}
      <section id="area" className="bg-ink py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Service Area</p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl tracking-wide sm:text-4xl">
            Deck building and restoration across the Richmond metro.
          </h2>
          <p className="mt-5 max-w-2xl text-foreground/70">
            We work within about 40 minutes of downtown — the City of Richmond plus Henrico, Chesterfield and Hanover
            counties. No travel fees inside the zone.
          </p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Map of the Deck Craft service area across the Richmond, Virginia metro"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-78.05%2C37.30%2C-77.10%2C37.80&layer=mapnik"
              className="h-[22rem] w-full"
              loading="lazy"
            />
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {areaGroups.map((g) => (
              <div key={g.county}>
                <h3 className="font-display text-lg text-gold">{g.county}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.blurb}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/80">
                  {g.places.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            Don't see your area? We travel outside this zone for larger builds —{" "}
            <a href={PHONE_HREF} className="text-gold hover:underline">
              call us
            </a>{" "}
            with your address.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-20 lg:py-24">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-gold">Questions</p>
        <h2 className="mt-4 text-center font-display text-3xl tracking-wide sm:text-4xl">
          Everything you wanted to ask.
        </h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-medium">{f.q}</span>
                <Plus className={`h-5 w-5 shrink-0 text-gold transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button>
              {open === i && <p className="pb-5 text-sm leading-relaxed text-foreground/70">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="gold-sheen bg-ink py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Free Estimate</p>
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
              <a href="mailto:hello@deckcraftrva.com" className="flex items-center gap-3 hover:text-gold">
                <Mail className="h-5 w-5 text-gold" /> hello@deckcraftrva.com
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold" /> Richmond, Virginia
              </p>
              <p className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" /> Mon–Sat, 7am – 6pm
              </p>
            </div>
          </div>

          <form
            className="rounded-3xl border border-border bg-card soft-card p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
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
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-gold px-6 py-4 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request my estimate
                </button>
                <p className="text-xs text-muted-foreground">No obligation. We never share your information.</p>
              </div>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-border bg-ink py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:flex-row">
          <span className="font-display tracking-[0.2em] text-gold">DECK CRAFT</span>
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
        className="h-11 rounded-xl border border-input bg-background px-3 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}
