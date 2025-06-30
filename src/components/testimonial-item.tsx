import { Card, CardContent } from "@/components/ui/card";
import { useFadeInOnView } from "@/lib/use-fade-in-on-view";
import { cn, getResponsiveTransitionDelay } from "@/lib/utils";
import { Quote } from "./icons/quote";

interface TestimonialItemProps {
  testimonial: string;
  index: number;
}

export default function TestimonialItem({
  testimonial,
  index,
}: TestimonialItemProps) {
  const fadeInRef = useFadeInOnView<HTMLDivElement>();

  return (
    <Card
      ref={fadeInRef}
      className={cn(
        "bg-accent/20 border-accent shadow-lg h-full",
        getResponsiveTransitionDelay(index)
      )}
    >
      <CardContent className="p-6 flex flex-col items-center text-center h-full">
        <Quote className="w-8 h-8 text-accent mb-4" />
        <p className="text-foreground italic mb-6 flex-grow flex items-center">
          "{testimonial}"
        </p>
      </CardContent>
    </Card>
  );
}
