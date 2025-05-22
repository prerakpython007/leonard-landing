import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investor Relations Support | Manage Communications & Compliance',
  description: 'Manage investor communications and compliance with our expert legal strategies. Build strong investor relations for your startup in India and globally.',
  keywords: 'investor relations support, startup investor communications, investor compliance, legal strategies for investors'
};

export default function InvestorRelationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
