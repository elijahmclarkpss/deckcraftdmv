import { Link } from '@tanstack/react-router';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EstimateSection } from './estimate-section';
import { landingPages, type LandingPage as PageContent } from '@/lib/landing-pages';
import newDeck from '@/assets/new-deck-white-rail.jpg';
import restoredDeck from '@/assets/hero-gray-deck.jpg';
import repairedDeck from '@/assets/gray-deck-yard.jpg';
import maintainedDeck from '@/assets/red-stairs.jpg';
const photos = {
  build: { src: newDeck, alt: 'DeckCraft deck with white railings and composite boards at a Richmond-area home' },
  restore: { src: restoredDeck, alt: 'DeckCraft restored charcoal-stained deck with wide steps in Richmond' },
  repair: { src: repairedDeck, alt: 'DeckCraft deck with replaced boards and charcoal stain in a Richmond-area yard' },
  maintenance: { src: maintainedDeck, alt: 'Red-stained deck with stairs and lattice skirting by DeckCraft' },
};
export function LandingPage({ page }: { page: PageContent }) {
  const photo = photos[page.photo];
  return <main>
    <section className="relative overflow-hidden">
      <img src={photo.src} alt={photo.alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/80" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 lg:pb-20 lg:pt-36">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-foreground/75">
          <Link to="/" className="hover:text-gold">DeckCraft</Link><ChevronRight className="h-4 w-4" /><span aria-current="page">{page.label}</span>
        </nav>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">One crew. Since 2017.</p>
        <h1 className="mt-4 max-w-4xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">{page.h1}</h1>
        <p className="mt-6 max-w-2xl text-foreground/85">{page.intro}</p>
        <Button asChild className="mt-8 h-auto rounded-full px-8 py-4 text-sm font-bold"><a href="#quote">Get a Free Estimate <ArrowRight /></a></Button>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 py-16 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">The work</p>
      <h2 className="mt-4 font-display text-3xl">What’s included</h2>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">{page.included.map(item => <div key={item.heading}>
        <h3 className="flex items-start gap-3 font-display text-xl"><Check className="mt-1 h-5 w-5 shrink-0 text-gold" />{item.heading}</h3>
        <p className="mt-4 text-foreground/75">{item.text}</p>
      </div>)}</div>
    </section>
    <section className="bg-ink py-16 lg:py-20"><div className="mx-auto max-w-7xl px-5">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">From estimate to walkthrough</p>
      <h2 className="mt-4 font-display text-3xl">How the process works</h2>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">{page.process.map((item, index) => <div key={item.heading}>
        <span className="text-sm text-gold">0{index + 1}</span><h3 className="mt-2 font-display text-xl">{item.heading}</h3>
        <p className="mt-4 text-foreground/75">{item.text}</p>
      </div>)}</div>
    </div></section>
    <section className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
      <h2 className="font-display text-3xl">Questions about {page.label.toLowerCase()}</h2>
      <div className="mt-8 divide-y divide-border border-y border-border">{page.faqs.map(faq => <details key={faq.q} className="group py-5">
        <summary className="cursor-pointer text-base font-medium text-foreground marker:text-gold">{faq.q}</summary>
        <p className="mt-4 text-sm text-foreground/75">{faq.a}</p>
      </details>)}</div>
    </section>
    <section className="border-t border-border py-12"><div className="mx-auto max-w-7xl px-5">
      <h2 className="font-display text-2xl">More services &amp; nearby areas</h2>
      <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">{landingPages.filter(other => other.path !== page.path).map(other => <Link to={other.path} key={other.path} className="flex items-center gap-2 text-sm text-gold hover:underline">{other.label}<ArrowRight className="h-4 w-4 shrink-0" /></Link>)}</div>
    </div></section>
    <EstimateSection />
  </main>;
}
