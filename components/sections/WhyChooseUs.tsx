"use client";

import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/data/why-choose-us";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

// Duplicate array for seamless infinite looping
const MARQUEE_ITEMS = [...WHY_CHOOSE_US, ...WHY_CHOOSE_US];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-(--color-bg-void) py-28 md:py-36"
    >
      {/* Soft Ambient Radial Light */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[550px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-950/15 blur-[160px] transform-gpu" />

      <div className="container-page relative z-10 text-center">
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading title="The Art of True Wellness">
            We merge ancestral healing wisdom with premium modern luxury,
            ensuring every second spent with us is profoundly restoring.
          </SectionHeading>
        </Reveal>
      </div>

      {/* Full-Width Infinite Marquee Track */}
      <div className="relative mt-20 w-full overflow-hidden">
        {/* Deep Soft Fade Gradients on Left and Right Borders */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-(--color-bg-void) via-(--color-bg-void)/80 to-transparent sm:w-64" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-(--color-bg-void) via-(--color-bg-void)/80 to-transparent sm:w-64" />

        {/* Animated Marquee Inner */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-8 pr-8 transform-gpu will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {MARQUEE_ITEMS.map((card, idx) => (
              <div
                key={`${card.title}-${idx}`}
                className="group relative flex w-[310px] shrink-0 flex-col justify-between gap-6 rounded-3xl p-8 transition-all duration-500 hover:bg-white/[0.03] sm:w-[380px] sm:p-10"
              >
                {/* Frameless Soft Ambient Radial Glow Spotlight on Hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,_rgba(229,169,59,0.12)_0%,_transparent_75%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col gap-6">
                  {/* Frameless Floating Gold Icon */}
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center text-(--color-gold) transition-transform duration-500 transform-gpu group-hover:scale-110">
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-(--color-gold)/20 blur-md opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                    <svg
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="relative z-10 drop-shadow-[0_0_12px_rgba(229,169,59,0.5)]"
                    >
                      <path
                        d={card.icon}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h3 className="font-display text-2xl font-light text-white transition-colors duration-300 group-hover:text-(--color-gold)">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200 sm:text-sm">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
