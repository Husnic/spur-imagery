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
    /* bg-[#502A2A] forms the thick outer border on hover */
    <div
      className="relative w-full h-full bg-[#502A2A] cursor-pointer group overflow-hidden flex-shrink-0"
      onClick={onView}
    >
      {/* Media wrapper: insets on hover → secondary bg becomes outer border, white border inner */}
      <div className="absolute inset-0 group-hover:inset-3 transition-all duration-300 overflow-hidden group-hover:border-2 group-hover:border-white">
        {video ? (
          <video src={src} className="w-full h-full object-cover" muted playsInline />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 250px, 300px"
          />
        )}

        {/* Normal state: gradient + watermark */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black/60 group-hover:opacity-0 transition-opacity duration-300" />
        <span className="absolute bottom-3 left-0 right-0 text-center font-clash text-white/70 text-xs tracking-widest group-hover:opacity-0 transition-opacity duration-300">
          SPUR IMAGERY
        </span>

        {/* Hover: dark overlay + View CTA */}
        <div className="absolute inset-0 bg-black/62 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-[#D35400] text-white font-clash text-base px-6 py-[10px] rounded-sm hover:bg-[#502A2A] transition-colors duration-200">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
