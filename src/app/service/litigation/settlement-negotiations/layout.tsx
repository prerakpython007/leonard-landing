import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settlement Negotiations | Avoid Prolonged Litigation',
  description: 'Negotiate favorable settlements to avoid prolonged litigation. Protect your business with our expert settlement negotiation services in India and globally.',
  keywords: 'settlement negotiations, avoid litigation, favorable business settlements, dispute settlement services'
};

export default function SettlementNegotiationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
