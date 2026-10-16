import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/landing-page";
import { getLandingPage, landingPageHead } from "@/lib/landing-pages";
export const Route = createFileRoute("/richmond")({
  head: () => landingPageHead(getLandingPage("/richmond")),
  component: Page,
});
function Page() { return <LandingPage page={getLandingPage("/richmond")} />; }
