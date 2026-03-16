import { Layers, Hammer, LayoutGrid, Gem } from "lucide-react";

const pillars = [
  {
    title: "Standing Seam Systems",
    body: "Concealed fastener panels roll-formed onsite. Architectural-grade PVDF finishes for residential and commercial roofs.",
    tag: "→ Concealed fastener · Architectural · Cool Roof",
    icon: Layers,
  },
  {
    title: "Exposed Fastener Panels",
    body: "Fast-install trapezoidal and PBR panels for commercial, ag, and industrial buildings. Full trim packages available.",
    tag: "→ Commercial · Agricultural · Fast install",
    icon: Hammer,
  },
  {
    title: "Corrugated & Wall",
    body: "Classic corrugated profiles plus interlocking wall and soffit panels for exterior cladding applications.",
    tag: "→ Roof · Wall · Soffit",
    icon: LayoutGrid,
  },
  {
    title: "Specialty & Bare Metal",
    body: "Copper, zinc, Zincalume, and weathering steel in standing seam profiles. Natural patina, no coatings.",
    tag: "→ Copper · Zinc · Zincalume · A606",
    icon: Gem,
  },
];

const PageIntro = () => (
  <div className="border-b border-border bg-background">
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((p, i) => (
        <div
          key={p.title}
          className={`px-6 py-8 lg:px-7 ${i < pillars.length - 1 ? "border-b sm:border-b-0 lg:border-r border-border" : ""} ${i === 1 ? "sm:border-r border-border" : ""}`}
        >
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
);

export default PageIntro;
