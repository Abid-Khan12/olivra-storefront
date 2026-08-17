import GallerySection from "@/components/sections/gallery-section";
import HeroSection from "@/components/sections/hero-section";
import NewArrivalSection from "@/components/sections/new-arrival-section";
import StickySection from "@/components/sections/sticky-section";
import TrendingSection from "@/components/sections/trending-section";

function HomePage() {
   return (
      <main className="mb-20 space-y-20">
         <HeroSection />
         <NewArrivalSection />
         <StickySection />
         <GallerySection />
         <TrendingSection />
      </main>
   );
}

export default HomePage;
