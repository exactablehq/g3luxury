"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-(--color-bg-void) py-28 md:py-36"
    >
      {/* Soft Ambient Radial Gold Light */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-950/15 blur-[150px] transform-gpu" />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column: Address, Contact & Hours */}
          <div className="flex flex-col gap-10">
            <Reveal>
              <div className="flex flex-col gap-3">
                <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-(--color-gold) uppercase">
                  Find G3 Luxury Massage & Wellness Spa
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-light text-white leading-tight">
                  Location &amp; Hours
                </h2>
                <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed max-w-md mt-2">
                  Immerse yourself in premium restoration. Connect with our
                  concierge to reserve your luxury therapy suite.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col gap-8">
              {/* Address */}
              <Reveal delay={0.1}>
                <div className="flex gap-5 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-(--color-gold)">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
                      Address
                    </span>
                    <a
                      href="https://maps.google.com/?q=G3+Luxury+Massage+%26+Wellness+Spa,+Tin+Batti+Circle,+Nani+Daman"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm sm:text-base text-zinc-200 leading-relaxed max-w-sm selectable-contact hover:text-(--color-gold) transition-colors duration-300 block"
                    >
                      G3 Luxury Massage &amp; Wellness Spa, 10/56, Tin Batti
                      Circle, Near MK Mobile, Nani Daman - 396 210
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Hours */}
              <Reveal delay={0.15}>
                <div className="flex gap-5 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-(--color-gold)">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
                      Opening Hours
                    </span>
                    <span className="font-sans text-sm sm:text-base text-zinc-200">
                      Monday &ndash; Sunday &bull; 10:00 AM &ndash; 10:00 PM
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Phone & Inquiries */}
              <Reveal delay={0.2}>
                <div className="flex gap-5 items-start">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-(--color-gold)">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-[10px] font-semibold tracking-wider text-zinc-500 uppercase">
                      Concierge Support
                    </span>
                    <a
                      href="tel:+918153001114"
                      className="font-sans text-sm sm:text-base text-zinc-200 transition-colors duration-300 hover:text-(--color-gold) selectable-contact"
                    >
                      +91 81530 01114
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Direct WhatsApp Call to Action */}
            <Reveal delay={0.25}>
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "rgba(229, 169, 59, 0.95)",
                  color: "#000000",
                  boxShadow: "0 0 28px rgba(229, 169, 59, 0.4)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="inline-flex w-fit items-center justify-center rounded-full border border-(--color-gold)/40 bg-(--color-gold)/15 px-8 py-4 font-sans text-xs font-bold tracking-widest text-(--color-gold) uppercase backdrop-blur-md transition-all duration-300 cursor-pointer"
              >
                Connect on WhatsApp
              </motion.a>
            </Reveal>
          </div>

          {/* Right Column: Custom Stylized Dark Google Map Embed */}
          <Reveal
            delay={0.2}
            className="relative w-full h-full min-h-[380px] sm:min-h-[460px]"
          >
            {/* Ambient Gold Halo behind the Map */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-amber-900/10 blur-[100px] transform-gpu" />

            <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-white/10 bg-zinc-950/40 shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(229,169,59,0.12)] aspect-square md:aspect-video lg:aspect-[4/3] transform-gpu">
              <iframe
                title="G3 Luxury Spa Location Map"
                src="https://maps.google.com/maps?q=G3%20Luxury%20Massage%20%26%20Wellness%20Spa,%20Tin%20Batti%20Circle,%20Nani%20Daman&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0 rounded-[22px]"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
