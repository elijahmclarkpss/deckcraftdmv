import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/landing-page";
import { getLandingPage, landingPageHead } from "@/lib/landing-pages";
export const Route = createFileRoute("/deck-repair")({
  head: () => landingPageHead(getLandingPage("/deck-repair")),
  component: Page,
});
function Page() { return <LandingPage page={getLandingPage("/deck-repair")} />; }
