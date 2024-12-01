import Footer from "@/components/organisms/Footer";
import HomePageTemplate from "@/components/templates/HomePageTemplate";

export default function Home() {
  // Sample data for the carousel
  const slides = [
    "Slide 1: Welcome to Next.js",
    "Slide 2: Beautiful Carousel",
    "Slide 3: Easy to Customize",
    "Slide 4: Built with Swiper",
  ];

  return (
    <div>
      <HomePageTemplate />
      <Footer />
    </div>
  );
}
