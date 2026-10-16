import { describe, expect, test } from "vitest";
import { business, businessSchema, formatOpeningHours, shareImage } from "./business";

describe("official business details", () => {
  test("uses the registered public and legal names", () => {
    expect(businessSchema.name).toBe("DeckCraft");
    expect(businessSchema.legalName).toBe("DeckCraftDMV");
  });
  test("was founded in January 2017", () => {
    expect(businessSchema.foundingDate).toBe("2017-01");
    expect(business.foundingYear).toBe("2017");
  });
  test("opens weekdays from 6:30am to 7pm", () => {
    expect(businessSchema.openingHoursSpecification[0]).toEqual({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:30", closes: "19:00",
    });
  });
  test("opens Saturday from 8am to 7pm", () => {
    expect(businessSchema.openingHoursSpecification[1]).toEqual({
      "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "19:00",
    });
  });
  test("is closed on Sunday", () => {
    expect(businessSchema.openingHoursSpecification[2]).toEqual({
      "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "00:00", closes: "00:00",
    });
  });
  test("formats business hours from the published schedule", () => {
    expect(formatOpeningHours(business.openingHoursSpecification)).toBe("Mon-Fri 6:30am-7pm, Sat 8am-7pm, Sun closed");
    const changed = business.openingHoursSpecification.map((entry, index) => index === 0 ? { ...entry, opens: "07:00" } : entry);
    expect(formatOpeningHours(changed)).toBe("Mon-Fri 7am-7pm, Sat 8am-7pm, Sun closed");
  });
  test("uses only the service-area address", () => {
    expect(businessSchema.address).toEqual({ "@type": "PostalAddress", addressLocality: "Richmond", addressRegion: "VA", addressCountry: "US" });
  });
  test("serves the four specified jurisdictions", () => {
    expect(businessSchema.areaServed.map((area) => area.name)).toEqual(["City of Richmond VA", "Henrico County VA", "Chesterfield County VA", "Hanover County VA"]);
  });
  test("uses the supplied contacts and Instagram profile", () => {
    expect(businessSchema.telephone).toBe("+1-804-399-9722");
    expect(businessSchema.email).toBe("deckcraftdmv@gmail.com");
    expect(businessSchema.url).toBe("https://deckcraftdmv.com/");
    expect(businessSchema.sameAs).toEqual(["https://www.instagram.com/deckcraftdmv/"]);
  });
  test("offers the four requested services", () => {
    expect(businessSchema.hasOfferCatalog.itemListElement.map((offer) => offer.itemOffered.name)).toEqual(["New Deck Construction", "Deck Restoration & Staining", "Deck Repairs/Stairs/Railings", "Annual Deck Maintenance"]);
  });
  test("uses the share photo and excludes rating and review markup", () => {
    expect(businessSchema.image).toBe(shareImage);
    expect(businessSchema).not.toHaveProperty("aggregateRating");
    expect(businessSchema).not.toHaveProperty("review");
  });
});