import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import InfoBanner from "@/components/sections/InfoBanner";

export default function HomePage() {
  return (
    <>
      <InfoBanner />
      <Navbar />
      <HeroSection />
    </>
  );
}
