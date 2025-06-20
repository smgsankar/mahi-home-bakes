import { galleryImages } from "@/data/content";
import GalleryImage from "@/components/gallery-image";

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-card py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary mb-4 text-center">
          Our Sweet Creations
        </h2>
        <p className="text-lg text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
          A glimpse into the artistry and love we pour into every bake. Get
          inspired for your next event!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={image.id}
              image={image}
              animationDelay={`${0.2 + index * 0.05}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
