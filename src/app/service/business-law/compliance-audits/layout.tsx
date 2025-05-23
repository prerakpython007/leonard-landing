import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regulatory Compliance Audits | Ensure Your Business Meets Legal Standards',
  description: 'Conduct thorough regulatory compliance audits to ensure your business meets all legal requirements. Expert services for businesses in India and globally.',
  keywords: 'regulatory compliance audits, business compliance audits, ensure legal compliance, compliance audit services'
};

export default function ComplianceAuditsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
