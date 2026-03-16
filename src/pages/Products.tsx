import { Link } from "react-router-dom";
import SiteNav from "@/components/SiteNav";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-products.jpg";

const productPages = [
  {
    title: "Metal Roofing Systems",
    description: "Standing seam, exposed fastener, corrugated, and specialty metal roofing panels. Concealed and exposed fastener options with PVDF coatings, Cool Roof technology, and onsite roll forming.",
    href: "/",
    products: "CB-2000 · SL Series · TFR-36 · PBR · Corrugated · Copper · Zinc · A606",
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-2000.jpg",
  },
  {
    title: "Seamless Gutter Systems",
    description: "K-style, half-round, and fascia seamless gutters in aluminum, steel, copper, and Zincalume. Formed on-site. Includes downspouts, components, and Iron Man rollforming machines.",
    href: "/gutter-systems",
    products: "K-Style · Half-Round · Fascia · Integrated · Iron Man Machines",
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-150.jpg",
  },
  {
    title: "Wall, Soffit & Airflow Panels",
    description: "Concealed and exposed fastener wall and soffit panels for commercial, residential, and agricultural applications. LEED-compliant. ULTRA-Cool® coated.",
    href: "/walls-soffits",
    products: "WS-100 · Corrugated Wall · TFR-36 Wall · PBR Wall",
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/corrugated-1.jpg",
  },
  {
    title: "Specialty & Bare Metals",
    description: "Copper, zinc, weathering steel, aluminum, and specialty shingles for architectural projects demanding natural patina and premium aesthetics.",
    href: "/specialty",
    products: "Copper · Rheinzink® · Zincalume® · A606 · Vail® · Vintage®",
    image: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/CB-2000.jpg",
  },
];

const Products = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Products — Custom-Bilt Metals",
          description: "Metal roofing, gutter, and wall panel systems by Custom-Bilt Metals.",
          numberOfItems: productPages.length,
        }),
      }}
    />
    <div className="min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="relative min-h-[420px]">
        <img src={heroImg} alt="Metal roof homes in western US mountains" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/40 to-transparent" />
        <div className="relative mx-auto max-w-[1200px] px-8 py-20 sm:py-28 lg:px-10">
          <p className="font-meta mb-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary-foreground/70">
            Custom-Bilt Metals Product Lines
          </p>
          <h1 className="max-w-[600px] text-[36px] font-bold leading-[1.2] text-primary-foreground sm:text-[44px]">
            Products
          </h1>
          <p className="mt-4 max-w-[520px] text-[14px] leading-[1.4] text-primary-foreground/65">
            Custom-Bilt Metals makes some of the finest metal roofing and seamless rain gutter systems on the market today. They protect any building from the worst Mother Nature dishes out and are made to stand the test of time.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.custombiltmetals.com/request-a-quote/" className="inline-flex items-center gap-1.5 rounded-sm bg-accent px-5 py-3 text-[13px] font-semibold text-accent-foreground transition-opacity hover:opacity-90">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="https://www.custombiltmetals.com/locations/" className="inline-flex items-center gap-1.5 rounded-sm border-2 border-primary-foreground/50 px-5 py-3 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
              Find a Location <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Product Pages */}
      <section className="border-b border-border bg-background px-8 py-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Product Categories</h2>
            <div className="mt-2 h-[2px] w-12 bg-foreground" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {productPages.map((page) => (
              <Link
                key={page.title}
                to={page.href}
                className="group overflow-hidden rounded-sm border border-border bg-card shadow-[var(--card-shadow)] transition-shadow hover:shadow-[var(--card-shadow-hover)]"
              >
                <div className="p-4 pb-0">
                  <div className="relative h-[240px] overflow-hidden rounded-sm bg-muted">
                    <img src={page.image} alt={page.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[16px] font-bold leading-[1.2] text-foreground group-hover:text-accent transition-colors">{page.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.4] text-muted-foreground">{page.description}</p>
                  <p className="font-meta mt-3 text-[12px] font-medium text-info">{page.products}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-accent">
                    Browse Products <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-border bg-surface px-8 py-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "40+", label: "Years Since 1980", sub: "Serving the Western U.S. with quality metal building products." },
              { num: "9", label: "Branch Locations", sub: "CA, AZ, NV, OR, WA, and HI. Same-day pickup at most branches." },
              { num: "1", label: "Supplier for Everything", sub: "Roof, wall, soffit, gutter, and trim — guaranteed color match." },
              { num: "1-day", label: "Same-Day Quotes", sub: "Quotes returned same or next business day. Every time." },
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

      {/* Dual CTA */}
      <div className="bg-cta">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 sm:grid-cols-2">
          <div className="px-10 py-12">
            <h3 className="text-xl font-bold leading-[1.2] text-cta-foreground">Ready to Get a Quote?</h3>
            <p className="mt-2 max-w-sm text-[14px] leading-[1.4] text-cta-foreground/60">Tell us your project and a CBM rep will respond same or next business day with pricing and availability.</p>
            <a href="https://www.custombiltmetals.com/request-a-quote/" className="mt-5 inline-flex items-center gap-1.5 rounded-sm bg-accent px-6 py-3 text-[14px] font-bold text-accent-foreground">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="px-10 py-12" style={{ backgroundColor: 'hsl(197 57% 17%)' }}>
            <h3 className="text-xl font-bold leading-[1.2] text-cta-foreground">Need Specs or CAD Files?</h3>
            <p className="mt-2 max-w-sm text-[14px] leading-[1.4] text-cta-foreground/60">Download spec sheets, installation guides, CAD details, and color charts from our resource library.</p>
            <a href="https://www.custombiltmetals.com/resources/" className="mt-5 inline-flex items-center gap-1.5 rounded-sm border-2 border-cta-foreground/35 px-6 py-3 text-[14px] font-bold text-cta-foreground">
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
            <li className="text-foreground">Products</li>
          </ol>
        </nav>
      </footer>
    </div>
  </>
);

export default Products;
