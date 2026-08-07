"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof motion.a> & { variant?: "solid" | "outline" };

export default function GoldButton({ variant = "solid", className = "", ...props }: Props) {
  const base =
    "rounded-(--radius-pill) px-8 py-3.5 font-sans text-sm font-semibold tracking-(--tracking-label) uppercase";
  const styles =
    variant === "solid"
      ? "bg-(--color-gold) text-black"
      : "border border-(--color-gold) text-(--color-gold) hover:bg-(--color-gold) hover:text-black transition-colors";

  return (
    <motion.a
      whileHover={{
        scale: 1.04,
        boxShadow:
          variant === "solid" ? "0 0 32px rgba(229,169,59,0.45)" : undefined,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`${base} ${styles} ${className}`}
      {...props}
    />
  );
}
