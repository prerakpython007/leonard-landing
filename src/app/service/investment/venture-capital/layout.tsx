import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venture Capital Advisory Services | Navigate VC Funding with Confidence',
  description: 'Navigate venture capital funding rounds with expert legal guidance on terms and negotiations. Secure VC investment for your startup in India and globally.',
  keywords: 'venture capital advisory, VC funding legal guidance, startup VC negotiations, venture capital investment support'
};

export default function VentureCapitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
