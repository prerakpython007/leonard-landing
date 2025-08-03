import Link from "next/link";
import About from "~/_components/About";
import Landing from "~/_components/Landing";
import Testimonials from "~/_components/Testimonial";
import Ticker from "~/_components/ticker";
import Experience from "~/_components/Experience";
// import ContactUsSection from "~/_components/ContactUsSection";
import Faq from "~/_components/Faq";

export default function HomePage() {
  return (
    <main className="bg-[#222831]">
      <Landing />
      <About />
      <Faq/>
      <Ticker />
      <Testimonials />
      <Experience />
      {/* <ContactUsSection /> */}
    </main>
  );
}