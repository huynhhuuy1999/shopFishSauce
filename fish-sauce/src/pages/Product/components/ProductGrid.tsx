import type { TypeSauceResponse } from "@/models/typeSauce";
// import { PRODUCTS } from "../constants";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  onOrder: (productId: number) => void;
  listTypeSauce?: TypeSauceResponse[];
}

export default function ProductGrid({
  onOrder,
  listTypeSauce,
}: ProductGridProps) {
  return (
    <section className="py-0 md:py-xl bg-surface">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-gutter">
          {/* {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onOrder={onOrder} />
          ))} */}
          {listTypeSauce?.map((product) => (
            <ProductCard key={product.id} product={product} onOrder={onOrder} />
          ))}
        </div>
      </div>
    </section>
  );
}
