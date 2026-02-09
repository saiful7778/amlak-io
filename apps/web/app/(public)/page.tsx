import Navbar from "@/components/Navbar";
import CapabilitiesSection from "@/components/sections/CapabilitiesSection";
import HeroSection from "@/components/sections/HeroSection";
import InfoBanner from "@/components/sections/InfoBanner";

export default function HomePage() {
  return (
    <>
      <InfoBanner />
      <Navbar />
      <HeroSection />
      <main>
        <CapabilitiesSection />
      </main>
    </>
  );
}
