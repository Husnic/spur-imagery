import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto py-20 md:pt-28">
        <SectionLabel text="About Us" />

        <h2 className="font-clash font-bold text-[#171717] text-4xl md:text-5xl leading-tight max-w-lg">
          Where Moments
          <br />
          Become Timeless.
        </h2>
      </div>

      {/* Full-height row — no bottom padding so portrait stretches */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
        {/* Left: portrait — fills section height */}
        <div className="w-full md:w-[45%] flex-shrink-0 relative min-h-[400px] md:min-h-[600px]">
          <Image
            src="/images/about-portrait.png"
            alt="Spur Imagery photographer"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Right: couple image + text */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Couple image — fixed 259×330, top-right on desktop, normal flow on mobile */}
          <div className="self-start md:self-end">
            <div
              className="relative overflow-hidden border-4 border-[#502A2A]"
              style={{ width: 259, height: 330, maxWidth: "100%" }}
            >
              <Image
                src="/images/about-couple.png"
                alt="Couple portrait by Spur Imagery"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <p className="font-clash font-normal text-[#171717] text-sm md:text-base leading-relaxed">
            Based in Lagos, Nigeria, Spur Imagery is a professional photography
            company that was established in 2021 and is well-positioned to take
            advantage of the enormous and expanding demand for dependable,
            high-quality visual content.
          </p>
          <p className="font-clash font-normal text-[#171717] text-sm md:text-base leading-relaxed">
            The market for professional photography is dispersed and frequently
            unreliable in a city that is driven by e-commerce, a thriving
            tech/startup environment, and a renowned events business. We
            elegantly and cozily capture priceless memories. Preserving tales of
            love, family, identity, and camaraderie is more important than
            simply taking pictures. We have had the opportunity to photograph
            timeless pieces over the years, including corporate, wedding, and
            individual reservations. We are focused on conserving moments both
            inside and outside of Nigeria and are well-oriented.
          </p>
        </div>
      </div>
    </section>
  );
}
