import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import cbmLogo from "@/assets/cbm-logo.png";

/* ── types ── */
type MenuName = "products" | "gallery" | "resources" | "locations" | "about" | null;

interface ProductLink {
  code: string;
  name: string;
  desc: string;
  href?: string;
}

/* ── data ── */
const productCategories = [
  {
    id: "roofing",
    label: "Roofing Systems",
    count: "13 profiles · Standing seam + exposed fastener",
    href: "/",
    sections: [
      {
        heading: "Standing Seam — CB Series (concealed fastener)",
        items: [
          { code: "CB-2000", name: '2" Seam Standing Seam', desc: "Most popular · Residential + commercial" },
          { code: "CB-150", name: '1.5" Seam Standing Seam', desc: "Residential · Lower pitch applications" },
          { code: "CB-100", name: '1" Seam Standing Seam', desc: "Residential · Low-profile aesthetic" },
        ],
      },
      {
        heading: "Standing Seam — SL Series (snap-lock)",
        items: [
          { code: "SL-1750", name: '1.75" Snap-Lock', desc: "Commercial + faster-install residential" },
          { code: "SL-150", name: '1.5" Snap-Lock', desc: "Residential · Mid-pitch" },
          { code: "SL-100", name: '1" Snap-Lock', desc: "Low-profile residential" },
        ],
      },
      {
        heading: "Additional Standing Seam",
        items: [
          { code: "SLZ-1000", name: "Snap-Lock Zee", desc: '1" zee profile · Residential + light commercial' },
          { code: "CS-100", name: "Cap Seam", desc: "Concealed clip · Architectural + commercial" },
          { code: "Vintage", name: "Vintage Profile", desc: "Traditional profile · Heritage residential" },
          { code: "SHAKES", name: "Aluminum Shakes & Shingles", desc: "120 mph wind rated · 98% recycled · Cool Roof" },
        ],
      },
      {
        heading: "Exposed Fastener",
        items: [
          { code: "TFR-36", name: "TFR-36 Panel", desc: "Exposed fastener · 36\" coverage · Roof + wall" },
          { code: "PBR", name: "PBR Panel", desc: "Structural overlap · Ag + heavy commercial" },
        ],
      },
      {
        heading: "Corrugated & Wall",
        items: [
          { code: "Corrugated", name: "Corrugated Panel", desc: "Classic profile · Roof + wall · Ag + residential" },
        ],
      },
    ],
  },
  {
    id: "gutters",
    label: "Gutter Systems",
    count: "K-style · Half-round · Fascia · Super Fascia",
    href: "/gutter-systems",
    sections: [
      {
        heading: "Seamless Gutter Profiles",
        items: [
          { code: "K-STYLE", name: "K-Style / O.G. Gutter", desc: '5" & 6" · Most common profile · Al, Cu, Steel' },
          { code: "HALF-ROUND", name: "Half-Round Gutter", desc: '5" & 6" · Historic + premium residential · Copper' },
          { code: "FASCIA", name: "Fascia Style Gutter", desc: '5.5" & 6" · Contemporary clean roofline' },
          { code: "SUPER FASCIA", name: "Super/Deep Fascia", desc: '7.25" · High-volume drainage · Cu + Steel only' },
        ],
      },
      {
        heading: "Equipment",
        items: [
          { code: "IRON MAN", name: "Seamless Rollformers", desc: '5", 5/6", 6" Half-Round, 5.5" Fascia — free alignment for life' },
        ],
      },
    ],
  },
];

const secondaryCategories = [
  {
    id: "walls",
    label: "Walls, Soffits & Airflow",
    count: "Wall panels · Soffit · Vented options",
    href: "/walls-soffits",
    sections: [
      {
        heading: "Wall & Soffit Panels",
        items: [
          { code: "WS-100", name: "Wall & Soffit Panel", desc: '1" concealed fastener · 12" width · Vented option · LEED' },
          { code: "CORRUGATED", name: "Corrugated Wall Panel", desc: '7/8" corrugation · Bare metal options · ULTRA-Cool®' },
        ],
      },
      {
        heading: "Roof + Wall Panels",
        items: [
          { code: "TFR-36", name: "TFR-36 Panel", desc: "36\" coverage · Polycarbonate skylight match · Commercial + ag" },
          { code: "PBR", name: "PBR Panel", desc: "Structural overlap · 26ga + 24ga · Heavy commercial + ag" },
        ],
      },
    ],
  },
  {
    id: "specialty",
    label: "Specialty & Bare Metals",
    href: "/specialty",
    sections: [
      {
      heading: "Bare Metals & Alloys",
        items: [
          { code: "A606", name: "A606 Weathering Steel", desc: "Rust-orange patina · Self-protecting · Design-forward" },
          { code: "SPECIALTY ALLOYS", name: "Specialty Alloys (Rheinzink®)", desc: "Blue-grey · Pre-aged finish · Architectural" },
          { code: "SL-1750 ALUMINUM", name: "SL-1750 Aluminum", desc: "Bare + PVDF-coated · Coastal + marine-grade options" },
        ],
      },
      {
        heading: "Specialty Profiles & Shingles",
        items: [
          { code: "VINTAGE®", name: "Vintage® Standing Seam", desc: "Traditional profile · Specialty print coats + bare metals" },
          { code: "COPPER SHINGLES", name: "Copper Shingles", desc: "Premium residential · Heritage restoration" },
          { code: "CUSTOM FLAT", name: "Custom Flat Shingles", desc: "Architect-specified · Custom dimensions" },
        ],
      },
    ],
  },
];

const galleryCards = [
  { label: "Commercial", sub: "Standing seam · Retail · Office" },
  { label: "Residential", sub: "Homes · Standing seam · Gutters" },
  { label: "Institutional", sub: "Schools · Civic · Healthcare" },
];

const locationData = [
  {
    state: "California",
    cities: [
      { city: "Chino", phone: "(909) 664-1587" },
      { city: "McClellan (Sacramento)", phone: "(916) 333-5680" },
      { city: "San Jose", phone: "(408) 433-0823" },
      { city: "Van Nuys", phone: "(747) 998-2258" },
    ],
  },
  {
    state: "Washington",
    cities: [
      { city: "Lakewood", phone: "(253) 872-7330" },
      { city: "Spokane", phone: "(509) 533-1703" },
    ],
  },
  {
    state: "Oregon",
    cities: [{ city: "Portland", phone: "(503) 256-3328" }],
  },
  {
    state: "Arizona",
    cities: [{ city: "Phoenix", phone: "(602) 484-7015" }],
  },
  {
    state: "Hawaii",
    cities: [{ city: "Honolulu", phone: "(808) 845-1806" }],
  },
];

/* ── Component ── */
const SiteNav = () => {
  const [activeMenu, setActiveMenu] = useState<MenuName>(null);
  const [activeCategory, setActiveCategory] = useState("roofing");
  const [mobileOpen, setMobileOpen] = useState(false);
  const aboutBtnRef = useRef<HTMLButtonElement>(null);
  const [aboutLeft, setAboutLeft] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  const closeAll = useCallback(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    closeAll();
  }, [location.pathname, closeAll]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [closeAll]);

  const toggleMenu = (name: MenuName) => {
    setActiveMenu((prev) => (prev === name ? null : name));
    if (name === "about" && aboutBtnRef.current) {
      const rect = aboutBtnRef.current.getBoundingClientRect();
      setAboutLeft(rect.left);
    }
  };

  const allCategories = [...productCategories, ...secondaryCategories];
  const currentCat = allCategories.find((c) => c.id === activeCategory);

  return (
    <>
      <nav
        ref={navRef}
        className="z-50 border-b border-border bg-background"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-[70px] max-w-[1400px] items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeAll}>
            <img src={cbmLogo} alt="Custom-Bilt Metals" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav triggers */}
          <div className="hidden h-full items-center lg:flex">
            {(["products", "gallery", "resources", "locations", "about"] as MenuName[]).map(
              (name) =>
                name && (
                  <button
                    key={name}
                    ref={name === "about" ? aboutBtnRef : undefined}
                    onClick={() => toggleMenu(name)}
                    className={`flex h-full items-center gap-1.5 border-b-[3px] px-4 text-[14px] font-semibold transition-colors ${
                      activeMenu === name
                        ? "border-accent text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="capitalize">{name}</span>
                    <ChevronDown
                      className={`h-3 w-3 opacity-50 transition-transform ${
                        activeMenu === name ? "rotate-180 opacity-100" : ""
                      }`}
                    />
                  </button>
                )
            )}
          </div>

          {/* Right: phone + CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <span className="font-meta text-[13px] text-muted-foreground">1-800-826-7813</span>
            <Link
              to="/products"
              className="rounded-sm bg-accent px-[18px] py-2.5 text-[13px] font-bold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Request a Quote →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground lg:hidden">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <AnimatePresence>
        {activeMenu && activeMenu !== "about" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 top-[70px] z-40 bg-foreground/35"
            onClick={closeAll}
          />
        )}
      </AnimatePresence>

      {/* ═══ PRODUCTS MEGA MENU ═══ */}
      <AnimatePresence>
        {activeMenu === "products" && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="fixed left-0 right-0 top-[70px] z-50 border-t-2 border-accent bg-card shadow-lg shadow-foreground/20"
          >
            <div className="mx-auto grid max-w-[1400px] grid-cols-[260px_1fr_220px]">
              {/* Left: category column */}
              <div className="flex flex-col bg-surface py-6">
                <span className="font-meta mb-3 px-5 text-[12px] uppercase tracking-widest text-muted-foreground">
                  Product Categories
                </span>

                {allCategories.map((cat) => (
                  <div
                    key={cat.id}
                    className={`group/cat flex items-center gap-2 px-5 py-3 transition-colors cursor-pointer ${
                      activeCategory === cat.id
                        ? "bg-foreground text-background"
                        : "text-foreground hover:bg-foreground hover:text-background"
                    }`}
                  >
                    <button
                      onClick={() => setActiveCategory(cat.id)}
                      className="flex-1 text-left"
                    >
                      <div className="text-[14px] font-bold leading-[1.3]">{cat.label}</div>
                      <div className={`font-meta text-[12px] transition-colors ${
                        activeCategory === cat.id
                          ? "text-background/60"
                          : "text-muted-foreground group-hover/cat:text-background/60"
                      }`}>{cat.count}</div>
                    </button>
                    <Link
                      to={cat.href}
                      onClick={closeAll}
                      className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent transition-opacity ${
                        activeCategory === cat.id
                          ? "opacity-100"
                          : "opacity-0 group-hover/cat:opacity-100"
                      }`}
                      title={`Go to ${cat.label}`}
                    >
                      <ChevronRight className="h-3 w-3 text-accent-foreground" />
                    </Link>
                  </div>
                ))}

                <div className="font-meta mt-auto px-5 pt-4 text-[12px] leading-[1.4] text-muted-foreground">
                  All products available for same-day quoting. Onsite roll forming at 9 Western U.S. locations.
                </div>
              </div>

              {/* Center: product links */}
              <div className="p-6">
                {currentCat && (
                  <>
                    <div className="mb-4 pb-2.5">
                      <h3 className="text-[16px] font-bold leading-[1.2] text-foreground">{currentCat.label}</h3>
                      <Link
                        to={currentCat.href}
                        onClick={closeAll}
                        className="font-meta mt-1 inline-block text-[13px] text-accent hover:underline"
                      >
                        View all {currentCat.label.toLowerCase()} →
                      </Link>
                    </div>

                    {currentCat.sections.map((section) => (
                      <div key={section.heading}>
                        <div className="font-meta mb-2 mt-4 border-b border-border pb-1 text-[12px] uppercase tracking-widest text-muted-foreground">
                          {section.heading}
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                          {section.items.map((item) => (
                            <Link
                              key={item.code}
                              to={currentCat.href}
                              onClick={closeAll}
                              className="rounded-sm border border-transparent p-2.5 transition-colors hover:border-border hover:bg-surface"
                            >
                              <div className="font-meta text-[12px] uppercase tracking-wide text-muted-foreground">
                                {item.code}
                              </div>
                              <div className="text-[13px] font-semibold text-foreground">{item.name}</div>
                              <div className="text-[12px] leading-[1.5] text-muted-foreground">{item.desc}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* Right: promo column */}
              <div className="flex flex-col gap-4 border-l border-border bg-cta p-5">
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { num: "9", lbl: "Western U.S. Locations" },
                    { num: "40+", lbl: "Years in Business" },
                    { num: "Same", lbl: "Day Quotes" },
                    { num: "1", lbl: "Supplier: Roof + Gutter" },
                  ].map((s) => (
                    <div key={s.lbl} className="rounded-sm border border-cta-foreground/15 p-2.5">
                      <div className="font-meta text-[18px] font-medium leading-[1.2] text-accent">{s.num}</div>
                      <div className="mt-1 text-[12px] font-semibold leading-tight text-cta-foreground/55">
                        {s.lbl}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/products"
                  onClick={closeAll}
                  className="rounded-sm bg-accent py-2.5 text-center text-[13px] font-bold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Request a Quote →
                </Link>

                <Link
                  to="/products"
                  onClick={closeAll}
                  className="font-meta text-center text-[12px] text-cta-foreground/40 hover:text-accent transition-colors"
                >
                  Warranty information →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ GALLERY MEGA MENU ═══ */}
      <AnimatePresence>
        {activeMenu === "gallery" && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="fixed left-0 right-0 top-[70px] z-50 border-t-2 border-accent bg-card shadow-lg shadow-foreground/20"
          >
            <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_280px]">
              {/* Main */}
              <div className="p-7">
                <div className="mb-5">
                  <div className="font-meta text-[12px] uppercase tracking-widest text-muted-foreground">
                    Project Gallery
                  </div>
                  <h3 className="text-[18px] font-bold leading-[1.2]">Real Projects. Real Installs.</h3>
                  <Link
                    to="/products"
                    onClick={closeAll}
                    className="font-meta mt-1 inline-block text-[13px] text-accent hover:underline"
                  >
                    View all projects →
                  </Link>
                  <p className="mt-1 text-[14px] leading-[1.4] text-muted-foreground">
                    Browse completed CBM projects by type. All photos are from actual installations — no renders.
                  </p>
                </div>

                <div className="mb-3.5 grid grid-cols-3 gap-3">
                  {galleryCards.map((card) => (
                    <Link
                      key={card.label}
                      to="/products"
                      onClick={closeAll}
                      className="group overflow-hidden rounded-sm border border-border transition-all hover:-translate-y-0.5 hover:border-accent"
                    >
                      <div className="h-[130px] bg-muted" />
                      <div className="bg-card px-2.5 pt-2 text-[13px] font-bold">{card.label}</div>
                      <div className="font-meta bg-card px-2.5 pb-2 text-[12px] text-muted-foreground">
                        {card.sub}
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="flex gap-0 border-t border-border pt-3">
                  {[
                    { label: "Gutter Systems", href: "/gutter-systems" },
                    { label: "Walls & Soffits", href: "/walls-soffits" },
                  ].map((link, i) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={closeAll}
                      className={`font-meta pr-4 text-[12px] text-muted-foreground transition-colors hover:text-accent ${
                        i > 0 ? "border-l border-border pl-4" : ""
                      }`}
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right panel */}
              <div className="flex flex-col gap-4 bg-cta p-7">
                <div className="font-meta text-[12px] uppercase tracking-widest text-cta-foreground/30">
                  Visualizer
                </div>
                <h4 className="text-[16px] font-bold leading-[1.2] text-cta-foreground">
                  Try panels and colors on your own project
                </h4>
                <p className="text-[13px] leading-[1.4] text-cta-foreground/45">
                  Upload a photo of your home or building. Browse colors and panel profiles in real time. No account
                  needed.
                </p>
                <button className="rounded-sm bg-accent py-2.5 text-center text-[13px] font-bold text-accent-foreground transition-opacity hover:opacity-90">
                  Launch Visualizer →
                </button>

                <div className="mt-1 border-t border-cta-foreground/10 pt-3.5">
                  <div className="font-meta mb-2 text-[12px] uppercase tracking-widest text-cta-foreground/30">
                    Browse by Profile
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {[
                      "Standing Seam projects",
                      "Exposed Fastener projects",
                      "Gutter + roofing combos",
                      "Bare metal / specialty",
                      "LEED / commercial",
                    ].map((l) => (
                      <Link
                        key={l}
                        to="/products"
                        onClick={closeAll}
                        className="font-meta border-b border-cta-foreground/5 py-1.5 text-[12px] text-cta-foreground/40 transition-colors hover:text-cta-foreground/80"
                      >
                        {l} →
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ RESOURCES MEGA MENU ═══ */}
      <AnimatePresence>
        {activeMenu === "resources" && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="fixed left-0 right-0 top-[70px] z-50 border-t-2 border-accent bg-card shadow-lg shadow-foreground/20"
          >
            <div className="mx-auto grid max-w-[1400px] grid-cols-5">
              {/* Contractor */}
              <div className="flex flex-col border-r border-border p-6">
                <div className="font-meta text-[12px] uppercase tracking-widest text-muted-foreground">
                  For Contractors
                </div>
                <h4 className="mt-2 text-[16px] font-bold leading-[1.2]">Contractor Hub</h4>
                <p className="mt-2 flex-1 text-[13px] leading-[1.4] text-muted-foreground">
                  Installation guides, technical data sheets, color charts, and the latest pricing.
                </p>
                <Link
                  to="/products"
                  onClick={closeAll}
                  className="font-meta mt-4 inline-block self-start rounded-sm bg-accent px-3 py-2 text-[12px] font-medium text-accent-foreground"
                >
                  Contractor Hub →
                </Link>
              </div>

              {/* Architect */}
              <div className="flex flex-col border-r border-border p-6">
                <div className="font-meta text-[12px] uppercase tracking-widest text-muted-foreground">
                  For Architects
                </div>
                <h4 className="mt-2 text-[16px] font-bold leading-[1.2]">Architect Hub</h4>
                <p className="mt-2 flex-1 text-[13px] leading-[1.4] text-muted-foreground">
                  CAD/BIM files, 3-part guide specs, LEED documentation, and technical reference sheets.
                </p>
                <Link
                  to="/products"
                  onClick={closeAll}
                  className="font-meta mt-4 inline-block self-start rounded-sm bg-info px-3 py-2 text-[12px] font-medium text-accent-foreground"
                >
                  Architect Hub →
                </Link>
              </div>

              {/* Homeowner */}
              <div className="flex flex-col border-r border-border p-6">
                <div className="font-meta text-[12px] uppercase tracking-widest text-muted-foreground">
                  For Homeowners
                </div>
                <h4 className="mt-2 text-[16px] font-bold leading-[1.2]">Homeowner Hub</h4>
                <p className="mt-2 flex-1 text-[13px] leading-[1.4] text-muted-foreground">
                  Color charts, the Renoworks visualizer, warranty info, and product guides.
                </p>
                <Link
                  to="/products"
                  onClick={closeAll}
                  className="font-meta mt-4 inline-block self-start rounded-sm bg-[hsl(var(--green))] px-3 py-2 text-[12px] font-medium text-accent-foreground"
                >
                  Find an Installer →
                </Link>
              </div>

              {/* Resources & Blog */}
              <div className="col-span-2 flex flex-col bg-cta p-6">
                <div className="font-meta text-[12px] uppercase tracking-widest text-cta-foreground/35">
                  Insights & Guidance
                </div>
                <h4 className="mt-2 text-[16px] font-bold leading-[1.2] text-cta-foreground">
                  Resources & Blog
                </h4>
                <p className="mt-2 text-[13px] leading-[1.4] text-cta-foreground/50">
                  Technical guidance, industry insights, product deep-dives, and newsletters for contractors and building
                  professionals.
                </p>

                <div className="mt-4 flex-1 rounded-sm border border-cta-foreground/10 bg-cta-foreground/5 p-3">
                  <div className="font-meta text-[12px] uppercase tracking-widest text-accent">Featured Post</div>
                  <div className="mt-1.5 text-[14px] font-semibold leading-[1.4] text-cta-foreground/75">
                    Metal Roofing in Western U.S. — 2026 Trends & Specifications
                  </div>
                  <div className="font-meta mt-1.5 text-[12px] text-cta-foreground/25">Industry · March 2026</div>
                </div>

                <Link
                  to="/products"
                  onClick={closeAll}
                  className="font-meta mt-4 inline-block self-start rounded-sm border border-cta-foreground/15 bg-cta-foreground/10 px-3.5 py-2.5 text-[12px] font-medium text-cta-foreground transition-colors hover:bg-cta-foreground/20"
                >
                  Browse All Resources →
                </Link>

                <Link
                  to="/products"
                  onClick={closeAll}
                  className="mt-4 flex items-center justify-between border-t border-cta-foreground/10 pt-3"
                >
                  <span className="text-[14px] font-semibold text-cta-foreground/70">Warranties</span>
                  <span className="font-meta text-[12px] text-accent">View warranty information →</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ LOCATIONS MEGA MENU ═══ */}
      <AnimatePresence>
        {activeMenu === "locations" && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="fixed left-0 right-0 top-[70px] z-50 border-t-2 border-accent bg-card shadow-lg shadow-foreground/20"
          >
            <div className="mx-auto grid max-w-[1400px] grid-cols-[1fr_300px]">
              {/* Main */}
              <div className="p-7">
                <div className="mb-6">
                  <h3 className="text-[18px] font-bold leading-[1.2]">9 Locations Across the Western U.S.</h3>
                  <Link
                    to="/products"
                    onClick={closeAll}
                    className="font-meta mt-1 inline-block text-[13px] text-accent hover:underline"
                  >
                    View all locations + map →
                  </Link>
                  <p className="mt-1 text-[14px] leading-[1.4] text-muted-foreground">
                    Same-day quotes · Onsite roll forming · Will-call pickup
                  </p>
                </div>

                <div className="grid grid-cols-5 gap-3">
                  {locationData.map((state) => (
                    <div key={state.state}>
                      <div className="font-meta mb-2 border-b border-border pb-1.5 text-[12px] uppercase tracking-widest text-muted-foreground">
                        {state.state}
                      </div>
                      {state.cities.map((city) => (
                        <div
                          key={city.city}
                          className="group cursor-pointer border-b border-surface py-1.5"
                        >
                          <div className="text-[13px] font-semibold transition-colors group-hover:text-accent">
                            {city.city}
                          </div>
                          <div className="font-meta text-[12px] text-info">{city.phone}</div>
                          <span className="font-meta mt-0.5 inline-block rounded-sm border border-accent/20 bg-accent/10 px-1.5 py-px text-[12px] text-accent">
                            Roll form
                          </span>
                        </div>
                      ))}
                      {state.state === "Hawaii" && (
                        <p className="font-meta mt-3 text-[12px] leading-[1.4] text-muted-foreground">
                          Hawaii location specializes in marine-grade products and PVDF-coated aluminum.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right panel */}
              <div className="flex flex-col gap-4 border-l border-border bg-surface p-7">
                <div className="relative h-[160px] overflow-hidden rounded-sm border border-border bg-muted">
                  <span className="font-meta absolute bottom-2 left-2.5 rounded-sm bg-card/90 px-1.5 py-0.5 text-[12px] text-muted-foreground">
                    Western U.S. Location Map
                  </span>
                </div>
                <h4 className="text-[15px] font-bold leading-[1.2]">Find Your Nearest Branch</h4>
                <p className="text-[13px] leading-[1.4] text-muted-foreground">
                  All 9 locations offer onsite roll forming, same-day quoting, and will-call pickup for in-stock
                  products.
                </p>
                <button className="rounded-sm bg-accent py-2.5 text-center text-[13px] font-bold text-accent-foreground transition-opacity hover:opacity-90">
                  Find Nearest Location →
                </button>
                <div className="font-meta border-t border-border pt-2 text-[12px] leading-[1.4] text-muted-foreground">
                  <strong className="text-foreground">General Hours</strong>
                  <br />
                  Mon–Fri: 7:00 AM – 5:00 PM
                  <br />
                  Saturday: By appointment
                  <br />
                  <span className="text-muted-foreground/70">Hours vary by location. Call ahead.</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ ABOUT DROPDOWN ═══ */}
      <AnimatePresence>
        {activeMenu === "about" && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
            className="fixed top-[70px] z-50 min-w-[180px] rounded-b-sm border border-border border-t-2 border-t-accent bg-card shadow-lg"
            style={{ left: aboutLeft }}
          >
            {["About Us", "Contact", "Sustainability", "Careers"].map((item) => (
              <Link
                key={item}
                to="/products"
                onClick={closeAll}
                className="block px-[18px] py-2.5 text-[14px] font-semibold text-foreground transition-colors hover:bg-surface hover:text-accent"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ MOBILE MENU ═══ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background lg:hidden"
          >
            <div className="px-6 pb-4">
              {[
                { label: "Products", href: "/products" },
                { label: "Roofing Systems", href: "/" },
                { label: "Gutter Systems", href: "/gutter-systems" },
                { label: "Walls & Soffits", href: "/walls-soffits" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={closeAll}
                  className={`font-meta block border-b border-border/30 py-3 text-[14px] font-semibold ${
                    location.pathname === link.href ? "text-accent" : "text-foreground/65"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/products"
                onClick={closeAll}
                className="mt-3 inline-block rounded-sm bg-accent px-5 py-2.5 text-[13px] font-bold text-accent-foreground"
              >
                Request a Quote →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SiteNav;
