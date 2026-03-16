import type { ProductCategory, ProductCategoryInfo } from "@/data/products";

interface CategoryFilterProps {
  categories: ProductCategoryInfo[];
  active: ProductCategory;
  onChange: (cat: ProductCategory) => void;
}

const CategoryFilter = ({ categories, active, onChange }: CategoryFilterProps) => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background shadow-sm">
      <div className="mx-auto flex max-w-[1200px] overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`shrink-0 border-b-[3px] px-6 py-4 text-left transition-colors ${
              active === cat.id
                ? "border-accent"
                : "border-transparent hover:border-muted-foreground/30"
            }`}
          >
            <span className="block text-[13px] font-bold text-foreground">{cat.label}</span>
            <span className="font-meta block text-[12px] text-muted-foreground">{cat.subtitle}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryFilter;
