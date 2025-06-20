import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTopFAB from "./components/scroll-to-top-fab";
import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import ProductsSection from "./components/sections/products-section";
import GallerySection from "./components/sections/gallery-section";
import TestimonialsSection from "./components/sections/testimonials-section";
import ContactSection from "./components/sections/contact-section";

function App() {
  return (
    <div className="font-body antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <ScrollToTopFAB />
      <Footer />
    </div>
  );
}

export default App;
