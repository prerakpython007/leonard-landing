import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investment & Fundraising Legal Services | Secure Funding for Your Startup',
  description: 'Expert legal services for investment and fundraising, including venture capital advisory, angel investment agreements, SAFE notes, due diligence, and equity structuring. Grow your startup with confidence!'
};

export default function InvestmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
