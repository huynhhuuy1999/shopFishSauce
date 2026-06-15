export type ProductBadgeVariant = "premium" | "organic" | "gift";

export interface Product {
  id: string;
  name: string;
  description: string;
  descriptionMobile: string;
  price: number;
  image: string;
  imageAlt: string;
  badge: {
    label: string;
    variant: ProductBadgeVariant;
  };
  tags: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "cot-nhat",
    name: "Nước Mắm Cốt Nhất",
    description:
      "Nước mắm nhĩ thượng hạng từ 100% cá cơm than, độ đạm cao tự nhiên, vị ngọt hậu sâu sắc.",
    descriptionMobile:
      "Nước mắm nhỉ từ cá cơm tươi, ủ chượp truyền thống 12-18 tháng trong thùng gỗ sồi.",
    price: 185000,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDbVUAlktSykyWQZLw10myzTC-1_1mCxsiUW_CC0DqCExmAn3TmG5cfqkxgoO-X98Sq_EAJzI3SQiNSkfyCefFfOnmj2QbvnRxpbE4Psej8HwFu1WKTEcJE8peo4FN4BvZzpJr0rXOMAIFAnuldwjQGi-VKqgoXltfwjep4fyjY7hXS5pXSwujdYjyzbm90e-XUjZb5_O2fuXMz4sYX5szqgZaMlPiZ3di5n7vk4SeTsvsrfb2Ll_qJXAcBWcRKVHNO3DplCSrmAGcr",
    imageAlt: "Nước mắm cốt nhất Song Nguyễn",
    badge: { label: "Premium Grade", variant: "premium" },
    tags: ["40° Đạm", "500ml"],
  },
  {
    id: "an-dam",
    name: "Nước Mắm Ăn Dặm",
    description:
      "Công thức giảm mặn đặc biệt, bổ sung dinh dưỡng, hoàn hảo cho giai đoạn phát triển của trẻ nhỏ.",
    descriptionMobile:
      "Công thức đặc biệt giảm mặn, giàu DHA và vitamin tự nhiên, an toàn cho bé yêu.",
    price: 125000,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtscBP_yJUQhmeuhgsxYU2_A8QMSJSlc3RXMmHzXABpO0SkUMcq2Ay78T4Rs8RpVIp4ALUNOM8Dz97Bn5f09Raon1GsufQquVLs9k_juBIyD_xvNjVKJ_xLoZGz0rkgA72cVER-CZM76UgLTFbO1pSk9OVMi_YJtPQiAIiH_-FnU-G-R_cHNzv7zYuLdjqGuiPEA1O89VTcPei_QKh9mrVunLQcE9jBKrkEufv6YbKFcsycvWVMUzuLe5AF9uWI3byfBYlBdACDw6I",
    imageAlt: "Nước mắm ăn dặm Song Nguyễn",
    badge: { label: "Organic", variant: "organic" },
    tags: ["35° Đạm", "250ml"],
  },
  {
    id: "hai-dang",
    name: "Bộ Quà Tặng Hải Đăng",
    description:
      "Thiết kế sang trọng, hội tụ những dòng nước mắm trứ danh, món quà ý nghĩa cho đối tác và người thân.",
    descriptionMobile:
      "Sự kết hợp hoàn hảo giữa nước mắm thượng hạng và hộp quà sang trọng từ gỗ tự nhiên.",
    price: 450000,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoBT10QbUoi4HZCWu6U-f_VJiEp0mtwsz0n6Ya1R15yAbs2-hudgm0Z_eLos4O8puV-P-O2Ns04LsPwc4IEINKQDDp7e1A9qChH63MVarpAt_AKHAUaCEBd4nDn3KzQDhDrctq_10CG2JRJaNpl0fBsre6l9yWF3FPvZFJOZxsuiswr3wCr4DWk8WdJPswneo33f_a1Ok0RH9bWrB3uOYIadzqp5GgdiGMu4kYLl5yyoff-8VuNDnUXM10-qG9cSwZaQ7dNN-sWwny",
    imageAlt: "Bộ quà tặng Hải Đăng Song Nguyễn",
    badge: { label: "Gift Set", variant: "gift" },
    tags: ["Special Edition", "2 x 500ml"],
  },
];

export const PRODUCT_COMMITMENTS = [
  {
    icon: "eco",
    title: "100% Tự Nhiên",
    description:
      "Không chất bảo quản, không phẩm màu, không hương liệu nhân tạo. Chỉ có cá và muối biển.",
  },
  {
    icon: "local_shipping",
    title: "Giao Hàng Nhanh",
    description:
      "Hệ thống vận chuyển chuyên nghiệp, đảm bảo sản phẩm đến tay khách hàng trong trạng thái tốt nhất.",
  },
  {
    icon: "verified",
    title: "Chứng Nhận Chất Lượng",
    description:
      "Sản phẩm đạt tiêu chuẩn HACCP và ISO 22000 về an toàn thực phẩm toàn cầu.",
  },
] as const;

export function formatPrice(price: number, compact = false): string {
  if (compact) {
    return `${Math.round(price / 1000)}k`;
  }
  return `${price.toLocaleString("vi-VN")}₫`;
}
