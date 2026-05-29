"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#0d0606] flex flex-col items-center justify-center px-6 text-center">
      <Link href="/" className="mb-12">
        <Image
          src="/logo.png"
          alt="Spur Imagery"
          width={120}
          height={40}
          className="h-10 w-auto object-contain"
        />
      </Link>

      <p className="font-clash text-[#D35400] text-sm tracking-widest uppercase mb-4">
        500 — Something Went Wrong
      </p>
      <h1 className="font-clash font-bold text-white text-5xl md:text-7xl leading-tight mb-6">
        Missed the Shot.
      </h1>
      <p className="font-clash text-white/60 text-base md:text-lg max-w-md mb-10">
        An unexpected error occurred on our end. Try again or head back home.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-8 py-3 bg-[#D35400] hover:bg-[#502A2A] text-white font-clash text-base rounded-sm transition-colors duration-200"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 border border-white/30 hover:border-white text-white font-clash text-base rounded-sm transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
