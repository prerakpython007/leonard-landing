import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contract Management Services | Secure Your Business Transactions',
  description: 'Draft, review, and manage contracts with our expert services. Secure your business transactions and minimize risks in India and globally.',
  keywords: 'contract management, draft business contracts, review contracts, secure business transactions'
};

export default function ContractManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
