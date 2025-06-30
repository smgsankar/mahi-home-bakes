import { Button } from "@/components/ui/button";
import { useFadeInOnView } from "@/lib/use-fade-in-on-view";
import { scrollToSection } from "@/lib/utils";

export default function HeroSection() {
  const scrollToProducts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    scrollToSection(e, "#products");
  };

  const headingRef = useFadeInOnView<HTMLHeadingElement>();
  const paragraphRef = useFadeInOnView<HTMLParagraphElement>();
  const ctaRef = useFadeInOnView<HTMLDivElement>();

  return (
    <section
      id="home"
      className="py-12 md:py-20 relative bg-gradient-to-br from-background to-primary/30 min-h-dvh flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <img
          src="hero-bg.webp"
          alt="Assortment of delicious baked goods"
          className="w-full h-full object-scale-down object-bottom md:object-cover md:object-center"
        />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl font-headline font-bold text-primary mb-6 delay-200"
          >
            Mahi Home Bakes
          </h1>
          <p
            ref={paragraphRef}
            className="text-lg md:text-xl text-foreground mb-10 delay-400"
          >
            Crafting sweet moments with love and passion. Discover our
            delightful range of celebration cakes, muffins, cookies, and
            chocolates.
          </p>
          <div ref={ctaRef} className="delay-600">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-colors duration-300 shadow-lg"
            >
              <a href="#products" onClick={scrollToProducts}>
                Explore Our Bakes
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
