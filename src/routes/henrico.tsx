import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/landing-page";
import { getLandingPage, landingPageHead } from "@/lib/landing-pages";
export const Route = createFileRoute("/henrico")({
  head: () => landingPageHead(getLandingPage("/henrico")),
  component: Page,
});
function Page() { return <LandingPage page={getLandingPage("/henrico")} />; }
