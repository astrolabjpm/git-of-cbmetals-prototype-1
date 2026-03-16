import ProductCard from "@/components/ProductCard";
import type { ProductPanel } from "@/data/products";

interface ProductSectionProps {
  id: string;
  title: string;
  description: string;
  products: ProductPanel[];
  columns?: 2 | 3 | 4;
  compact?: boolean;
  altBg?: boolean;
  callout?: React.ReactNode;
}

const colClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

const ProductSection = ({
  id,
  title,
  description,
  products,
  columns = 3,
  compact = false,
  altBg = false,
  callout,
}: ProductSectionProps) => (
  <section
    id={id}
    className={`border-b border-border px-8 py-12 ${altBg ? "bg-surface" : "bg-background"}`}
  >
    <div className="mx-auto max-w-[1200px]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold leading-[1.2] text-foreground">{title}</h2>
        <div className="mt-2 h-[2px] w-12 bg-foreground" />
        <p className="mt-3 max-w-[580px] text-[14px] leading-[1.4] text-muted-foreground">
          {description}
        </p>
      </div>
      <div className={`grid grid-cols-1 gap-4 ${colClasses[columns]}`}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} compact={compact} />
        ))}
      </div>
      {callout}
    </div>
  </section>
);

export default ProductSection;
