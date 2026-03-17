import ironManJunior from "@/assets/iron-man-junior.jpg";
import ironMan6Seamless from "@/assets/iron-man-6-seamless.jpg";
import ironMan5Fascia from "@/assets/iron-man-5-fascia.jpg";
import ironMan6HalfRound from "@/assets/iron-man-6-half-round.jpg";
import ironMan5Seamless from "@/assets/iron-man-5-seamless.jpg";
import ironMan7Seamless from "@/assets/iron-man-7-seamless.jpg";
import ironMan56Seamless from "@/assets/iron-man-56-seamless.jpg";
import SiteNav from "@/components/SiteNav";
import { ArrowRight, ArrowDown, MapPin, ChevronDown, ExternalLink } from "lucide-react";
import heroImg from "@/assets/hero-gutters.jpg";
import guttersK from "@/assets/gutters-k.jpg";
import guttersHalfRound from "@/assets/gutters-half-round.jpg";
import guttersFacia from "@/assets/gutters-facia.jpg";
import guttersSuper from "@/assets/gutters-super.jpg";
import {
  gutterProfiles,
  gutterComponents,
  gutterMachines,
  gutterLocations,
} from "@/data/gutters";

const imageMap: Record<string, string> = {
  "gutters-k": guttersK,
  "gutters-half-round": guttersHalfRound,
  "gutters-facia": guttersFacia,
  "gutters-super": guttersSuper,
};

const pageLinks = [
  { label: "Gutter Profiles", anchor: "#profiles", blurb: "K-Style, Half-Round, and Fascia seamless profiles in aluminum, steel, copper." },
  { label: "Integrated System", anchor: "#integrated", blurb: "Single continuous roof + gutter system — zero-joint water management." },
  { label: "Downspouts & Components", anchor: "#components", blurb: "Round and rectangular downspouts matched to profile and color." },
  { label: "Gutter Machines", anchor: "#machines", blurb: "Iron Man rollformer series — purchase includes lifetime alignment." },
  { label: "Locations", anchor: "#gutter-locations", blurb: "Gutter stock available at 10 CBM branches across the Western U.S." },
];

const gutterDocs = [
  { label: "Rain Gutter Color Chart", url: "https://www.custombiltmetals.com/wp-content/uploads/2021/11/gutter-color-chart.pdf" },
  { label: "Gutter System Specifications", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/07/Gutter-Guide-Specs.pdf" },
  { label: "Component List", url: "https://www.custombiltmetals.com/wp-content/uploads/2015/07/Gutter-Systems-Component-List-9-15-15.pdf" },
];

const GutterSystems = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Seamless Gutter Systems — Custom-Bilt Metals",
            description: "K-style, half-round, and fascia seamless gutter systems by Custom-Bilt Metals.",
            numberOfItems: gutterProfiles.length,
          }),
        }}
      />

      <div className="min-h-screen">
        <SiteNav />

        {/* Hero */}
        <section className="relative min-h-[480px] sm:min-h-[540px]">
          <img src={heroImg} alt="Pacific Northwest home with metal roof and seamless gutters" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
          <div className="relative px-8">
            <div className="mx-auto flex max-w-[1200px] items-center py-20 sm:py-28">
              <div className="max-w-[560px]">
                <p className="font-meta mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary-foreground/70">
                  Custom-Bilt Metals — Gutter Systems
                </p>
                <h1 className="text-[36px] font-bold leading-[1.2] text-primary-foreground sm:text-[44px]">
                  Seamless Gutter Systems &amp; Components
                </h1>
                <p className="mt-3 text-[20px] font-semibold leading-[1.2] text-primary-foreground/85 sm:text-[22px]">
                  Custom Seamless. No Seams to Leak. Western U.S. Stock.
                </p>
                <p className="mt-4 max-w-[420px] text-[14px] leading-[1.5] text-primary-foreground/65">
                  Continuous seamless gutter systems in K-style, half-round, and fascia profiles. Aluminum, steel, copper, and Zincalume. Available from 10 locations.
                </p>
                <div className="mt-6 flex gap-3">
                  <a href="https://www.custombiltmetals.com/locations/" className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-5 py-3 text-[13px] font-semibold text-accent-foreground transition-opacity hover:opacity-90">
                    Find a Location <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href="#profiles" className="inline-flex items-center gap-1.5 rounded-sm border-2 border-primary-foreground/50 px-5 py-3 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
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
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
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

        {/* S3A — Gutter Profiles */}
        <section id="profiles" className="border-b border-border bg-background px-8 py-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Seamless Gutter Profiles</h2>
              <hr className="mt-2 border-t-2 border-foreground" />
              <p className="mt-3 max-w-[580px] text-[14px] leading-[1.5] text-muted-foreground">
                All profiles are continuous seamless — formed on-site by your contractor. Available in aluminum, steel, copper (16 oz.), and Zincalume®.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gutterProfiles.map((profile) => (
                <article key={profile.id} className="flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-[var(--card-shadow)] transition-shadow duration-300 hover:shadow-[var(--card-shadow-hover)]">
                  <div className="p-5 pb-0">
                    <div className="relative h-[140px] overflow-hidden rounded-sm bg-white">
                      <img src={imageMap[profile.image] || profile.image} alt={`${profile.name} profile`} loading="lazy" className="h-full w-full object-contain" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-meta text-[10px] font-medium uppercase tracking-[0.06em] text-muted-foreground">{profile.code}</p>
                    <h3 className="mt-1 text-[15px] font-bold leading-[1.2] text-foreground">{profile.name}</h3>
                    <p className="mt-1 text-[13px] font-semibold text-accent">Best for: {profile.bestFor}</p>
                    <p className="mt-2 text-[14px] leading-[1.5] text-muted-foreground">{profile.description}</p>

                    {/* Materials by size */}
                    <div className="mt-3 border-t border-border pt-3">
                      {profile.sizes.map((s) => (
                        <div key={s.size}>
                          <p className="font-meta text-[10px] font-medium uppercase tracking-[0.05em] text-muted-foreground">
                            Standard Material: {s.size}
                          </p>
                          <div className="mt-1 space-y-0.5">
                            {s.materials.map((m) => (
                              <p key={m.name} className="font-meta text-[12px] font-medium text-foreground">
                                {m.name} ({m.gauge})
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 mb-4 flex flex-wrap gap-2">
                      <a href="https://www.custombiltmetals.com/request-a-quote/" className="font-meta inline-block rounded-sm bg-accent px-3.5 py-1.5 text-[12px] font-semibold text-accent-foreground transition-opacity hover:opacity-90">Get a Quote</a>
                      <a href="https://www.custombiltmetals.com/locations/" className="font-meta inline-flex items-center gap-1 rounded-sm border border-border px-3 py-1.5 text-[12px] font-semibold text-muted-foreground transition-colors hover:text-foreground">
                        <MapPin className="h-3 w-3" /> Find a Location
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 rounded-sm border border-border bg-surface px-4 py-3">
              <span className="text-[14px] text-muted-foreground">Documents apply across all gutter profiles:</span>
              <a href="https://www.custombiltmetals.com/wp-content/uploads/2021/11/gutter-color-chart.pdf" target="_blank" rel="noopener noreferrer" className="font-meta text-[12px] font-semibold text-info hover:underline">Color Chart ↓</a>
              <a href="https://www.custombiltmetals.com/wp-content/uploads/2015/07/Gutter-Guide-Specs.pdf" target="_blank" rel="noopener noreferrer" className="font-meta text-[12px] font-semibold text-info hover:underline">System Specifications ↓</a>
              <a href="https://www.custombiltmetals.com/wp-content/uploads/2015/07/Gutter-Systems-Component-List-9-15-15.pdf" target="_blank" rel="noopener noreferrer" className="font-meta text-[12px] font-semibold text-info hover:underline">Component List ↓</a>
            </div>
          </div>
        </section>

        {/* S3B — Integrated System */}
        <section id="integrated" className="border-b border-border bg-surface px-8 py-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Integrated Gutter and Roof System</h2>
              <hr className="mt-2 border-t-2 border-foreground" />
              <p className="mt-3 max-w-[580px] text-[14px] leading-[1.5] text-muted-foreground">
                A single continuous system where the roofing panel and gutter are formed as one unit — eliminating the joint between roof and gutter entirely.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <article className="overflow-hidden rounded-sm border border-border bg-card shadow-[var(--card-shadow)]">
                <div className="p-5 pb-0">
                  <div className="relative h-[220px] overflow-hidden rounded-sm bg-white">
                    <img src="https://www.custombiltmetals.com/wp-content/uploads/2015/07/architecturalelements.00451-1024x682.jpg" alt="Integrated roof and gutter system" loading="lazy" className="h-full w-full object-contain" />
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-meta text-[10px] font-medium uppercase tracking-[0.06em] text-muted-foreground">INTEGRATED SYSTEM</p>
                  <h3 className="mt-1 text-[16px] font-bold leading-[1.2] text-foreground">Integrated Gutter and Roof System</h3>
                  <p className="mt-1 text-[14px] font-semibold text-accent">Best for: New construction, premium residential — zero-joint water management</p>
                  <p className="mt-2 text-[14px] leading-[1.5] text-muted-foreground">
                    Roof panel and gutter channel formed as a continuous single piece. Eliminates the most common failure point in conventional roofing.
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-1.5 border-t border-border pt-3">
                    <div><p className="font-meta text-[10px] font-medium uppercase text-muted-foreground">System type</p><p className="font-meta text-[12px] font-medium text-foreground">Roof + gutter combined</p></div>
                    <div><p className="font-meta text-[10px] font-medium uppercase text-muted-foreground">Joint count</p><p className="font-meta text-[12px] font-medium text-green-700">Zero (continuous)</p></div>
                    <div><p className="font-meta text-[10px] font-medium uppercase text-muted-foreground">Material</p><p className="font-meta text-[12px] font-medium text-yellow-600">Confirm w/ branch</p></div>
                    <div><p className="font-meta text-[10px] font-medium uppercase text-muted-foreground">Availability</p><p className="font-meta text-[12px] font-medium text-yellow-600">Region-specific</p></div>
                  </div>
                  <div className="mt-3 mb-4 flex gap-2">
                    <a href="https://www.custombiltmetals.com/request-a-quote/" className="font-meta inline-block rounded-sm bg-accent px-3.5 py-1.5 text-[12px] font-semibold text-accent-foreground">Get a Quote</a>
                    <a href="https://www.custombiltmetals.com/locations/" className="font-meta inline-flex items-center gap-1 rounded-sm border border-border px-3 py-1.5 text-[12px] font-semibold text-muted-foreground hover:text-foreground">
                      <MapPin className="h-3 w-3" /> Find a Location
                    </a>
                  </div>
                </div>
              </article>
              <div className="pt-4">
                <h3 className="mb-4 text-[15px] font-bold leading-[1.2] text-foreground">Why integrated?</h3>
                <div className="space-y-3 text-[14px] leading-[1.5] text-muted-foreground">
                  <p>→ Eliminates the #1 leak point — the roof-to-gutter joint</p>
                  <p>→ Cleaner roofline — no visible gutter bracket hardware</p>
                  <p>→ Matched finish to roofing panel — single color system</p>
                  <p>→ Faster contractor install — one system, one supplier</p>
                </div>
                <p className="font-meta mt-6 text-[12px] text-muted-foreground">⚠ Requires specialist installer — confirm with local CBM branch for contractor referral and regional availability</p>
              </div>
            </div>
          </div>
        </section>

        {/* S3C — Downspouts & Components */}
        <section id="components" className="border-b border-border bg-background px-8 py-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Downspouts &amp; System Components</h2>
              <hr className="mt-2 border-t-2 border-foreground" />
              <p className="mt-3 max-w-[580px] text-[14px] leading-[1.5] text-muted-foreground">
                Complete system components from CBM to ensure profile, color, and gauge match across every element.
              </p>
            </div>
            {/* Single downspout card */}
            <div className="grid grid-cols-1 max-w-[600px]">
              {gutterComponents.map((comp) => (
                <article key={comp.id} className="overflow-hidden rounded-sm border border-border bg-card shadow-[var(--card-shadow)] transition-shadow hover:shadow-[var(--card-shadow-hover)]">
                  <div className="p-5 pb-0">
                    <div className="relative h-[170px] overflow-hidden rounded-sm bg-white">
                      <img src={comp.image} alt={comp.name} loading="lazy" className="h-full w-full object-contain" />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-meta text-[10px] font-medium uppercase tracking-[0.06em] text-muted-foreground">{comp.code}</p>
                    <h3 className="mt-1 text-[16px] font-bold leading-[1.2] text-foreground">{comp.name}</h3>
                    <p className="mt-1 text-[14px] font-semibold text-accent">Best for: {comp.bestFor}</p>
                    <p className="mt-2 text-[14px] leading-[1.5] text-muted-foreground">{comp.description}</p>
                    <div className="mt-3 mb-4 flex flex-wrap gap-2">
                      <a href="https://www.custombiltmetals.com/request-a-quote/" className="font-meta inline-block rounded-sm bg-accent px-3.5 py-1.5 text-[12px] font-semibold text-accent-foreground transition-opacity hover:opacity-90">Get a Quote</a>
                      <a href="https://www.custombiltmetals.com/locations/" className="font-meta inline-flex items-center gap-1 rounded-sm border border-border px-3 py-1.5 text-[12px] font-semibold text-muted-foreground transition-colors hover:text-foreground">
                        <MapPin className="h-3 w-3" /> Find a Location
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {/* Document links — ResourceStrip style */}
            <div className="mt-6 flex flex-wrap gap-3">
              {gutterDocs.map((r) => (
                <a
                  key={r.label}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-meta inline-flex items-center gap-1.5 rounded-sm border border-info px-4 py-2 text-[13px] font-semibold text-info transition-colors hover:bg-info hover:text-background"
                >
                  {r.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* S3D — Iron Man Machines */}
        <section id="machines" className="border-b border-border bg-surface px-8 py-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Iron Man Seamless Rollformers</h2>
              <hr className="mt-2 border-t-2 border-foreground" />
              <p className="mt-3 max-w-[580px] text-[14px] leading-[1.5] text-muted-foreground">
                CBM sells and supports the Iron Man series. Purchase includes free alignment and maintenance for the lifetime of the machine while you remain a CBM customer.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gutterMachines.map((m) => (
                <div key={m.id} className="flex items-start gap-4 rounded-sm border border-border bg-card p-4">
                  <div className="h-12 w-12 flex-shrink-0 rounded-sm bg-muted" />
                  <div>
                    <h3 className="text-[15px] font-bold leading-[1.2] text-foreground">{m.name}</h3>
                    <p className="font-meta mt-1 text-[12px] text-muted-foreground">{m.profile}</p>
                    <div className="mt-3 flex gap-2">
                      <a href={m.specSheet} target="_blank" rel="noopener noreferrer" className="font-meta text-[12px] font-semibold text-info hover:underline">Spec Sheet ↓</a>
                      <a href="https://www.custombiltmetals.com/request-a-quote/" className="font-meta inline-block rounded-sm bg-accent px-3 py-1.5 text-[12px] font-semibold text-accent-foreground">Inquire</a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4 rounded-sm border border-dashed border-border bg-surface p-4">
                <div>
                  <h3 className="text-[14px] font-bold leading-[1.2] text-foreground">Used Machines Available</h3>
                  <p className="mt-1 text-[14px] leading-[1.5] text-muted-foreground">Availability varies by location. Contact your local CBM branch to ask about current used machine inventory.</p>
                  <a href="https://www.custombiltmetals.com/locations/" className="font-meta mt-3 inline-flex items-center gap-1 rounded-sm border border-border px-3 py-1.5 text-[12px] font-semibold text-muted-foreground hover:text-foreground">
                    <MapPin className="h-3 w-3" /> Find a Location
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-sm border-l-[3px] border-accent bg-accent/5 px-4 py-3 text-[14px] text-muted-foreground">
              <strong className="text-foreground">Machine purchase includes:</strong> Manufacturer warranty + free alignment and maintenance for the lifetime of the machine as a CBM customer.
            </div>
          </div>
        </section>

        {/* S4 — Locations */}
        <section className="border-b border-border bg-background px-8 py-12" id="gutter-locations">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Gutter Stock at 10 Locations</h2>
              <hr className="mt-2 border-t-2 border-foreground" />
              <p className="mt-3 max-w-[580px] text-[14px] leading-[1.5] text-muted-foreground">
                Gutter profiles and components are stocked at all CBM branches. Contact your nearest location for availability.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {gutterLocations.map((loc) => (
                <div key={loc.city} className="rounded-sm border border-border bg-card p-3">
                  <p className="text-[14px] font-bold text-foreground">{loc.city}</p>
                  <p className="font-meta mt-1 text-[12px] text-info">{loc.phone}</p>
                </div>
              ))}
            </div>
            <p className="font-meta mt-4 text-[14px] text-muted-foreground">⚠ Profile availability varies by region. Contact location before specifying.</p>
          </div>
        </section>

        {/* S5 — Why CBM Gutters */}
        <section className="border-b border-border bg-surface px-8 py-12">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6">
              <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Why Contractors Choose CBM for Gutters</h2>
              <hr className="mt-2 border-t-2 border-foreground" />
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { num: "Seamless", label: "No Joint, No Leak", sub: "Formed on-site to exact length. No pieced-together sections that sag, leak, or trap debris." },
                { num: "10", label: "Western U.S. Locations", sub: "Stock available from CA, AZ, NV, OR, WA, HI, and ID. Same-day pickup at most branches." },
                { num: "4", label: "Material Options", sub: "Aluminum, steel, copper, and Zincalume®. All finished with Dura Coat XT-10 or natural metal." },
                { num: "1", label: "Supplier: Roof + Gutter", sub: "Match gutter color to roofing panel exactly. One spec, one order, one delivery." },
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

        {/* S6 — SEO Editorial */}
        <section className="border-b border-border bg-background px-8 py-12" id="gutter-guide">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-[200px_1fr]">
            <div>
              <p className="font-meta mb-3 text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground">On This Page</p>
              {["K-Style vs. Half-Round vs. Fascia", "What Size Gutter Do I Need?", "Seamless vs. Sectional Gutters", "Aluminum vs. Copper Gutters", "Gutter Machine Equipment"].map((item) => (
                <div key={item} className="font-meta border-b border-border py-2 text-[12px] font-medium text-info">→ {item}</div>
              ))}
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold leading-[1.2] text-foreground">Seamless Gutter Systems: Profiles, Materials, and Sizing</h2>
              <div className="mb-5">
                <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">K-Style vs. Half-Round vs. Fascia Gutters</h3>
                <p className="text-[14px] leading-[1.5] text-muted-foreground">K-style gutters feature a flat back and decorative front, making them the most popular residential profile in North America. Half-round gutters use a semicircular trough — preferred for historic homes and copper installations. Fascia-style gutters cover the fascia board entirely, creating a sleek, modern roofline.</p>
              </div>
              <div className="mb-5">
                <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">Seamless vs. Sectional: Why Seamless Wins</h3>
                <p className="text-[14px] leading-[1.5] text-muted-foreground">Sectional gutters join pre-cut pieces at seams — every seam is a potential leak point. Seamless gutters are formed on-site to the exact length of the roofline, eliminating joints entirely. The result is a cleaner look, longer lifespan, and dramatically less maintenance.</p>
              </div>
              <div className="mb-5">
                <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">Aluminum vs. Copper Gutters</h3>
                <p className="text-[14px] leading-[1.5] text-muted-foreground">Aluminum is the standard choice — lightweight, corrosion-resistant, available in 20+ painted colors. Copper gutters cost significantly more but develop a distinctive green patina and are the material of choice for historic restoration and premium residential.</p>
              </div>
              <div>
                <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">What Size Gutter for Your Roof?</h3>
                <p className="text-[14px] leading-[1.5] text-muted-foreground">Gutter sizing depends on roof area, pitch, and local rainfall intensity. A 5" gutter handles most residential roofs under 2,400 sq ft. Larger roofs or high-rainfall areas need 6" or 7.25" (super fascia).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dual CTA */}
        <div className="bg-cta">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 sm:grid-cols-2">
            <div className="px-10 py-12">
              <h3 className="text-xl font-bold leading-[1.2] text-cta-foreground">Find Your Nearest Location</h3>
              <p className="mt-2 max-w-sm text-[14px] leading-[1.5] text-cta-foreground/60">Gutter stock is available at 10 CBM branches across the Western U.S. Call ahead to confirm profile and color availability.</p>
              <a href="https://www.custombiltmetals.com/locations/" className="mt-5 inline-flex items-center gap-1.5 rounded-sm bg-accent px-6 py-3 text-[14px] font-bold text-accent-foreground transition-opacity hover:opacity-90">
                Find a Location <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="px-10 py-12" style={{ backgroundColor: 'hsl(197 57% 17%)' }}>
              <h3 className="text-xl font-bold leading-[1.2] text-cta-foreground">Need a Quote?</h3>
              <p className="mt-2 max-w-sm text-[14px] leading-[1.5] text-cta-foreground/60">Tell us your project and a CBM rep will respond same or next business day with sizing, pricing, and machine availability.</p>
              <a href="https://www.custombiltmetals.com/request-a-quote/" className="mt-5 inline-flex items-center gap-1.5 rounded-sm border-2 border-cta-foreground/35 px-6 py-3 text-[14px] font-bold text-cta-foreground transition-colors hover:border-cta-foreground/60">
                Request a Quote <ArrowRight className="h-4 w-4" />
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
              <li className="text-foreground">Gutter Systems</li>
            </ol>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default GutterSystems;
