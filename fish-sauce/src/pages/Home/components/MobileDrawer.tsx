import MaterialIcon from "./MaterialIcon";
import { DRAWER_NAV_LINKS } from "../constants";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-[60] md:hidden transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Đóng menu"
        className="absolute inset-0 bg-on-surface/40"
        onClick={onClose}
      />
      <div className="relative w-3/4 h-full bg-surface shadow-xl flex flex-col">
        <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center">
          <span className="font-headline text-headline-md text-primary font-bold">
            Song Nguyễn
          </span>
          <button
            type="button"
            aria-label="Đóng menu"
            className="text-on-surface-variant cursor-pointer"
            onClick={onClose}
          >
            <MaterialIcon name="close" />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-4">
          {DRAWER_NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className={
                link.active
                  ? "text-primary font-bold border-b-2 border-primary pb-2 flex items-center gap-2"
                  : "text-on-surface-variant hover:text-primary p-2 transition-colors flex items-center gap-2"
              }
            >
              <MaterialIcon name={link.icon} />
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
