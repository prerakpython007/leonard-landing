import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pre-Litigation Notices | Resolve Disputes Before Court',
  description: 'Draft and manage pre-litigation notices to resolve disputes early. Avoid costly litigation with our expert legal services in India and globally.',
  keywords: 'pre-litigation notices, resolve disputes early, avoid litigation, legal notice drafting'
};

export default function PreLitigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
