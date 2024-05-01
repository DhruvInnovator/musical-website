import AboutPAge from "@/components/AboutPage";
import InfiniteMovingCardsDemo from "@/components/DataMovingCards";
import GridBackground from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";



export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.88]">
    <HeroSection />
    <FeaturedCourses />
    <AboutPAge />
    <InfiniteMovingCardsDemo  />
  </main>
  
  );
}
