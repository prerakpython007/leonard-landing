import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SAFE Notes & Convertible Notes | Flexible Fundraising for Startups',
  description: 'Structure SAFE and convertible note agreements for flexible startup fundraising. Raise funds efficiently with our expert legal services in India and globally.',
  keywords: 'SAFE notes, convertible notes, startup fundraising agreements, flexible funding for startups'
};

export default function SafeNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
