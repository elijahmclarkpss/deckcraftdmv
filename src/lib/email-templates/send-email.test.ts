import { beforeEach, expect, test, vi } from 'vitest';
const { send } = vi.hoisted(() => ({ send: vi.fn() }));
vi.mock('@lovable.dev/email-js', () => ({ sendLovableEmail: send, EmailAPIError: class extends Error {} }));
import { sendTemplateEmail } from './send-email';

beforeEach(() => {
  send.mockReset().mockResolvedValue(undefined);
  vi.stubEnv('LOVABLE_API_KEY', 'unit-test-only');
});

const options = {
  templateData: {
    name: 'Test Customer', phone: '(804) 555-0100', email: 'customer@example.com',
    address: 'Museum District', project: 'New deck build', details: 'Replace the existing deck.',
    pageUrl: 'https://deckcraftdmv.com/richmond', submittedAt: '2026-10-16T00:57:00.000Z',
  },
  replyTo: 'customer@example.com', idempotencyKey: 'estimate-notification-test-backup-id',
};

test('estimate notification has fixed recipient and exact subject', async () => {
  await sendTemplateEmail('estimate-notification', 'ignored@example.com', options);
  expect(send.mock.calls[0][0]).toMatchObject({
    to: 'deckcraftdmv@gmail.com',
    subject: 'New estimate request: New deck build - Test Customer',
  });
});

test('customer reply-to and backup-specific key are sent with configured domain', async () => {
  await sendTemplateEmail('estimate-notification', 'deckcraftdmv@gmail.com', options);
  expect(send.mock.calls[0][0]).toMatchObject({
    reply_to: 'customer@example.com', idempotency_key: 'estimate-notification-test-backup-id',
    sender_domain: 'notify.deckcraftdmv.com',
    from: { name: 'DeckCraft', address: 'noreply@notify.deckcraftdmv.com' },
  });
});

test('notification contains every requested submission field', async () => {
  await sendTemplateEmail('estimate-notification', 'deckcraftdmv@gmail.com', options);
  const message = send.mock.calls[0][0];
  for (const value of Object.values(options.templateData)) expect(message.text).toContain(value);
});

test('reports success only after managed send confirms', async () => {
  await expect(sendTemplateEmail('estimate-notification', 'deckcraftdmv@gmail.com', options)).resolves.toEqual({ sent: true });
  send.mockRejectedValue(new Error('domain_not_verified'));
  await expect(sendTemplateEmail('estimate-notification', 'deckcraftdmv@gmail.com', options)).rejects.toThrow('domain_not_verified');
});