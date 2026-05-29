import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <SectionLabel text="About Us" />

        {/* Desktop layout: title + two-col content */}
        <div className="mt-4">
          {/* Title */}
          <h2 className="font-clash font-bold text-[#171717] text-4xl md:text-5xl leading-tight mb-10 md:mb-14 max-w-lg">
            Where Moments
            <br />
            Become Timeless.
          </h2>

          {/* Two column: image left, content right */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            {/* Left: portrait image */}
            <div className="w-full md:w-[45%] flex-shrink-0">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/about-portrait.png"
                  alt="Spur Imagery photographer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: text + second image */}
            <div className="flex flex-col gap-6 flex-1">
              {/* Second image top-right — desktop only */}
              <div className="hidden md:block self-end w-[55%]">
                <div className="relative aspect-4/3 overflow-hidden border-4 border-[#502A2A]">
                  <Image
                    src="/images/about-couple.png"
                    alt="Couple portrait by Spur Imagery"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <p className="font-clash font-normal text-[#171717] text-sm md:text-base leading-relaxed">
                Based in Lagos, Nigeria, Spur Imagery is a professional
                photography company that was established in 2021 and is
                well-positioned to take advantage of the enormous and expanding
                demand for dependable, high-quality visual content.
              </p>
              <p className="font-clash font-normal text-[#171717] text-sm md:text-base leading-relaxed">
                The market for professional photography is dispersed and
                frequently unreliable in a city that is driven by e-commerce, a
                thriving tech/startup environment, and a renowned events
                business. We elegantly and cozily capture priceless memories.
                Preserving tales of love, family, identity, and camaraderie is
                more important than simply taking pictures. We have had the
                opportunity to photograph timeless pieces over the years,
                including corporate, wedding, and individual reservations. We
                are focused on conserving moments both inside and outside of
                Nigeria and are well-oriented.
              </p>

              {/* Second image mobile — below text */}
              <div className="block md:hidden mt-4">
                <div className="relative w-full aspect-[4/3] overflow-hidden border-4 border-[#502A2A]">
                  <Image
                    src="/images/about-couple.png"
                    alt="Couple portrait by Spur Imagery"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
