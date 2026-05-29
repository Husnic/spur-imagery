"use client";

import Image from "next/image";

interface ServiceCardProps {
  title: string;
  image: string;
  alt: string;
}

export default function ServiceCard({ title, image, alt }: ServiceCardProps) {
  return (
    <div className="relative w-full h-full overflow-hidden group bg-[#502A2A] cursor-pointer">
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Gradient to black at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[47%] to-black to-100%" />

      {/* Hover tint */}
      <div className="absolute inset-0 bg-[#502A2A]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-4 pb-6">
        <span className="font-clash font-normal text-white text-xl leading-[26px]">
          {title}
        </span>
      </div>
    </div>
  );
}
