import { Button } from '@/components/ui/button';
import { reviews, type Review } from '@/data/reviews';

export function ReviewsStrip({ entries = reviews }: { entries?: Review[] }) {
  return <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-border bg-ink/85 py-4 backdrop-blur">
    {entries.length === 0 ? <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 text-center text-sm">
      <p className="text-foreground/75">Worked with us? We'd love your feedback.</p>
      <Button asChild variant="outline" className="rounded-full border-gold/40 text-gold"><a href="https://g.page/r/CSWOyUv4pQMIEBM/review" target="_blank" rel="noopener noreferrer">Leave a Google review</a></Button>
    </div> : <div className="flex w-max animate-[marquee_44s_linear_infinite] gap-10 pr-10 motion-reduce:animate-none">
      {[...entries, ...entries].map((review, i) => <span key={`${review.name}-${i}`} className="flex shrink-0 items-center gap-3 text-sm">
        <span className="text-gold">“</span><span className="text-foreground/75">{review.text}</span>
        <span className="text-muted-foreground">{review.name}</span><span className="text-border">|</span>
      </span>)}
    </div>}
  </div>;
}