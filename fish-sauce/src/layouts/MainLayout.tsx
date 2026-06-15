import { Outlet } from "react-router";
import Footer from "@/layouts/components/Footer";
import Header from "@/layouts/components/Header";

export default function MainLayout() {
  return (
    <div className="bg-surface text-on-surface min-h-screen overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
