"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_LINK, getAssetPath } from "@/lib/constants";

const LINKS = [
  { href: "about", label: "About Us" },
  // { href: "why-choose-us", label: "Why Choose Us" },
  { href: "services", label: "Services" },
  { href: "location", label: "Location" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const trackedIds = ["hero", "about", "why-choose-us", "services", "location"];
      const headerOffset = 160;
      let current = "hero";
      for (const id of trackedIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset && rect.bottom > 80) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = menuOpen ? "hidden" : "initial";
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offsetPosition =
        el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4 sm:px-6">
      <nav
        className={`relative flex w-full max-w-5xl items-center justify-between rounded-full transition-all duration-500 px-6 py-4 sm:px-8 sm:py-4.5 transform-gpu ${
          scrolled
            ? "bg-black/50 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "bg-transparent shadow-none backdrop-blur-none"
        }`}
      >
        {/* Left: Brand Logo Container */}
        <div className="flex flex-1 basis-0 items-center justify-start">
          <motion.a
            href="/#hero"
            onClick={(e) => {
              // e.preventDefault();
              scrollToSection("hero");
            }}
            aria-label="G3 Luxury Home"
            whileHover={{ scale: 1.05, filter: "brightness(1.15)" }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex shrink-0 items-center cursor-pointer"
          >
            <Image
              src={getAssetPath("/g3wordmark.png")}
              alt="G3 Luxury"
              width={180}
              height={44}
              priority
              unoptimized
              className="h-8 w-auto object-contain sm:h-10 md:h-11"
              style={{ width: "auto" }}
            />
          </motion.a>
        </div>

        {/* Center: Desktop Nav Links (strictly centered) */}
        <ul className="hidden shrink-0 items-center justify-center gap-7 lg:flex">
          {LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href}>
                <a
                  href={`#${link.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`group relative font-sans text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-(--color-gold)"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activePillDot"
                      className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-(--color-gold) shadow-[0_0_8px_rgba(229,169,59,0.8)]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: CTA & Mobile Toggle Container */}
        <div className="flex flex-1 basis-0 items-center justify-end gap-3">
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(229, 169, 59, 0.95)",
              color: "#000000",
              boxShadow: "0 0 24px rgba(229, 169, 59, 0.45)",
            }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="hidden items-center justify-center rounded-full border border-(--color-gold)/40 bg-(--color-gold)/15 px-6 py-2.5 sm:py-3 font-sans text-xs font-semibold tracking-wider text-(--color-gold) uppercase backdrop-blur-sm transition-colors duration-300 sm:inline-flex"
          >
            Reserve
          </motion.a>

          {/* Mobile Menu Toggle Button (Rotating Down Chevron) */}
          <button
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 active:scale-95 lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ease-out ${
                menuOpen ? "rotate-180 text-(--color-gold)" : "text-white"
              }`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Glass Card */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
              className="absolute top-full left-0 right-0 z-40 mt-3 overflow-hidden rounded-3xl bg-black/80 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-3xl lg:hidden"
            >
              <ul className="flex flex-col gap-5">
                {LINKS.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a
                      href={`#${link.href}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={`flex items-center justify-between font-display text-xl font-medium transition-colors ${
                        activeSection === link.href
                          ? "text-(--color-gold)"
                          : "text-zinc-200 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {activeSection === link.href && (
                        <span className="h-1.5 w-1.5 rounded-full bg-(--color-gold)" />
                      )}
                    </a>
                  </motion.li>
                ))}
                <div className="pt-2">
                  <motion.a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="block rounded-full border border-(--color-gold)/40 bg-(--color-gold)/15 py-3.5 text-center font-sans text-xs font-semibold tracking-wider text-(--color-gold) uppercase transition-colors hover:bg-(--color-gold) hover:text-black"
                  >
                    Reserve
                  </motion.a>
                </div>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
