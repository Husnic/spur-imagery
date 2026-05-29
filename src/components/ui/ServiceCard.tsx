"use client";

import Image from "next/image";

interface ServiceCardProps {
  title: string;
  image: string;
  alt: string;
}

export default function ServiceCard({ title, image, alt }: ServiceCardProps) {
  return (
    /* bg-[#502A2A] is the "outer border" — visible on hover as image insets */
    <div className="relative w-full h-full bg-[#502A2A] cursor-pointer group overflow-hidden">

      {/* Image wrapper: shrinks on hover → secondary bg shows as thick outer border */}
      <div className="absolute inset-0 group-hover:inset-3 transition-all duration-300 overflow-hidden group-hover:border-2 group-hover:border-white">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Gradient — always present */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[47%] to-black/90" />
      </div>

      {/* Title — repositions inside inset on hover */}
      <div className="absolute bottom-0 left-0 right-0 group-hover:bottom-3 group-hover:left-3 group-hover:right-3 p-4 pb-6 group-hover:p-4 z-10 transition-all duration-300">
        <span className="font-clash font-normal text-white text-xl leading-[26px]">
          {title}
        </span>
      </div>
    </div>
  );
}
