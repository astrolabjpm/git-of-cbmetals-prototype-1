import { ArrowRight, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-roofing.jpg";

const HeroSection = () => (
  <section className="relative min-h-[480px] sm:min-h-[540px]">
    <img
      src={heroImg}
      alt="Western US home with standing seam metal roof by Custom-Bilt Metals"
      className="absolute inset-0 h-full w-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    <div className="relative px-8 py-20 sm:py-28">
      <div className="mx-auto flex max-w-[1200px] items-center">
      <div className="max-w-[680px]">
        <p className="font-meta mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary-foreground/70">
          Metal Roofing Systems
        </p>
        <h1 className="text-[36px] font-bold leading-[1.15] text-primary-foreground sm:text-[44px]">
          Standing Seam Metal Roofing: Concealed Fasteners, Zero Leak Points
        </h1>
        <p className="mt-4 max-w-[500px] text-[20px] leading-[1.5] text-primary-foreground/65">
          Custom-Bilt Metal roofing systems are one of the most beautiful and highly functional roofing solutions.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="https://www.custombiltmetals.com/request-a-quote/"
            className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-5 py-3 text-[13px] font-semibold text-accent-foreground transition-colors hover:bg-accent-hover hover:shadow-sm"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#standing-seam"
            className="inline-flex items-center gap-1.5 rounded-sm border-2 border-primary-foreground/50 px-5 py-3 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Browse Products <ArrowDown className="h-4 w-4" />
          </a>
      </div>
      </div>
    </div>
    </div>
  </section>
);

export default HeroSection;
