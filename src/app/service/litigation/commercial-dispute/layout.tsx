import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Dispute Strategy | Address Complex Business Conflicts',
  description: 'Develop strategic plans to address complex commercial disputes. Protect your business with our expert legal strategies in India and globally.',
  keywords: 'commercial dispute strategy, complex business disputes, legal strategies for disputes, commercial conflict resolution'
};

export default function CommercialDisputeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
