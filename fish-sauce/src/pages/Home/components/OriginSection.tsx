import { IMAGES } from "../constants";

export default function OriginSection() {
  return (
    <section className="md:hidden py-xl px-margin-mobile bg-white">
      <div className="text-center mb-lg">
        <span className="text-primary font-bold text-label-md tracking-widest uppercase">
          Nguồn gốc
        </span>
        <h3 className="font-headline text-headline-lg-mobile text-on-surface mt-2">
          Vùng Biển Phan Rang
        </h3>
      </div>
      <div className="flex flex-col gap-8">
        <div className="rounded-xl overflow-hidden border border-outline-variant shadow-sm">
          <img
            alt="Thuyền cá truyền thống trên biển Phan Rang"
            className="w-full h-64 object-cover"
            src={IMAGES.originFishingBoat}
          />
        </div>
        <div className="space-y-4">
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Phan Rang không chỉ nổi tiếng với những đồi cát bay mà còn là cái
            nôi của nghề làm nước mắm truyền thống Việt Nam. Với điều kiện tự
            nhiên lý tưởng, nắng vàng và gió biển mặn mòi, nơi đây tạo ra hương
            vị nước mắm không thể lẫn vào đâu được.
          </p>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Nước mắm Song Nguyễn kế thừa những bí quyết trăm năm, giữ trọn vẹn
            sự tinh túy từ đại dương trong từng giọt mắm vàng óng.
          </p>
        </div>
      </div>
    </section>
  );
}
