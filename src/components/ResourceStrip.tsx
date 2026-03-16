import { ExternalLink } from "lucide-react";

const resources = [
  {
    label: "Cool Metal Roofing Brochure",
    url: "https://www.custombiltmetals.com/wp-content/uploads/2015/08/Cool_Roof_Brochure1.pdf",
  },
  {
    label: "Standing Seam Color Chart",
    url: "https://www.custombiltmetals.com/wp-content/uploads/2025/08/Bifold-Trim-Guide-v2.22.pdf",
  },
  {
    label: "Fire Brochure",
    url: "https://www.custombiltmetals.com/wp-content/uploads/2025/08/Fire-Brochure.pdf",
  },
  {
    label: "Roof Panel Seaming Machine Rentals",
    url: "http://cbm.diroofseamers.com",
  },
];

const ResourceStrip = () => (
  <section className="bg-surface px-8 py-10" id="resources-downloads">
    <div className="mx-auto max-w-[1200px]">
      <p className="font-meta mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
        Roofing Reference Library
      </p>
      <div className="flex flex-wrap gap-3">
        {resources.map((r) => (
          <a
            key={r.label}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-meta inline-flex items-center gap-1.5 rounded-sm border border-info px-4 py-2 text-[13px] font-semibold text-info transition-colors hover:bg-info hover:text-background"
          >
            {r.label}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ResourceStrip;
