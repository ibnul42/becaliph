import AboutSection from "@/components/home/AboutSection";
import Achievements from "@/components/home/Achievements";
import Hero from "@/components/home/Hero";
import HorizontalScroll from "@/components/home/HorizontalScroll";
import Testimonials from "@/components/home/Testimonials";
import TrustedBy from "@/components/home/TrustedBy";

export default function Home() {
  const stats = [
    { value: "9+", label: "Years Business" },
    { value: "3K+", label: "Satisfied Clients" },
    { value: "8+", label: "Awards Achieved" },
    { value: "4.5K+", label: "Projects Delivered" },
  ];
  return (
    <div className="flex-grow">
      <Hero />
      <TrustedBy />
      <AboutSection />
      <HorizontalScroll />
      <Achievements stats={stats} />
      <Testimonials />
    </div>
  );
}
