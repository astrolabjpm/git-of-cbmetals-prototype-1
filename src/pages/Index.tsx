import { useState, useMemo, useRef } from "react";
import SiteNav from "@/components/SiteNav";
import HeroSection from "@/components/HeroSection";
import PageIntro from "@/components/PageIntro";
import CategoryFilter from "@/components/CategoryFilter";
import ProductSection from "@/components/ProductSection";
import ApplicationGrid from "@/components/ApplicationGrid";
import WhyCBM from "@/components/WhyCBM";
import SEOEditorial from "@/components/SEOEditorial";
import DualCTA from "@/components/DualCTA";
import FooterNav from "@/components/FooterNav";
import { categories, products, type ProductCategory } from "@/data/products";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("standing-seam");

  const handleCategoryChange = (cat: ProductCategory) => {
    setActiveCategory(cat);
    const el = document.getElementById(cat);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Standing seam grouped by series
  const cbSeries = useMemo(() => products.filter((p) => p.series === "CB Series"), []);
  const slSeries = useMemo(() => products.filter((p) => p.series === "SL Series"), []);
  const additionalSS = useMemo(() => products.filter((p) => p.series === "Additional Profiles"), []);
  const exposedFastener = useMemo(() => products.filter((p) => p.category === "exposed-fastener"), []);
  const corrugated = useMemo(() => products.filter((p) => p.category === "corrugated"), []);
  const specialty = useMemo(() => products.filter((p) => p.category === "specialty"), []);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Metal Roofing Systems — Custom-Bilt Metals",
            description: "Standing seam, corrugated, wall, and specialty metal roofing panels by Custom-Bilt Metals.",
            numberOfItems: products.length,
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Product",
                name: p.name,
                description: p.description,
                image: p.image,
                brand: { "@type": "Brand", name: "Custom-Bilt Metals" },
              },
            })),
          }),
        }}
      />

      <div className="min-h-screen">
        <SiteNav />
        <HeroSection />
        <PageIntro />
        <CategoryFilter
          categories={categories}
          active={activeCategory}
          onChange={handleCategoryChange}
        />

        {/* S3A — Standing Seam: CB Series */}
        <ProductSection
          id="standing-seam"
          title="Standing Seam — CB Series"
          description={categories[0].description}
          products={cbSeries}
          columns={3}
        />

        {/* S3A cont. — SL Series */}
        <ProductSection
          id="sl-series"
          title="Standing Seam — SL Series"
          description="Snap-lock and mechanical seam options across three seam heights. Concealed fastener, onsite roll-forming available."
          products={slSeries}
          columns={3}
          altBg
        />

        {/* SLZ-1000, CS-100, Vintage */}
        <ProductSection
          id="additional-ss"
          title="Additional Standing Seam Profiles"
          description="Zee-profile, clip seam, and vintage standing seam options for specialized applications."
          products={additionalSS}
          columns={3}
        />

        {/* S3B — Exposed Fastener */}
        <ProductSection
          id="exposed-fastener"
          title="Exposed Fastener Panels"
          description={categories[1].description}
          products={exposedFastener}
          columns={2}
          altBg
          callout={
            <div className="mt-4 rounded-sm border-l-[3px] border-accent bg-accent/5 px-4 py-3 text-[14px] leading-[1.4] text-muted-foreground">
              <strong className="text-foreground">TFR-36 or PBR?</strong> — TFR-36 for roof/wall combos needing skylight compatibility. PBR for structural overlap and ag builds. Not sure —{" "}
              <a href="https://www.custombiltmetals.com/request-a-quote/" className="font-semibold text-accent hover:underline">
                talk to a rep.
              </a>
            </div>
          }
        />

        {/* S3C — Corrugated & Wall */}
        <ProductSection
          id="corrugated"
          title="Corrugated & Wall Panels"
          description={categories[2].description}
          products={corrugated}
          columns={2}
        />

        {/* S3D — Specialty */}
        <ProductSection
          id="specialty"
          title="Specialty & Bare Metal"
          description={categories[3].description}
          products={specialty}
          columns={4}
          compact
          altBg
          callout={
            <p className="font-meta mt-4 text-[13px] text-muted-foreground">
              Architects: CAD files, full specifications, and fire ratings available in the{" "}
              <a href="https://www.custombiltmetals.com/resources/" className="font-semibold text-info underline">
                Resources Library →
              </a>
            </p>
          }
        />

        <ApplicationGrid />
        <WhyCBM />
        <SEOEditorial />
        <DualCTA />
        <FooterNav />

        {/* Footer breadcrumb */}
        <footer className="border-t border-border bg-background px-8 py-6 text-center text-[13px] text-muted-foreground">
          <nav aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-1">
              <li><a href="https://www.custombiltmetals.com" className="hover:text-foreground">Home</a></li>
              <li>/</li>
              <li><a href="https://www.custombiltmetals.com/products/" className="hover:text-foreground">Products</a></li>
              <li>/</li>
              <li className="text-foreground">Roofing Systems</li>
            </ol>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Index;
