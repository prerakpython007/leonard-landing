import Link from "next/link";
import About from "~/_components/About";
import Landing from "~/_components/Landing";
import Testimonials from "~/_components/Testimonial";
import Ticker from "~/_components/ticker";
import Experience from "~/_components/Experience";

export default function HomePage() {
  return (
    <main className="bg-[#222831]">
      <Landing />
      <About />
      <Ticker />
      <Testimonials />
      <Experience />
    </main>
  );
}