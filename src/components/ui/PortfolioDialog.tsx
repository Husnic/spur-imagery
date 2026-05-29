"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface PortfolioItem {
  src: string;
  alt: string;
}

interface PortfolioDialogProps {
  items: PortfolioItem[];
  currentIndex: number;
  category: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function isVideoFile(src: string) {
  return /\.(mp4|webm|mov|ogg)$/i.test(src);
}

export default function PortfolioDialog({
  items,
  currentIndex,
  category,
  onClose,
  onPrev,
  onNext,
}: PortfolioDialogProps) {
  const current = items[currentIndex];
  const isVideo = isVideoFile(current.src);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#502A2A] flex-shrink-0">
        <span className="font-clash text-white text-lg font-normal">Portfolio Viewer</span>
        <button
          onClick={onClose}
          className="text-white text-2xl leading-none hover:text-[#D35400] transition-colors"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden px-16 py-6">
        {/* Prev */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#502A2A] hover:bg-[#D35400] text-white flex items-center justify-center transition-colors duration-200 z-10"
          aria-label="Previous"
        >
          ←
        </button>

        {/* Media */}
        <div className="relative max-h-full max-w-2xl w-full flex items-center justify-center">
          {isVideo ? (
            <video
              key={current.src}
              src={current.src}
              controls
              autoPlay
              className="max-h-[70vh] max-w-full object-contain"
            />
          ) : (
            <div className="relative w-full" style={{ maxHeight: "70vh" }}>
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                width={800}
                height={1000}
                className="object-contain max-h-[70vh] w-auto mx-auto"
                style={{ maxHeight: "70vh" }}
              />
              <span className="absolute bottom-3 left-0 right-0 text-center font-clash text-white/80 text-xs tracking-widest">
                SPUR IMAGERY
              </span>
            </div>
          )}
        </div>

        {/* Next */}
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#D35400] hover:bg-[#502A2A] text-white flex items-center justify-center transition-colors duration-200 z-10"
          aria-label="Next"
        >
          →
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-4 flex-shrink-0">
        <span className="bg-[#D35400] text-white font-clash text-sm px-4 py-2 rounded-sm">
          {category}
        </span>
        <span className="text-white/60 font-clash text-sm">
          {currentIndex + 1}/{items.length}
        </span>
      </div>
    </div>
  );
}
