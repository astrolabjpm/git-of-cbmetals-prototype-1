import { applications } from "@/data/products";

const ApplicationGrid = () => (
  <section className="border-b border-border bg-background px-8 py-12" id="applications">
    <div className="mx-auto max-w-[1200px]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold leading-[1.2] text-foreground">Browse by Project Type</h2>
        <div className="mt-2 h-[2px] w-12 bg-foreground" />
        <p className="mt-3 max-w-[580px] text-[14px] leading-[1.4] text-muted-foreground">
          Not sure which category fits? Browse by application — each links to the relevant product sections above.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {applications.map((app) => (
          <div key={app.title} className="overflow-hidden rounded-sm border border-border bg-card transition-shadow hover:shadow-[var(--card-shadow-hover)]">
            <div className="p-4 pb-0">
              <div className="relative h-[100px] overflow-hidden rounded-sm bg-muted">
                <img src={app.image} alt={app.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-[15px] font-bold leading-[1.2] text-foreground">{app.title}</h3>
              <p className="mt-1 text-[13px] leading-[1.4] text-muted-foreground">{app.subtitle}</p>
              <p className="font-meta mt-1.5 text-[12px] font-medium text-info">{app.products}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ApplicationGrid;
