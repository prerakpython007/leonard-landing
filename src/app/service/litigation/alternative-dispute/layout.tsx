import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alternative Dispute Resolution | Efficient Conflict Resolution',
  description: 'Resolve business disputes efficiently through mediation and arbitration. Our alternative dispute resolution services save time and costs in India and globally.',
  keywords: 'alternative dispute resolution, mediation arbitration, efficient dispute resolution, business conflict resolution'
};

export default function AlternativeDisputeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
