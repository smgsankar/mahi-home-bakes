import { products, type Product } from "@/data/content";
import ProductCard from "@/components/product-card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useFadeInOnView } from "@/lib/use-fade-in-on-view";

const categories: Product["category"][] = [
  "Cakes",
  "Cupcakes",
  "Cookies",
  "Chocolates",
];

export default function ProductsSection() {
  const fadeInRef = useFadeInOnView<HTMLDivElement>(200);
  const [selectedCategory, setSelectedCategory] = useState<
    Product["category"] | "All"
  >("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={fadeInRef}>
          <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary mb-4 text-center">
            Our Delicious Offerings
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
            Indulge in our wide variety of freshly baked delights, perfect for
            any occasion or just a sweet treat for yourself.
          </p>

          <div
            className="flex justify-center flex-wrap gap-2 mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              onClick={() => setSelectedCategory("All")}
              className="capitalize transition-all"
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div
            key={selectedCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg py-10">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
