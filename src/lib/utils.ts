import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(
  e: React.MouseEvent<HTMLAnchorElement>,
  href?: string
) {
  if (href && href.startsWith("#")) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
  }
}
