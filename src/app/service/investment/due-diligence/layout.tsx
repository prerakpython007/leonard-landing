import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Due Diligence Support for Startups | Prepare for Investor Funding',
  description: 'Prepare for investor due diligence with our comprehensive legal documentation services. Ensure a smooth funding process for your startup in India and globally.',
  keywords: 'due diligence support, startup due diligence, investor due diligence preparation, legal documentation for funding'
};

export default function DueDiligenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
