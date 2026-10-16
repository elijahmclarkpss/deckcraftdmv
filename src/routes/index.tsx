import { EstimateSection } from "@/components/site/estimate-section";
import { ReviewsStrip } from "@/components/site/reviews-strip";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { business, businessSchema, seoTitle, seoDescription, shareImage } from "@/lib/business";
import {
  Check,
  Phone,
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
  type CarouselApi,
} from "@/components/ui/carousel";

import heroGrayDeck from "@/assets/hero-gray-deck.jpg";
import newDeckWhiteRail from "@/assets/new-deck-white-rail.jpg";
import redStairs from "@/assets/red-stairs.jpg";
import grayDeckYard from "@/assets/gray-deck-yard.jpg";
import stageBefore from "@/assets/stage-before.jpg";
import stageNewBoards from "@/assets/stage-new-boards.jpg";
import restoreBefore from "@/assets/restore-before.jpg";
import restoreAfter from "@/assets/restore-after.jpg";
import repairsBefore from "@/assets/repairs-before.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seoTitle },
      { name: "description", content: seoDescription },
      { name: "google-site-verification", content: "qRSQDM7R_nMxV7Guq774LHeO8kABiac80xPkJrpoK8A" },
      { property: "og:title", content: seoTitle },
      { property: "og:description", content: seoDescription },
      { name: "twitter:title", content: seoTitle },
      { name: "twitter:description", content: seoDescription },
      { property: "og:url", content: business.url },
      { property: "og:image", content: shareImage },
      { name: "twitter:image", content: shareImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: business.url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(businessSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "(804) 399-9722";
const PHONE_HREF = "tel:+18043999722";

const services = [
  {
    icon: Hammer,
    title: "New Deck Construction",
    path: "/deck-building" as const,
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
    path: "/deck-restoration-staining" as const,
    body: "Strip, sand, replace the boards that are gone, then seal with a solid-color stain that lands even across old and new wood.",
    slides: [
      {
        label: "Before",
        img: restoreBefore,
        alt: "Faded, mildewed deck stairs and railing being pressure-washed before restoration",
      },
      {
        label: "After",
        img: restoreAfter,
        alt: "The same deck stairs and railing restored with an even solid brown stain",
      },
    ],
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
    path: "/deck-repair" as const,
    body: "Soft boards, bouncing joists, wobbly rails, stair runs that never felt right. We fix the failure instead of selling you a teardown.",
    slides: [
      {
        label: "Before",
        img: repairsBefore,
        alt: "Rotted deck boards pulled up to expose the framing before repair",
      },
      {
        label: "After",
        img: grayDeckYard,
        alt: "The same deck rebuilt with new boards and a solid charcoal stain",
      },
    ],
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
    path: "/deck-maintenance" as const,
    body: "One spring visit: wash off the pollen and mildew, spot-treat, then refresh the top coat before UV gets through it.",
    img: redStairs,
    alt: "Well-kept red-stained deck with stairs and lattice skirting in a shaded backyard",
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
    path: "/richmond" as const,
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
    path: "/henrico" as const,
    blurb: "West End to East End, Short Pump to Sandston.",
    places: ["Short Pump", "Glen Allen", "Innsbrook", "Lakeside", "Tuckahoe", "Varina"],
  },
  {
    county: "Chesterfield County",
    path: "/chesterfield" as const,
    blurb: "Midlothian to Chester and everything between.",
    places: ["Midlothian", "Bon Air", "Brandermill", "Woodlake", "Chester", "Powhatan"],
  },
  {
    county: "Hanover County",
    path: "/hanover" as const,
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

const gallery = [heroGrayDeck, newDeckWhiteRail, redStairs].map((src, i) => ({
  src,
  alt: `Richmond deck project photo ${i + 1} by DeckCraft`,
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

function AutoCarousel({ slides }: { slides: { label: string; img: string; alt: string }[] }) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), 3500);
    return () => clearInterval(id);
  }, [api]);

  return (
    <Carousel setApi={setApi} opts={{ loop: true }}>
      <CarouselContent>
        {slides.map((sl) => (
          <CarouselItem key={sl.label} className="relative">
            <img src={sl.img} alt={sl.alt} loading="lazy" className="h-56 w-full object-cover" />
            <span className="absolute left-8 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {sl.label}
            </span>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

function Index() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section id="top" className="relative min-h-[92vh] overflow-hidden">
        <img
          src={heroGrayDeck}
          alt="Freshly restored charcoal deck with wide steps and black lattice privacy screens at a Richmond home"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/75 to-ink/90" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-5 pb-32 pt-28 text-center">
          <h1 className="hero-eyebrow text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Deck Builder in Richmond, VA - Building &amp; Restoration
          </h1>
          <div className="mt-6 font-display text-4xl leading-[1.08] tracking-wide sm:text-6xl">
            Your deck, rebuilt right.
            <span className="mt-2 block text-gold">PROTECT YOUR INVESTMENT.</span>
          </div>
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
        </div>

        {/* Review ticker */}
        <ReviewsStrip />
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
            We've been building and restoring decks in the Richmond area since {business.foundingYear} — no subcontractor handoffs, no
            rotating faces in your backyard.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/70">
            Full custom build, rebuild after twenty Virginia summers, or a sand-and-stain that makes a tired deck look
            new again: same treatment every time. Pressure-treated framing, properly set fasteners, and a finish applied
            in the right weather window so it actually cures.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              ["9", "Years in Richmond"],
              ["170+", "Decks completed"],
              ["48 hr", "Estimate scheduling"],
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
                {s.slides ? (
                  <AutoCarousel slides={s.slides} />
                ) : (
                  <img src={s.img} alt={s.alt} loading="lazy" className="h-56 w-full object-cover" />
                )}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <s.icon className="h-5 w-5 text-gold" />
                    <h3 className="font-display text-xl"><Link to={s.path} className="hover:text-gold">{s.title}</Link></h3>
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
                  <Link to={s.path} className="mt-6 mr-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">Explore this service <ArrowRight className="h-4 w-4" /></Link>
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
              title="Map of the DeckCraft service area across the Richmond, Virginia metro"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-78.05%2C37.30%2C-77.10%2C37.80&layer=mapnik"
              className="h-[22rem] w-full"
              loading="lazy"
            />
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {areaGroups.map((g) => (
              <div key={g.county}>
                <h3 className="font-display text-lg text-gold"><Link to={g.path} className="hover:underline">{g.county}</Link></h3>
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
              <Button
                variant="ghost"
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
                className="flex h-auto w-full items-center justify-between gap-4 whitespace-normal rounded-none px-0 py-5 text-left text-base hover:bg-transparent hover:text-foreground"
              >
                <span className="font-medium">{f.q}</span>
                <Plus className={`h-5 w-5 shrink-0 text-gold transition-transform ${open === i ? "rotate-45" : ""}`} />
              </Button>
              <p id={`faq-answer-${i}`} aria-labelledby={`faq-question-${i}`} hidden={open !== i} className="pb-5 text-sm leading-relaxed text-foreground/70">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <EstimateSection />

    </div>
  );
}
