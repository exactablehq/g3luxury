"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { ServiceItem } from "@/data/services";
import { WHATSAPP_LINK, getAssetPath } from "@/lib/constants";
import GoldButton from "@/components/ui/GoldButton";

export default function ServiceModal({
  service,
  onClose,
}: {
  service: ServiceItem;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          className="relative grid max-h-[85vh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-(--radius-lg) border border-(--color-border) bg-(--color-bg-panel) md:grid-cols-2"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-xl text-white transition-colors hover:bg-(--color-gold) hover:text-black"
          >
            &times;
          </button>

          <div className="relative h-64 w-full md:h-full">
            <Image
              src={getAssetPath(service.image)}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 p-8 md:p-10">
            <h3 className="font-display text-2xl font-medium text-(--color-text-heading)">
              {service.title}
            </h3>
            <p className="font-sans text-sm leading-relaxed whitespace-pre-line text-(--color-text-muted)">
              {service.description}
            </p>

            <div>
              <span className="font-sans text-xs font-semibold tracking-(--tracking-label) text-(--color-text-faint) uppercase">
                Pricing &amp; Duration
              </span>
              {service.prices ? (
                <div className="mt-3 flex flex-wrap gap-4">
                  {service.prices.map((p) => (
                    <div key={p.time} className="flex flex-col">
                      <span className="font-display text-lg text-(--color-gold)">
                        {p.price}
                      </span>
                      <span className="font-sans text-xs text-(--color-text-faint)">
                        {p.time}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-3 flex flex-col">
                  <span className="font-display text-lg text-(--color-gold)">
                    {service.price}
                  </span>
                  <span className="font-sans text-xs text-(--color-text-faint)">
                    {service.time}
                  </span>
                </div>
              )}
            </div>

            <GoldButton
              variant="outline"
              href={WHATSAPP_LINK}
              onClick={onClose}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit !px-6 !py-2.5 !text-xs"
            >
              Book Appointment
            </GoldButton>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
