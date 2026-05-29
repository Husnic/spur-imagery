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
    [onClose, onPrev, onNext],
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
    /* Backdrop — click outside closes */
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12"
      style={{ background: "rgba(0,0,0,0.82)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Modal box — clear margins, defined border */}
      <div
        className="relative w-full h-full max-w-4xl flex flex-col border border-white/25 overflow-hidden"
        style={{ maxHeight: "70vh", background: "#130b0b" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#502A2A] flex-shrink-0">
          <span className="font-clash text-white text-base font-normal">
            Portfolio Viewer
          </span>
          <button
            onClick={onClose}
            className="text-white text-2xl leading-none hover:text-[#D35400] transition-colors w-8 h-8 flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Body: dark area — arrows flank centered media */}
        <div
          className="flex-1 flex items-center min-h-0 overflow-hidden"
          style={{ background: "#0d0606" }}
        >
          {/* Prev arrow */}
          <div className="flex-shrink-0 flex items-center justify-center w-16 md:w-24 h-full">
            <button
              onClick={onPrev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#502A2A]/80 hover:bg-[#D35400] text-white flex items-center justify-center transition-colors duration-200"
              aria-label="Previous"
            >
              ←
            </button>
          </div>

          {/* Media */}
          <div className="flex-1 flex flex-col items-center justify-center py-6 gap-3 min-w-0 h-full min-h-0">
            {isVideo ? (
              <video
                key={current.src}
                src={current.src}
                controls
                autoPlay
                className="max-w-full h-full object-contain"
                // style={{ maxHeight: "62vh" }}
              />
            ) : (
              <div
                className="relative flex items-center justify-center w-full"
                // style={{ maxHeight: "62vh" }}
              >
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  width={700}
                  height={900}
                  className="object-contain w-full max-w-[330px] h-auto"
                  style={
                    {
                      // maxHeight: "62vh",
                      // maxWidth: "100%",
                    }
                  }
                />
                <span className="absolute bottom-2 left-0 right-0 text-center font-clash text-white/70 text-xs tracking-widest">
                  SPUR IMAGERY
                </span>
              </div>
            )}

            {/* Counter */}
            <span className="font-clash text-white/50 text-sm flex-shrink-0">
              {currentIndex + 1}/{items.length}
            </span>
          </div>

          {/* Next arrow */}
          <div className="flex-shrink-0 flex items-center justify-center w-16 md:w-24 h-full">
            <button
              onClick={onNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#D35400] hover:bg-[#502A2A] text-white flex items-center justify-center transition-colors duration-200"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>

        {/* Footer: category pill */}
        <div className="flex items-center px-6 py-3 bg-[#1a0e0e] flex-shrink-0">
          <span className="bg-[#D35400] text-white font-clash text-sm px-4 py-1.5 rounded-sm">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
}
