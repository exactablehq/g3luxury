"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES, type ServiceItem } from "@/data/services";
import { getAssetPath } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceModal from "./ServiceModal";

export default function Services() {
  const [active, setActive] = useState<ServiceItem | null>(null);

  return (
    <section
      id="services"
      className="border-t border-(--color-border) bg-(--color-bg-void) py-28 md:py-36"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading title="Our Signature Services">
            Choose from our selection of premium wellness treatments. Each
            session is tailored specifically to your body&rsquo;s restorative
            requirements.
          </SectionHeading>
        </Reveal>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((srv, idx) => (
            <Reveal key={srv.id} delay={(idx % 3) * 0.08}>
              <motion.button
                onClick={() => setActive(srv)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex w-full flex-col overflow-hidden rounded-(--radius-md) border border-(--color-border) bg-(--color-bg-panel) text-left transition-[border-color,box-shadow] duration-300 hover:border-(--color-gold) hover:shadow-[0_20px_60px_-15px_rgba(229,169,59,0.35)]"
              >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={getAssetPath(srv.image)}
                  alt={srv.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {srv.price && (
                  <span className="absolute top-4 right-4 rounded-(--radius-pill) bg-black/70 px-3 py-1 font-sans text-xs font-semibold text-(--color-gold)">
                    {srv.price}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-display text-lg font-medium text-(--color-text-heading)">
                  {srv.title}
                </h3>
                <p className="line-clamp-3 font-sans text-sm leading-relaxed text-(--color-text-muted)">
                  {srv.shortDescription || srv.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4">
                  {srv.prices ? (
                    <div className="flex gap-3">
                      {srv.prices.map((p) => (
                        <span
                          key={p.time}
                          className="font-sans text-xs text-(--color-text-faint)"
                        >
                          {p.price}
                          <span className="ml-1">{p.time}</span>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="font-sans text-xs text-(--color-text-faint)">
                      {srv.time}
                    </span>
                  )}
                  <span className="flex items-center gap-1 font-sans text-xs font-semibold tracking-(--tracking-label) text-(--color-gold) uppercase">
                    Learn More
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <ServiceModal service={active} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
