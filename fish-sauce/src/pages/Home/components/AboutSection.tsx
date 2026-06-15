import FeatureCard from "./FeatureCard";
import SectionHeading from "./SectionHeading";
import { FEATURES, IMAGES } from "../constants";

export default function AboutSection() {
  return (
    <section className="hidden md:block py-xl bg-surface" id="about">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
        <SectionHeading title="Gói Trọn Tâm Huyết Trong Từng Giọt Vàng" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-stretch">
          <div className="md:col-span-8 bg-white border border-outline-variant/30 rounded-xl p-lg flex flex-col justify-center">
            <h3 className="font-headline text-headline-md text-primary mb-md">
              Nguồn Gốc Từ Phan Rang
            </h3>
            <p className="text-body-md text-on-surface-variant mb-md leading-relaxed">
              Nước mắm Song Nguyễn bắt nguồn từ mảnh đất Phan Rang đầy nắng và
              gió, nơi có truyền thống làm nước mắm hàng trăm năm. Chúng tôi kế
              thừa bí quyết từ những nghệ nhân lâu đời, kết hợp cùng tiêu chuẩn
              chất lượng hiện đại để tạo ra sản phẩm hoàn mỹ nhất.
            </p>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Mỗi giọt nước mắm là kết quả của sự kiên nhẫn và tỉ mỉ. Chúng tôi
              chỉ sử dụng Cá Cơm Than tươi ngon nhất vừa đánh bắt từ biển về,
              trộn với Muối Biển tinh khiết theo tỷ lệ vàng &quot;3 cá : 1
              muối&quot;.
            </p>
          </div>

          <div className="md:col-span-4 relative h-64 md:h-auto rounded-xl overflow-hidden border border-outline-variant/30">
            <img
              alt="Thùng gỗ ủ nước mắm truyền thống"
              className="w-full h-full object-cover"
              src={IMAGES.fermentationVats}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-sm rounded-lg border border-outline-variant/20">
              <span className="text-label-sm text-primary uppercase tracking-wider">
                Quy trình ủ chượp
              </span>
              <p className="text-body-md text-on-surface-variant font-bold">
                12-18 tháng tự nhiên
              </p>
            </div>
          </div>

          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
