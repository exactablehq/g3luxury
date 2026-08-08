"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHATSAPP_LINK, getAssetPath } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Counters from "./Counters";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-(--color-bg-void) py-28 md:py-36"
    >
      {/* Static Ambient Gold Glow */}
      <div
        className="pointer-events-none absolute -top-10 left-1/2 z-20 h-[550px] w-[700px] -translate-x-1/2 rounded-full opacity-50 blur-[140px] mix-blend-screen transform-gpu"
        style={{
          background:
            "radial-gradient(circle, rgba(229, 169, 59, 0.4) 0%, rgba(180, 83, 9, 0.2) 50%, rgba(0, 0, 0, 0) 75%)",
        }}
      />

      <div className="container-page relative z-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading title="Reclaiming Silence in a Modern World">
            G3 Luxury was founded on a simple philosophy: silence is not the
            absence of sound, but the presence of ultimate clarity. Our
            sanctuary represents a custom-designed haven where time slows down.
            We blend the ancient thermal techniques of Eastern Europe, the
            clinical precision of modern dermal medicine, and the deep
            relaxation of Southeast Asia.
          </SectionHeading>
        </Reveal>

        {/* Soft Flowy Banner Image & Floating Counters */}
        <div className="relative mt-20 flex flex-col items-center">
          {/* Ambient Image Container with Soft Gradient Edge Masks */}
          <div className="relative h-[26rem] w-full overflow-hidden sm:h-[34rem]">
            <Image
              src={getAssetPath("/about_us.png")}
              alt="G3 Luxury interior"
              fill
              sizes="100vw"
              className="object-cover opacity-80"
            />
            {/* Soft Edge Blending Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-(--color-bg-void) via-(--color-bg-void)/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-(--color-bg-void) via-transparent to-(--color-bg-void)" />
            <div className="absolute inset-0 bg-gradient-to-r from-(--color-bg-void)/80 via-transparent to-(--color-bg-void)/80" />
          </div>

          {/* Organic Flowing Stats Overlay */}
          <div className="relative z-10 -mt-24 flex w-full flex-col items-center gap-10 px-4 sm:-mt-32 sm:gap-12">
            <Counters />
          </div>
        </div>
      </div>
    </section>
  );
}
