import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Litigation & Dispute Resolution Services | Protect Your Business Interests',
  description: 'Expert litigation and dispute resolution services, including courtroom representation, pre-litigation notices, alternative dispute resolution, and contract dispute resolution. Resolve business disputes efficiently!'
};

export default function LitigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
