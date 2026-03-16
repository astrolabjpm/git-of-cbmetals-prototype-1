import SiteNav from "@/components/SiteNav";
import { ArrowRight, Droplets, Shield, Paintbrush, Layers, Factory, Gem, Home, Hammer } from "lucide-react";
import heroImg from "@/assets/hero-specialty.jpg";

const bareMetals = [
  {
    code: "COPPER",
    name: "True Copper",
    description: "16 oz. natural copper develops a rich verdigris patina over time. A living finish that evolves with the environment — ideal for architectural accents, custom homes, and restoration projects.",
    icon: Gem,
    tags: ["Natural Patina", "Premium Residential", "Heritage"],
  },
  {
    code: "RHEINZINK®",
    name: "Rheinzink® Pre-Weathered Zinc",
    description: "Pre-aged zinc with a distinctive blue-grey finish. Specified for European-inspired architectural projects and high-end commercial applications.",
    icon: Shield,
    tags: ["Pre-Weathered", "Architectural", "Blue-Grey"],
  },
  {
    code: "ZINCALUME+",
    name: "Bare Zincalume® Plus",
    description: "Zinc-aluminum coated bare steel delivering the classic bright metallic appearance without paint. Cost-efficient option for traditional metal roofing aesthetics.",
    icon: Layers,
    tags: ["Bare Metallic", "Cost-Efficient", "Traditional"],
  },
  {
    code: "A606",
    name: "A606 Weathering Steel",
    description: "Cor-Ten style steel that develops a stable, self-protecting rust-orange patina. Specified for dramatic commercial and residential builds with an industrial aesthetic.",
    icon: Factory,
    tags: ["Rust Patina", "Industrial", "Self-Protecting"],
  },
  {
    code: "ALUMINUM",
    name: "Bare & Coated Aluminum",
    description: "Bare and PVDF-coated aluminum panels for enhanced durability. Coastal and marine-grade options with manufacturer-backed corrosion warranties.",
    icon: Droplets,
    tags: ["Marine-Grade", "Corrosion Resistant", "Coastal"],
  },
];

const specialtyProducts = [
  {
    code: "COPPER SHINGLES",
    name: "Copper Shingles",
    description: "Premium copper shingles for residential and heritage restoration projects. Natural patina finish develops over time.",
    icon: Home,
  },
  {
    code: "VAIL®",
    name: "Vail® Shingles",
    description: "Contemporary shingle profile with a mountain aesthetic. Designed for modern residential projects.",
    icon: Paintbrush,
  },
  {
    code: "CUSTOM FLAT",
    name: "Custom Flat Shingles",
    description: "Architect-specified flat shingles available in custom dimensions. For unique residential and commercial designs.",
    icon: Hammer,
  },
  {
    code: "VINTAGE",
    name: "Vintage® Standing Seam",
    description: "Classic standing seam aesthetic with a traditional profile. Available in specialty print coats and bare metals.",
    icon: Gem,
  },
];

const availableProfiles = [
  "Contour",
  "SL-1750",
  "CB-150",
  "CB-2000",
  "Bermuda",
  "WS-100",
];

const whySpecialty = [
  "Distinct architectural appearance",
  "Long-term durability",
  "Coastal-ready aluminum options",
  "Custom fabrication capabilities",
  "Low maintenance performance",
  "Ideal for accent walls, roofs, façades, and design features",
];

const Specialty = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Specialty Metal Roofing & Architectural Panels — Custom-Bilt Metals",
          description: "Copper, zinc, weathering steel, aluminum, and specialty shingles for architectural metal roofing.",
        }),
      }}
    />
    <div className="min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[420px]">
        <img src={heroImg} alt="Specialty metal roofing on western US architecture" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/40 to-transparent" />
        <div className="relative mx-auto max-w-[1200px] px-8 py-20 sm:py-28 lg:px-10">
          <p className="font-meta mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary-foreground/70">
            Custom-Bilt Metals · Specialty Products
          </p>
          <h1 className="max-w-[640px] text-[36px] font-bold leading-[1.2] text-primary-foreground sm:text-[44px]">
            Specialty Metal Roofing &amp; Architectural Panels
          </h1>
          <p className="mt-4 max-w-[520px] text-[14px] leading-[1.4] text-primary-foreground/65">
            Bare metal products — copper, zinc, and weathering steel for natural patina. We offer all of our product profiles in copper, zinc, and bare Zincalume® for a traditional metal look.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.custombiltmetals.com/request-a-quote/" className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-5 py-3 text-[13px] font-semibold text-accent-foreground transition-opacity hover:opacity-90">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://www.custombiltmetals.com/contact-us/" className="inline-flex items-center gap-1.5 rounded-sm border-2 border-primary-foreground/50 px-5 py-3 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
              Contact Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-border bg-background px-8 py-12">
        <div className="mx-auto max-w-[1200px]">
          <p className="max-w-[800px] text-[16px] leading-[1.4] text-muted-foreground">
            Elevate your project with the distinctive beauty and performance of specialty metal roofing and architectural metal panels. Designed for projects that demand visual impact and long-term durability, our specialty products combine natural metal finishes with advanced fabrication options.
          </p>
        </div>
      </section>

      {/* Natural Bare Metal Finishes */}
      <section className="border-b border-border bg-background px-8 py-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Natural Bare Metal Finishes</h2>
            <div className="mt-2 h-[2px] w-12 bg-foreground" />
            <p className="mt-3 max-w-[700px] text-[14px] leading-[1.4] text-muted-foreground">
              The design of a building can be dramatically enhanced by the authentic look of bare metal roofing. Because our natural bare metal products contain no reflective or emissive coatings, they maintain their raw, traditional metal appearance.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bareMetals.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.code}
                  className="rounded-sm border border-border bg-card p-6 shadow-[var(--card-shadow)] transition-shadow hover:shadow-[var(--card-shadow-hover)]"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-surface">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-meta text-[12px] uppercase tracking-wide text-muted-foreground">{item.code}</p>
                      <h3 className="text-[16px] font-bold leading-[1.2] text-foreground">{item.name}</h3>
                    </div>
                  </div>
                  <p className="text-[14px] leading-[1.4] text-muted-foreground">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-sm bg-surface px-2 py-0.5 text-[12px] font-medium text-info">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty Shingles & Products */}
      <section className="border-b border-border bg-surface px-8 py-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Specialty Shingles &amp; Products</h2>
            <div className="mt-2 h-[2px] w-12 bg-foreground" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specialtyProducts.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.code}
                  className="rounded-sm border border-border bg-card p-5 shadow-[var(--card-shadow)] transition-shadow hover:shadow-[var(--card-shadow-hover)]"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-sm bg-surface">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <p className="font-meta text-[12px] uppercase tracking-wide text-muted-foreground">{item.code}</p>
                  <h3 className="mt-1 text-[16px] font-bold leading-[1.2] text-foreground">{item.name}</h3>
                  <p className="mt-2 text-[14px] leading-[1.4] text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Available Panel Profiles */}
      <section className="border-b border-border bg-background px-8 py-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Specialty Panel Profiles</h2>
            <div className="mt-2 h-[2px] w-12 bg-foreground" />
            <p className="mt-3 max-w-[700px] text-[14px] leading-[1.4] text-muted-foreground">
              We manufacture and supply multiple architectural panel profiles available in select metals and finishes for both residential and commercial applications.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {availableProfiles.map((profile) => (
              <div
                key={profile}
                className="flex items-center justify-center rounded-sm border border-border bg-card px-4 py-5 text-center text-[14px] font-bold text-foreground shadow-[var(--card-shadow)]"
              >
                {profile}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Specialty */}
      <section className="border-b border-border bg-surface px-8 py-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-6">
            <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Why Choose Specialty Metal Roofing?</h2>
            <div className="mt-2 h-[2px] w-12 bg-foreground" />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whySpecialty.map((reason) => (
              <div key={reason} className="flex items-start gap-2.5 rounded-sm border border-border bg-card p-4">
                <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span className="text-[14px] leading-[1.4] text-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-cta">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 sm:grid-cols-2">
          <div className="px-10 py-12">
            <h3 className="text-xl font-bold leading-[1.2] text-cta-foreground">Designing or Building a New Project?</h3>
            <p className="mt-2 max-w-sm text-[14px] leading-[1.4] text-cta-foreground/60">Contact us today to discuss your specialty metal roofing project or request product specifications.</p>
            <a href="https://www.custombiltmetals.com/request-a-quote/" className="mt-5 inline-flex items-center gap-1.5 rounded-sm bg-accent px-6 py-3 text-[14px] font-bold text-accent-foreground">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="px-10 py-12" style={{ backgroundColor: 'hsl(197 57% 17%)' }}>
            <h3 className="text-xl font-bold leading-[1.2] text-cta-foreground">Need Specs or Data Sheets?</h3>
            <p className="mt-2 max-w-sm text-[14px] leading-[1.4] text-cta-foreground/60">Download spec sheets, installation guides, and CAD details from our resource library.</p>
            <a href="https://www.custombiltmetals.com/resources/" className="mt-5 inline-flex items-center gap-1.5 rounded-sm border-2 border-cta-foreground/35 px-6 py-3 text-[14px] font-bold text-cta-foreground">
              See Product Data Sheets <ArrowRight className="h-4 w-4" />
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
            <li className="text-foreground">Specialty</li>
          </ol>
        </nav>
      </footer>
    </div>
  </>
);

export default Specialty;
