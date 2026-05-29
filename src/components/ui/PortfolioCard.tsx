"use client";

import Image from "next/image";

interface PortfolioCardProps {
  src: string;
  alt: string;
  isVideo?: boolean;
  onView: () => void;
}

function isVideoFile(src: string) {
  return /\.(mp4|webm|mov|ogg)$/i.test(src);
}

export default function PortfolioCard({ src, alt, onView }: PortfolioCardProps) {
  const video = isVideoFile(src);

  return (
    <div
      className="group relative overflow-hidden cursor-pointer bg-[#502A2A] transition-all duration-300"
      onClick={onView}
    >
      {/* Normal state: image fills card */}
      <div className="relative w-full aspect-[3/4] transition-all duration-300 group-hover:p-4">
        {/* Border on hover */}
        <div className="absolute inset-0 group-hover:inset-4 border-0 group-hover:border-[3px] group-hover:border-[#FFF8E8] z-10 transition-all duration-300 pointer-events-none" />

        {/* Media */}
        {video ? (
          <video
            src={src}
            className="w-full h-full object-cover"
            muted
            playsInline
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        )}

        {/* Normal: gradient + watermark */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black/60 group-hover:opacity-0 transition-opacity duration-300 z-[5]" />
        <span className="absolute bottom-3 left-0 right-0 text-center font-clash text-white/80 text-xs tracking-widest group-hover:opacity-0 transition-opacity duration-300 z-[6]">
          SPUR IMAGERY
        </span>

        {/* Hover: dark overlay + View button */}
        <div className="absolute inset-0 bg-black/62 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[7] flex items-center justify-center">
          <button className="bg-[#D35400] text-white font-clash text-base px-6 py-[10px] rounded-sm hover:bg-[#502A2A] transition-colors duration-200">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
