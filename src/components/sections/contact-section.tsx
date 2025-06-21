import { Button } from "@/components/ui/button";
import { emailAddress, whatsappLink } from "@/data/content";
import { MessageSquare } from "../icons/message";
import { MapPin } from "../icons/map-pin";
import { Mail } from "../icons/mail";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-card py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-headline font-semibold text-primary mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-10 text-center max-w-2xl mx-auto">
          Have a question? We'd love to hear from you! Reach out via WhatsApp
          for the quickest response.
        </p>

        <div
          className="max-w-lg mx-auto bg-background p-8 rounded-lg shadow-xl animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-headline text-foreground">
                  Chat on WhatsApp
                </h3>
                <p className="text-muted-foreground">
                  Click the button below or the floating icon to start a
                  conversation.
                </p>
                <Button
                  asChild
                  className="mt-2 bg-green-500 hover:bg-green-600 text-white"
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Send a Message
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-headline text-foreground">
                  Email Us
                </h3>
                <p className="text-muted-foreground">
                  For inquiries or custom requests, feel free to send an email.
                </p>
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-primary hover:underline break-all"
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-headline text-foreground">
                  Our Location
                </h3>
                <p className="text-muted-foreground">
                  We are a home-based bakery located in Mannivakkam, Chennai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
