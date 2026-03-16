const tocItems = [
  "Concealed vs. Exposed Fastener",
  "What Is Standing Seam Roofing?",
  "Which Panel for Which Building?",
  "Cool Roof & Energy Performance",
  "Bare Metal Options",
  "Warranty Information",
];

const SEOEditorial = () => (
  <section className="border-b border-border bg-surface px-8 py-12" id="guide">
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 lg:grid-cols-[200px_1fr]">
      {/* TOC */}
      <div>
        <p className="font-meta mb-3 text-[12px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
          On This Page
        </p>
        {tocItems.map((item) => (
          <div key={item} className="font-meta border-b border-border py-2 text-[12px] font-medium text-info">
            → {item}
          </div>
        ))}
      </div>
      {/* Content */}
      <div>
        <h2 className="mb-4 text-xl font-bold leading-[1.2] text-foreground">
          Metal Roofing Panels: Understanding Your Options
        </h2>

        <div className="mb-5">
          <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">
            Concealed vs. Exposed Fastener Roofing
          </h3>
          <p className="text-[14px] leading-[1.4] text-muted-foreground">
            Concealed fastener systems like standing seam hide all clips and fasteners beneath interlocking panel seams, creating a clean, unbroken roofline. Exposed fastener panels use visible screws driven through the panel face into the structure below — faster to install and more economical, but with more penetration points. Standing seam is preferred for architectural and residential projects; exposed fastener excels in agricultural, industrial, and budget-conscious commercial builds.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">
            What Is Standing Seam Metal Roofing?
          </h3>
          <p className="text-[14px] leading-[1.4] text-muted-foreground">
            Standing seam metal roofing features raised seams that interlock vertically above the flat panel surface. Seam heights typically range from 1" to 2", with taller seams providing greater wind uplift resistance. Architects and contractors specify standing seam for its weathertight performance, thermal movement allowance, and distinctive shadow lines. CBM offers both mechanical seam (CB series) and snap-lock (SL series) options.
          </p>
        </div>

        <div className="mb-5">
          <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">
            Cool Roof Technology and Energy Savings
          </h3>
          <p className="text-[14px] leading-[1.4] text-muted-foreground">
            PVDF coatings like Kynar 500® and Hylar 5000® reflect up to 70% of solar energy and re-emit absorbed heat efficiently. Buildings with Cool Roof rated metal panels can reduce cooling costs by up to 20% compared to standard roofing materials. All CBM coated panels are available in Cool Roof compliant color options.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-[15px] font-bold leading-[1.2] text-foreground">
            Bare Metal and Specialty Profiles
          </h3>
          <p className="text-[14px] leading-[1.4] text-muted-foreground">
            For projects where natural patina is the design intent, CBM offers copper, Rheinzink® zinc, bare Zincalume® steel, and A606 weathering (Cor-ten style) steel. These materials develop distinctive character over time and carry no reflective or emissive coatings. Available across most standing seam profiles.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SEOEditorial;
