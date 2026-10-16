import { business } from './business';

export type LandingPath = '/deck-building' | '/deck-restoration-staining' | '/deck-repair' | '/deck-maintenance' | '/richmond' | '/henrico' | '/chesterfield' | '/hanover';
export type LandingPage = {
  path: LandingPath; label: string; title: string; description: string; h1: string;
  area: { '@type': string; name: string }; photo: 'build' | 'restore' | 'repair' | 'maintenance';
  intro: string; included: { heading: string; text: string }[];
  process: { heading: string; text: string }[]; faqs: { q: string; a: string }[];
};
const richmond = { '@type': 'City', name: 'City of Richmond VA' };
export const landingPages: LandingPage[] = [
  {
    path: '/deck-building', label: 'New Deck Construction',
    title: 'Deck Builder in Richmond, VA | New Deck Construction | DeckCraft',
    description: 'New decks in Richmond, VA from DeckCraft. Pressure-treated or composite decking, permit handling, properly footed framing and free on-site estimates.',
    h1: 'New Deck Construction in Richmond, VA', area: richmond, photo: 'build',
    intro: 'A new deck starts with more than a choice of boards. The layout, the connection to the house and the structure underneath all need attention before the surface goes down. DeckCraft has built and restored decks across Greater Richmond with one crew since 2017. We offer free on-site estimates for homeowners considering a new pressure-treated or composite deck, with permits handled as part of the work.',
    included: [
      { heading: 'Structure before the surface', text: 'Our new construction work includes concrete footings below the frost line and a flashed ledger connection. Those details belong in the conversation at the estimate, not as an afterthought once a design is selected. We use Simpson Strong-Tie hardware and discuss the framing alongside the deck layout so you understand what supports the finished space.' },
      { heading: 'A material choice you can compare', text: 'Pressure-treated wood and composite decking are both options. Our composite materials include Trex, TimberTech and Fiberon. Bring your ideas about the look of the deck and how you want to use it; we can compare those choices on site. Ground-level platforms, multi-level layouts and wrap-around decks are among the construction options already offered by DeckCraft.' },
    ],
    process: [
      { heading: 'Walk the site together', text: 'Request an estimate and tell us where the deck will sit, how you expect to reach the yard and whether stairs or railings are part of the plan. Estimates are scheduled within 48 hours. The on-site visit lets us discuss the layout and materials in the context of your actual home rather than quote from a photograph alone.' },
      { heading: 'Plan, permit and build', text: 'We handle the city or county permit for new builds and meet the inspector on site. One crew follows the project from the initial work through the final walkthrough. The estimate is the place to settle the scope, including decking, stairs and railings, before construction begins. Call (804) 399-9722 to arrange a free visit.' },
    ],
    faqs: [
      { q: 'Who handles the permit for a new deck?', a: 'DeckCraft handles the city or county permit for new construction and meets the inspector on site. Discuss the proposed layout during your free estimate so the construction scope and permit work can be considered together.' },
      { q: 'Can I choose composite instead of pressure-treated wood?', a: 'Yes. We offer pressure-treated decking and composite options including Trex, TimberTech and Fiberon. The estimate gives you an opportunity to compare materials for the deck you are planning, rather than choose from a generic description.' },
      { q: 'What should I discuss about the deck foundations?', a: 'Ask about the footings, framing and house connection as well as the visible boards. Our new deck scope includes footings below the frost line, flashed ledgers and Simpson Strong-Tie hardware. These are part of planning the build from the ground up.' },
    ],
  },
  {
    path: '/deck-restoration-staining', label: 'Restoration & Staining',
    title: 'Deck Restoration & Staining in Richmond, VA | DeckCraft',
    description: 'Restore your Richmond deck with cleaning, sanding, needed board replacement and two-coat Behr Premium stain. DeckCraft offers free on-site estimates.',
    h1: 'Deck Restoration & Staining in Richmond, VA', area: richmond, photo: 'restore',
    intro: 'A faded finish does not tell the whole story of an older deck. Before choosing a stain color or deciding to rebuild, it helps to look at the boards and the structure supporting them. DeckCraft restores and stains decks in Richmond and the surrounding counties. Since 2017, one crew has carried the work from preparation through the finished surface, with free on-site estimates to establish what your deck actually needs.',
    included: [
      { heading: 'Preparation that addresses the condition', text: 'Restoration includes deep cleaning and mildew treatment, sanding, re-fastening and board replacement where needed. A new coat is not a substitute for dealing with damaged wood. We inspect the framing, ledger and footings first, then discuss whether restoration or repair is the appropriate starting point. This keeps the scope focused on the deck rather than its color alone.' },
      { heading: 'Two-coat Behr Premium stain', text: 'We use Behr Premium stain and a two-coat process for restoration. Solid-color stain is an option for a finish that looks even across old and replacement boards. The preparation and application belong together: after the cleaning and sanding work, the staining step needs the right dry weather window instead of being forced into a wet day.' },
    ],
    process: [
      { heading: 'Inspect before choosing the finish', text: 'At the free visit, show us the areas that feel rough, look faded or have boards you are worried about. We can review those concerns alongside the structure below. Estimates are scheduled within 48 hours. A photograph can start the conversation, but the on-site inspection is how we distinguish surface wear from work that needs a repair first.' },
      { heading: 'Prepare, repair and stain', text: 'The restoration sequence addresses cleaning, needed board replacement, sanding and re-fastening before the two-coat finish. Staining is rescheduled when rain prevents a suitable dry window. The same crew stays with the project through the final walkthrough. Call (804) 399-9722 to discuss your deck and arrange an estimate without committing to restoration before it has been inspected.' },
    ],
    faqs: [
      { q: 'Can staining hide boards that need replacement?', a: 'The restoration scope includes board replacement as needed before staining. We inspect the deck and discuss the condition of the wood first. An even solid-color finish is a finishing choice, not a reason to leave damaged boards in place.' },
      { q: 'What stain and application do you use?', a: 'DeckCraft uses Behr Premium stain with two coats for restoration work. Cleaning, mildew treatment, sanding and re-fastening are considered alongside the finish, so the estimate covers preparation rather than only the application of a new color.' },
      { q: 'Will you stain the deck if rain is forecast?', a: 'Staining needs a dry window. When the weather does not allow that step, we reschedule it rather than trap moisture under the coat. The finish is planned around suitable conditions, separate from any preparation or structural work.' },
    ],
  },
  {
    path: '/deck-repair', label: 'Repairs, Stairs & Railings',
    title: 'Deck Repair, Stairs & Railings in Richmond, VA | DeckCraft',
    description: 'Deck repairs in Richmond, VA: damaged boards, framing, stairs and railings. DeckCraft inspects the failure first and offers free on-site estimates.',
    h1: 'Deck Repair, Stairs & Railings in Richmond, VA', area: richmond, photo: 'repair',
    intro: 'A soft board, bouncing section or loose railing deserves a closer look than a fresh coat of stain. DeckCraft repairs decks, stairs and railings throughout Greater Richmond, with one crew handling the work since 2017. The first step is a free on-site estimate to inspect the problem and understand what supports it. You do not have to decide on a full replacement before someone has looked beneath the surface.',
    included: [
      { heading: 'Find the failure, then define the repair', text: 'Our repair service includes rot and structural inspection, needed board replacement and attention to the framing. We look at the ledger and footings as well as the visible deck boards. Tell us where the movement or deterioration occurs and whether the issue is on the platform, at the house connection or along the route down to the yard.' },
      { heading: 'Stairs and railings are part of the deck', text: 'DeckCraft offers rebuilt stair stringers and code-compliant railing systems, along with lattice and privacy screens. These elements can be discussed as part of the repair scope rather than treated as unrelated additions. Simpson Strong-Tie hardware is among the materials we use. Where a structural rebuild needs a city or county permit, we handle that work and meet the inspector.' },
    ],
    process: [
      { heading: 'Describe the symptom at the estimate', text: 'Request a visit and note any soft boards, movement, wobbly rails or stairs that do not feel right. Estimates are scheduled within 48 hours. Seeing the deck in person lets us inspect the affected section and the structure around it before discussing the repair. It also helps separate a localized board issue from work that extends into the framing.' },
      { heading: 'Agree on the scope before work starts', text: 'After inspection, we discuss the affected boards, structure, stairs or railings and the work needed before any finishing step. One crew follows the repair through the final walkthrough. If restoration and staining also make sense, those steps can be considered after the repair needs are understood. Call (804) 399-9722 to arrange your free on-site estimate.' },
    ],
    faqs: [
      { q: 'Do loose railings mean I need an entirely new deck?', a: 'A loose railing is a reason to inspect the railing and the structure it connects to, not enough information to choose a full rebuild. DeckCraft checks the failure first and discusses the repair scope after seeing the deck on site.' },
      { q: 'Can you rebuild the stairs without only replacing the treads?', a: 'Our stair work includes rebuilt stair stringers. At the estimate we can look at the run of the stairs and the supporting structure, alongside the treads and railings, to identify what belongs in the repair scope.' },
      { q: 'Who arranges permits for structural rebuilds?', a: 'DeckCraft handles the city or county permit for structural rebuilds and meets the inspector on site. The inspection and estimate help define the proposed work before the repair is scheduled, including any stairs or railings involved.' },
    ],
  },
  {
    path: '/deck-maintenance', label: 'Annual Deck Maintenance',
    title: 'Annual Deck Maintenance in Richmond, VA | DeckCraft',
    description: 'Annual deck maintenance in Richmond: spring washing, mildew treatment, board and fastener checks and finish refresh. Get a free DeckCraft estimate.',
    h1: 'Annual Deck Maintenance in Richmond, VA', area: richmond, photo: 'maintenance',
    intro: 'Keeping a deck in use means paying attention to both its finish and its everyday condition. DeckCraft offers annual deck maintenance across Greater Richmond, with a spring visit focused on washing, mildew treatment and checking boards and fasteners. One crew has built, repaired and restored decks here since 2017. A free on-site estimate helps distinguish routine upkeep from a deck that needs more substantial restoration or repair.',
    included: [
      { heading: 'A spring check of the surface and connections', text: 'The annual maintenance service includes a spring wash and mildew treatment, along with a fastener and board check. Pollen and surface buildup are addressed as part of the visit. Point out the sections you use most and any boards that have begun to feel different, so the conversation covers the condition of the deck rather than only its appearance.' },
      { heading: 'Refresh the finish where appropriate', text: 'Our maintenance scope includes a sealant refresh coat and spot treatment. That differs from a full restoration, which includes cleaning, sanding, needed board replacement and two-coat Behr Premium stain. If your deck has moved beyond ordinary upkeep, we can discuss the restoration or repair service instead. The estimate is a chance to establish which kind of work fits the condition.' },
    ],
    process: [
      { heading: 'Arrange an on-site maintenance estimate', text: 'Tell us about the current finish and any concerns with boards, stairs or railings when requesting a visit. Estimates are scheduled within 48 hours. There is no need to select a maintenance plan before the deck has been seen. The visit gives us a way to discuss washing and finish refresh alongside any areas that need separate attention.' },
      { heading: 'Keep upkeep separate from necessary repairs', text: 'The board and fastener check can bring repair needs into the conversation before a top-coat refresh. Maintenance does not replace structural inspection when there are soft boards, bouncing sections or loose railings. One crew handles the agreed work through the walkthrough. Call (804) 399-9722 during Mon-Fri 6:30am-7pm or Sat 8am-7pm to discuss a free estimate; Sunday is closed.' },
    ],
    faqs: [
      { q: 'What is included in the annual spring visit?', a: 'DeckCraft offers spring washing and mildew treatment, spot treatment, a fastener and board check and a sealant refresh coat. We discuss the condition on site so routine maintenance is not confused with a deck that needs restoration or structural work.' },
      { q: 'How is maintenance different from full restoration?', a: 'Maintenance focuses on washing, checking and refreshing the finish. Full restoration has a broader preparation scope, including sanding, re-fastening, board replacement as needed and two-coat Behr Premium stain. Your estimate helps establish which service is appropriate.' },
      { q: 'What if the maintenance check finds a damaged board?', a: 'Board condition is part of the check. If damage or movement points to a repair need, we discuss that work rather than treat a finish refresh as the solution. DeckCraft also offers deck repairs, stair rebuilding and railing work.' },
    ],
  },
  {
    path: '/richmond', label: 'City of Richmond',
    title: 'Deck Builder in Richmond, VA | DeckCraft',
    description: 'Deck building, restoration and repairs in Richmond, from The Fan and Church Hill to Forest Hill and Northside. One DeckCraft crew since 2017. Free estimates.',
    h1: 'Deck Builder in Richmond, VA', area: richmond, photo: 'build',
    intro: 'DeckCraft serves homeowners in the City of Richmond, including The Fan, Museum District, Church Hill, Manchester, Forest Hill, Northside, Westover Hills and Carytown. Whether you are planning a new deck or looking at an existing one that needs attention, start with an on-site conversation. One crew has handled our deck building and restoration work since 2017, and our estimates are free.',
    included: [
      { heading: 'New construction with the essentials included', text: 'A new Richmond deck can use pressure-treated wood or composite decking from Trex, TimberTech or Fiberon. We handle city permits and meet the inspector on site. Footings below the frost line, flashed ledger connections and Simpson Strong-Tie hardware are part of the construction discussion. At the visit, consider how stairs, railings and the layout will connect the deck to your home and yard.' },
      { heading: 'Options for the deck you already have', text: 'For an existing deck, we inspect the framing, ledger and footings before recommending surface work. Restoration includes cleaning, mildew treatment, sanding, re-fastening, needed board replacement and two-coat Behr Premium stain. Repairs can address stairs, railings and structural issues. Annual maintenance provides washing, board and fastener checks and finish refresh when the deck needs upkeep rather than a full restoration.' },
    ],
    process: [
      { heading: 'Start with your neighborhood and your concerns', text: 'When you request an estimate, give us your Richmond neighborhood and explain whether the goal is a new outdoor space or work on the deck you already use. Estimates are scheduled within 48 hours. The free visit is the place to show us faded finish, soft boards, stair concerns or your proposed layout without deciding on the service in advance.' },
      { heading: 'Inspect, agree on the work and walk it through', text: 'We look at the site, discuss materials or repairs and establish the scope before work begins. One crew stays with the project through the final walkthrough. Staining needs a dry weather window and is rescheduled when conditions are unsuitable. Call (804) 399-9722 during Mon-Fri 6:30am-7pm or Sat 8am-7pm to arrange a visit; we are closed Sunday.' },
    ],
    faqs: [
      { q: 'Do you serve my City of Richmond neighborhood?', a: 'Our Richmond service area includes The Fan, Museum District, Church Hill, Manchester, Forest Hill, Northside, Westover Hills and Carytown. Give us your address or neighborhood when you request the free on-site estimate so we can discuss your deck in its actual setting.' },
      { q: 'Do you handle Richmond permits for a new deck?', a: 'Yes. DeckCraft handles the city permit for new builds and structural rebuilds and meets the inspector on site. Layout, materials, stairs and railings can be discussed together during your estimate before the construction scope is settled.' },
      { q: 'Should I request restoration or repair for an older Richmond deck?', a: 'You can request an inspection without deciding first. Faded stain and damaged structure call for different work. We look at the framing, ledger, footings and boards, then discuss repair or restoration based on the condition we find on site.' },
    ],
  },
  {
    path: '/henrico', label: 'Henrico County',
    title: 'Deck Builder in Henrico County, VA | Short Pump & Glen Allen | DeckCraft',
    description: 'DeckCraft builds, restores and repairs decks in Henrico County: Short Pump, Glen Allen, Innsbrook, Lakeside, Tuckahoe and Varina. Free on-site estimates.',
    h1: 'Deck Builder in Henrico County, VA', area: { '@type': 'AdministrativeArea', name: 'Henrico County VA' }, photo: 'restore',
    intro: 'From a new deck in Short Pump to restoration in Lakeside, DeckCraft offers deck services throughout Henrico County. Our service area includes Glen Allen, Innsbrook, Tuckahoe and Varina as well. The right starting point is the deck and the way you use it, not a one-size-fits-all package. One crew has handled our building and restoration work since 2017, with free on-site estimates for new construction, repairs, staining and maintenance.',
    included: [
      { heading: 'Build a scope around the material and structure', text: 'Henrico homeowners can choose pressure-treated decking or composite materials including Trex, TimberTech and Fiberon. New builds include permit handling, concrete footings below the frost line and flashed ledger connections. Simpson Strong-Tie hardware is among the materials we use. Bring questions about deck access, stair runs and railings to the estimate so these choices are considered alongside the boards.' },
      { heading: 'Restore or repair before committing to replacement', text: 'For existing decks, we start with the framing, ledger and footings. Cleaning and two-coat Behr Premium stain suit restoration work after sanding, re-fastening and board replacement as needed. Soft boards or wobbly railings may call for repairs first. Annual maintenance is another option, focused on spring washing, mildew treatment, checking boards and fasteners and refreshing the finish.' },
    ],
    process: [
      { heading: 'Tell us where the deck needs attention', text: 'Request an estimate with your Henrico address or neighborhood and the concern you want us to look at. In Short Pump, Glen Allen, Innsbrook, Lakeside, Tuckahoe or Varina, the visit follows the same approach: see the site, discuss the goal and inspect before defining the work. Estimates are scheduled within 48 hours, and the on-site estimate is free.' },
      { heading: 'Move from inspection to an agreed project', text: 'We discuss the construction, restoration or repair scope after the visit. For new builds and structural rebuilds, we handle county permits and meet the inspector. One crew remains with the project through the final walkthrough. Staining is planned for a dry window rather than applied in unsuitable weather. Call (804) 399-9722 to arrange a visit and discuss the next step.' },
    ],
    faqs: [
      { q: 'Is Varina included, as well as Short Pump and Glen Allen?', a: 'Yes. DeckCraft serves Henrico County, including Short Pump, Glen Allen, Innsbrook, Lakeside, Tuckahoe and Varina. Share your address when requesting a visit so we can discuss new construction or the condition of your existing deck on site.' },
      { q: 'Can you compare composite options at a Henrico estimate?', a: 'We offer Trex, TimberTech and Fiberon composite decking as well as pressure-treated wood. A free on-site estimate lets you discuss the proposed deck, its layout and material choices together rather than decide on the boards before the structure is planned.' },
      { q: 'Can you inspect a deck that needs both stain and railing work?', a: 'Yes. Restoration and repairs are both DeckCraft services. We can examine the railings and supporting structure before discussing sanding and two-coat stain, so finishing is considered after the repair needs have been identified.' },
    ],
  },
  {
    path: '/chesterfield', label: 'Chesterfield County',
    title: 'Deck Builder in Chesterfield County, VA | Midlothian & Chester | DeckCraft',
    description: 'New decks, restoration, staining and repairs in Chesterfield County, including Midlothian, Bon Air, Brandermill, Woodlake and Chester. Free DeckCraft estimates.',
    h1: 'Deck Builder in Chesterfield County, VA', area: { '@type': 'AdministrativeArea', name: 'Chesterfield County VA' }, photo: 'repair',
    intro: 'DeckCraft serves Chesterfield County homeowners in Midlothian, Bon Air, Brandermill, Woodlake and Chester. A project might begin with plans for a new deck, a worn finish or stairs that need rebuilding. We offer construction, restoration, staining, repairs and annual maintenance, all with the same crew approach we have used since 2017. A free on-site estimate helps turn those concerns into a scope based on the actual deck.',
    included: [
      { heading: 'Consider the whole route from house to yard', text: 'When discussing a new deck, include the stairs and railing system as well as the platform. DeckCraft offers pressure-treated or composite decking, including Trex, TimberTech and Fiberon. We handle county permits for new builds and structural rebuilds, with footings below the frost line, flashed ledger connections and Simpson Strong-Tie hardware among the construction details discussed before the surface is installed.' },
      { heading: 'Separate a tired surface from a repair need', text: 'A deck in need of attention may require more than stain. We inspect the framing, ledger and footings and can repair boards, rebuild stair stringers and address railings. Restoration includes deep cleaning, mildew treatment, sanding and re-fastening, with board replacement as needed before two-coat Behr Premium stain. Maintenance focuses on washing, checks and finish refresh for routine upkeep.' },
    ],
    process: [
      { heading: 'Use the estimate to show the problem', text: 'Tell us your Chesterfield location and what you want changed. You can point out worn boards, an uneven-looking finish, loose rails or the location of a proposed new deck during the visit. Estimates are scheduled within 48 hours. In Midlothian, Bon Air, Brandermill, Woodlake and Chester, the on-site discussion is free and gives us a basis for planning the work.' },
      { heading: 'Agree on the work before the finish', text: 'We discuss the structure, materials and needed repairs before moving into construction or surface preparation. One crew follows the work through the final walkthrough, including permit and inspector coordination for new builds and structural rebuilds. Staining needs a suitable dry window. To request your visit, call (804) 399-9722 during Mon-Fri 6:30am-7pm or Sat 8am-7pm; Sunday is closed.' },
    ],
    faqs: [
      { q: 'Do you work in Brandermill and Woodlake?', a: 'Yes. DeckCraft serves Chesterfield County, including Midlothian, Bon Air, Brandermill, Woodlake and Chester. Request a free on-site estimate with your location and let us know whether you are planning construction or want an existing deck inspected.' },
      { q: 'Can a Chesterfield stair repair include the railings?', a: 'DeckCraft offers rebuilt stair stringers and code-compliant railing systems. We can inspect both during the estimate and discuss their connections to the deck, so the repair scope considers the stair run and rails together.' },
      { q: 'What happens before an older deck receives new stain?', a: 'We inspect the structure first. Restoration preparation includes cleaning, mildew treatment, sanding, re-fastening and board replacement as needed, followed by two-coat Behr Premium stain. Any necessary repair work is part of the conversation before the finishing step.' },
    ],
  },
  {
    path: '/hanover', label: 'Hanover County',
    title: 'Deck Builder in Hanover County, VA | Mechanicsville & Ashland | DeckCraft',
    description: 'DeckCraft serves Hanover County, including Mechanicsville and Ashland, with new decks, restoration, staining, repairs and maintenance. Free on-site estimates.',
    h1: 'Deck Builder in Hanover County, VA', area: { '@type': 'AdministrativeArea', name: 'Hanover County VA' }, photo: 'maintenance',
    intro: 'DeckCraft provides deck building, restoration and repairs in Hanover County, including Mechanicsville and Ashland. If you are weighing a new deck against repairing the one you have, an inspection is a useful first step. Our work has stayed with one crew since 2017, from initial preparation through the final walkthrough. Free on-site estimates let us discuss the structure, materials and finish before you settle on a direction.',
    included: [
      { heading: 'New decks with the structure planned first', text: 'We offer pressure-treated decking and composite materials from Trex, TimberTech and Fiberon. For new construction, the scope includes county permit handling, footings below the frost line and flashed ledger connections. We use Simpson Strong-Tie hardware and meet the inspector on site. Discuss stair access, railing choices and the deck layout at the estimate so the visible finish does not become the only design decision.' },
      { heading: 'An inspection-led approach to an existing deck', text: 'Restoration begins with attention to the framing, ledger and footings, then cleaning, mildew treatment, sanding and re-fastening. Needed boards are replaced before two-coat Behr Premium stain. We also repair decks, rebuild stair stringers and work on railing systems. Annual maintenance offers a spring wash, board and fastener checks and a finish refresh for a deck needing routine attention rather than a larger restoration.' },
    ],
    process: [
      { heading: 'Request a visit in Mechanicsville or Ashland', text: 'Share your Hanover address and a short description of the project. If you already have a deck, mention the parts that concern you; if you are planning a build, describe the layout you have in mind. Estimates are scheduled within 48 hours. The free visit allows us to see the home connection and the structure instead of relying only on an overview photograph.' },
      { heading: 'Choose the scope after the site visit', text: 'After inspection, we discuss whether the project calls for new construction, repairs, restoration or maintenance. One crew carries the agreed work through the walkthrough. We handle permits for new builds and structural rebuilds; staining is arranged around a dry weather window. Call (804) 399-9722 during Mon-Fri 6:30am-7pm or Sat 8am-7pm to arrange an estimate. We are closed on Sunday.' },
    ],
    faqs: [
      { q: 'Are Mechanicsville and Ashland both in your service area?', a: 'Yes. DeckCraft serves Hanover County, including Mechanicsville and Ashland. Provide your address and describe the project when you request a free estimate, whether it is new construction, restoration, repairs or annual maintenance.' },
      { q: 'Do you coordinate Hanover permits and inspection?', a: 'For new builds and structural rebuilds, DeckCraft handles the county permit and meets the inspector on site. Your estimate is the opportunity to discuss the planned structure, stairs and railings before the construction scope is agreed.' },
      { q: 'Can I start with maintenance rather than a full restoration?', a: 'You can ask us to look at the deck before selecting either service. Annual maintenance focuses on washing, checks and finish refresh, while restoration includes more extensive preparation and two-coat stain. The deck’s condition guides that discussion at the visit.' },
    ],
  },
];
export function getLandingPage(path: LandingPath): LandingPage {
  const page = landingPages.find((entry) => entry.path === path);
  if (!page) throw new Error(`Missing landing page: ${path}`);
  return page;
}
export function landingPageHead(page: LandingPage) {
  const url = new URL(page.path, business.url).href;
  return {
    meta: [
      { title: page.title }, { name: 'description', content: page.description },
      { property: 'og:title', content: page.title }, { property: 'og:description', content: page.description },
      { property: 'og:type', content: 'website' }, { property: 'og:url', content: url },
      { name: 'twitter:title', content: page.title }, { name: 'twitter:description', content: page.description },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: url }],
    scripts: [
      { type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'DeckCraft', item: business.url },
        { '@type': 'ListItem', position: 2, name: page.label, item: url },
      ] }) },
      { type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: page.h1, url, description: page.description,
        provider: { '@type': 'HomeAndConstructionBusiness', name: business.name, url: business.url, telephone: business.telephone }, areaServed: page.area }) },
      { type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: page.faqs.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) }) },
    ],
  };
}
