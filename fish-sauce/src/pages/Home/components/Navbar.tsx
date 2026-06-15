import { useEffect, useState } from "react";
import MaterialIcon from "./MaterialIcon";
import MobileDrawer from "./MobileDrawer";
import { NAV_LINKS } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const navClassName = `fixed top-0 w-full bg-white/80 dark:bg-on-surface/80 glass-effect border-b border-outline-variant/30 z-50 transition-shadow ${scrolled ? "shadow-sm" : ""}`;

  return (
    <>
      <header className={`md:hidden ${navClassName}`}>
        <div className="flex justify-between items-center px-margin-mobile py-4">
          <button
            type="button"
            aria-label="Mở menu"
            className="cursor-pointer active:scale-95 transition-transform text-primary p-2"
            onClick={() => setDrawerOpen(true)}
          >
            <MaterialIcon name="menu" />
          </button>
          <h1 className="font-headline text-headline-md font-bold text-primary">
            Song Nguyễn
          </h1>
          <div className="flex gap-4">
            <button
              type="button"
              aria-label="Giỏ hàng"
              className="text-primary cursor-pointer active:scale-95"
            >
              <MaterialIcon name="shopping_cart" />
            </button>
            <button
              type="button"
              aria-label="Tài khoản"
              className="text-primary cursor-pointer active:scale-95"
            >
              <MaterialIcon name="account_circle" />
            </button>
          </div>
        </div>
      </header>

      <nav className={`hidden md:block ${navClassName}`}>
        <div className="flex justify-between items-center px-margin-desktop py-4 max-w-7xl mx-auto">
          <div className="font-headline text-headline-md font-bold text-primary dark:text-primary-fixed">
            Song Nguyễn
          </div>

          <div className="flex items-center gap-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.active
                    ? "text-primary font-bold border-b-2 border-primary pb-1 text-body-md cursor-pointer active:scale-95 transition-transform"
                    : "text-on-surface-variant hover:text-primary transition-colors text-body-md cursor-pointer active:scale-95 transition-transform"
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-sm">
            <button
              type="button"
              aria-label="Giỏ hàng"
              className="text-primary hover:text-primary-container transition-all cursor-pointer active:scale-95 flex items-center"
            >
              <MaterialIcon name="shopping_cart" />
            </button>
            <button
              type="button"
              aria-label="Tài khoản"
              className="text-primary hover:text-primary-container transition-all cursor-pointer active:scale-95 flex items-center"
            >
              <MaterialIcon name="account_circle" />
            </button>
          </div>
        </div>
      </nav>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
