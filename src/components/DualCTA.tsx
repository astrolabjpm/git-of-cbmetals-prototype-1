import { ArrowRight } from "lucide-react";

const DualCTA = () => (
  <div className="bg-cta">
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 sm:grid-cols-2">
      <div className="px-10 py-12">
        <h3 className="text-xl font-bold leading-[1.2] text-cta-foreground">Ready to Get a Quote?</h3>
        <p className="mt-2 max-w-sm text-[14px] leading-[1.5] text-cta-foreground/60">
          Tell us your project details and a CBM rep will respond same or next business day with pricing and availability.
        </p>
        <a
          href="https://www.custombiltmetals.com/request-a-quote/"
          className="mt-5 inline-flex items-center gap-1.5 rounded-sm bg-accent px-6 py-3 text-[14px] font-bold text-accent-foreground transition-opacity hover:opacity-90"
        >
          Request a Quote <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="bg-cta/90 px-10 py-12" style={{ backgroundColor: 'hsl(197 57% 17%)' }}>
        <h3 className="text-xl font-bold leading-[1.2] text-cta-foreground">Need Specs or CAD Files?</h3>
        <p className="mt-2 max-w-sm text-[14px] leading-[1.4] text-cta-foreground/60">
          Contractors and architects can download spec sheets, installation guides, CAD details, and color charts from our resource library.
        </p>
        <a
          href="https://www.custombiltmetals.com/resources/"
          className="mt-5 inline-flex items-center gap-1.5 rounded-sm border-2 border-cta-foreground/35 px-6 py-3 text-[14px] font-bold text-cta-foreground transition-colors hover:border-cta-foreground/60"
        >
          Go to Resources <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
);

export default DualCTA;
