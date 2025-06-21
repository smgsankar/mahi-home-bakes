import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import { instagramLink, whatsappLink } from "@/data/content";
import { Whatsapp } from "../icons/whatsapp";
import { Instagram } from "../icons/instagram";
import { Menu } from "../icons/menu";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/80 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2"
            onClick={handleNavLinkClick}
          >
            <ShoppingBag className="h-8 w-8 text-primary" />
            <span className="text-2xl font-headline font-bold text-primary">
              Mahi Home Bakes
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center space-x-2 pl-4">
              <Button variant="ghost" size="icon" asChild>
                <a href={instagramLink} target="_blank" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-foreground" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <Whatsapp className="h-5 w-5 text-foreground" />
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs bg-background p-6"
              >
                <div className="flex flex-col space-y-6">
                  <a
                    href="#home"
                    className="flex items-center gap-2"
                    onClick={handleNavLinkClick}
                  >
                    <ShoppingBag className="h-7 w-7 text-primary" />
                    <span className="text-xl font-headline font-bold text-primary">
                      Mahi Home Bakes
                    </span>
                  </a>
                  <nav className="flex flex-col space-y-3">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={handleNavLinkClick}
                        className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                  <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border">
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={instagramLink}
                        target="_blank"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-6 w-6 text-foreground" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        aria-label="Whatsapp"
                      >
                        <Whatsapp className="h-6 w-6 text-foreground" />
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
