import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    title: "Portrait Shoots",
    image: "/images/service-portrait.png",
    alt: "Portrait photography session",
  },
  {
    title: "Corporate & Dinner Events",
    image: "/images/service-corporate.png",
    alt: "Corporate and dinner event photography",
  },
  {
    title: "Drone Shoots",
    image: "/images/service-drone.png",
    alt: "Drone aerial photography",
  },
  {
    title: "Pre-wedding & Wedding Coverage",
    image: "/images/service-wedding.png",
    alt: "Wedding and pre-wedding photography",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#FAF6F0] px-6 md:px-10 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SectionLabel text="Services" />
          <h2 className="font-clash font-bold text-[#171717] text-4xl md:text-5xl mt-3 mb-4">
            What We Capture.
          </h2>
          <p className="font-clash font-normal text-[#171717]/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            From intimate portraits to grand celebrations, we capture every
            detail, emotion, and experience with creativity and intention.
          </p>
        </div>

        {/* Desktop: 3-col bento layout */}
        <div className="hidden md:grid grid-cols-3 h-[500px]">
          {/* Col 1: Portrait full height */}
          <div className="h-full">
            <ServiceCard
              title="Portrait Shoots"
              image="/images/service-portrait.png"
              alt="Portrait photography session"
            />
          </div>

          {/* Col 2: Corporate + Drone stacked */}
          <div className="grid grid-rows-2 h-full">
            <ServiceCard
              title="Corporate & Dinner Events"
              image="/images/service-corporate.png"
              alt="Corporate and dinner event photography"
            />
            <ServiceCard
              title="Drone Shoots"
              image="/images/service-drone.png"
              alt="Drone aerial photography"
            />
          </div>

          {/* Col 3: Wedding full height */}
          <div className="h-full">
            <ServiceCard
              title="Pre-wedding & Wedding Coverage"
              image="/images/service-wedding.png"
              alt="Wedding and pre-wedding photography"
            />
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="flex md:hidden flex-col gap-4">
          {services.map((s) => (
            <div key={s.title} className="h-[380px]">
              <ServiceCard title={s.title} image={s.image} alt={s.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
