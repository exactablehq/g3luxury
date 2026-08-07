import Preloader from "@/components/layout/Preloader";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import WellnessJourney from "@/components/sections/WellnessJourney";
import Faq from "@/components/sections/Faq";

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
        <WellnessJourney />
        <Faq />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
