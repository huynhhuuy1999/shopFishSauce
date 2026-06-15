import MaterialIcon from "./MaterialIcon";

const DESKTOP_CONTACT_INFO = [
  { icon: "location_on", text: "Địa chỉ: 123 Đường Biển, Phan Rang" },
  { icon: "call", text: "Hotline: 0123 456 789" },
  { icon: "chat_bubble", text: "Zalo: Song Nguyễn" },
  { icon: "public", text: "Facebook: Nước Mắm Song Nguyễn" },
] as const;

const MOBILE_CONTACT_INFO = [
  { icon: "location_on", text: "123 Đường Biển, Phan Rang" },
  { icon: "phone", text: "0123 456 789" },
  { icon: "mail", text: "contact@songnguyen.vn" },
] as const;

const DESKTOP_POLICY_LINKS = [
  "Chính sách bảo mật",
  "Điều khoản sử dụng",
  "Câu hỏi thường gặp",
] as const;

const MOBILE_FOOTER_LINKS = [
  "Chính sách bảo mật",
  "Điều khoản sử dụng",
  "Về chúng tôi",
  "Sản phẩm",
] as const;

export default function Footer() {
  return (
    <footer
      className="bg-surface-container dark:bg-inverse-surface w-full mt-xl"
      id="contact"
    >
      {/* Mobile footer */}
      <div className="md:hidden px-margin-mobile py-lg flex flex-col gap-8 max-w-7xl mx-auto">
        <div>
          <h2 className="font-headline text-headline-md text-primary mb-4">
            Song Nguyễn
          </h2>
          <p className="text-label-md text-on-surface-variant leading-relaxed">
            Tinh hoa nước mắm truyền thống. Gìn giữ hương vị cội nguồn trong
            từng gian bếp Việt.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {MOBILE_CONTACT_INFO.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-on-surface-variant text-label-md"
            >
              <MaterialIcon name={item.icon} className="text-sm" />
              {item.text}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {MOBILE_FOOTER_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="text-on-surface-variant hover:text-primary text-label-md"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="pt-8 border-t border-outline-variant/30 text-center">
          <p className="text-label-md text-on-surface-variant">
            © 2024 Song Nguyễn. Tinh hoa nước mắm truyền thống.
          </p>
        </div>
      </div>

      {/* Desktop footer */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-gutter px-margin-desktop py-lg max-w-7xl mx-auto">
          <div className="space-y-md">
            <div className="font-headline text-headline-md text-primary dark:text-primary-fixed">
              Song Nguyễn
            </div>
            <p className="text-label-md text-on-surface-variant">
              Tinh hoa nước mắm truyền thống Phan Rang. Mang hương vị biển khơi
              đến mọi gian bếp Việt.
            </p>
            <div className="flex gap-sm pt-xs">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
              >
                <MaterialIcon name="face_nod" className="text-[20px]" />
              </a>
              <a
                href="#"
                aria-label="Chat"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
              >
                <MaterialIcon name="chat" className="text-[20px]" />
              </a>
            </div>
          </div>

          <div className="space-y-sm">
            <h4 className="text-label-md font-bold text-primary mb-md">
              Liên hệ
            </h4>
            {DESKTOP_CONTACT_INFO.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-xs text-on-surface-variant text-label-md"
              >
                <MaterialIcon name={item.icon} className="text-[18px]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="space-y-sm">
            <h4 className="text-label-md font-bold text-primary mb-md">
              Thông tin
            </h4>
            {DESKTOP_POLICY_LINKS.map((label) => (
              <a
                key={label}
                href="#"
                className="block text-on-surface-variant hover:text-primary text-label-md hover:underline transition-all cursor-pointer"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-low dark:bg-on-surface-variant/10 py-4 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-margin-desktop flex flex-row justify-between items-center gap-sm">
            <p className="text-label-md text-on-surface-variant">
              © 2024 Song Nguyễn. Tinh hoa nước mắm truyền thống.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
