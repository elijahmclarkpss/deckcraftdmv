import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Star, Phone, Mail, MapPin, Clock } from "lucide-react";

import deck1 from "@/assets/deck1.jpg.asset.json";
import deck2 from "@/assets/deck2.jpg.asset.json";
import deck3 from "@/assets/deck3.jpg.asset.json";
import deck4 from "@/assets/deck4.jpg.asset.json";

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

const offerings = [
  {
    title: "Custom Deck Building",
    img: deck1.url,
    alt: "Custom multi-level deck with lattice privacy screens built in Richmond, VA",
    body: [
      "A deck is structure first and surface second. We size joists and footings for Virginia's freeze-thaw and summer humidity, flash the ledger properly, and pull the county permit before a single board goes down.",
      "Ground-level platforms, multi-level layouts, wrap-arounds and curved edges — designed around how you actually use the backyard.",
    ],
  },
  {
    title: "Deck Restoration & Staining",
    img: deck3.url,
    alt: "Weathered deck restored with solid charcoal stain and rebuilt cascading stairs",
    body: [
      "Most decks that look finished aren't. A gray, splintering surface usually has ten good years left underneath once the failed boards are swapped and the structure is re-fastened.",
      "We strip, sand, replace what's rotted, then seal with a solid-color stain that lands even across old and new wood — the difference you see in the charcoal deck above.",
    ],
  },
  {
    title: "Repairs, Stairs & Railings",
    img: deck2.url,
    alt: "Refinished deck stairs and black railing with lattice panels",
    body: [
      "Soft boards, bouncing joists, wobbly rails and stair runs that never felt right. We fix the specific failure instead of selling you a teardown.",
      "Code-compliant railing systems, rebuilt stringers, and lattice or pergola privacy screens matched to the lines of your house.",
    ],
  },
  {
    title: "Maintenance Plans",
    img: deck4.url,
    alt: "Curved deck edge overlooking a shaded Richmond backyard garden",
    body: [
      "Once a deck is right, keeping it right is cheap. Our annual wash-and-seal visit clears pollen, mildew and tree debris, then refreshes the top coat before UV gets through it.",
      "Scheduled each spring, so the finish never gets far enough gone to need another full restoration.",
    ],
  },
];

const reviews = [
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
    q: "Clean, on schedule, and the privacy lattice they added is exactly what we sketched on a napkin. Site was swept every single evening.",
    n: "Priya S.",
    l: "Glen Allen",
  },
];

const materials = ["TREX", "TIMBERTECH", "SIMPSON STRONG-TIE", "BEHR PREMIUM", "FIBERON"];

const areas = [
  "Richmond City", "Henrico", "Chesterfield", "Midlothian", "Glen Allen",
  "Short Pump", "Mechanicsville", "Bon Air", "Ashland", "Powhatan",
];

const gallery = [deck1, deck3, deck2, deck4, deck3, deck1].map((d, i) => ({
  src: d.url,
  alt: `Richmond deck project photo ${i + 1} by Deck Craft RVA`,
}));

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <a href="#top" className="border border-gold/60 px-4 py-2 text-center leading-none">
            <span className="block font-display text-xl tracking-[0.15em] text-gold">DC</span>
            <span className="mt-1 block text-[9px] tracking-[0.35em] text-gold/70">
              DECK CRAFT
            </span>
          </a>
          <nav className="hidden items-center gap-9 text-sm font-medium uppercase tracking-wider text-foreground/85 lg:flex">
            <a href="#about" className="transition-colors hover:text-gold">About Us</a>
            <a href="#offerings" className="transition-colors hover:text-gold">Services</a>
            <a href="#reviews" className="transition-colors hover:text-gold">Reviews</a>
            <a href="#work" className="transition-colors hover:text-gold">Gallery</a>
          </nav>
          <a
            href="#quote"
            className="bg-gold px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 sm:px-7 sm:text-sm"
          >
            Get a Free Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="gold-sheen relative overflow-hidden bg-ink">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="text-xl text-foreground/90">We Are</p>
            <h1 className="mt-1 font-display text-5xl leading-none tracking-wide text-gold sm:text-6xl">
              DECK CRAFT
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-foreground/85">
              We specialize in custom deck construction, full deck restoration
              and staining, rot repair and board replacement, railings, stairs,
              pergolas and privacy screens across Richmond, Virginia.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-foreground/70">
              Your deck is the part of the house you actually live on half the
              year. At Deck Craft, the details under the surface — footings,
              ledger flashing, fastener spacing — matter as much as the finish
              you see. We look forward to building you something that lasts.
            </p>
            <a
              href="#quote"
              className="mt-9 inline-block bg-gold px-10 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get a Free Quote
            </a>
          </div>
          <img
            src={deck1.url}
            alt="Freshly restored charcoal deck with wide steps and black lattice privacy screens at a Richmond home"
            className="h-[26rem] w-full object-cover lg:h-[34rem]"
          />
        </div>
      </section>

      {/* Materials */}
      <section className="border-y border-border bg-ink py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-5">
          <h2 className="max-w-[15rem] text-center font-display text-xl text-foreground lg:text-left">
            The Materials We Use and Trust
          </h2>
          {materials.map((m) => (
            <span
              key={m}
              className="text-sm font-semibold tracking-[0.2em] text-foreground/45"
            >
              {m}
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <img
          src={deck4.url}
          alt="Deck Craft crew's finished deck surface leading into a landscaped Richmond backyard"
          loading="lazy"
          className="h-[24rem] w-full object-cover"
        />
        <div>
          <p className="leading-relaxed text-foreground/85">
            We've been building and restoring decks in the Richmond area since
            2011. Every job runs with one crew from demo to final walkthrough —
            no subcontractor handoffs, no rotating faces in your backyard.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/70">
            Whether it's a full custom build, a rebuild after twenty Virginia
            summers, or a sand-and-stain that makes a tired deck look new again,
            the work gets the same treatment: pressure-treated framing, hidden
            or properly set fasteners, and a finish applied in the right weather
            window so it actually cures.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/70">
            Licensed, fully insured, and happy to show you the parts of the job
            that get hidden once the boards go down.
          </p>
          <a
            href="#offerings"
            className="mt-8 inline-block border border-gold px-8 py-3 text-sm font-bold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Learn more
          </a>
        </div>
      </section>

      {/* Offerings */}
      <section id="offerings" className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center font-display text-3xl tracking-[0.12em] text-gold sm:text-4xl">
            OUR OFFERINGS
          </h2>
          <div className="mt-16 space-y-16 lg:space-y-24">
            {offerings.map((o, i) => (
              <div key={o.title} className="grid items-center gap-10 lg:grid-cols-2">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="font-display text-2xl text-foreground">{o.title}</h3>
                  {o.body.map((b) => (
                    <p key={b} className="mt-4 leading-relaxed text-foreground/70">
                      {b}
                    </p>
                  ))}
                  <a
                    href="#quote"
                    className="mt-6 inline-block text-sm font-bold uppercase tracking-wider text-gold hover:underline"
                  >
                    Learn more
                  </a>
                </div>
                <img
                  src={o.img}
                  alt={o.alt}
                  loading="lazy"
                  className={`h-72 w-full object-cover lg:h-[24rem] ${i % 2 === 1 ? "lg:order-1" : ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-5 py-20 lg:py-24">
        <h2 className="text-center font-display text-2xl tracking-[0.12em] text-foreground sm:text-3xl">
          READ SOME OF OUR GOOGLE REVIEWS
        </h2>
        <p className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="font-display text-lg text-gold">4.9</span>
          <span className="flex text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </span>
          <span>· 118 reviews</span>
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.n} className="border border-border bg-card p-6">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">“{r.q}”</p>
              <footer className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                {r.n} — {r.l}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-ink py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="font-display text-3xl tracking-[0.12em] text-foreground sm:text-4xl">
            Our Work
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <img
                key={i}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <h2 className="font-display text-3xl tracking-[0.12em] text-gold">
            SERVICE AREA
          </h2>
          <p className="mt-4 text-foreground/70">
            We work within about 40 minutes of downtown Richmond. Just outside
            the list? Call anyway — we often make the trip.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
            {areas.map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="min-h-[20rem] border border-border">
          <iframe
            title="Map of the Deck Craft service area around Richmond, Virginia"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-78.05%2C37.30%2C-77.10%2C37.80&layer=mapnik"
            className="h-full min-h-[20rem] w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="gold-sheen bg-ink py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl tracking-[0.12em] text-gold sm:text-4xl">
              GET A FREE QUOTE
            </h2>
            <p className="mt-4 text-foreground/70">
              Tell us what you've got and we'll come look at it. Most estimates
              are scheduled within 48 hours.
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
            className="border border-border bg-card p-6 sm:p-8"
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
                  className="mt-2 bg-gold px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
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
        className="h-11 border border-input bg-background px-3 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}
