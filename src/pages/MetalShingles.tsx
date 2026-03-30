import SiteNav from "@/components/SiteNav";
import ProductSection from "@/components/ProductSection";
import DualCTA from "@/components/DualCTA";
import FooterNav from "@/components/FooterNav";
import { ArrowRight, ArrowDown, ChevronDown, Wind, Flame, Zap, Shield, Feather, Recycle } from "lucide-react";
import { aluminumShingles, steelShingles } from "@/data/shingles";
import heroImg from "@/assets/country-manor-shake.jpg";

const pageLinks = [
  { label: "Aluminum Shakes & Shingles", anchor: "#aluminum-shakes", blurb: "Country Manor Shake · Oxford Shingle · Oxford Slate Rock" },
  { label: "Steel Shingles", anchor: "#steel-shingles", blurb: "KasselWood · KasselShake" },
  { label: "Why Metal Shingles", anchor: "#why-metal-shingles", blurb: "Wind, fire, durability, energy savings" },
];

const whyCards = [
  { icon: Wind, title: "Wind & Weather", body: "Four-way interlocking panels with concealed fasteners tested to 120 mph (UL580 Class 90). No lifted shingles. No exposed nails." },
  { icon: Flame, title: "Fire Protection", body: "Class A fire rating (UL790) across all profiles. Metal does not burn and protects against wind-blown embers in wildfire-prone regions." },
  { icon: Zap, title: "Energy Savings", body: "Reflective PVDF coatings and integral thermal breaks reduce cooling costs by up to 20–25%. Cool Roof compliant color options on all profiles." },
  { icon: Shield, title: "Durability", body: "Lifetime / 40-Year Transferable Warranty. No cracking, curling, rotting, or insect damage. Steel shingles rated Class IV impact resistance (UL2218)." },
  { icon: Feather, title: "Lightweight", body: "Metal shingles weigh a fraction of slate, tile, or asphalt. Many products install over existing roofs where code allows, reducing tear-off waste." },
  { icon: Recycle, title: "Sustainability", body: "Aluminum products contain up to 99% recycled content. Steel contains 30–35%. All products are 100% recyclable at end of life." },
];

const MetalShingles = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Metal Shingles & Shakes — Custom-Bilt Metals",
          description: "Interlocking aluminum and steel shingle roofing systems by Custom-Bilt Metals.",
          numberOfItems: aluminumShingles.length + steelShingles.length,
        }),
      }}
    />

    <div className="min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[480px] sm:min-h-[540px]">
        <img
          src={heroImg}
          alt="Country Manor Shake metal shingle roof on residential home"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="relative px-8 py-20 sm:py-28">
          <div className="mx-auto flex max-w-[1200px] items-center">
            <div className="max-w-[680px]">
              <p className="font-meta mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary-foreground/70">
                Premium Metal Shingles & Shakes
              </p>
              <h1 className="text-[36px] font-bold leading-[1.15] text-primary-foreground sm:text-[44px]">
                Metal Shingle Roofing Systems
              </h1>
              <p className="mt-4 max-w-[500px] text-[20px] leading-[1.5] text-primary-foreground/65">
                Interlocking aluminum and steel shingle systems with the architectural character of traditional roofing and the performance of metal.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.custombiltmetals.com/request-a-quote/"
                  className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-5 py-3 text-[13px] font-semibold text-accent-foreground transition-colors hover:bg-accent-hover hover:shadow-sm"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#aluminum-shakes"
                  className="inline-flex items-center gap-1.5 rounded-sm border-2 border-primary-foreground/50 px-5 py-3 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/15 hover:border-primary-foreground/70"
                >
                  Browse Profiles <ArrowDown className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On This Page */}
      <div className="bg-secondary px-8 py-10">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-meta text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            On This Page
          </p>
          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-3">
            {pageLinks.map((link) => (
              <a
                key={link.label}
                href={link.anchor}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector(link.anchor);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="group"
              >
                <div className="h-[4px] bg-foreground transition-colors duration-200 group-hover:bg-accent" />
                <span className="mt-2 flex items-center gap-1 text-[14px] font-semibold text-foreground transition-colors group-hover:text-accent">
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 text-accent" />
                </span>
                <span className="mt-0.5 block text-[14px] leading-[1.5] text-muted-foreground">
                  {link.blurb}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Aluminum Shakes & Shingles */}
      <ProductSection
        id="aluminum-shakes"
        title="Aluminum Shakes & Shingles"
        description="Fully interlocking aluminum roofing systems with concealed fasteners and Kynar 500 / Hylar 5000 PVDF coatings. Made from up to 99% recycled aluminum. Lightweight, rust-proof, and backed by a Lifetime / 40-Year Transferable Limited Warranty."
        products={aluminumShingles}
        columns={3}
      />

      {/* Steel Shingles */}
      <ProductSection
        id="steel-shingles"
        title="Steel Shingles"
        description="G90 galvanized steel shingle systems with four-way interlocking panels, concealed fasteners, and Kynar 500 PVDF coatings. Available in foundation colors and ThermoBond multi-hued powder finishes. Lifetime / 40-Year Transferable Warranty."
        products={steelShingles}
        columns={2}
        callout={
          <div className="mt-4 rounded-sm border-l-[3px] border-accent bg-accent/5 px-4 py-3 text-[14px] leading-[1.5] text-muted-foreground">
            <strong className="text-foreground">KasselWood or KasselShake?</strong> — KasselWood for a dimensional shingle look with cedar and slate color options. KasselShake for a bolder, high-profile shake texture with ThermoBond multi-hued finishes. Not sure —{" "}
            <a href="https://www.custombiltmetals.com/request-a-quote/" className="font-semibold text-accent hover:underline">
              talk to a rep.
            </a>
          </div>
        }
      />

      {/* Why Metal Shingles */}
      <section id="why-metal-shingles" className="px-8 py-12 bg-background">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-6">
            <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Why Metal Shingle Roofing?</h2>
            <hr className="mt-2 border-t-2 border-foreground" />
            <p className="mt-3 max-w-[580px] text-[14px] leading-[1.5] text-muted-foreground">
              Metal shingle systems outperform asphalt, wood, clay, and concrete tile on wind resistance, fire safety, longevity, and energy performance while providing the architectural character property owners expect.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card) => (
              <div key={card.title} className="rounded-sm border border-border bg-card p-5 shadow-[var(--card-shadow)]">
                <card.icon className="h-6 w-6 text-accent mb-3" />
                <h3 className="text-[14px] font-bold text-foreground">{card.title}</h3>
                <p className="mt-1 text-[13px] leading-[1.5] text-muted-foreground">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DualCTA />
      <FooterNav />

      {/* Breadcrumb */}
      <footer className="border-t border-border bg-background px-8 py-6 text-center text-[14px] text-muted-foreground">
        <nav aria-label="Breadcrumb">
          <ol className="inline-flex items-center gap-1">
            <li><a href="https://www.custombiltmetals.com" className="hover:text-foreground">Home</a></li>
            <li>/</li>
            <li><a href="https://www.custombiltmetals.com/products/" className="hover:text-foreground">Products</a></li>
            <li>/</li>
            <li className="text-foreground">Metal Shingles & Shakes</li>
          </ol>
        </nav>
      </footer>
    </div>
  </>
);

export default MetalShingles;
