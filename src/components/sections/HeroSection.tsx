import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <h1 className="font-clash font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Creating Memories
          <br />
          Through Lens.
        </h1>
        <p className="font-clash font-normal text-white/90 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Elegant photography crafted to preserve stories of love, identity,
          celebration, and connection, in Lagos and beyond.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#contact" variant="primary">
            Book with us
          </Button>
          <Button href="#portfolio" variant="secondary">
            View portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
