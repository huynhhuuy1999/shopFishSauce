export const IMAGES = {
  heroCoastline:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAdOJ7iEBYKwo2jd42V0Qk14eZB3tRHRKgVgaRJzJKj5a8K_TVFGWHz1mTz5BK4QphDxHenMgOp7-kUv1YFNH7c4Jahwvw_Q2gjNbCzdKAnOePzMS87c-1clL-ow5CNEvXbZ0zUca2ppdsPeeAZJGsDpARVkx_O2SehFHxUq71SHg9gaZysfjRuaufdPXCxe1s8tyzRGEIxJbXLDZ_CLKomhWnIUmRqD9Bw6kP4Iae8_I9CFpF6469sdTssmFH4F9M6u-kV9_Pe-MfA",
  heroMobile:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCeffA3W6XalMlTkPaF1gYXlbmCcu24ZDoNyK0n8phdDDTrfRIzYnG8Q3n6m5gQ1ckKP_VAqxdbAsAutmpshdNycpFaezdA65lFU2OZC7T70Qb7AUM7cj5ZyUGwFaO_pMPudMrPam-M_qYFAikPJQt_3PdtEsz4GG_yvEE1iDrVEuq0PGWsjwKuBNTDfgAsP2955XgotKTV4dlxMREGvXAh49PN1lfuiUJbhZX81VmMT4fsGDZN8DJXmKtxh3ICA9fhn5WzlxX8BdZI",
  originFishingBoat:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuACe8JohNJjZXyKqc5f45HR3rbCf_YqBd9wBBqkD1zpRMhoLbOUkbWJKT2rR1UXjLKiIDybVUL_grivzJ2nTJeUViyNuYEpc7rZ42BL-LViznvVmLahKGLiRNKpXtyMBL21d0flZGvnqa0L62MGAgovfAg9DJedAAD8BvFhWOcJmRGANtx7UQ2g6MZntzYjqr1IYuVhGlkrJtVJAHzu2joI9LoceLSVF29sB02VjUJAT3bnQXxwKAp5qLsvjK7t4io3TobPZM5zNneC",
  fermentationVats:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBGQ4AZhBBd-bQWHh8W-mcBhFWzz5lJwWG78EoX16d7U9vyMG_4o9txttdLEL6LAR2TfmP2D8_9QctDmIaWwefJyUz3hp-4M_utVs4fUgan4a6QXGUr5-MYf4ELo87Q8YgnevXWNhDuSBy50auEGEKHC6i1OmOa_58zuSskn7--nm6uu22F4Pw2_SIQN0Oxk7Yb_DkGOk91XIs4cIbap4iKoyk5-S8Ou3uE7wkBHosj8tchUr8NUSUN-BvNIGe4yn5o3XYI2F0EQVZK",
  productBottle:
    // "https://lh3.googleusercontent.com/aida-public/AB6AXuCxFl6pWtPrGkEOilOE6titZzBzGY4lFF5GnRd4hySFlSxOOfXfFZLQ6pKDVIVI-7tYLJFKOK1vg5aO2cSl8fyg5ZYwuzP7nYf5L9SZ84DW8EVPZmEckkPnCRBs34Eh2SxSBRNJgP_YOV4xU9W2NnyOpPnVLHkJ_c8H_4alPsH5QWOHraXgjtNHaTKmxYmGQRPEO2NyIKZUPI39rQU5PxSQSOSk6rc0146rWXURZp0OjFRYPrTqqw5opfax3-Qngpd9FZOhYm3uQcIr",
    "@/assets/images/nuoc-mam.jpg",
} as const;

export const NAV_LINKS: Array<{
  label: string;
  href: string;
  active?: boolean;
}> = [
  { label: "Trang chủ", href: "#", active: true },
  { label: "Sản phẩm", href: "#products" },
  { label: "Về chúng tôi", href: "#about" },
  { label: "Liên hệ", href: "#contact" },
];

export const DRAWER_NAV_LINKS: Array<{
  label: string;
  href: string;
  icon: string;
  active?: boolean;
}> = [
  { label: "Trang chủ", href: "#", icon: "home", active: true },
  { label: "Sản phẩm", href: "#products", icon: "set_meal" },
  { label: "Về chúng tôi", href: "#contact", icon: "history_edu" },
  { label: "Liên hệ", href: "#contact", icon: "contact_support" },
];

export const FEATURES = [
  {
    icon: "nature",
    title: "100% Tự Nhiên",
    description:
      "Không chất bảo quản, không màu nhân tạo, an toàn tuyệt đối cho sức khỏe.",
  },
  {
    icon: "verified",
    title: "Độ Đạm Cao",
    description:
      "Hàm lượng đạm tự nhiên từ cá cơm, mang lại hương vị đậm đà, hậu vị ngọt thanh.",
  },
  {
    icon: "restaurant",
    title: "Vị Ngon Nguyên Bản",
    description:
      'Chất lượng "Thượng Hạng" được kiểm chứng qua từng bữa cơm gia đình Việt.',
  },
] as const;

export const BREWING_STEPS = [
  {
    title: "Cá Cơm Tươi",
    description:
      "Lựa chọn những con cá cơm than béo mập, tươi rói ngay khi vừa cập bến.",
  },
  {
    title: "Muối Tinh Khiết",
    description:
      "Sử dụng muối biển tinh khiết được lưu kho ít nhất 1 năm để loại bỏ vị chát.",
  },
  {
    title: "Gỗ Mít Cổ Thụ",
    description:
      'Ủ chượp trong thùng gỗ mít, cho phép nước mắm "thở" và lên men tự nhiên.',
  },
] as const;

export const MOBILE_COMMITMENTS = [
  {
    icon: "verified_user",
    title: "100% Nguyên Chất",
    description:
      "Không pha tạp chất, không chất bảo quản, giữ nguyên vị mắm truyền thống.",
  },
  {
    icon: "health_and_safety",
    title: "Độ Đạm Tự Nhiên",
    description:
      "Độ đạm cao tự nhiên từ cá cơm, cung cấp dưỡng chất thiết yếu cho gia đình.",
  },
  {
    icon: "eco",
    title: "An Toàn VSTP",
    description:
      "Đạt chứng nhận an toàn thực phẩm nghiêm ngặt nhất của cơ quan chức năng.",
  },
] as const;

export const PRODUCT_FEATURES = [
  "Độ đạm cá tự nhiên: 40N - 60N",
  "Thành phần: Cá cơm than, muối biển tinh khiết",
  "Chứng nhận: HACCP, ISO 22000",
] as const;
