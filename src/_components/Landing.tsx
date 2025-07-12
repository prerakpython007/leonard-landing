"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Image from "next/image";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="relative flex h-[300vh] flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex flex-row space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  // Less interactive logo state
  const [logoPos, setLogoPos] = React.useState({ x: 0, y: 0 });
  const logoRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;
      const rect = logoRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      // Less interactive: only move a little and only if close
      if (dist < 120) {
        setLogoPos({
          x: logoPos.x - dx * 0.03,
          y: logoPos.y - dy * 0.03,
        });
      } else {
        setLogoPos({
          x: logoPos.x * 0.96,
          y: logoPos.y * 0.96,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
    // eslint-disable-next-line
  }, [logoPos]);

  return (
    <div className="relative top-0 left-0 mx-auto w-full max-w-7xl px-4 py-20 md:py-24">
      <div className="flex flex-col md:flex-row md:gap-x-20 gap-y-10 items-center justify-center">
        <div
          ref={logoRef}
          style={{
            transform: `translate3d(${logoPos.x}px,${logoPos.y}px,0)`,
            transition: "box-shadow 0.3s",
          }}
          className="flex items-center justify-center relative"
        >
          {/* New blob shape in the background */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: 260,
              height: 260,
              zIndex: 1,
              filter: "blur(2px)",
              background:
                "radial-gradient(ellipse 60% 40% at 60% 40%, rgba(0,0,0,0.10) 60%, transparent 100%)",
              borderRadius: "40% 60% 70% 30% / 30% 40% 60% 70%",
              animation: "blobMorphAlt 10s ease-in-out infinite alternate",
            }}
          />
          <style>
            {`
              @keyframes blobMorphAlt {
                0% { border-radius: 40% 60% 70% 30% / 30% 40% 60% 70%; }
                50% { border-radius: 60% 40% 30% 70% / 60% 30% 40% 70%; }
                100% { border-radius: 40% 60% 70% 30% / 30% 40% 60% 70%; }
              }
            `}
          </style>
          <div className="relative flex items-center justify-center w-[220px] h-[220px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] rounded-[60%_40%_55%_45%/55%_60%_40%_45%] bg-gradient-to-br from-black/10 to-transparent shadow-xl z-10">
            <Image
              src="/lion-logo-face.png"
              height={220}
              width={220}
              alt="logo"
              className="object-contain"
              style={{ width: "110%", height: "110%" }}
              priority
            />
          </div>
        </div>
        <div className="flex-1 py-6 md:py-10 md:pl-10 text-center md:text-left">
          <h1 className="text-2xl font-bold md:text-5xl lg:text-7xl dark:text-black leading-tight">
            Welcome to Leonard Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-xl dark:text-black">
            <span
              className="font-bold text-3xl md:text-4xl lg:text-5xl"
              style={{
                color: "#000000",
                textShadow: "0 0 16px #fff, 0 0 32px #fff, 0 0 48px #fff",
                filter: "brightness(1.5)",
              }}
            >
              IPR
            </span>
            <span className="ml-2">is our</span>
            <br className="hidden md:block" />
            <span className="ml-2">game</span>
            <br />
            <span className="block mt-4 text-lg md:text-xl text-[#393E46]">
              Your Premier Legal Partners
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative h-96 w-[30rem] shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 h-full w-full object-cover object-left-top"
          alt={product.title}
        />
      </a>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-80"></div>
      <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  );
};
