"use client";

import { useEffect, useRef } from "react";
import { useInView, animate, motion } from "framer-motion";

function StatItem({
  target,
  suffix,
  label,
  index,
}: {
  target: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-40px" });

  useEffect(() => {
    if (!numberRef.current) return;
    const node = numberRef.current;

    if (isInView) {
      const controls = animate(1, target, {
        duration: 1.6,
        delay: 0.15 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(val) {
          node.textContent = Math.round(val).toString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, target, index]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col items-center justify-center text-center transition-transform duration-300 transform-gpu hover:scale-105"
    >
      <div className="flex items-baseline font-display text-4xl font-light tracking-tight text-(--color-gold) sm:text-5xl md:text-6xl">
        <span ref={numberRef}>{target}</span>
        <span className="ml-0.5">{suffix}</span>
      </div>
      <span className="mt-3 font-sans text-xs font-medium tracking-[0.2em] text-zinc-300 uppercase">
        {label}
      </span>
    </motion.div>
  );
}

const STATS = [
  { target: 15, suffix: "+", label: "Years of Experience" },
  { target: 10, suffix: "K+", label: "Happy Clients" },
  { target: 35, suffix: "+", label: "Certified Experts" },
  { target: 12, suffix: "+", label: "Luxury Suites" },
];

export default function Counters() {
  return (
    <div className="grid w-full max-w-5xl grid-cols-2 gap-8 sm:gap-12 md:grid-cols-4">
      {STATS.map((stat, idx) => (
        <StatItem
          key={stat.label}
          target={stat.target}
          suffix={stat.suffix}
          label={stat.label}
          index={idx}
        />
      ))}
    </div>
  );
}
