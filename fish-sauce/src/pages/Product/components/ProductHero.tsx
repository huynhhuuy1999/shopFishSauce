export default function ProductHero() {
  return (
    <section className="relative py-xl bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop text-center md:text-center">
        <span className="hidden md:inline-block px-md py-xs bg-surface-container-high text-primary font-label-sm uppercase tracking-widest rounded-full mb-md">
          Tinh hoa Phan Rang
        </span>
        <h1 className="font-headline text-headline-lg-mobile md:text-headline-xl text-primary mb-2 md:mb-md text-left md:text-center">
          <span className="md:hidden">Sản phẩm</span>
          <span className="hidden md:inline">Sản phẩm tinh hoa</span>
        </h1>
        <p className="max-w-2xl mx-auto text-on-surface-variant font-body-md md:font-body-lg md:text-body-lg text-left md:text-center">
          <span className="md:hidden">
            Tinh hoa từ biển cả, nguyên chất từ đôi bàn tay nghệ nhân Phan
            Thiết.
          </span>
          <span className="hidden md:inline">
            Kết tinh từ những mẻ cá cơm than béo mập và muối biển tinh khiết
            nhất của vùng biển Phan Rang, nước mắm Song Nguyễn mang đến hương vị
            truyền thống đậm đà, an toàn tuyệt đối cho mọi bữa cơm gia đình.
          </span>
        </p>
      </div>
    </section>
  );
}
