export const NAV_LINKS = [
  { label: "Trang chủ", to: "/" },
  { label: "Sản phẩm", to: "/product" },
  { label: "Về chúng tôi", to: "/#about" },
  { label: "Liên hệ", to: "/#contact" },
] as const;

export const DRAWER_NAV_LINKS = [
  { label: "Trang chủ", to: "/", icon: "home" },
  { label: "Sản phẩm", to: "/product", icon: "set_meal" },
  { label: "Về chúng tôi", to: "/#about", icon: "history_edu" },
  { label: "Liên hệ", to: "/#contact", icon: "contact_support" },
] as const;

export function isNavLinkActive(pathname: string, to: string): boolean {
  if (to === "/product") return pathname === "/product";
  if (to === "/") return pathname === "/";
  return false;
}
