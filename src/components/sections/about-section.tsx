import { useFadeInOnView } from "@/lib/use-fade-in-on-view";

export default function AboutSection() {
  const imageRef = useFadeInOnView<HTMLDivElement>();
  const contentRef = useFadeInOnView<HTMLHeadingElement>();

  return (
    <section id="about" className="bg-card py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="delay-200 flex justify-center">
            <img
              src="showcase.webp"
              alt="Mahi Home Bakes - Showcase"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
          <div ref={contentRef} className="delay-400">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary mb-6">
              Baked with Love, From Our Home to Yours
            </h2>
            <p className="text-lg text-foreground mb-4">
              Welcome to Mahi Home Bakes! We are passionate about serving
              eggless, delicious, handcrafted delicacies that bring joy to every
              occasion. From stunning celebration cakes to yummy muffins
              and cookies, every item is made with the finest ingredients and a
              sprinkle of love.
            </p>
            <p className="text-lg text-foreground">
              Our mission is to make your special moments even sweeter with
              treats that not only look beautiful but are healthy and taste
              incredible too. Explore our creations and let us be a part of your
              celebrations!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
