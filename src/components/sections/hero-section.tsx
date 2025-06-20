import { Button } from "@/components/ui/button";

export default function HeroSection() {
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
            className="text-5xl md:text-7xl font-headline font-bold text-primary mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Mahi Home Bakes
          </h1>
          <p
            className="text-lg md:text-xl text-foreground mb-10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Crafting sweet moments with love and passion. Discover our
            delightful range of celebration cakes, cupcakes, cookies, and
            chocolates.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-colors duration-300 shadow-lg"
            >
              <a href="#products">Explore Our Bakes</a>
            </Button>
          </div>
        </div>
      </div>
      {/* Subtle decorative elements */}
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse delay-1000" />
    </section>
  );
}
