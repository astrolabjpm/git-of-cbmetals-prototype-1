import SiteNav from "@/components/SiteNav";
import FooterNav from "@/components/FooterNav";
import DualCTA from "@/components/DualCTA";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-specialty.jpg";
import imgCopper from "@/assets/specialty-copper.jpg";
import imgAlloy from "@/assets/specialty-alloy.jpg";
import imgSL1750 from "@/assets/specialty-sl1750.jpg";
import imgA606 from "@/assets/specialty-a606.jpg";
import imgFlatShingles from "@/assets/specialty-flat-shingles.jpg";
import imgVintage from "@/assets/specialty-vintage.jpg";

const specialtyProducts = [
  {
    code: "A606",
    name: "A606 Weathering Steel",
    description:
      "Cor-Ten style steel that develops a stable, self-protecting rust-orange patina. Specified for dramatic commercial and residential builds with an industrial aesthetic.",
    image: imgA606,
  },
  {
    code: "CUSTOM FLAT",
    name: "Custom Flat Shingles",
    description:
      "Architect-specified flat shingles available in custom dimensions. For unique residential and commercial designs.",
    image: imgFlatShingles,
  },
  {
    code: "SPECIALTY ALLOYS",
    name: "Specialty Alloys",
    description:
      "Rheinzink® pre-weathered zinc and other specialty alloys with distinctive finishes. Specified for European-inspired architectural projects and high-end commercial applications.",
    image: imgAlloy,
  },
  {
    code: "SL-1750 ALUMINUM",
    name: "Profile: SL-1750 Aluminum",
    description:
      "Bare and PVDF-coated aluminum panels for enhanced durability. Coastal and marine-grade options with manufacturer-backed corrosion warranties.",
    image: imgSL1750,
  },
  {
    code: "COPPER SHINGLES",
    name: "Copper Shingles",
    description:
      "Premium 16 oz. natural copper shingles for residential and heritage restoration projects. A living finish that develops a rich verdigris patina over time.",
    image: imgCopper,
  },
  {
    code: "VINTAGE®",
    name: "Vintage® Standing Seam",
    description:
      "Classic standing seam aesthetic with a traditional profile. Available in specialty print coats and bare metals.",
    image: imgVintage,
  },
];

const onThisPage = [
  {
    id: "specialty-products",
    label: "Specialty Products",
    blurb: "A606, copper, aluminum, zinc, alloys, and shingles",
  },
  {
    id: "resources-specs",
    label: "Resources & Specs",
    blurb: "Quotes, specs, and data sheets",
  },
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
          description:
            "Copper, zinc, weathering steel, aluminum, and specialty shingles for architectural metal roofing.",
        }),
      }}
    />
    <div className="min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[420px]">
        <img
          src={heroImg}
          alt="Specialty metal roofing on western US architecture"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/40 to-transparent" />
        <div className="relative px-8">
          <div className="mx-auto max-w-[1200px] py-20 sm:py-28">
            <div className="max-w-[680px]">
              <p className="font-meta mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary-foreground/70">
                Specialty Metal Roofing &amp; Custom Architectural Panels
              </p>
              <h1 className="text-[36px] font-bold leading-[1.2] text-primary-foreground sm:text-[44px]">
                Bare Metal Products:
                <br />
                Copper, Zinc, and Weathering Steel for Natural Patina
              </h1>
              <p className="mt-4 text-[20px] font-semibold leading-[1.5] text-primary-foreground/65">
                We offer all of our product profiles in copper, Zinc and bare
                Zincalume® for a traditional metal look.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.custombiltmetals.com/request-a-quote/"
                  className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-5 py-3 text-[13px] font-semibold text-accent-foreground transition-colors hover:bg-accent-hover hover:shadow-sm"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.custombiltmetals.com/contact-us/"
                  className="inline-flex items-center gap-1.5 rounded-sm border-2 border-primary-foreground/50 px-5 py-3 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/15 hover:border-primary-foreground/70"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On This Page */}
      <section className="bg-secondary px-8 py-10">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-meta mb-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
            On This Page
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {onThisPage.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group block border-t-[4px] border-foreground pt-3 transition-colors hover:border-accent"
              >
                <span className="flex items-center justify-between text-[14px] font-bold text-foreground group-hover:text-accent">
                  {item.label}
                  <ChevronDown className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-accent" />
                </span>
                <p className="mt-1 text-[13px] leading-[1.5] text-muted-foreground">
                  {item.blurb}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Products */}
      <section
        id="specialty-products"
        className="border-b border-border bg-background px-8 py-12"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold leading-[1.2] text-foreground">
              Specialty Metal Roofing &amp; Architectural Panels
            </h2>
            <hr className="mt-2 border-t-2 border-foreground" />
            <div className="mt-3 max-w-[800px] space-y-3 text-[14px] leading-[1.6] text-muted-foreground">
              <p>
                Elevate your project with the distinctive beauty and performance
                of specialty metal roofing and architectural metal panels.
                Designed for projects that demand visual impact and long-term
                durability, our specialty products combine natural metal finishes
                with advanced fabrication options.
              </p>
              <p>
                The design of a building can be dramatically enhanced by the
                authentic look of bare metal roofing. Materials like true copper
                naturally develop a rich patina over time, creating a living
                finish that evolves with the environment. These products are
                ideal for architectural accents, custom homes, commercial
                buildings, and restoration projects seeking timeless appeal.
                Because our natural bare metal products contain no reflective or
                emissive coatings, they maintain their raw, traditional metal
                appearance.
              </p>
              <p>
                We also offer bare and coated aluminum panels, including select
                PVDF-coated finishes engineered for enhanced durability. For
                coastal and marine environments, qualifying aluminum products
                include manufacturer-backed warranties for corrosion resistance
                and long-term performance.
              </p>
              <p className="text-[13px] text-foreground font-semibold">
                Specialty metals and alloys available include A606 Weathering
                Steel, Copper, Aluminum, Zinc, Bare Zincalume Plus®, and
                Vintage® and specialty print coats — plus custom flat and Vail®
                shingles. Available across CBM panel profiles including Contour,
                SL-1750, CB-150, CB-2000, Bermuda, and WS-100.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specialtyProducts.map((item) => (
              <div
                key={item.code}
                className="flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-[var(--card-shadow)] transition-shadow hover:shadow-[var(--card-shadow-hover)]"
              >
                {item.image && (
                  <div className="p-5 pb-0">
                    <div className="relative h-[170px] overflow-hidden rounded-sm bg-white">
                      <img
                        src={item.image}
                        alt={`${item.name} metal roofing`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <p className="font-meta text-[10px] font-medium uppercase tracking-[0.06em] text-muted-foreground">
                    {item.code}
                  </p>
                  <h3 className="mt-1 text-[16px] font-bold leading-[1.2] text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.5] text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose */}
          <div className="mt-10 max-w-[800px]">
            <h3 className="text-[16px] font-bold text-foreground">
              Why Choose Specialty Metal Roofing?
            </h3>
            <ul className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2 text-[14px] leading-[1.6] text-muted-foreground">
              <li>• Distinct architectural appearance</li>
              <li>• Long-term durability</li>
              <li>• Coastal-ready aluminum options</li>
              <li>• Custom fabrication capabilities</li>
              <li>• Low maintenance performance</li>
              <li>• Ideal for accent walls, roofs, façades, and design features</li>
            </ul>
            <p className="mt-3 text-[14px] leading-[1.6] text-muted-foreground">
              Whether you're designing a custom residence, commercial building,
              or architectural statement piece, Custom-Bilt Metals provides the
              premium specialty metal solutions to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div id="resources-specs">
        <DualCTA />
      </div>

      {/* Footer */}
      <FooterNav />
    </div>
  </>
);

export default Specialty;
