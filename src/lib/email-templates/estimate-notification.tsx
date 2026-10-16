import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components';
import type { TemplateEntry } from './registry';

interface Props {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  project?: string;
  details?: string;
  pageUrl?: string;
  submittedAt?: string;
}

function EstimateNotification({ name, phone, email, address, project, details, pageUrl, submittedAt }: Props) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New DeckCraft estimate request from {name || 'a customer'}</Preview>
      <Body style={{ backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ padding: '24px', maxWidth: '600px' }}>
          <Heading>DeckCraft — New estimate request</Heading>
          <Text><strong>Name:</strong> {name || 'Not provided'}</Text>
          <Text><strong>Phone:</strong> {phone || 'Not provided'}</Text>
          <Text><strong>Email:</strong> {email || 'Not provided'}</Text>
          <Text><strong>Address / neighborhood:</strong> {address || 'Not provided'}</Text>
          <Text><strong>Project type:</strong> {project || 'Not provided'}</Text>
          <Text style={{ whiteSpace: 'pre-wrap' }}><strong>Project details:</strong> {details || 'Not provided'}</Text>
          <Text><strong>Page URL:</strong> {pageUrl || 'Not provided'}</Text>
          <Text><strong>Submitted at (UTC):</strong> {submittedAt || 'Not provided'}</Text>
        </Container>
      </Body>
    </Html>
  );
}

export const template = {
  component: EstimateNotification,
  subject: (data) => `New estimate request: ${data.project || 'Not provided'} - ${data.name || 'Customer'}`,
  displayName: 'DeckCraft estimate notification',
  to: 'deckcraftdmv@gmail.com',
  previewData: {
    name: 'Example Customer', phone: '(804) 555-0100', email: 'customer@example.com',
    address: 'Richmond', project: 'New deck build', details: 'I would like an on-site estimate.',
    pageUrl: 'https://deckcraftdmv.com/deck-building', submittedAt: '2026-10-16T00:57:00.000Z',
  },
} satisfies TemplateEntry;