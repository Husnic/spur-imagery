import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

const clients = [
  { src: "/images/clients/amaanah.png", alt: "Amaanah Non-Interest Finance" },
  { src: "/images/clients/media-fuse.png", alt: "Media Fuse / Dentsu Aegis" },
  { src: "/images/clients/kpmg.png", alt: "KPMG" },
  { src: "/images/clients/cussons.png", alt: "PZ Cussons" },
  { src: "/images/clients/surechill.png", alt: "SureChill" },
  { src: "/images/clients/payvantage.png", alt: "Payvantage" },
];

export default function ClientsSection() {
  const track = [...clients, ...clients];

  return (
    <section id="clients" className="py-20 md:py-28 bg-white px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto mb-14 text-center">
        <SectionLabel text="Clients" />
        <h2 className="font-clash font-bold text-[#171717] text-4xl md:text-5xl mt-3 mb-4 leading-tight">
          Trusted Across<br />Industries.
        </h2>
        <p className="font-clash font-normal text-[#171717]/70 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          We&apos;ve had the privilege of capturing moments and delivering visuals for respected organizations across Nigeria.
        </p>
      </div>

      {/* Marquee container */}
      <div className="overflow-hidden relative">
        <div className="flex gap-12 md:gap-20 marquee-track items-center">
          {track.map((client, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center h-12 md:h-16 w-28 md:w-40">
              <Image
                src={client.src}
                alt={client.alt}
                width={160}
                height={64}
                className="object-contain max-h-full w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
