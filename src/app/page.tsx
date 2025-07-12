import Link from "next/link";
import { About } from "~/_components/About";
import { HeroParallax } from "~/_components/Landing";
import Testimonials from "~/_components/Testimonial";
import { ThreeDMarquee } from "~/_components/ticker";
import { StickyScroll } from "~/_components/Experience";
import ContactUsSection from "~/_components/ContactUsSection";

const images = [
    "/img-1.png",
    "/img-2.png",
    "/img-3.png",
    "/img-4.png",
    "/img-5.png",
    "/img-6.png",
    "/img-7.png",
    "/img-8.png",
    "/img-9.png",
    "/img-10.png",
    "/img-11.png",
    "/img-12.png",
    "/img-13.png",
    "/img-14.png",
    "/img-15.png",
    "/img-16.png",
    "/img-1.png",
    "/img-2.png",
    "/img-3.png",
    "/img-4.png",
    "/img-5.png",
    "/img-6.png",
    "/img-7.png",
    "/img-8.png",
    "/img-9.png",
    "/img-10.png",
    "/img-11.png",
    "/img-12.png",
    "/img-13.png",
    "/img-14.png",
    "/img-15.png",
    "/img-16.png",
  ];


  const content = [
  {
		year: '2013',
		title: 'Firm Establishment',
		description: 'Founded in Mumbai with a vision to provide excellent IP services.',
		icon: '🏛️',
	},
	{
		year: '2015',
		title: 'International Expansion',
		description: 'Extended services to international clients across 25+ countries.',
		icon: '🌏',
	},
	{
		year: '2018',
		title: 'Digital Innovation',
		description: 'Implemented AI-driven legal research and documentation systems.',
		icon: '💡',
	},
	{
		year: '2023',
		title: 'Industry Leadership',
		description: 'Recognized as one of India\'s top IP law firms.',
		icon: '⭐',
	},
];

const products = [
  {
    title: "Legal Research Platform",
    link: "https://www.lexisnexis.com/",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Trademark Filing",
    link: "https://www.uspto.gov/",
    thumbnail: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Patent Analytics",
    link: "https://www.patsnap.com/",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "IP Portfolio Management",
    link: "https://www.dennemeyer.com/",
    thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Copyright Registration",
    link: "https://www.copyright.gov/",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Legal Document Automation",
    link: "https://www.clio.com/",
    thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "International IP Filing",
    link: "https://www.wipo.int/",
    thumbnail: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "IP Litigation Support",
    link: "https://www.law360.com/",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Patent Search Tool",
    link: "https://www.google.com/patents",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "IP Valuation Service",
    link: "https://www.ipwatchdog.com/",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Legal CRM",
    link: "https://www.mycase.com/",
    thumbnail: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Contract Review AI",
    link: "https://www.litera.com/",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "IP Monitoring",
    link: "https://www.markmonitor.com/",
    thumbnail: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Legal Billing Software",
    link: "https://www.bill4time.com/",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Trademark Watch",
    link: "https://www.compumark.com/",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#EEEEEE]">
      <HeroParallax products={products} />
      <About />
      <ThreeDMarquee images={images} />
      <Testimonials />
      <StickyScroll content={content} />
      <ContactUsSection />
    </main>
  );
}