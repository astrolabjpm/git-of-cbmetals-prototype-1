import { ChevronDown } from "lucide-react";

const links = [
  { label: "Standing Seam", anchor: "#standing-seam" },
  { label: "Exposed Fastener", anchor: "#exposed-fastener" },
  { label: "Shakes & Shingles", anchor: "#shakes-shingles" },
  { label: "Corrugated", anchor: "#corrugated" },
  { label: "Resources & Downloads", anchor: "#resources-downloads" },
];

const blurbs: Record<string, string> = {
  "Standing Seam": "Concealed fastener panels roll-formed onsite in CB and SL series profiles.",
  "Exposed Fastener": "TFR-36 and PBR panels for commercial, ag, and industrial buildings.",
  "Shakes & Shingles": "Aluminum shakes with four-sided interlock. Fire-resistant, recycled metal.",
  "Corrugated": "Classic corrugated profiles for residential and agricultural roofing.",
  "Resources & Downloads": "Brochures, color charts, fire ratings, and seaming machine rentals.",
};

const PageIntro = () => (
  <div className="bg-secondary px-8 py-6">
    <div className="mx-auto max-w-[1200px]">
      <p className="font-meta text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        On This Page
      </p>
      <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
        {links.map((link) => (
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
            <span className="mt-0.5 block text-[13px] leading-[1.5] text-muted-foreground">
              {blurbs[link.label]}
            </span>
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default PageIntro;
