"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { TIMELINE_STEPS } from "@/data/timeline";
import Reveal from "@/components/ui/Reveal";

function TimelineItem({
  step,
  index,
  progress,
}: {
  step: (typeof TIMELINE_STEPS)[number];
  index: number;
  progress: import("framer-motion").MotionValue<number>;
}) {
  const threshold = (index + 0.5) / TIMELINE_STEPS.length;
  const active = useTransform(progress, (v): number => (v >= threshold ? 1 : 0));
  const scale = useTransform(active, [0, 1], [0.85, 1]);
  const nodeColor = useTransform(active, [0, 1], ["#2a2a2a", "#e5a93b"]);
  const numberColor = useTransform(active, [0, 1], ["#6b6b6b", "#000000"]);

  return (
    <div className="relative flex gap-8 pb-16 last:pb-0">
      <motion.div
        style={{ scale, backgroundColor: nodeColor }}
        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
      >
        <motion.span
          style={{ color: numberColor }}
          className="font-display text-lg font-medium"
        >
          {step.number}
        </motion.span>
      </motion.div>
      <div className="pt-2">
        <h3 className="font-display text-xl font-medium text-(--color-text-heading)">
          {step.title}
        </h3>
        <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-(--color-text-muted)">
          {step.text}
        </p>
      </div>
    </div>
  );
}

export default function WellnessJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });
  const lineHeight = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="border-t border-(--color-border) bg-(--color-bg-void) py-28 md:py-36"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium text-(--color-text-heading) sm:text-4xl md:text-5xl">
            The Wellness Journey
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-(--color-text-muted)">
            From the moment you connect with us to your post-treatment return
            home, we cultivate a seamless, relaxing flow.
          </p>
        </Reveal>

        <div ref={containerRef} className="relative mx-auto mt-20 max-w-xl">
          <div className="absolute top-6 bottom-6 left-6 w-px -translate-x-1/2 bg-(--color-border)">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-(--color-gold)"
            />
          </div>

          {TIMELINE_STEPS.map((step, idx) => (
            <TimelineItem key={step.number} step={step} index={idx} progress={progress} />
          ))}
        </div>
      </div>
    </section>
  );
}
