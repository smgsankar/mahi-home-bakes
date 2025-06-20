import type { GalleryImage as GalleryImageProps } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  image: GalleryImageProps;
  animationDelay?: string;
}

export default function GalleryImage({ image, animationDelay = "0s" }: Props) {
  return (
    <Card
      className="overflow-hidden group animate-fade-in"
      style={{ animationDelay }}
    >
      <CardContent className="p-0">
        <div className="aspect-square relative w-full">
          <img
            src={image.src}
            alt={image.alt}
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out object-cover h-full w-full"
            data-ai-hint={image.dataAiHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm font-medium">{image.alt}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
