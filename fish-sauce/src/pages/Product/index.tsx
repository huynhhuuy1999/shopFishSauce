import { useEffect, useRef, useState } from "react";
import OrderForm from "./components/OrderForm";
import ProductCommitments from "./components/ProductCommitments";
import ProductGrid from "./components/ProductGrid";
import ProductHero from "./components/ProductHero";
import { getListTypeSauce } from "@/services/typeSauce.service";
import type { TypeSauceResponse } from "@/models/typeSauce";

export default function Product() {
  const orderFormRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<number>();
  const [listTypeSauce, setListTypeSauce] = useState<TypeSauceResponse[]>([]);

  const handleOrderProduct = (productId: number) => {
    setSelectedProduct(productId);
    orderFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    getListTypeSauce().then((res) => {
      setListTypeSauce(res.data);
    });
  }, []);

  return (
    <main className="pt-20 pb-xl px-margin-mobile md:px-0 md:pb-0">
      <ProductHero />
      <ProductGrid onOrder={handleOrderProduct} listTypeSauce={listTypeSauce} />

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
                listTypeSauce={listTypeSauce}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
