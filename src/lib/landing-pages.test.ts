import { describe, expect, test } from 'bun:test';
import { getLandingPage, landingPageHead, landingPages } from './landing-pages';

describe('local service scope', () => {
  test('service provider is DeckCraft', () => {
    for (const page of landingPages) {
      const script = landingPageHead(page).scripts[1];
      if (!script) throw new Error('Missing service schema');
      const service = JSON.parse(script.children);
      expect(service.provider.name).toBe('DeckCraft');
    }
  });
  test('area pages serve their named jurisdiction', () => {
    const areas = [['/richmond', 'City of Richmond VA'], ['/henrico', 'Henrico County VA'], ['/chesterfield', 'Chesterfield County VA'], ['/hanover', 'Hanover County VA']] as const;
    for (const [path, name] of areas) {
      const script = landingPageHead(getLandingPage(path)).scripts[1];
      if (!script) throw new Error('Missing service schema');
      const service = JSON.parse(script.children);
      expect(service.areaServed.name).toBe(name);
    }
  });
  test('local schemas exclude reviews and ratings', () => {
    for (const page of landingPages) {
      const schemas = landingPageHead(page).scripts.map(script => JSON.parse(script.children));
      for (const schema of schemas) {
        expect(schema).not.toHaveProperty('aggregateRating');
        expect(schema).not.toHaveProperty('review');
        expect(schema['@type']).not.toBe('Review');
        expect(schema['@type']).not.toBe('AggregateRating');
      }
    }
  });
});