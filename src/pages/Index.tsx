import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DoctorsSection from "@/components/DoctorsSection";
import ProceduresSection from "@/components/ProceduresSection";
import GallerySection from "@/components/GallerySection";
import NewsSection from "@/components/NewsSection";
import YouTubeShortsSection from "@/components/YouTubeShortsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <DoctorsSection />
      <ProceduresSection />
      <GallerySection />
      <NewsSection />
      <YouTubeShortsSection />
      <Footer />
    </div>
  );
};

export default Index;
