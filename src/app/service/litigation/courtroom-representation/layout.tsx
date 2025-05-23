import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courtroom Representation Services | Defend Your Business Interests',
  description: 'Expert courtroom representation to defend your business interests. Protect your rights with our experienced legal team in India and globally.',
  keywords: 'courtroom representation, legal representation for businesses, defend business interests, litigation services'
};

export default function CourtroomRepresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
