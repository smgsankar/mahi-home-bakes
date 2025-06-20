import { Instagram, Facebook, Twitter, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-2 mb-2">
              <ShoppingBag className="h-7 w-7 text-primary" />
              <span className="text-xl font-headline font-bold text-primary">
                Mahi Home Bakes
              </span>
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Crafting sweet memories, one bake at a time.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {currentYear} Mahi Home Bakes. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              <a href="credits.html" className="text-primary hover:underline">
                Credits
              </a>
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/smgsankar"
            className="text-primary hover:underline"
          >
            smgsankar
          </a>
        </p>
      </div>
    </footer>
  );
}
