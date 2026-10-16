import { expect, test } from 'bun:test';
import { estimateSchema } from './estimate-validation';
import { reviews } from '@/data/reviews';
const input = { name: 'Test Customer', phone: '(804) 555-0100', email: 'TEST@example.com', address: 'Richmond', project: 'New deck build', details: 'Deck estimate', website: '', pageUrl: 'https://deckcraftdmv.com/henrico' };
test('valid estimates preserve page URL and normalize email', () => {
  const data = estimateSchema.parse(input);
  expect(data.pageUrl).toBe('https://deckcraftdmv.com/henrico');
  expect(data.email).toBe('test@example.com');
});
test('rejects invalid email and phone', () => {
  expect(estimateSchema.safeParse({ ...input, email: 'invalid' }).success).toBe(false);
  expect(estimateSchema.safeParse({ ...input, phone: 'abc' }).success).toBe(false);
});
test('rejects subject header injection and unknown project types', () => {
  expect(estimateSchema.safeParse({ ...input, name: 'Name\r\nBcc: attacker@example.com' }).success).toBe(false);
  expect(estimateSchema.safeParse({ ...input, project: 'Unlisted service' }).success).toBe(false);
});
test('limits project details to 1000 characters', () => {
  expect(estimateSchema.safeParse({ ...input, details: 'a'.repeat(1000) }).success).toBe(true);
  expect(estimateSchema.safeParse({ ...input, details: 'a'.repeat(1001) }).success).toBe(false);
});
test('there are no verified Google reviews yet', () => {
  expect(reviews).toEqual([]);
});