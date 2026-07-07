"use client";

import { motion, type Variants } from "motion/react";

const LINES = ["Jigar", "Kanakhara"] as const;

// Per-letter staggered entrance: letters rise and clear a soft blur one after
// another, line by line. Clearly visible but not gimmicky, plays once.
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.15 },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: "0.9em", filter: "blur(14px)", rotate: 4 },
  show: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    rotate: 0,
    transition: { duration: 0.62, ease: [0.2, 0.85, 0.25, 1] },
  },
};

export function HeroWordmark() {
  return (
    <motion.h1
      id="home-title"
      className="hero-wordmark"
      aria-label="Jigar Kanakhara"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {LINES.map((line) => (
        <span key={line} className="hero-wordmark-line" aria-hidden="true">
          {line.split("").map((char, index) => (
            <motion.span key={`${line}-${index}`} className="hero-wordmark-char" variants={letter}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
