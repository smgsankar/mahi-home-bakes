import type { Testimonial } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { useFadeInOnView } from "@/lib/use-fade-in-on-view";
import { cn, getResponsiveTransitionDelay } from "@/lib/utils";
import { Quote } from "./icons/quote";

interface TestimonialItemProps {
  testimonial: Testimonial;
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
          "{testimonial.quote}"
        </p>
        {/* <div className="flex items-center">
          {testimonial.avatarSrc && (
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage
                src={testimonial.avatarSrc}
                alt={testimonial.author}
              />
              <AvatarFallback>{authorInitials}</AvatarFallback>
            </Avatar>
          )}
          {!testimonial.avatarSrc && ( // Fallback for visual representation if no avatar but hint exists
            <div
              className="h-10 w-10 mr-3 rounded-full bg-muted flex items-center justify-center text-muted-foreground"
              aria-label={testimonial.author}
            >
              {authorInitials}
            </div>
          )}
          <p className="font-headline text-base font-semibold text-primary">
            {testimonial.author}
          </p>
        </div> */}
      </CardContent>
    </Card>
  );
}
