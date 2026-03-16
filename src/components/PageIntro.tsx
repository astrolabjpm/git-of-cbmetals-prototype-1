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
  "Corrugated & Wall": "Classic corrugated profiles plus WS-100 interlocking wall and soffit panels.",
  "Specialty & Bare Metal": "Copper, zinc, Zincalume, and weathering steel in standing seam profiles.",
};

const PageIntro = () => (
  <div className="bg-background py-6">
    <div className="mx-auto max-w-[1200px] px-8">
      <p className="font-meta text-[12px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        On This Page
      </p>
      <hr className="mt-2 border-t-2 border-[hsl(207_43%_27%)]" />
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:grid-cols-5">
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
            <span className="block text-[14px] font-semibold text-foreground group-hover:text-accent transition-colors">
              {link.label}
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
