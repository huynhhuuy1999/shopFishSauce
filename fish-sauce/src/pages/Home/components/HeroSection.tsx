import Button from "./Button";
import MaterialIcon from "./MaterialIcon";
import { IMAGES } from "../constants";

export default function HeroSection() {
  return (
    <section className="relative h-[707px] md:h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Bờ biển Phan Rang"
          className="w-full h-full object-cover md:hidden"
          src={IMAGES.heroMobile}
        />
        <img
          alt="Bờ biển Phan Rang lúc bình minh"
          className="hidden md:block w-full h-full object-cover"
          src={IMAGES.heroCoastline}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-primary/40 md:to-transparent" />
      </div>

      {/* Mobile hero */}
      <div className="md:hidden relative z-10 px-margin-mobile text-white">
        <div className="inline-block bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full mb-4 border border-white/20">
          <span className="text-label-sm uppercase tracking-widest text-primary-fixed">
            Truyền thống 100 năm
          </span>
        </div>
        <h2 className="font-headline text-headline-lg-mobile mb-4">
          Nước Mắm Song Nguyễn <br />
          Tinh Hoa Nước Mắm Phan Rang
        </h2>
        <p className="text-body-md mb-8 opacity-90">
          Chắt lọc từ nguồn nguyên liệu cá cơm tươi ngon nhất vùng biển Bình
          Thuận.
        </p>
        <button
          type="button"
          className="bg-primary text-on-primary px-8 py-3 rounded-lg text-label-md flex items-center gap-2 active:scale-95 transition-all cursor-pointer"
        >
          KHÁM PHÁ NGAY
          <MaterialIcon name="arrow_forward" />
        </button>
      </div>

      {/* Desktop hero */}
      <div className="hidden md:flex relative z-10 max-w-7xl mx-auto px-margin-desktop text-white w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-white/30 text-label-md mb-md">
            Nghệ thuật ủ chượp truyền thống
          </span>
          <h1 className="font-headline text-headline-xl mb-md leading-tight">
            Nước Mắm Song Nguyễn <br /> Tinh Hoa Từ Biển Cả
          </h1>
          <p className="text-body-lg mb-lg text-white/90">
            Gói trọn hương vị mặn mòi của biển khơi Phan Rang trong từng giọt
            nước mắm truyền thống tinh khiết, sạch và tự nhiên.
          </p>
          <div className="flex flex-wrap gap-md">
            <Button className="w-[357px]">Khám phá sản phẩm</Button>
            <Button variant="outline-white" className="w-[357px]">
              Câu chuyện của chúng tôi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
