import Link from "next/link";
import About from "~/_components/About";
import Landing from "~/_components/Landing";
import Nav from "~/_components/Nav";
import Testimonials from "~/_components/Testimonial";
import Ticker from "~/_components/ticker";
import UpperNav from "~/_components/UpperNav";
import Experience from "~/_components/Experience";
import Footer from "~/_components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#222831]">
      <UpperNav/>
      <Nav/>
      <Landing/>
      <About/>
      <Ticker/>
      <Testimonials/>
      <Experience/>
      <Footer/>
    </main>
  );
}
