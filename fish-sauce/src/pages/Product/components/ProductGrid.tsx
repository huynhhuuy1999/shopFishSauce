import { PRODUCTS } from "../constants";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  onOrder: (productName: string) => void;
}

export default function ProductGrid({ onOrder }: ProductGridProps) {
  return (
    <section className="py-0 md:py-xl bg-surface">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOrder={onOrder}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
