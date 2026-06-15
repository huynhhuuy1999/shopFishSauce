import { useRef, useState } from "react";
import OrderForm from "./components/OrderForm";
import ProductCommitments from "./components/ProductCommitments";
import ProductGrid from "./components/ProductGrid";
import ProductHero from "./components/ProductHero";

export default function Product() {
  const orderFormRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOrderProduct = (productName: string) => {
    setSelectedProduct(productName);
    orderFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="pt-20 pb-xl px-margin-mobile md:px-0 md:pb-0">
      <ProductHero />
      <ProductGrid onOrder={handleOrderProduct} />

      <section className="mt-xl md:mt-0 py-0 md:py-xl md:bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-start">
            <div className="hidden md:block">
              <ProductCommitments />
            </div>
            <div ref={orderFormRef}>
              <OrderForm
                selectedProduct={selectedProduct}
                onProductChange={setSelectedProduct}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
