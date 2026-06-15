import AboutSection from "./components/AboutSection";
import BrewingProcessSection from "./components/BrewingProcessSection";
import CommitmentsSection from "./components/CommitmentsSection";
import FloatingContactButton from "./components/FloatingContactButton";
import HeroSection from "./components/HeroSection";
import OriginSection from "./components/OriginSection";
import ProductShowcase from "./components/ProductShowcase";

function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <OriginSection />
        <BrewingProcessSection />
        <CommitmentsSection />
        <AboutSection />
        <ProductShowcase />
      </main>
      <FloatingContactButton />
    </>
  );
}

export default Home;
