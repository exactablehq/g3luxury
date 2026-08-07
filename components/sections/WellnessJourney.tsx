"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TIMELINE_STEPS } from "@/data/timeline";
import Reveal from "@/components/ui/Reveal";

const STEP_HEIGHT = 200; // Expanded step height in pixels for high legibility

function TimelineStepItem({
  step,
  index,
  total,
  scrollYProgress,
}: {
  step: (typeof TIMELINE_STEPS)[number];
  index: number;
  total: number;
  scrollYProgress: any;
}) {
  const stepProgress = index / (total - 1);

  // Range of focus for the active item
  const opacity = useTransform(
    scrollYProgress,
    [stepProgress - 0.22, stepProgress, stepProgress + 0.22],
    [0.18, 1, 0.18]
  );

  const scale = useTransform(
    scrollYProgress,
    [stepProgress - 0.22, stepProgress, stepProgress + 0.22],
    [0.9, 1.05, 0.9]
  );

  const isFocused = useTransform(
    scrollYProgress,
    [stepProgress - 0.1, stepProgress, stepProgress + 0.1],
    [0, 1, 0]
  );

  return (
    <motion.div
      style={{ opacity, scale, height: STEP_HEIGHT }}
      className="relative flex items-center gap-6 sm:gap-10 transition-all duration-500"
    >
      {/* Step Number Circle */}
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-950/90 backdrop-blur-md transform-gpu">
        {/* Soft Ambient Gold Spotlight on active step */}
        <motion.div
          style={{ opacity: isFocused }}
          className="absolute inset-0 rounded-full bg-(--color-gold)/30 blur-lg"
        />
        <span className="relative z-10 font-display text-2xl font-light text-(--color-gold)">
          0{step.number}
        </span>
      </div>

      {/* Step Content */}
      <div className="flex flex-col gap-2.5">
        <h3 className="font-display text-3xl sm:text-4xl font-light text-white leading-tight">
          {step.title}
        </h3>
        <p className="font-sans text-sm sm:text-base leading-relaxed text-zinc-300 max-w-xl">
          {step.text}
        </p>
      </div>
    </motion.div>
  );
}

export default function WellnessJourney() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Mathematically translate the parent container Y position so the active item is perfectly centered
  const totalSteps = TIMELINE_STEPS.length;
  const containerTranslation = useTransform(
    smoothProgress,
    [0, 1],
    [STEP_HEIGHT, STEP_HEIGHT - (totalSteps - 1) * STEP_HEIGHT]
  );

  // Animate the height of the gold progress bar from Step 1 center to Step 6 center
  const progressLineHeight = useTransform(
    smoothProgress,
    [0, 1],
    ["0px", `${(totalSteps - 1) * STEP_HEIGHT}px`]
  );

  return (
    <section
      id="experience"
      ref={targetRef}
      className="relative h-[380vh] bg-(--color-bg-void)"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden py-12">
        {/* Soft Ambient Gold Radial Aura */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[550px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-950/20 blur-[150px] transform-gpu" />

        {/* Section Title & Header */}
        <div className="container-page relative z-20 flex flex-col items-center">
          <Reveal className="flex flex-col items-center text-center mb-8 sm:mb-12">
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-(--color-gold) uppercase">
              The Experience
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-light text-white">
              Your Wellness Journey
            </h2>
            <p className="mt-3 max-w-lg font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
              From initial consultation to sanctuary return, every step is tailored for deep tranquility.
            </p>
          </Reveal>

          {/* Timeline Stage Window - 3 Steps Visible at a Time (1 Spotlighted, 2 Fading Out) */}
          <div className="relative w-full max-w-2xl h-[600px] overflow-hidden px-4 sm:px-8">
            
            {/* Spotlight Gradient Masks overlaying top and bottom 180px of stage (Pure Black for Seamless Blend) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[180px] bg-gradient-to-b from-black via-black/95 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[180px] bg-gradient-to-t from-black via-black/95 to-transparent" />

            {/* Translating Timeline Container */}
            <motion.div
              style={{ y: containerTranslation }}
              className="relative z-10 flex flex-col"
            >
              {/* Timeline Progress Bar Lines (Aligned perfectly with mobile and desktop node centers) */}
              <div className="absolute top-[32px] bottom-[32px] left-[48px] sm:left-[64px] w-[2px] bg-white/10 -translate-x-1/2">
                <motion.div
                  style={{ height: progressLineHeight }}
                  className="w-full bg-(--color-gold) shadow-[0_0_15px_rgba(229,169,59,0.85)]"
                />
              </div>

              {/* Steps List */}
              {TIMELINE_STEPS.map((step, idx) => (
                <TimelineStepItem
                  key={step.number}
                  step={step}
                  index={idx}
                  total={totalSteps}
                  scrollYProgress={smoothProgress}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
