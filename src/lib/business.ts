export const business = {
  name: "DeckCraft",
  legalName: "DeckCraftDMV",
  url: "https://deckcraftdmv.com/",
  telephone: "+1-804-399-9722",
  email: "deckcraftdmv@gmail.com",
  foundingDate: "2017-01",
  foundingYear: "2017",
  estimateArea: "Free estimates across Greater Richmond",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:30",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "City of Richmond VA" },
    { "@type": "AdministrativeArea", name: "Henrico County VA" },
    { "@type": "AdministrativeArea", name: "Chesterfield County VA" },
    { "@type": "AdministrativeArea", name: "Hanover County VA" },
  ],
  sameAs: ["https://www.instagram.com/deckcraftdmv/"],
  offerNames: [
    "New Deck Construction",
    "Deck Restoration & Staining",
    "Deck Repairs/Stairs/Railings",
    "Annual Deck Maintenance",
  ],
};

export const seoTitle = "DeckCraft | Deck Builder in Richmond, VA - New Decks, Restoration & Staining";
export const seoDescription = "Richmond deck builder since 2017. New decks, restoration, staining, repairs, stairs and railings in Richmond, Henrico, Chesterfield and Hanover. Free estimates.";
export const shareImage = `${business.url}images/deckcraft-richmond-deck-og.jpg`;

export function formatOpeningHours(hours: typeof business.openingHoursSpecification) {
  const time = (value: string) => {
    const [hour, minute] = value.split(":").map(Number);
    return `${hour % 12 || 12}${minute ? `:${String(minute).padStart(2, "0")}` : ""}${hour < 12 ? "am" : "pm"}`;
  };
  return hours.map((entry) => {
    const day = Array.isArray(entry.dayOfWeek) ? "Mon-Fri" : entry.dayOfWeek === "Saturday" ? "Sat" : "Sun";
    return `${day} ${entry.opens === entry.closes ? "closed" : `${time(entry.opens)}-${time(entry.closes)}`}`;
  }).join(", ");
}

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  legalName: business.legalName,
  url: business.url,
  telephone: business.telephone,
  email: business.email,
  foundingDate: business.foundingDate,
  image: shareImage,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Richmond",
    addressRegion: "VA",
    addressCountry: "US",
  },
  openingHoursSpecification: business.openingHoursSpecification,
  areaServed: business.areaServed,
  sameAs: business.sameAs,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "DeckCraft Services",
    itemListElement: business.offerNames.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};