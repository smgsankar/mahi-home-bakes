export default function AboutSection() {
  return (
    <section id="about" className="bg-card py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src="https://placehold.co/900x600.png" // Replace with an image of Mahi or the bakery
              alt="Mahi Home Bakes - The Baker"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover aspect-video"
            />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary mb-6">
              Baked with Love, From Our Home to Yours
            </h2>
            <p className="text-lg text-foreground mb-4">
              Welcome to Mahi Home Bakes! We are passionate about creating
              delicious, handcrafted baked goods that bring joy to every
              occasion. From stunning celebration cakes to delightful cupcakes
              and cookies, every item is made with the finest ingredients and a
              sprinkle of love.
            </p>
            <p className="text-lg text-foreground">
              Our mission is to make your special moments even sweeter with
              treats that not only look beautiful but taste incredible too.
              Explore our creations and let us be a part of your celebrations!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
