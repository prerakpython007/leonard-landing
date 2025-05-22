import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Angel Investment Agreements | Secure Funding for Your Startup',
  description: 'Draft and review angel investment agreements to secure funding for your startup. Protect your interests with our expert legal services in India and globally.',
  keywords: 'angel investment agreements, startup angel funding, draft angel agreements, secure startup funding'
};

export default function AngelInvestmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
