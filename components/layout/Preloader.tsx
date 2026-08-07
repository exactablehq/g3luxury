"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/constants";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setOpacity(0), 1200);
    const hideTimer = setTimeout(() => setVisible(false), 1900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-(--color-bg-void) transition-opacity duration-700"
      style={{ opacity }}
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <div
          className="absolute inset-0 rounded-full border-2 border-(--color-border) border-t-(--color-gold)"
          style={{ animation: "spin-slow 1s linear infinite" }}
        />
        <Image
          src={getAssetPath("/loader.png")}
          alt="G3 Luxury"
          width={40}
          height={40}
          priority
          className="h-10 w-10 object-contain"
        />
      </div>
    </div>
  );
}
