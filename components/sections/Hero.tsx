"use client";

import { motion, type Variants } from "framer-motion";
import { WHATSAPP_LINK, getAssetPath } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-(--color-bg-void) py-24 sm:py-32"
    >
      {/* Background Video with Soft Atmospheric Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={getAssetPath("/hero-bg.png")}
          className="h-full w-full object-cover opacity-45"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
        >
          <source src={getAssetPath("/hero_bg_video.mp4")} type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-(--color-bg-void)" />
      </div>

      {/* Content Container - Centered on Mobile, Left-aligned on Desktop */}
      <motion.div
        className="container-page relative z-10 flex flex-col items-center text-center pt-16 sm:items-start sm:text-left sm:pt-20"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={item}
          className="max-w-3xl font-display text-4xl font-light leading-[1.12] text-(--color-text-heading) sm:text-6xl sm:leading-[1.06] md:text-7xl"
        >
          Pure Relaxation,
          <br className="hidden sm:inline" />
          <span className="font-normal italic text-(--color-gold)">
            {" "}
            Reimagined.
          </span>
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p
          variants={item}
          className="mt-4 max-w-md font-sans text-xs leading-relaxed text-zinc-300/90 sm:mt-6 sm:max-w-lg sm:text-base md:text-lg"
        >
          Indulge in bespoke wellness experiences designed to restore your
          energy, unwind your body, and embrace lasting tranquillity.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={item}
          className="mt-8 flex w-full max-w-xs flex-col items-stretch gap-3.5 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:gap-5"
        >
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 32px rgba(229,169,59,0.5)",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="inline-flex items-center justify-center rounded-full bg-(--color-gold) px-7 py-3.5 font-sans text-xs font-bold tracking-widest text-black uppercase shadow-lg shadow-(--color-gold)/20 transition-all sm:text-xs"
          >
            Book Appointment
          </motion.a>

          <motion.a
            href="#services"
            className="group relative inline-flex items-center justify-center py-2 font-sans text-xs font-medium tracking-wider text-(--color-text-primary) uppercase sm:py-0 sm:text-sm"
          >
            Explore Services
            <span className="absolute -bottom-1 left-0 h-px w-full bg-(--color-border)" />
            <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-(--color-gold) transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-start justify-center rounded-full p-1.5"
          // className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          {/* <div className="h-1.5 w-1 rounded-full bg-(--color-gold)" /> */}
          <ChevronDown className="w-6 h-6 text-(--color-gold)" />
        </motion.div>
      </motion.div>
    </header>
  );
}
