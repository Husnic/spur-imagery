"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import PortfolioCard from "@/components/ui/PortfolioCard";
import PortfolioDialog from "@/components/ui/PortfolioDialog";

const ITEMS_PER_PAGE = 6;

const categories = [
  {
    label: "Portrait Shoots",
    slug: "portrait",
    items: [
      { src: "/images/portfolio/portrait/cover.png", alt: "Portrait shoot" },
      { src: "/images/portfolio/portrait/image-2.png", alt: "Portrait shoot" },
      { src: "/images/portfolio/portrait/image-3.png", alt: "Portrait shoot" },
    ],
  },
  {
    label: "Drone Shoots",
    slug: "drone",
    items: [
      { src: "/images/portfolio/drone/cover.png", alt: "Drone shoot" },
      { src: "/images/portfolio/drone/image-2.png", alt: "Drone shoot" },
      { src: "/images/portfolio/drone/image-3.png", alt: "Drone shoot" },
    ],
  },
  {
    label: "Corporate & Dinner Events",
    slug: "corporate",
    items: [
      { src: "/images/portfolio/corporate/cover.png", alt: "Corporate event" },
      { src: "/images/portfolio/corporate/image-2.png", alt: "Corporate event" },
      { src: "/images/portfolio/corporate/image-3.png", alt: "Corporate event" },
    ],
  },
  {
    label: "Pre-wedding & Wedding Coverage",
    slug: "wedding",
    items: [
      { src: "/images/portfolio/wedding/cover.png", alt: "Wedding coverage" },
      { src: "/images/portfolio/wedding/image-2.png", alt: "Wedding coverage" },
      { src: "/images/portfolio/wedding/image-3.png", alt: "Wedding coverage" },
    ],
  },
];

export default function PortfolioSection() {
  const [activeCat, setActiveCat] = useState(0);
  const [page, setPage] = useState(0);
  const [dialogIndex, setDialogIndex] = useState<number | null>(null);

  const cat = categories[activeCat];
  const totalPages = Math.ceil(cat.items.length / ITEMS_PER_PAGE);
  const visibleItems = cat.items.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const handleCatChange = (i: number) => {
    setActiveCat(i);
    setPage(0);
    setDialogIndex(null);
  };

  const openDialog = (localIdx: number) => {
    setDialogIndex(page * ITEMS_PER_PAGE + localIdx);
  };

  const closeDialog = () => setDialogIndex(null);

  const prevDialog = () =>
    setDialogIndex((i) => (i !== null ? (i - 1 + cat.items.length) % cat.items.length : 0));

  const nextDialog = () =>
    setDialogIndex((i) => (i !== null ? (i + 1) % cat.items.length : 0));

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div>
            <SectionLabel text="Portfolio" />
            <h2 className="font-clash font-bold text-[#171717] text-4xl md:text-5xl mt-2 leading-tight max-w-xs">
              Frames From Our Journey.
            </h2>
          </div>

          {/* Desktop arrows */}
          <div className="hidden md:flex items-center gap-3 mt-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-[#D35400]/40 text-[#D35400] flex items-center justify-center hover:bg-[#D35400] hover:text-white transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ←
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="w-10 h-10 rounded-full bg-[#D35400] text-white flex items-center justify-center hover:bg-[#502A2A] transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
        </div>

        {/* Body: sidebar + grid */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile: horizontal tabs */}
          <div className="flex md:hidden gap-3 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
            {categories.map((c, i) => (
              <button
                key={c.slug}
                onClick={() => handleCatChange(i)}
                className={`flex-shrink-0 px-4 py-2 rounded-sm font-clash text-sm transition-colors duration-200 ${
                  activeCat === i
                    ? "bg-[#D35400] text-white"
                    : "text-[#171717] hover:text-[#D35400]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Desktop: vertical sidebar */}
          <div className="hidden md:flex flex-col gap-6 min-w-[200px]">
            {categories.map((c, i) => (
              <button
                key={c.slug}
                onClick={() => handleCatChange(i)}
                className={`text-left font-clash text-base transition-colors duration-200 ${
                  activeCat === i
                    ? "text-[#D35400] font-semibold"
                    : "text-[#171717] hover:text-[#D35400]"
                }`}
              >
                {activeCat === i ? (
                  <span className="inline-block bg-[#D35400] text-white px-3 py-1 rounded-sm text-sm">
                    {c.label}
                  </span>
                ) : (
                  c.label
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {visibleItems.map((item, i) => (
              <PortfolioCard
                key={item.src}
                src={item.src}
                alt={item.alt}
                onView={() => openDialog(i)}
              />
            ))}
          </div>
        </div>

        {/* Mobile pagination arrows */}
        <div className="flex md:hidden items-center justify-end gap-3 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-[#D35400]/40 text-[#D35400] flex items-center justify-center hover:bg-[#D35400] hover:text-white transition-colors duration-200 disabled:opacity-30"
          >
            ←
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            className="w-10 h-10 rounded-full bg-[#D35400] text-white flex items-center justify-center hover:bg-[#502A2A] transition-colors duration-200 disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>

      {/* Dialog */}
      {dialogIndex !== null && (
        <PortfolioDialog
          items={cat.items}
          currentIndex={dialogIndex}
          category={cat.label}
          onClose={closeDialog}
          onPrev={prevDialog}
          onNext={nextDialog}
        />
      )}
    </section>
  );
}
