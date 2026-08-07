"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, animate } from "framer-motion";
import { SERVICES, type ServiceItem } from "@/data/services";
import { getAssetPath } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceModal from "./ServiceModal";

const MASONRY_CLASSES = [
  "col-span-1 sm:col-span-2 sm:row-span-2 min-h-[320px] sm:min-h-[520px]", // 0: Grand Featured Hero
  "col-span-1 sm:col-span-1 sm:row-span-2 min-h-[320px] sm:min-h-[520px]", // 1: Tall Vertical Accent
  "col-span-1 sm:col-span-1 min-h-[300px] sm:min-h-[380px]",             // 2: Spacious Accent
  "col-span-1 sm:col-span-2 min-h-[300px] sm:min-h-[380px]",             // 3: Wide Horizontal Feature
  "col-span-1 sm:col-span-2 min-h-[300px] sm:min-h-[380px]",             // 4: Wide Feature
  "col-span-1 sm:col-span-1 min-h-[300px] sm:min-h-[380px]",             // 5: Spacious Accent
];

export default function Services() {
  const [active, setActive] = useState<ServiceItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  const initialServices = SERVICES.slice(0, 6);
  const extraServices = SERVICES.slice(6);

  const handleToggleMenu = () => {
    setShowAll(true);
  };

  const renderCardContent = (srv: ServiceItem) => (
    <motion.button
      onClick={() => setActive(srv)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-3xl bg-white/[0.02] text-left shadow-2xl transition-all duration-500 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(229,169,59,0.15)] transform-gpu cursor-pointer p-6 sm:p-8"
    >
      {/* Full-Bleed Background Image */}
      <Image
        src={getAssetPath(srv.image)}
        alt={srv.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-108 transform-gpu"
      />

      {/* Dark Atmospheric Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-black/20 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Soft Radial Gold Glow Spotlight on Hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,_rgba(229,169,59,0.15)_0%,_transparent_75%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Top-Right Price Tag */}
      {srv.price && (
        <span className="absolute top-5 right-5 z-10 rounded-full border border-white/10 bg-black/50 px-3.5 py-1 font-sans text-xs font-semibold text-(--color-gold) backdrop-blur-md">
          {srv.price}
        </span>
      )}

      {/* Card Content & Action Bar */}
      <div className="relative z-10 flex flex-col gap-3">
        <h3 className="font-display text-2xl font-light text-white transition-colors duration-300 group-hover:text-(--color-gold) sm:text-3xl">
          {srv.title}
        </h3>
        <p className="line-clamp-2 font-sans text-xs leading-relaxed text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200 sm:text-sm">
          {srv.shortDescription || srv.description}
        </p>

        <div className="mt-2 flex items-center justify-between pt-3 border-t border-white/10">
          {srv.prices ? (
            <div className="flex gap-3">
              {srv.prices.map((p) => (
                <span
                  key={p.time}
                  className="font-sans text-xs font-medium text-zinc-300"
                >
                  {p.price}
                  <span className="ml-1 text-zinc-400">{p.time}</span>
                </span>
              ))}
            </div>
          ) : (
            <span className="font-sans text-xs font-medium text-zinc-300">
              {srv.time}
            </span>
          )}

          {/* Frameless Floating Gold Chevron */}
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center text-(--color-gold) transition-transform duration-500 transform-gpu group-hover:scale-110">
            <div className="pointer-events-none absolute inset-0 rounded-full bg-(--color-gold)/20 blur-md opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 drop-shadow-[0_0_12px_rgba(229,169,59,0.5)] transition-transform duration-300 group-hover:translate-x-1"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </div>
    </motion.button>
  );

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-(--color-bg-void) py-28 md:py-36"
    >
      {/* Soft Ambient Radial Gold Light */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-950/15 blur-[160px] transform-gpu" />

      <div className="container-page relative z-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading title="Our Signature Services">
            Choose from our selection of premium wellness treatments. Each
            session is tailored specifically to your body&rsquo;s restorative
            requirements.
          </SectionHeading>
        </Reveal>

        {/* Initial Featured Masonry Collage Grid */}
        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {initialServices.map((srv, idx) => (
            <Reveal
              key={srv.id}
              delay={(idx % 3) * 0.08}
              className={MASONRY_CLASSES[idx % MASONRY_CLASSES.length]}
            >
              {renderCardContent(srv)}
            </Reveal>
          ))}
        </div>

        {/* Animated Extra Services Grid */}
        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div id="extra-services-grid" className="pt-4 sm:pt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
                {extraServices.map((srv, idx) => (
                  <motion.div
                    key={srv.id}
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -24, scale: 0.94 }}
                    transition={{
                      duration: 0.45,
                      delay: (idx % 3) * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={
                      MASONRY_CLASSES[(idx + 6) % MASONRY_CLASSES.length]
                    }
                  >
                    {renderCardContent(srv)}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Frameless Flowy Expand Button */}
        <AnimatePresence>
          {!showAll && (
            <motion.div
              key="services-expand-btn"
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 flex justify-center"
            >
              <motion.button
                onClick={handleToggleMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 font-sans text-xs font-semibold tracking-[0.2em] text-(--color-gold) uppercase cursor-pointer"
              >
                {/* Soft Un-bordered Ambient Gold Light Glow */}
                <div className="pointer-events-none absolute inset-0 rounded-full bg-(--color-gold)/15 blur-xl opacity-60 transition-opacity duration-500 group-hover:opacity-100 transform-gpu" />

                <span className="relative z-10 drop-shadow-[0_0_12px_rgba(229,169,59,0.5)]">
                  Explore All Services
                </span>

                <div className="relative flex h-8 w-8 items-center justify-center text-(--color-gold)">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="relative z-10 drop-shadow-[0_0_12px_rgba(229,169,59,0.5)] transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* AnimatePresence for Smooth Modal Exit Animation */}
      <AnimatePresence>
        {active && (
          <ServiceModal
            key={active.id}
            service={active}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
