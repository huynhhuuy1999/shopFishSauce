import SocialIcon from "@/components/SocialIcon";
import MaterialIcon from "@/components/MaterialIcon";

const SOCIAL_LINKS = [
  {
    platform: "facebook" as const,
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    platform: "zalo" as const,
    label: "Zalo",
    href: "https://zalo.me",
  },
  {
    platform: "youtube" as const,
    label: "YouTube",
    href: "https://youtube.com",
  },
] as const;

const DESKTOP_CONTACT_INFO = [
  { icon: "location_on", text: "Địa chỉ: 123 Đường Biển, Phan Rang" },
  { icon: "call", text: "Hotline: 1900 6789" },
  { icon: "mail", text: "Email: info@songnguyen.vn" },
] as const;

const MOBILE_CONTACT_INFO = [
  { icon: "location_on", text: "123 Đường Biển, Phan Rang" },
  { icon: "call", text: "0123 456 789" },
  { icon: "chat", text: "Zalo: Song Nguyễn" },
] as const;

const DESKTOP_POLICY_LINKS = [
  "Chính sách bảo mật",
  "Điều khoản sử dụng",
  "Câu hỏi thường gặp",
] as const;

const MOBILE_FOOTER_LINKS = [
  { label: "Sản phẩm", to: "/product" },
  { label: "Chính sách bảo mật", to: "#" },
  { label: "Liên hệ", to: "/#contact" },
  { label: "Điều khoản sử dụng", to: "#" },
] as const;

export default function Footer() {
  return (
    <footer
      className="bg-surface-container dark:bg-inverse-surface w-full border-t border-outline-variant/30"
      id="contact"
    >
      <div className="md:hidden px-margin-mobile py-lg flex flex-col gap-6 max-w-7xl mx-auto">
        <div>
          <h2 className="font-headline text-headline-md text-primary mb-4">
            Song Nguyễn
          </h2>
          <p className="text-label-md text-on-surface-variant leading-relaxed">
            Tinh hoa nước mắm truyền thống Phan Rang.
          </p>
        </div>
        <ul className="space-y-3">
          {MOBILE_CONTACT_INFO.map((item) => (
            <li
              key={item.text}
              className="flex items-center gap-2 text-on-surface-variant text-label-md"
            >
              <MaterialIcon name={item.icon} className="text-primary text-sm" />
              {item.text}
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-4 border-t border-outline-variant pt-6">
          {MOBILE_FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="text-on-surface-variant hover:text-primary text-label-md"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="pt-6 text-center">
          <p className="text-label-sm text-on-surface-variant opacity-70">
            © 2024 Song Nguyễn. Tinh hoa nước mắm truyền thống.
          </p>
        </div>
      </div>

      <div className="hidden md:block pt-lg pb-md">
        <div className="grid grid-cols-4 gap-gutter px-margin-desktop max-w-[1280px] mx-auto">
          <div>
            <span className="font-headline text-headline-md font-bold text-primary mb-md block">
              Song Nguyễn
            </span>
            <p className="text-on-surface-variant text-body-md">
              Hương vị biển cả trong từng giọt nước mắm truyền thống.
            </p>
          </div>

          <div>
            <h4 className="text-label-md font-bold text-on-surface mb-md uppercase tracking-wider">
              Liên hệ
            </h4>
            <ul className="space-y-sm text-body-md text-on-surface-variant">
              {DESKTOP_CONTACT_INFO.map((item) => (
                <li key={item.text}>{item.text}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-label-md font-bold text-on-surface mb-md uppercase tracking-wider">
              Hỗ trợ
            </h4>
            <ul className="space-y-sm text-body-md text-on-surface-variant">
              {DESKTOP_POLICY_LINKS.map((label) => (
                <li
                  key={label}
                  className="hover:underline transition-all cursor-pointer"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-label-md font-bold text-on-surface mb-md uppercase tracking-wider">
              Theo dõi
            </h4>
            <div className="flex gap-md">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
                >
                  <SocialIcon platform={link.platform} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-margin-desktop mt-lg pt-md border-t border-outline-variant/20 text-center">
          <p className="text-on-surface-variant text-body-md opacity-70">
            © 2024 Nước Mắm Truyền Thống Song Nguyễn.
          </p>
        </div>
      </div>
    </footer>
  );
}
