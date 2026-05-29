"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Portfolio", href: "#portfolio" },
  { label: "Our Clients", href: "#clients" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#1A0E0E] text-white">
      {/* Main footer content */}
      <div className="px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Desktop: 4-col layout */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-8">
            {/* Col 1: Logo + divider + socials */}
            <div className="flex flex-col">
              <Image
                src="/logo.png"
                alt="Spur Imagery"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <div className="w-px h-16 bg-white/20 my-6 hidden md:block" />
              <div className="flex md:flex-col gap-5 mt-4 md:mt-0">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white hover:text-[#D35400] transition-colors duration-200"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="text-white hover:text-[#D35400] transition-colors duration-200"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <path d="M2 4h6l4 5.5L16 4h6L13 12.5 22 20h-6l-4-5.5L8 20H2l9-7.5z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white hover:text-[#D35400] transition-colors duration-200"
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Spacer on desktop */}
            <div className="hidden md:block flex-1" />

            {/* Col 2: INFO */}
            <div className="flex flex-col gap-4">
              <span className="font-clash text-xs tracking-widest text-white/50 uppercase">INFO</span>
              <nav className="flex flex-col gap-3">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="font-clash text-base text-white hover:text-[#D35400] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 3: ADDRESS */}
            <div className="flex flex-col gap-4">
              <span className="font-clash text-xs tracking-widest text-white/50 uppercase">ADDRESS</span>
              <p className="font-clash text-base text-white/90 leading-relaxed">
                12b, Jimoh Meji Street, Ijesha,<br />Surulere Lagos.
              </p>
            </div>

            {/* Col 4: CONTACT */}
            <div className="flex flex-col gap-4">
              <span className="font-clash text-xs tracking-widest text-white/50 uppercase">CONTACT</span>
              <a
                href="mailto:spurimagery@gmail.com"
                className="font-clash text-base text-[#D35400] hover:underline"
              >
                spurimagery@gmail.com
              </a>
              <a
                href="tel:+2349023567745"
                className="font-clash text-base text-white/90 hover:text-white transition-colors duration-200"
              >
                +234 (090) 23567745
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 px-6 md:px-10 lg:px-16 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-clash text-sm text-white/50">© 2026 — Copyright</span>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D35400] text-white flex items-center justify-center transition-colors duration-200"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      </div>

      {/* Footer image */}
      <div className="relative w-full h-48 md:h-64 overflow-hidden">
        <Image
          src="/images/footer-image.png"
          alt="Photography equipment"
          fill
          className="object-cover object-center"
        />
      </div>
    </footer>
  );
}
