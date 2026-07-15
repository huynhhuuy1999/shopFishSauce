import { useEffect, useRef, useState } from "react";
import OrderForm from "./components/OrderForm";
import ProductCommitments from "./components/ProductCommitments";
import ProductGrid from "./components/ProductGrid";
import ProductHero from "./components/ProductHero";
import { getListTypeSauce } from "@/services/typeSauce.service";
import type { TypeSauceResponse } from "@/models/typeSauce";
import { createHoaDon } from "@/services/order.service";
import { STATUSORDERS } from "@/utils/constants";

interface IOrderForm {
  customerName: string;
  phone: string;
  address: string;
  status: number;
  sumPrice: number;
  quantity: number;
  typeSauceId?: number;
}

export default function Product() {
  const orderFormRef = useRef<HTMLDivElement>(null);
  const [listTypeSauce, setListTypeSauce] = useState<TypeSauceResponse[]>([]);
  const [orderFormData, setOrderFormData] = useState<IOrderForm>({
    customerName: "",
    phone: "",
    address: "",
    status: STATUSORDERS.PENDING,
    sumPrice: 0,
    quantity: 1,
  });

  const handleOrderProduct = (productId: number) => {
    setOrderFormData({
      ...orderFormData,
      typeSauceId: productId,
      sumPrice: listTypeSauce.find((item) => item.id === productId)?.price || 0,
      quantity: 1,
    });
    orderFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = async () => {
    await createHoaDon(orderFormData);
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
        <div className="max-w-7xl mx-auto md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-start">
            <div className="hidden md:block">
              <ProductCommitments />
            </div>
            <div ref={orderFormRef}>
              <OrderForm
                listTypeSauce={listTypeSauce}
                orderFormData={orderFormData}
                setOrderFormData={setOrderFormData}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
