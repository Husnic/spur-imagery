"use client";

import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-[10px] rounded-sm text-white font-clash text-base leading-[26px] font-normal transition-colors duration-200 cursor-pointer";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-[#D35400] hover:bg-[#502A2A] border border-[#D35400] hover:border-[#502A2A]",
    secondary: "bg-transparent border-[1.5px] border-white hover:bg-[#502A2A] hover:border-[#502A2A]",
  };

  const width = fullWidth ? "w-full" : "";
  const classes = `${base} ${variants[variant]} ${width} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
