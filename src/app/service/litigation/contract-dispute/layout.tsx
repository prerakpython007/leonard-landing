import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contract Dispute Resolution | Handle Breaches with Precision',
  description: 'Handle breaches of contract with precise legal interventions. Resolve contract disputes efficiently with our expert services in India and globally.',
  keywords: 'contract dispute resolution, handle contract breaches, legal interventions for contracts, business contract disputes'
};

export default function ContractDisputeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
