import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dispute Resolution Support | Navigate Business Disputes with Ease',
  description: 'Navigate business disputes with expert legal guidance and representation. Resolve conflicts efficiently with our dispute resolution services in India and globally.',
  keywords: 'dispute resolution support, business dispute resolution, legal guidance for disputes, conflict resolution services'
};

export default function DisputeResolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
