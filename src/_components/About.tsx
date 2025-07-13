"use client";
import { MaskContainer } from "./svg-mask-effect";
import { MacbookScroll } from "./macbook-scroll";

export function About() {
  return (
    <div className="flex w-full flex-col  items-center justify-center overflow-hidden pt-2 pb-0">
      <h2 className="pt-10  w-full text-center text-3xl font-bold bg-[#0b0b0a] text-white md:text-4xl">
        About us
      </h2>

      {/* Mask Reveal Section */}
      <div className="bg-[#0b0b0a] w-full">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl  font-bold text-slate-800 dark:text-[#c0c0c0]">
            Leonard Corporate Solutions Pvt. Ltd. is a top-tier legal firm based
            in Mumbai, Maharashtra, specializing exclusively in <span className="text-[#50bfff]"> Intellectual
            Property Rights (IPR)</span>, Corporate Law, and Taxation. With over a
            decade of legal excellence, we have earned a reputation as one of
            India’s most trusted names in the field of IP law and business legal
            advisory.
          </p>
        }
        className="h-[52rem] w-full rounded-md text-white dark:text-black"
      >
        <p>
          We help innovators, creators, and companies protect and grow their{" "}
          <span className="text-blue-500">intellectual property</span> and tech
          assets. From
          <span className="text-blue-500"> trademark </span> and
          <span className="text-blue-500"> patent protection </span> to
          corporate legal compliance, we provide end-to-end legal solutions
          tailored for startups, domestic businesses, and global enterprises.
        </p>
      </MaskContainer>
      </div>

      {/* ✅ MacbookScroll Section BELOW the MaskContainer */}
      <div className="mt-16 w-full max-w-7xl px-4">
        <MacbookScrollDemo />
      </div>
    </div>
  );
}

// ✅ Badge used inside MacbookScroll
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Your SVG paths here */}
      <path
        d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
        fill="#00AA45"
      />
      {/* ... rest of the paths */}
    </svg>
  );
};

// ✅ MacbookScroll Demo Component
function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full rounded-xl">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        // badge={
        //   <a href="https://peerlist.io/manuarora">
        //     <Badge className="h-10 w-10 transform -rotate-12" />
        //   </a>
        // }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}
