import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Risk Assessment & Mitigation | Protect Your Business Operations',
  description: 'Identify and address legal risks with our expert risk assessment and mitigation services. Protect your business operations in India and globally.',
  keywords: 'risk assessment mitigation, legal risk assessment, protect business operations, business risk management'
};

export default function RiskAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
