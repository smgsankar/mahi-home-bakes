import { testimonials } from "@/data/content";
import TestimonialItem from "@/components/testimonial-item";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary mb-4 text-center">
          Words from Our Happy Customers
        </h2>
        <p className="text-lg text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
          We love making our clients smile! Here's what some of them have to say
          about their Mahi Home Bakes experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={testimonial.id}
              testimonial={testimonial}
              animationDelay={`${0.2 + index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
