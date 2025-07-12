"use client";
import { MaskContainer } from "./svg-mask-effect";

export function About() {
  return (
    <div className="flex h-[52rem] w-full flex-col items-center justify-center overflow-hidden pt-4">
      <h2 className="mt-2 mb-8 w-full text-center text-3xl font-bold text-black md:text-4xl ">
        About us
      </h2>
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            Leonard Corporate Solutions Pvt. Ltd. is a top-tier legal firm based
            in Mumbai, Maharashtra, specializing exclusively in Intellectual
            Property Rights (IPR), Corporate Law, and Taxation. With over a
            decade of legal excellence, we have earned a reputation as one of
            India’s most trusted names in the field of IP law and business legal
            advisory.
          </p>
        }
        className="h-[52rem] w-full max-w-6xl rounded-md text-white dark:text-black"
      >
        We help innovators, creators, and companies protect and grow their{" "}
        <span className="text-blue-500">intellectual property </span> and tech
        assets. From
        <span className="text-blue-500"> trademark </span>and
        <span className="text-blue-500"> patent protection </span> to corporate
        legal compliance, we provide end-to-end legal solutions tailored for
        startups, domestic businesses, and global enterprises.
      </MaskContainer>
    </div>
  );
}
