"use client";

import { motion, useMotionValue } from "framer-motion";
import { usePathname } from "next/navigation";
import { useSpring } from "framer-motion";
import { useRef } from "react";

type Props = {
  showSideTaps: boolean;
  sunOrMoon: "sun" | "moon";
};

const SunMoon = ({ showSideTaps, sunOrMoon }: Props) => {
  const isHomePage = usePathname().length < 1;
  const sunMoonRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={sunMoonRef}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      animate={{
        translateY: [0, 10, 0],
      }}
      transition={{ repeat: showSideTaps ? 0 : Infinity, duration: 3 }}
      className={` ${sunOrMoon} ${
        sunOrMoon === "sun" ? "block dark:hidden" : "hidden dark:block"
      } cursor-pointer z-50 will-change-transform w-10 h-10 ${
        isHomePage && "md:w-12 md:h-12"
      } rounded-full absolute top-0 left-0  `}
    />
  );
};

export default SunMoon;
