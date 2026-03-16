import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download, MapPin } from "lucide-react";
import type { ProductPanel } from "@/data/products";

interface ProductCardProps {
  product: ProductPanel;
  compact?: boolean;
}

const ProductCard = ({ product, compact = false }: ProductCardProps) => {
  const [docsOpen, setDocsOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-sm border border-border bg-card shadow-[var(--card-shadow)] transition-shadow duration-300 hover:shadow-[var(--card-shadow-hover)]">
      {/* Image with padding */}
      {product.image && (
        <div className="p-5 pb-0">
          <div className={`relative overflow-hidden rounded-sm bg-white ${compact ? "h-[120px]" : "h-[170px]"}`}>
            <img
              src={product.image}
              alt={`${product.name} metal roofing panel profile`}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Body */}
      <div className={compact ? "p-4 px-5" : "p-5"}>
        {/* Code */}
        <p className="font-meta text-[10px] font-medium uppercase tracking-[0.06em] text-muted-foreground/60">
          {product.code}
        </p>

        {/* Name */}
        <h3 className={`font-bold leading-[1.2] text-foreground ${compact ? "mt-0.5 text-[15px]" : "mt-1 text-[16px]"}`}>
          {product.name}
        </h3>

        {/* Best for */}
        <p className="mt-1 text-[14px] font-semibold text-accent">
          Best for: {product.bestFor}
        </p>

        {/* Description */}
        {!compact && (
          <p className="mt-2 text-[14px] leading-[1.5] text-muted-foreground">
            {product.description}
          </p>
        )}

        {/* Meta grid */}
        <div className={`mt-3 grid gap-1.5 border-t border-border pt-3 ${compact ? "grid-cols-2" : "grid-cols-2"}`}>
          {product.meta.map((m) => (
            <div key={m.key}>
              <p className="font-meta text-[10px] font-medium uppercase tracking-[0.05em] text-muted-foreground/60">
                {m.key}
              </p>
              <p className={`font-meta text-[12px] font-medium ${
                m.status === "yes"
                  ? "text-green-700"
                  : m.status === "confirm"
                  ? "text-yellow-600"
                  : m.status === "no"
                  ? "text-muted-foreground"
                  : "text-foreground"
              }`}>
                {m.value}
              </p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-3 flex flex-wrap gap-2">
          <a
            href="https://www.custombiltmetals.com/request-a-quote/"
            className="font-meta inline-block rounded-sm bg-accent px-3.5 py-1.5 text-[12px] font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get a Quote
          </a>
          {product.showLocation && (
            <a
              href="https://www.custombiltmetals.com/locations/"
              className="font-meta inline-flex items-center gap-1 rounded-sm border border-border px-3 py-1.5 text-[12px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <MapPin className="h-3 w-3" /> Find a Location
            </a>
          )}
        </div>

        {/* Document accordion */}
        {product.links.length > 0 && (
          <div className="mt-3 border-t border-border">
            <button
              onClick={() => setDocsOpen(!docsOpen)}
              className="font-meta flex w-full items-center justify-between py-2 text-[12px] font-medium text-info transition-colors hover:text-foreground"
            >
              Documents &amp; Downloads
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${docsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {docsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pb-2">
                    {product.links.map((link) => (
                      <div
                        key={link.label}
                        className="flex items-center justify-between border-b border-border/60 py-1.5 last:border-0"
                      >
                        <span className="font-meta text-[12px] text-foreground">{link.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-meta rounded bg-secondary px-1.5 py-0.5 text-[10px] text-muted-foreground">
                            {link.type}
                          </span>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-meta inline-flex items-center gap-0.5 text-[12px] font-semibold text-info hover:text-foreground"
                          >
                            <Download className="h-3 w-3" /> Download
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
