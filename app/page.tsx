import Preloader from "@/components/layout/Preloader";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Location from "@/components/sections/Location";
import Gallery from "@/components/ui/Gallery";

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgressBar />
      <Nav />

      <Hero />

      <main>
        <About />
        <WhyChooseUs />
        <Services />
        <Gallery />
        <Location />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
