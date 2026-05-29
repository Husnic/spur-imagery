import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
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
        404 — Page Not Found
      </p>
      <h1 className="font-clash font-bold text-white text-5xl md:text-7xl leading-tight mb-6">
        Out of Frame.
      </h1>
      <p className="font-clash text-white/60 text-base md:text-lg max-w-md mb-10">
        This page doesn&apos;t exist. Let&apos;s get you back to something worth capturing.
      </p>

      <Link
        href="/"
        className="inline-flex items-center justify-center px-8 py-3 bg-[#D35400] hover:bg-[#502A2A] text-white font-clash text-base rounded-sm transition-colors duration-200"
      >
        Back to Home
      </Link>
    </main>
  );
}
