import { Button } from "@/components/ui/button";
import { instagramLink, whatsappLink } from "@/data/content";
import { Instagram } from "../icons/instagram";
import { Whatsapp } from "../icons/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 items-center">
          <div className="flex justify-center gap-4">
            <img
              src="brand-logo.webp"
              alt="Mahi Home Bakes Logo"
              className="h-32 w-32 rounded-full"
            />
            <div className="flex flex-col justify-center items-center md:items-start">
              <span className="text-xl font-headline font-bold text-primary">
                Mahi Home Bakes
              </span>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                Baked with love
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:text-foreground"
            >
              <a href={instagramLink} target="_blank" aria-label="Instagram">
                <Instagram className="!h-6 !w-6" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:text-foreground"
            >
              <a href={whatsappLink} target="_blank" aria-label="Whatsapp">
                <Whatsapp className="!h-6 !w-6" />
              </a>
            </Button>
          </div>

          <div className="flex flex-col">
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {currentYear} Mahi Home Bakes. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              <a
                target="_blank"
                href="credits.html"
                className="text-primary hover:underline"
              >
                Credits
              </a>
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Made with ❤️ by{" "}
          <a
            target="_blank"
            href="https://github.com/smgsankar"
            className="text-primary font-bold hover:underline"
          >
            smgsankar
          </a>
        </p>
      </div>
    </footer>
  );
}
