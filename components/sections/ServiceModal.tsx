"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ServiceItem } from "@/data/services";
import { WHATSAPP_LINK, getAssetPath } from "@/lib/constants";

export default function ServiceModal({
  service,
  onClose,
}: {
  service: ServiceItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 backdrop-blur-2xl sm:p-6 md:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-y-auto rounded-[2rem] bg-zinc-950/95 shadow-[0_40px_110px_rgba(0,0,0,0.95)] backdrop-blur-3xl md:grid-cols-2 transform-gpu border border-white/10"
      >
        {/* Un-bordered Internal Ambient Gold Light */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-(--color-gold)/20 blur-3xl transform-gpu" />

        {/* Frameless Floating Gold Cross Close Button with Soft Glow & 180-degree Spring Rotation */}
        <motion.button
          onClick={onClose}
          aria-label="Close modal"
          whileHover={{ rotate: 180, scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group absolute top-5 right-5 z-30 flex h-10 w-10 shrink-0 items-center justify-center text-(--color-gold) transition-transform duration-500 transform-gpu cursor-pointer"
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-(--color-gold)/20 blur-md opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10 drop-shadow-[0_0_12px_rgba(229,169,59,0.6)]"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </motion.button>

        {/* Cover Image Container */}
        <div className="relative h-72 w-full md:h-full">
          <Image
            src={getAssetPath(service.image)}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-950" />
        </div>

        {/* Spacious Modal Details & Action Content */}
        <div className="relative z-10 flex flex-col justify-between gap-8 p-8 sm:p-12 md:p-14">
          <div className="flex flex-col gap-5">
            <h3 className="font-display text-3xl font-light text-white sm:text-4xl md:text-5xl leading-tight">
              {service.title}
            </h3>
            <p className="font-sans text-xs leading-relaxed whitespace-pre-line text-zinc-300 sm:text-sm sm:leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="flex flex-col gap-6 pt-6 border-t border-white/10">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] font-medium tracking-[0.22em] text-zinc-400 uppercase">
                Pricing &amp; Duration
              </span>
              {service.prices ? (
                <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {service.prices.map((p) => (
                    <div
                      key={p.time}
                      className="flex items-center gap-2.5 font-sans text-sm font-normal tracking-wide text-zinc-300 sm:text-base"
                    >
                      <span>{p.time.replace("[ ", "").replace(" ]", "")}</span>
                      <span className="text-zinc-600">&bull;</span>
                      <span className="text-zinc-200">{p.price}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-1 flex items-center gap-2.5 font-sans text-sm font-normal tracking-wide text-zinc-300 sm:text-base">
                  {service.time && (
                    <span>
                      {service.time.replace("[ ", "").replace(" ]", "")}
                    </span>
                  )}
                  {service.time && service.price && (
                    <span className="text-zinc-600">&bull;</span>
                  )}
                  {service.price && (
                    <span className="text-zinc-200">{service.price}</span>
                  )}
                </div>
              )}
            </div>

            {/* Reserve CTA Button */}
            <motion.a
              href={WHATSAPP_LINK}
              onClick={onClose}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(229, 169, 59, 0.95)",
                color: "#000000",
                boxShadow: "0 0 32px rgba(229, 169, 59, 0.45)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="inline-flex w-fit items-center justify-center rounded-full border border-(--color-gold)/40 bg-(--color-gold)/15 px-8 py-3.5 font-sans text-xs font-bold tracking-widest text-(--color-gold) uppercase backdrop-blur-md transition-all duration-300"
            >
              Reserve Session
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
