import SiteNav from "@/components/SiteNav";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, ArrowDown, MapPin, ChevronDown, Recycle, Sun, Shield, Award, Droplets } from "lucide-react";
import heroImg from "@/assets/hero-walls.jpg";
import {
  wallPanels,
  wallRoofPanels,
  wallApplications,
} from "@/data/walls";
import type { ProductPanel } from "@/data/products";

const toProductPanel = (w: typeof wallPanels[0]): ProductPanel => ({
  ...w,
  category: "corrugated",
  image: w.image,
  showLocation: true,
});

const WallsSoffits = () => {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Metal Wall & Soffit Panels — Custom-Bilt Metals",
            description: "Concealed fastener wall panels, corrugated wall cladding, and soffit systems by Custom-Bilt Metals.",
            numberOfItems: wallPanels.length + wallRoofPanels.length,
          }),
        }}
      />

      <div className="min-h-screen">
        <SiteNav />

        {/* Hero */}
        <section className="relative min-h-[480px] sm:min-h-[540px]">
          <img src={heroImg} alt="Commercial building with metal wall panels" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          <div className="relative px-8">
            <div className="mx-auto flex max-w-[1200px] items-center py-20 sm:py-28">
              <div className="max-w-[680px]">
                <p className="font-meta mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary-foreground/70">
                  Walls, Soffits and Airflow
                </p>
                <h1 className="text-[36px] font-bold leading-[1.2] text-primary-foreground sm:text-[44px]">
                  Metal Wall and Soffit Panels with Cool Technology
                </h1>
                <p className="mt-3 text-[20px] font-semibold leading-[1.3] text-primary-foreground/85 sm:text-[22px]">
                  Custom-Bilt offer designs to create finished appearances that range from historical or rustic designs in natural or weathered metals to an edgier contemporary look in painted colors.
                </p>
                <div className="mt-6 flex gap-3">
                  <a href="https://www.custombiltmetals.com/request-a-quote/" className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-5 py-3 text-[13px] font-semibold text-accent-foreground transition-opacity hover:opacity-90">
                    Get a Quote <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#wall-soffit" className="inline-flex items-center gap-1.5 rounded-sm border-2 border-primary-foreground/50 px-5 py-3 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
                    Browse Panels <ArrowDown className="h-4 w-4" />
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
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { label: "Wall & Soffit Panels", anchor: "#wall-soffit", blurb: "WS-100 concealed fastener and corrugated wall panels." },
                { label: "Corrugated Wall", anchor: "#wall-soffit", blurb: "Classic 7/8\" corrugation for agricultural and accent walls." },
                { label: "TFR-36 & PBR", anchor: "#roof-wall", blurb: "Exposed fastener panels for fast commercial wall installs." },
                { label: "LEED & Sustainability", anchor: "#leed", blurb: "25% recycled content, ULTRA-Cool® reflective coating." },
                { label: "Applications", anchor: "#applications", blurb: "Commercial, agricultural, residential soffit, institutional." },
              ].map((link) => (
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


        {/* S3A — Wall & Soffit Panels */}
        <section id="wall-soffit" className="border-b border-border bg-background px-8 py-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Wall &amp; Soffit Panels</h2>
              <hr className="mt-2 border-t-2 border-foreground" />
              <p className="mt-3 max-w-[580px] text-[14px] leading-[1.5] text-muted-foreground">
                Flush-panel interlocking seam construction. Available in matching or accent colors to your CBM roofing system.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {wallPanels.map((p) => (
                <ProductCard key={p.id} product={toProductPanel(p)} />
              ))}
            </div>
          </div>
        </section>

        {/* S3B — Roof + Wall Panels */}
        <section id="roof-wall" className="border-b border-border bg-surface px-8 py-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Roof + Wall Panels — TFR-36 &amp; PBR</h2>
              <hr className="mt-2 border-t-2 border-foreground" />
              <p className="mt-3 max-w-[580px] text-[14px] leading-[1.5] text-muted-foreground">
                Exposed fastener panels equally suited to roofing and wall applications. 36" coverage for fast installation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {wallRoofPanels.map((p) => (
                <div key={p.id}>
                  <ProductCard product={toProductPanel(p)} />
                  <div className="mt-2 rounded-sm border border-border bg-card px-4 py-3">
                    <p className="font-meta mb-1 text-[10px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
                      {p.id === "tfr-36-wall" ? "Choose TFR-36 when" : "Choose PBR when"}
                    </p>
                    <p className="text-[14px] leading-[1.5] text-muted-foreground">
                      {p.id === "tfr-36-wall"
                        ? "You need polycarbonate skylight match, anti-siphon groove is a spec requirement, or substrate is open framing."
                        : "You need structural side lap for wind/load conditions, heavier gauge (24ga) is required, or the project is agricultural or heavy commercial."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S4 — LEED & Sustainability */}
        <section id="leed" className="border-b border-border bg-background px-8 py-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold leading-[1.2] text-foreground">LEED Credits &amp; Sustainability</h2>
              <hr className="mt-2 border-t-2 border-foreground" />
              <p className="mt-3 max-w-[580px] text-[14px] leading-[1.5] text-muted-foreground">
                CBM wall and soffit panels are designed to support LEED certification on qualifying projects.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Recycle, title: "25% Recycled Content", desc: "Steel substrate contains minimum 25% post-consumer recycled material, contributing to LEED Materials & Resources credits." },
                { icon: Recycle, title: "100% Recyclable", desc: "At end of life, metal panels are fully recyclable — zero landfill contribution. Cradle-to-cradle lifecycle." },
                { icon: Sun, title: "ULTRA-Cool® Coating", desc: "Reflects more solar heat than virtually any other coating. Lowers interior temperatures and reduces HVAC energy load." },
                { icon: Shield, title: "Kynar 500® / Hylar® 5000", desc: "PVDF-based pigment systems resist chalking, fading, and chemical degradation for 40+ year color retention." },
                { icon: Award, title: "LEED Documentation", desc: "Full documentation package available for qualifying projects — Materials & Resources and Energy & Atmosphere categories." },
                { icon: Droplets, title: "Marine-Grade PVDF", desc: "Select products available in marine-grade PVDF for coastal and high-corrosion environments." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-sm border border-border bg-card p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent/10 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-[13px] leading-[1.5] text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[14px] leading-[1.5] text-muted-foreground">
              ULTRA-Cool® technology reflects more heat than virtually any other coating available, helping buildings maintain lower interior temperatures and reducing HVAC load.
            </p>
            <a href="#" className="font-meta mt-4 inline-block text-[12px] font-semibold text-info hover:underline">Download LEED Documentation ↓</a>
          </div>
        </section>

        {/* S5 — Applications */}
        <section id="applications" className="border-b border-border bg-surface px-8 py-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Wall &amp; Soffit Applications</h2>
              <hr className="mt-2 border-t-2 border-foreground" />
              <p className="mt-3 max-w-[580px] text-[14px] leading-[1.5] text-muted-foreground">
                CBM wall panels are specified across building types. Match to your roofing panel for a single-supplier, color-matched building envelope.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {wallApplications.map((app) => (
                <div key={app.title} className="rounded-sm border border-border bg-card p-4">
                  <div className="mb-2 h-8 w-8 rounded-sm bg-muted" />
                  <h3 className="text-[15px] font-bold leading-[1.2] text-foreground">{app.title}</h3>
                  <p className="mt-1 text-[14px] leading-[1.5] text-muted-foreground">{app.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S6 — Why CBM */}
        <section className="border-b border-border bg-background px-8 py-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Why Match Your Walls to CBM</h2>
              <hr className="mt-2 border-t-2 border-foreground" />
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { num: "1", label: "Supplier, Full Envelope", sub: "Order roof, wall, soffit, gutter, and trim from one CBM branch. Guaranteed color match." },
                { num: "9", label: "Western U.S. Locations", sub: "WS-100 and corrugated wall panels stocked at CBM branches across CA, AZ, OR, WA, and HI." },
                { num: "LEED", label: "Credit-Ready", sub: "Documentation package available for LEED projects. ULTRA-Cool®, recycled content, recyclability all documented." },
                { num: "40+", label: "Years in the Western U.S.", sub: "Since 1980. Color systems and accessory profiles remain consistent for reroof and expansion matching." },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-meta text-[28px] font-medium leading-[1.2] text-accent">{s.num}</p>
                  <p className="mt-1.5 text-[15px] font-bold leading-[1.2] text-foreground">{s.label}</p>
                  <p className="mt-1 text-[14px] leading-[1.5] text-muted-foreground">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S7 — SEO Editorial */}
        <section className="border-b border-border bg-surface px-8 py-12" id="walls-guide">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-[200px_1fr]">
            <div>
              <p className="font-meta mb-3 text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground">In This Guide</p>
              {["Metal Wall Panels vs. Siding", "Concealed vs. Exposed Fastener Walls", "Soffit Venting: Solid vs. Perforated", "LEED Wall Panel Credits", "Color Matching Roof + Wall"].map((item) => (
                <div key={item} className="font-meta border-b border-border py-2 text-[12px] font-medium text-info">→ {item}</div>
              ))}
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold leading-[1.2] text-foreground">Metal Wall &amp; Soffit Panels: Selection, Installation &amp; LEED</h2>
              <div className="mb-5">
                <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">Metal Wall Panels vs. Traditional Siding</h3>
                <p className="text-[14px] leading-[1.5] text-muted-foreground">Metal wall panels outlast traditional siding materials by decades. They resist fire, rot, termites, and wind damage while requiring virtually zero maintenance.</p>
              </div>
              <div className="mb-5">
                <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">Concealed vs. Exposed Fastener Wall Panels</h3>
                <p className="text-[14px] leading-[1.5] text-muted-foreground">Concealed fastener panels like the WS-100 hide all attachments behind interlocking seams. Exposed fastener panels (TFR-36, PBR) are more economical and install faster — ideal for agricultural and industrial walls.</p>
              </div>
              <div className="mb-5">
                <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">Soffit Venting — Solid vs. Perforated Metal</h3>
                <p className="text-[14px] leading-[1.5] text-muted-foreground">Proper attic ventilation prevents moisture buildup, ice dams, and premature roof aging. The WS-100 vented panel provides continuous airflow across the entire soffit.</p>
              </div>
              <div>
                <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">Earning LEED Credits with Metal Wall Panels</h3>
                <p className="text-[14px] leading-[1.5] text-muted-foreground">CBM wall panels qualify for LEED credits under Materials &amp; Resources and Energy &amp; Atmosphere. Contact your CBM branch for the LEED documentation package.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dual CTA */}
        <div className="bg-cta">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 sm:grid-cols-2">
            <div className="px-10 py-12">
              <h3 className="text-xl font-bold leading-[1.2] text-cta-foreground">Ready to Spec?</h3>
              <p className="mt-2 max-w-sm text-[14px] leading-[1.5] text-cta-foreground/60">Tell us your project type, panel application, and color requirements. A CBM rep will respond same or next business day.</p>
              <a href="https://www.custombiltmetals.com/request-a-quote/" className="mt-5 inline-flex items-center gap-1.5 rounded-sm bg-accent px-6 py-3 text-[14px] font-bold text-accent-foreground transition-opacity hover:opacity-90">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="px-10 py-12" style={{ backgroundColor: 'hsl(197 57% 17%)' }}>
              <h3 className="text-xl font-bold leading-[1.2] text-cta-foreground">Specs, CAD &amp; LEED Docs</h3>
              <p className="mt-2 max-w-sm text-[14px] leading-[1.5] text-cta-foreground/60">Download installation guides, specifications, CAD files, and LEED documentation packages.</p>
              <a href="https://www.custombiltmetals.com/resources/" className="mt-5 inline-flex items-center gap-1.5 rounded-sm border-2 border-cta-foreground/35 px-6 py-3 text-[14px] font-bold text-cta-foreground transition-colors hover:border-cta-foreground/60">
                Go to Resources <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-border bg-background px-8 py-6 text-center text-[14px] text-muted-foreground">
          <nav aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-1">
              <li><a href="https://www.custombiltmetals.com" className="hover:text-foreground">Home</a></li>
              <li>/</li>
              <li><a href="/products" className="hover:text-foreground">Products</a></li>
              <li>/</li>
              <li className="text-foreground">Walls, Soffits &amp; Airflow</li>
            </ol>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default WallsSoffits;
