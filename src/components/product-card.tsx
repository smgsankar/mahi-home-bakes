import type { Product } from "@/data/content";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tag } from "lucide-react";

interface ProductCardProps {
  product: Product;
  animationDelay?: string;
}

export default function ProductCard({
  product,
  animationDelay = "0s",
}: ProductCardProps) {
  return (
    <Card
      className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out h-full flex flex-col animate-fade-in"
      style={{ animationDelay }}
    >
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <CardTitle className="font-headline text-xl mb-2 text-primary">
          {product.name}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-4 flex-grow">
          {product.description}
        </CardDescription>
        <div className="flex items-center text-xs text-accent mt-auto">
          <Tag className="h-4 w-4 mr-1" />
          <span>{product.category}</span>
        </div>
      </CardContent>
    </Card>
  );
}
