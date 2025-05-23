import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Law & Compliance Services | Ensure Legal Security for Your Business',
  description: 'Expert business law and compliance services, including regulatory audits, contract management, risk assessment, data protection compliance, and dispute resolution. Secure your business today!',
};

export default function BusinessLawLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
