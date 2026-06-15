import AboutSection from "./components/AboutSection";
import BrewingProcessSection from "./components/BrewingProcessSection";
import CommitmentsSection from "./components/CommitmentsSection";
import FloatingContactButton from "./components/FloatingContactButton";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import OriginSection from "./components/OriginSection";
import ProductShowcase from "./components/ProductShowcase";

function Home() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <OriginSection />
        <BrewingProcessSection />
        <CommitmentsSection />
        <AboutSection />
        <ProductShowcase />
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  );
}

export default Home;
