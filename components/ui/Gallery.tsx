"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems, type GalleryItem } from "./gallery-data";
import Masonry, { MasonryItem } from "./Masonry";
import { getAssetPath, WHATSAPP_LINK } from "@/lib/constants";
import {
  Sparkles,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null,
  );

  const categories = useMemo(
    () => [
      { id: "all", label: "All Photos" },
      { id: "suites", label: "Therapy Suites" },
      { id: "ambience", label: "Reception & Lounge" },
      { id: "amenities", label: "Luxury Amenities" },
      { id: "exterior", label: "Spa Exterior" },
    ],
    [],
  );

  // Filter gallery items by category
  const filteredGalleryItems = useMemo(() => {
    if (activeCategory === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Map galleryItems to React Bits Masonry items with accurate height ratios
  const masonryItems: MasonryItem[] = useMemo(() => {
    return filteredGalleryItems.map((item) => ({
      ...item,
      img: getAssetPath(item.image),
      height: item.height || 480,
    }));
  }, [filteredGalleryItems]);

  const selectedItem =
    selectedItemIndex !== null
      ? filteredGalleryItems[selectedItemIndex] || null
      : null;

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setSelectedItemIndex((prev) =>
        prev !== null ? (prev + 1) % filteredGalleryItems.length : null,
      );
    },
    [filteredGalleryItems.length],
  );

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      setSelectedItemIndex((prev) =>
        prev !== null
          ? (prev - 1 + filteredGalleryItems.length) %
            filteredGalleryItems.length
          : null,
      );
    },
    [filteredGalleryItems.length],
  );

  const handleItemClick = useCallback((_item: MasonryItem, idx: number) => {
    setSelectedItemIndex(idx);
  }, []);

  // Keyboard navigation for modal viewer (Arrow keys & Escape)
  useEffect(() => {
    if (selectedItemIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedItemIndex(null);
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedItemIndex((prev) =>
          prev !== null ? (prev + 1) % filteredGalleryItems.length : null,
        );
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedItemIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredGalleryItems.length) %
              filteredGalleryItems.length
            : null,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItemIndex, filteredGalleryItems.length]);

  const renderOverlay = useCallback(
    (item: MasonryItem) => (
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 sm:p-5 pointer-events-auto">
        <span className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-(--color-gold) mb-1">
          <Sparkles className="w-3 h-3 text-(--color-gold)" />
          {item.categoryLabel}
        </span>
        <h3 className="text-sm sm:text-base font-semibold text-white leading-snug">
          {item.title}
        </h3>
        <p className="text-xs text-white/70 line-clamp-2 mt-1 font-light leading-relaxed">
          {item.description}
        </p>
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center border border-(--color-gold)/30 backdrop-blur-md shadow-lg group-hover:scale-105 transition-transform">
          <Maximize2 className="w-3.5 h-3.5 text-(--color-gold)" />
        </div>
      </div>
    ),
    [],
  );

  return (
    <section
      id="gallery"
      className="relative pt-16 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-black flex flex-col justify-center"
    >
      {/* Ambient Radial Luxury Glows */}
      <div className="absolute top-1/4 right-[5%] w-96 h-96 bg-[rgba(229,169,59,0.04)] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-[rgba(229,169,59,0.03)] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Oversized Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10">
        <span className="text-[12vw] font-display font-bold text-white/[0.015] tracking-[0.25em] uppercase leading-none select-none">
          SANCTUARY
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10 w-full flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto flex flex-col items-center mb-8 lg:mb-12"
        >
          {/* Gold Accent Divider */}
          <div className="h-px w-12 bg-(--color-gold) mb-6" />

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.2] mb-4">
            A Glimpse of Serenity.{" "}
            <span className="text-(--color-gold) italic">
              Inside G3 Luxury.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/60 font-sans text-sm sm:text-base leading-relaxed max-w-2xl font-light">
            Step inside our tranquil wellness oasis. Explore our private therapy suites, couple massage rooms, soothing reception lounge, and premium amenities. Click any photo to enlarge.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 z-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === "all"
                ? galleryItems.length
                : galleryItems.filter((i) => i.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedItemIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? "bg-(--color-gold) text-black border-(--color-gold) font-semibold shadow-[0_0_20px_rgba(229,169,59,0.35)]"
                    : "bg-white/[0.03] text-white/75 hover:text-white hover:bg-white/[0.08] border-white/10"
                }`}
              >
                {isActive && <Sparkles className="w-3 h-3 text-black fill-black" />}
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-black/20 text-black font-bold"
                      : "bg-white/10 text-white/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry Grid */}
        <div className="w-full relative min-h-[31.25rem]">
          <Masonry
            items={masonryItems}
            ease="power3.out"
            duration={0.5}
            stagger={0.03}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.97}
            blurToFocus={true}
            colorShiftOnHover={false}
            onItemClick={handleItemClick}
            renderOverlay={renderOverlay}
          />
        </div>
      </div>

      {/* ------------------ FULLSIZE ENLARGED PHOTO VIEWER MODAL ------------------ */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItemIndex(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />

            {/* Close Button */}
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-zinc-900/90 border border-white/20 text-white hover:border-(--color-gold) hover:text-(--color-gold) transition-all cursor-pointer shadow-2xl"
              aria-label="Close enlarged photo"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Previous Chevron Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-full bg-zinc-900/90 border border-white/20 text-white hover:border-(--color-gold) hover:text-(--color-gold) transition-all cursor-pointer shadow-2xl"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next Chevron Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-2.5 sm:p-3.5 rounded-full bg-zinc-900/90 border border-white/20 text-white hover:border-(--color-gold) hover:text-(--color-gold) transition-all cursor-pointer shadow-2xl"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Enlarged Photo Container */}
            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="relative max-w-5xl max-h-[90vh] z-40 flex flex-col items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl border border-(--color-gold)/30 shadow-[0_25px_80px_rgba(0,0,0,0.95)] bg-zinc-950"
            >
              {/* Image */}
              <div className="relative max-h-[68vh] sm:max-h-[72vh] flex items-center justify-center p-2">
                <img
                  src={getAssetPath(selectedItem.image)}
                  alt={selectedItem.title}
                  className="max-w-full max-h-[65vh] sm:max-h-[70vh] object-contain rounded-xl select-none"
                />
              </div>

              {/* Caption Overlay Bar */}
              <div className="w-full bg-zinc-950/95 border-t border-white/10 px-5 sm:px-7 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div className="flex-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-(--color-gold)">
                      {selectedItem.categoryLabel}
                    </span>
                    <span className="text-white/30">•</span>
                    <span className="text-[11px] text-white/50">
                      Photo {selectedItemIndex !== null ? selectedItemIndex + 1 : 1} of {filteredGalleryItems.length}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-medium text-white leading-tight">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 font-light mt-1 max-w-2xl leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-(--color-gold)/10 border border-(--color-gold)/30 text-(--color-gold)">
                    {selectedItem.tag}
                  </span>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-(--color-gold) text-black hover:bg-(--color-gold-hover) transition-all shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Book Suite</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
