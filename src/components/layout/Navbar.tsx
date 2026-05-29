"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (label: string) => {
    setActiveLink(label);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 transition-colors duration-300 ${
          scrolled ? "bg-black/60 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.png" alt="Spur Imagery" width={120} height={40} className="h-10 w-auto object-contain" priority />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => handleNavClick(label)}
                className={`relative font-clash text-base font-normal transition-colors duration-200 ${
                  activeLink === label ? "text-[#D35400]" : "text-white hover:text-[#D35400]"
                }`}
              >
                {label}
                {activeLink === label && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#D35400]" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#contact" variant="primary">
            Book a session
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1a0e0e] flex flex-col px-6 py-6 md:hidden">
          <div className="flex items-center justify-between mb-12">
            <Image src="/logo.png" alt="Spur Imagery" width={100} height={34} className="h-9 w-auto object-contain" />
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-white text-3xl leading-none">
              &times;
            </button>
          </div>

          <ul className="flex flex-col gap-8 flex-1">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={() => handleNavClick(label)}
                  className={`font-clash text-2xl font-normal transition-colors duration-200 ${
                    activeLink === label ? "text-[#D35400]" : "text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Button href="#contact" variant="primary" fullWidth onClick={() => setMenuOpen(false)}>
            Book a session
          </Button>
        </div>
      )}
    </>
  );
}
