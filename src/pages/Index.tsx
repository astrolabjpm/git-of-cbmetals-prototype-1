import { useMemo } from "react";
import SiteNav from "@/components/SiteNav";
import ProductCard from "@/components/ProductCard";
import HeroSection from "@/components/HeroSection";
import PageIntro from "@/components/PageIntro";
import ProductSection from "@/components/ProductSection";
import ApplicationGrid from "@/components/ApplicationGrid";
import WhyCBM from "@/components/WhyCBM";
import SEOEditorial from "@/components/SEOEditorial";
import ResourceStrip from "@/components/ResourceStrip";
import DualCTA from "@/components/DualCTA";
import FooterNav from "@/components/FooterNav";
import { categories, products } from "@/data/products";

const Index = () => {
  const cbSeries = useMemo(() => products.filter((p) => p.series === "CB Series"), []);
  const slSeries = useMemo(() => products.filter((p) => p.series === "SL Series"), []);
  const additionalSS = useMemo(() => products.filter((p) => p.series === "Additional Profiles"), []);
  const exposedFastener = useMemo(() => products.filter((p) => p.category === "exposed-fastener"), []);
  const shakesShingles = useMemo(() => products.filter((p) => p.category === "shakes-shingles"), []);
  const corrugated = useMemo(() => products.filter((p) => p.category === "corrugated"), []);

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

        {/* Standing Seam: CB Series */}
        <ProductSection
          id="standing-seam"
          title="Standing Seam — CB Series"
          description={categories[0].description}
          products={cbSeries}
          columns={3}
        />

        {/* SL Series */}
        <ProductSection
          id="sl-series"
          title="Standing Seam — SL Series"
          description="Snap-lock and mechanical seam options across three seam heights. Concealed fastener, onsite roll-forming available."
          products={slSeries}
          columns={3}
        />

        {/* Additional Profiles */}
        <ProductSection
          id="additional-ss"
          title="Additional Standing Seam Profiles"
          description="Zee-profile, clip seam, and vintage standing seam options for specialized applications."
          products={additionalSS}
          columns={3}
        />

        {/* Exposed Fastener */}
        <ProductSection
          id="exposed-fastener"
          title="Exposed Fastener Panels"
          description={categories[1].description}
          products={exposedFastener}
          columns={2}
          callout={
            <div className="mt-4 rounded-sm border-l-[3px] border-accent bg-accent/5 px-4 py-3 text-[14px] leading-[1.5] text-muted-foreground">
              <strong className="text-foreground">TFR-36 or PBR?</strong> — TFR-36 for roof/wall combos needing skylight compatibility. PBR for structural overlap and ag builds. Not sure —{" "}
              <a href="https://www.custombiltmetals.com/request-a-quote/" className="font-semibold text-accent hover:underline">
                talk to a rep.
              </a>
            </div>
          }
        />

        {/* Shakes & Shingles + Corrugated side by side */}
        <section id="shakes-shingles" className="px-8 py-12 bg-background">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Shakes & Shingles */}
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Aluminum Shakes & Shingles</h2>
                  <hr className="mt-2 border-t-2 border-foreground" />
                  <p className="mt-3 text-[14px] leading-[1.5] text-muted-foreground">
                    {categories[2].description}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {shakesShingles.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>

              {/* Corrugated */}
              <div id="corrugated">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Corrugated Metal Panels</h2>
                  <hr className="mt-2 border-t-2 border-foreground" />
                  <p className="mt-3 text-[14px] leading-[1.5] text-muted-foreground">
                    {categories[3].description}
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {corrugated.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ApplicationGrid />
        <WhyCBM />
        <SEOEditorial />
        <ResourceStrip />
        <DualCTA />
        <FooterNav />

        {/* Footer breadcrumb */}
        <footer className="border-t border-border bg-background px-8 py-6 text-center text-[14px] text-muted-foreground">
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
