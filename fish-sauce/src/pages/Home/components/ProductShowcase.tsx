import { Link } from "react-router";
import MaterialIcon from "@/components/MaterialIcon";
import { PRODUCT_FEATURES } from "../constants";
import nuocMam from "@/assets/images/nuoc-mam.jpg";

export default function ProductShowcase() {
  return (
    <section className="py-xl bg-white overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row items-center gap-xl">
          <div className="flex-1">
            <div className="w-full h-150 md:h-125 sm:h-100 bg-[#b5c7ce] rounded-md">
              <img
                alt="Chai nước mắm Song Nguyễn cao cấp"
                // className="w-full mx-auto drop-shadow-2xl"
                className="w-full h-full object-contain drop-shadow-2xl"
                // src={IMAGES.productBottle}
                src={nuocMam}
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="font-headline text-headline-lg text-primary mb-md">
              Dòng Sản Phẩm Thượng Hạng
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-lg leading-relaxed">
              Nước mắm Song Nguyễn không chỉ là gia vị, đó là tinh túy của lòng
              kiên nhẫn. Được chắt lọc từ những thùng lều gỗ mít, nước mắm mang
              sắc nâu cánh gián đặc trưng, trong vắt và sánh quyện.
            </p>
            <ul className="space-y-sm mb-lg">
              {PRODUCT_FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-sm text-body-md text-on-surface"
                >
                  <MaterialIcon
                    name="check_circle"
                    fill
                    className="text-primary"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/product"
              className="inline-block px-xl py-md text-label-md font-medium rounded-lg transition-all cursor-pointer active:scale-95 bg-primary text-on-primary hover:bg-primary-container shadow-md shadow-primary/20"
            >
              Xem chi tiết sản phẩm
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
