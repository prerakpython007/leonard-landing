import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equity Structuring for Startups | Align Interests with Investors & Employees',
  description: 'Design equity plans to align founder, investor, and employee interests. Protect your startup with our expert equity structuring services in India and globally.',
  keywords: 'equity structuring, startup equity plans, align investor interests, employee equity structuring'
};

export default function EquityStructuringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
