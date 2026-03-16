const stats = [
  { num: "1-day", label: "Same-Day Quotes", sub: "Quotes returned same or next business day." },
  { num: "9", label: "Locations + Onsite Roll Forming", sub: "Panels formed to exact length on your job site — zero transit damage, zero waste." },
  { num: "40+", label: "Years in the Western U.S.", sub: "CA, AZ, NV, OR, WA, and HI since 1980." },
  { num: "1", label: "Supplier: Roofing + Rainware", sub: "Panels, gutters, trim — one supplier, guaranteed color match." },
];

const WhyCBM = () => (
  <section className="border-b border-border bg-background px-8 py-12" id="why-cbm">
    <div className="mx-auto max-w-[1200px]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Why Contractors and Architects Choose CBM</h2>
        <div className="mt-2 h-[2px] w-12 bg-foreground" />
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-meta text-[28px] font-medium leading-[1.2] text-accent">{s.num}</p>
            <p className="mt-1.5 text-[15px] font-bold leading-[1.2] text-foreground">{s.label}</p>
            <p className="mt-1 text-[14px] leading-[1.4] text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyCBM;
