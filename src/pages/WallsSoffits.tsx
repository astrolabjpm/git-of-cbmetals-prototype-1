import { useState } from "react";
import SiteNav from "@/components/SiteNav";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, ArrowDown, MapPin, Check, LayoutGrid, Grid2x2, Hammer, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-walls.jpg";
import {
  wallCategories,
  wallPanels,
  wallRoofPanels,
  wallApplications,
  leedCredentials,
} from "@/data/walls";
import type { ProductPanel } from "@/data/products";

const toProductPanel = (w: typeof wallPanels[0]): ProductPanel => ({
  ...w,
  category: "corrugated",
  image: w.image,
  showLocation: true,
});

const WallsSoffits = () => {
  const [activeTab, setActiveTab] = useState("wall-soffit");

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
          <div className="relative mx-auto flex max-w-[1200px] items-center px-8 py-20 sm:py-28 lg:px-10">
            <div className="max-w-[560px]">
              <p className="font-meta mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary-foreground/70">
                Custom-Bilt Metals — Wall &amp; Soffit Systems
              </p>
              <h1 className="text-[36px] font-bold leading-[1.2] text-primary-foreground sm:text-[44px]">
                Metal Wall &amp; Soffit Panels
              </h1>
              <p className="mt-3 text-[20px] font-semibold leading-[1.2] text-primary-foreground/85 sm:text-[22px]">
                Beyond the Roof. Wall. Soffit. Complete Envelope.
              </p>
              <p className="mt-4 max-w-[420px] text-[14px] leading-[1.4] text-primary-foreground/65">
                Metal wall and soffit panels in matching or accent colors to your roofing system. Concealed fastener, LEED-compliant, ULTRA-Cool® coated.
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
        </section>

        {/* Page Intro */}
        <div className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "WS-100 Wall & Soffit", body: "Concealed fastener interlocking panel. 1\" depth. Vented option for soffit airflow.", tag: "→ Concealed fastener · 1\" depth · Vented option", icon: LayoutGrid },
              { title: "Corrugated Wall", body: "Classic 7/8\" corrugation for agricultural, industrial, and contemporary accent walls.", tag: "→ 7/8\" corrugation · Bare metals · LEED", icon: Grid2x2 },
              { title: "TFR-36 & PBR", body: "Exposed fastener panels for fast commercial and agricultural wall installations.", tag: '→ 36" coverage · Ag + commercial walls', icon: Hammer },
              { title: "LEED & Sustainability", body: "25% recycled content. 100% recyclable. ULTRA-Cool® reflective coating technology.", tag: "→ 25% recycled · 100% recyclable · ULTRA-Cool®", icon: Leaf },
            ].map((p, i) => (
              <div key={p.title} className={`px-6 py-8 lg:px-7 ${i < 3 ? "border-b sm:border-b-0 lg:border-r border-border" : ""} ${i === 1 ? "sm:border-r border-border" : ""}`}>
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-sm bg-surface text-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">{p.title}</h3>
                <p className="text-[13px] leading-[1.4] text-muted-foreground">{p.body}</p>
                <p className="font-meta mt-2 text-[12px] font-semibold text-accent">{p.tag}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <nav className="sticky top-0 z-50 border-b border-border bg-background shadow-sm">
          <div className="mx-auto flex max-w-[1200px] overflow-x-auto">
            {wallCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`shrink-0 border-b-[3px] px-6 py-4 text-left transition-colors ${
                  activeTab === cat.id ? "border-accent" : "border-transparent hover:border-muted-foreground/30"
                }`}
              >
                <span className="block text-[13px] font-bold text-foreground">{cat.label}</span>
                <span className="font-meta block text-[12px] text-muted-foreground">{cat.subtitle}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* S3A — Wall & Soffit Panels */}
        <section id="wall-soffit" className="border-b border-border bg-background px-8 py-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Wall &amp; Soffit Panels</h2>
              <div className="mt-2 h-[2px] w-12 bg-foreground" />
              <p className="mt-3 max-w-[580px] text-[14px] leading-[1.4] text-muted-foreground">
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
              <div className="mt-2 h-[2px] w-12 bg-foreground" />
              <p className="mt-3 max-w-[580px] text-[14px] leading-[1.4] text-muted-foreground">
                Exposed fastener panels equally suited to roofing and wall applications. 36" coverage for fast installation.
              </p>
            </div>

            <div className="mb-4 rounded-sm border border-border bg-card px-4 py-3 text-[13px] text-muted-foreground">
              These panels also appear on <a href="/" className="font-semibold text-info hover:underline">/products/roofing-systems/ →</a> for roofing applications. This section covers their use as <strong className="text-foreground">wall cladding</strong>.
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {wallRoofPanels.map((p) => (
                <ProductCard key={p.id} product={toProductPanel(p)} />
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-6 rounded-sm border border-border bg-card px-4 py-4 sm:grid-cols-2">
              <div>
                <p className="font-meta mb-1 text-[10px] font-medium uppercase tracking-[0.06em] text-muted-foreground/60">Choose TFR-36 when</p>
                <p className="text-[13px] leading-[1.4] text-muted-foreground">You need polycarbonate skylight match, anti-siphon groove is a spec requirement, or substrate is open framing.</p>
              </div>
              <div>
                <p className="font-meta mb-1 text-[10px] font-medium uppercase tracking-[0.06em] text-muted-foreground/60">Choose PBR when</p>
                <p className="text-[13px] leading-[1.4] text-muted-foreground">You need structural side lap for wind/load conditions, heavier gauge (24ga) is required, or the project is agricultural or heavy commercial.</p>
              </div>
            </div>
          </div>
        </section>

        {/* S4 — LEED & Sustainability */}
        <section id="leed" className="border-b border-border bg-background px-8 py-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold leading-[1.2] text-foreground">LEED Credits &amp; Sustainability</h2>
              <div className="mt-2 h-[2px] w-12 bg-foreground" />
              <p className="mt-3 max-w-[580px] text-[14px] leading-[1.4] text-muted-foreground">
                CBM wall and soffit panels are designed to support LEED certification on qualifying projects.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 rounded-sm border border-green-700/25 bg-green-700/5 px-4 py-3">
              {leedCredentials.map((cred) => (
                <span key={cred} className="font-meta inline-flex items-center gap-1 text-[12px] font-medium text-green-700">
                  <Check className="h-3 w-3" /> {cred}
                </span>
              ))}
            </div>
            <p className="mt-5 text-[14px] leading-[1.4] text-muted-foreground">
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
              <div className="mt-2 h-[2px] w-12 bg-foreground" />
              <p className="mt-3 max-w-[580px] text-[14px] leading-[1.4] text-muted-foreground">
                CBM wall panels are specified across building types. Match to your roofing panel for a single-supplier, color-matched building envelope.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {wallApplications.map((app) => (
                <div key={app.title} className="rounded-sm border border-border bg-card p-4">
                  <div className="mb-2 h-8 w-8 rounded-sm bg-muted" />
                  <h3 className="text-[15px] font-bold leading-[1.2] text-foreground">{app.title}</h3>
                  <p className="mt-1 text-[13px] leading-[1.4] text-muted-foreground">{app.subtitle}</p>
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
              <div className="mt-2 h-[2px] w-12 bg-foreground" />
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
                  <p className="mt-1 text-[14px] leading-[1.4] text-muted-foreground">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S7 — SEO Editorial */}
        <section className="border-b border-border bg-surface px-8 py-12" id="walls-guide">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-[200px_1fr]">
            <div>
              <p className="font-meta mb-3 text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground">On This Page</p>
              {["Metal Wall Panels vs. Siding", "Concealed vs. Exposed Fastener Walls", "Soffit Venting: Solid vs. Perforated", "LEED Wall Panel Credits", "Color Matching Roof + Wall"].map((item) => (
                <div key={item} className="font-meta border-b border-border py-2 text-[12px] font-medium text-info">→ {item}</div>
              ))}
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold leading-[1.2] text-foreground">Metal Wall &amp; Soffit Panels: Selection, Installation &amp; LEED</h2>
              <div className="mb-5">
                <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">Metal Wall Panels vs. Traditional Siding</h3>
                <p className="text-[14px] leading-[1.4] text-muted-foreground">Metal wall panels outlast traditional siding materials by decades. They resist fire, rot, termites, and wind damage while requiring virtually zero maintenance.</p>
              </div>
              <div className="mb-5">
                <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">Concealed vs. Exposed Fastener Wall Panels</h3>
                <p className="text-[14px] leading-[1.4] text-muted-foreground">Concealed fastener panels like the WS-100 hide all attachments behind interlocking seams. Exposed fastener panels (TFR-36, PBR) are more economical and install faster — ideal for agricultural and industrial walls.</p>
              </div>
              <div className="mb-5">
                <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">Soffit Venting — Solid vs. Perforated Metal</h3>
                <p className="text-[14px] leading-[1.4] text-muted-foreground">Proper attic ventilation prevents moisture buildup, ice dams, and premature roof aging. The WS-100 vented panel provides continuous airflow across the entire soffit.</p>
              </div>
              <div>
                <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">Earning LEED Credits with Metal Wall Panels</h3>
                <p className="text-[14px] leading-[1.4] text-muted-foreground">CBM wall panels qualify for LEED credits under Materials &amp; Resources and Energy &amp; Atmosphere. Contact your CBM branch for the LEED documentation package.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dual CTA */}
        <div className="bg-cta">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 sm:grid-cols-2">
            <div className="px-10 py-12">
              <h3 className="text-xl font-bold leading-[1.2] text-cta-foreground">Ready to Spec?</h3>
              <p className="mt-2 max-w-sm text-[14px] leading-[1.4] text-cta-foreground/60">Tell us your project type, panel application, and color requirements. A CBM rep will respond same or next business day.</p>
              <a href="https://www.custombiltmetals.com/request-a-quote/" className="mt-5 inline-flex items-center gap-1.5 rounded-sm bg-accent px-6 py-3 text-[14px] font-bold text-accent-foreground transition-opacity hover:opacity-90">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="px-10 py-12" style={{ backgroundColor: 'hsl(197 57% 17%)' }}>
              <h3 className="text-xl font-bold leading-[1.2] text-cta-foreground">Specs, CAD &amp; LEED Docs</h3>
              <p className="mt-2 max-w-sm text-[14px] leading-[1.4] text-cta-foreground/60">Download installation guides, specifications, CAD files, and LEED documentation packages.</p>
              <a href="https://www.custombiltmetals.com/resources/" className="mt-5 inline-flex items-center gap-1.5 rounded-sm border-2 border-cta-foreground/35 px-6 py-3 text-[14px] font-bold text-cta-foreground transition-colors hover:border-cta-foreground/60">
                Go to Resources <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-border bg-background px-8 py-6 text-center text-[13px] text-muted-foreground">
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
