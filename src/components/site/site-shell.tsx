import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { landingPages } from "@/lib/landing-pages";
const PHONE = "(804) 399-9722";
const PHONE_HREF = "tel:+18043999722";
export function SiteHeader() { return (<header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <a href="/#top" className="flex items-center gap-3">
            <span className="border border-gold/60 px-3 py-1.5 font-display text-base tracking-[0.15em] text-gold">
              DC
            </span>
            <span className="hidden font-display text-sm tracking-[0.22em] text-foreground sm:block">DeckCraft</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-foreground/80 lg:flex">
            <a href="/#services" className="transition-colors hover:text-gold">
              Services
            </a>
            <a href="/#work" className="transition-colors hover:text-gold">
              Our Work
            </a>
            <a href="/#area" className="transition-colors hover:text-gold">
              Service Area
            </a>
            <a href="/#faq" className="transition-colors hover:text-gold">
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
              href="/#quote"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Free Estimate
            </a>
          </div>
        </div>
      </header>); }
export function SiteFooter() { return (<footer className="border-t border-border bg-ink py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:flex-row">
          <span className="font-display tracking-[0.2em] text-gold">DeckCraft</span>
          <span>Insured · Richmond, Virginia</span>
          <span>© {new Date().getFullYear()} DeckCraft</span>
        </div>
      <nav aria-label="Services and locations" className="mx-auto mt-6 grid max-w-7xl gap-x-8 gap-y-2 border-t border-border px-5 pt-6 text-sm sm:grid-cols-2 lg:grid-cols-4">{landingPages.map((page) => <Link key={page.path} to={page.path} className="text-muted-foreground hover:text-gold">{page.label}</Link>)}</nav>
      </footer>); }
