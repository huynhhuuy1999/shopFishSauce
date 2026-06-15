import { useEffect, useRef, useState, type FormEvent } from "react";
import MaterialIcon from "@/components/MaterialIcon";
import { PRODUCTS } from "../constants";

type SubmitState = "idle" | "loading" | "success";

interface OrderFormProps {
  selectedProduct: string;
  onProductChange: (product: string) => void;
}

export default function OrderForm({
  selectedProduct,
  onProductChange,
}: OrderFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  useEffect(() => {
    if (selectedProduct) {
      const nameInput = document.getElementById("full-name");
      if (nameInput instanceof HTMLInputElement) {
        setTimeout(() => nameInput.focus(), 800);
      }
    }
  }, [selectedProduct]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitState !== "idle") return;

    setSubmitState("loading");
    setTimeout(() => {
      setSubmitState("success");
      setTimeout(() => {
        setSubmitState("idle");
        formRef.current?.reset();
        onProductChange("");
      }, 3000);
    }, 1500);
  };

  const isSuccess = submitState === "success";
  const isLoading = submitState === "loading";

  return (
    <div
      id="order-form"
      className="bg-surface-container-low md:bg-surface-container-lowest p-6 md:p-lg rounded-xl border border-outline-variant/30 md:shadow-soft"
    >
      <div className="mb-lg">
        <h3 className="font-headline text-headline-lg-mobile md:text-headline-md text-primary mb-2 md:mb-lg">
          Thông tin đặt hàng
        </h3>
        <p className="font-body-md text-on-surface-variant md:hidden">
          Vui lòng điền thông tin để chúng tôi liên hệ giao hàng sớm nhất.
        </p>
      </div>

      <form
        ref={formRef}
        className="space-y-6 md:space-y-md"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 md:gap-0">
          <label
            htmlFor="product-select"
            className="block font-label-md text-on-surface md:text-on-surface-variant mb-0 md:mb-xs"
          >
            Sản phẩm quan tâm
          </label>
          <div className="relative">
            <select
              id="product-select"
              value={selectedProduct}
              onChange={(event) => onProductChange(event.target.value)}
              className="w-full h-14 md:h-auto bg-white md:bg-surface-bright border border-outline md:border-outline-variant rounded-lg px-4 md:p-md font-body-md appearance-none focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            >
              <option value="">Chọn sản phẩm</option>
              {PRODUCTS.map((product) => (
                <option key={product.id} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
            <MaterialIcon
              name="expand_more"
              className="absolute right-4 top-4 text-on-surface-variant pointer-events-none md:hidden"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-md">
          <div className="flex flex-col gap-2 md:gap-0">
            <label
              htmlFor="full-name"
              className="block font-label-md text-on-surface md:text-on-surface-variant mb-0 md:mb-xs"
            >
              Họ và tên
            </label>
            <input
              id="full-name"
              type="text"
              placeholder="Nguyễn Văn A"
              className="w-full h-14 md:h-auto bg-white md:bg-surface-bright border border-outline md:border-outline-variant rounded-lg px-4 md:p-md font-body-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-0">
            <label
              htmlFor="phone"
              className="block font-label-md text-on-surface md:text-on-surface-variant mb-0 md:mb-xs"
            >
              Số điện thoại
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="090x xxx xxx"
              className="w-full h-14 md:h-auto bg-white md:bg-surface-bright border border-outline md:border-outline-variant rounded-lg px-4 md:p-md font-body-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 md:gap-0">
          <label
            htmlFor="quantity"
            className="block font-label-md text-on-surface md:text-on-surface-variant mb-0 md:mb-xs"
          >
            Số lượng
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            defaultValue={1}
            className="w-full h-14 md:h-auto bg-white md:bg-surface-bright border border-outline md:border-outline-variant rounded-lg px-4 md:p-md font-body-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        <div className="flex flex-col gap-2 md:gap-0">
          <label
            htmlFor="address"
            className="block font-label-md text-on-surface md:text-on-surface-variant mb-0 md:mb-xs"
          >
            Địa chỉ giao hàng
          </label>
          <textarea
            id="address"
            rows={3}
            placeholder="Số nhà, tên đường, phường/xã..."
            className="w-full bg-white md:bg-surface-bright border border-outline md:border-outline-variant rounded-lg p-4 md:p-md font-body-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || isSuccess}
          className={`w-full font-headline-md py-4 md:py-md rounded-lg transition-all active:scale-[0.98] mt-0 md:mt-md shadow-lg ${
            isSuccess
              ? "bg-green-600 text-white"
              : "bg-primary text-on-primary shadow-primary/10 hover:bg-primary/90"
          }`}
        >
          {isLoading
            ? "Đang xử lý..."
            : isSuccess
              ? "Đặt hàng thành công!"
              : "Xác nhận đặt hàng"}
        </button>
      </form>
    </div>
  );
}
