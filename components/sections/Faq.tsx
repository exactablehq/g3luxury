"use client";

import { useState } from "react";
import { FAQS } from "@/data/faqs";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="border-t border-(--color-border) bg-(--color-bg-void) py-28 md:py-36"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading title="Frequently Asked Questions">
            Have questions about safety guidelines, booking policies, or
            individual therapies? Read our curated answers below.
          </SectionHeading>
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-(--color-border) border-y border-(--color-border)">
          {FAQS.map((faq, idx) => {
            const open = openIndex === idx;
            return (
              <div key={faq.question}>
                <button
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : idx)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-sans text-base font-medium text-(--color-text-primary)">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 font-display text-2xl text-(--color-gold) transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-400 ease-out"
                  style={{ maxHeight: open ? "300px" : "0px" }}
                >
                  <p className="pb-6 font-sans text-sm leading-relaxed text-(--color-text-muted)">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
