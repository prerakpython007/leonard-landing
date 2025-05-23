import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Protection Compliance | Meet GDPR, DPDP, and Global Standards',
  description: 'Ensure compliance with GDPR, DPDP, and other data protection regulations. Protect your business with our expert data compliance services in India and globally.',
  keywords: 'data protection compliance, GDPR compliance, DPDP compliance, data privacy regulations'
};

export default function DataProtectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
