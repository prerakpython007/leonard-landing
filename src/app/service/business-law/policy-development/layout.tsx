import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Policy Development | Govern Your Business Effectively',
  description: 'Create compliant corporate policies to govern your business operations effectively. Ensure transparency and compliance with our expert services in India and globally.',
  keywords: 'corporate policy development, business governance policies, compliant business policies, corporate compliance services'
};

export default function PolicyDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
