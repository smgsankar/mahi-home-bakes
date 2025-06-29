import type { Product } from "@/data/content";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tag } from "./icons/tag";
import { useFadeInOnView } from "@/lib/use-fade-in-on-view";
import { getResponsiveTransitionDelay } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const fadeInRef = useFadeInOnView<HTMLDivElement>();
  return (
    <div ref={fadeInRef} className={getResponsiveTransitionDelay(index)}>
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out h-full flex flex-col">
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
            <span>{product.category[0]}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
