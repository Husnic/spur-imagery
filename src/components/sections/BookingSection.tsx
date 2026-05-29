"use client";

import { useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  "Portrait Shoots",
  "Corporate & Dinner Events",
  "Drone Shoots",
  "Pre-wedding & Wedding Coverage",
];

type Status = "idle" | "loading" | "success" | "error";

export default function BookingSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("success");
      setForm({ firstName: "", lastName: "", email: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full bg-white border border-[#171717]/20 focus:border-[#D35400] outline-none font-clash text-sm text-black py-3 px-4 placeholder:text-black/40 transition-colors duration-200 rounded-none";

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF6F0] px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Left */}
          <div className="w-full md:w-[38%] flex-shrink-0">
            <SectionLabel text="Book With Us" />
            <h2 className="font-clash font-bold text-[#171717] text-4xl md:text-5xl mt-3 mb-8 leading-tight">
              Book Your Session With Us.
            </h2>
            <div className="relative w-full max-w-[280px] aspect-[3/4] overflow-hidden border-4 border-[#502A2A]">
              <Image
                src="/images/footer-image.png"
                alt="Spur Imagery portrait session"
                fill
                className="object-cover"
              />
              <span className="absolute bottom-3 left-0 right-0 text-center font-clash text-white/70 text-xs tracking-widest">
                SPUR IMAGERY
              </span>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6 w-full">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label className="font-clash text-sm text-[#171717] mb-2 block">First name</label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className={inputBase}
                />
              </div>
              <div className="flex-1">
                <label className="font-clash text-sm text-[#171717] mb-2 block">Last name</label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className={inputBase}
                />
              </div>
            </div>

            <div>
              <label className="font-clash text-sm text-[#171717] mb-2 block">Email address</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                required
                className={inputBase}
              />
            </div>

            <div>
              <label className="font-clash text-sm text-[#171717] mb-2 block">Service</label>
              <div className="relative">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className={`${inputBase} appearance-none pr-8 cursor-pointer`}
                >
                  <option value="" disabled>Choose the service you want</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black/50 text-xs">
                  ▼
                </span>
              </div>
            </div>

            <div>
              <label className="font-clash text-sm text-[#171717] mb-2 block">Message</label>
              <textarea
                name="message"
                placeholder="Tell us about your session, date, location, or any details..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputBase} resize-none`}
              />
            </div>

            {status === "success" && (
              <p className="font-clash text-sm text-green-700 bg-green-50 border border-green-200 px-4 py-3">
                Booking request sent! We&apos;ll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="font-clash text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#D35400] hover:bg-[#502A2A] disabled:opacity-60 disabled:cursor-not-allowed text-white font-clash text-base px-8 py-3 rounded-sm transition-colors duration-200"
              >
                {status === "loading" ? "Sending…" : "Book now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
