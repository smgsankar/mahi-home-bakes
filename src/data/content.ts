export const whatsappNumber = "+919342638257";
export const emailAddress = "mahihomebakes@gmail.com";

export const instagramLink = "https://instagram.com/mahihomebakes";

export interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  category: "Cakes" | "Cupcakes" | "Cookies" | "Chocolates";
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  avatarSrc?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "prod1",
    name: "Vanilla Dream Cake",
    description:
      "Classic vanilla sponge with rich buttercream frosting, perfect for any celebration.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Vanilla Dream Cake",
    category: "Cakes",
  },
  {
    id: "prod2",
    name: "Red Velvet Cupcakes",
    description:
      "Moist red velvet cupcakes with a tangy cream cheese frosting.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Red Velvet Cupcakes",
    category: "Cupcakes",
  },
  {
    id: "prod3",
    name: "Chocolate Chip Cookies",
    description:
      "Crispy on the outside, chewy on the inside, packed with chocolate chips.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Chocolate Chip Cookies",
    category: "Cookies",
  },
  {
    id: "prod4",
    name: "Assorted Luxury Chocolates",
    description:
      "A fine selection of handcrafted dark, milk, and white chocolates.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Assorted Luxury Chocolates",
    category: "Chocolates",
  },
  {
    id: "prod5",
    name: "Strawberry Celebration Cake",
    description:
      "Layers of fresh strawberries and light cream, a fruity delight.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Strawberry Celebration Cake",
    category: "Cakes",
  },
  {
    id: "prod6",
    name: "Lemon Zest Cupcakes",
    description:
      "Bright and refreshing lemon cupcakes with a sweet citrus glaze.",
    imageSrc: "https://placehold.co/600x400.png",
    imageAlt: "Lemon Zest Cupcakes",
    category: "Cupcakes",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test1",
    quote:
      "Mahi's cake was the highlight of our party! Absolutely delicious and beautifully decorated.",
    author: "Sarah L.",
    avatarSrc: "https://placehold.co/100x100.png",
  },
  {
    id: "test2",
    quote: "The cupcakes were a huge hit at the office. Everyone loved them!",
    author: "John B.",
    avatarSrc: "https://placehold.co/100x100.png",
  },
  {
    id: "test3",
    quote: "Best cookies I have ever had! Will definitely treat myself again.",
    author: "Emily K.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "gal1",
    src: "https://placehold.co/600x600.png",
    alt: "Wedding Cake",
    category: "Cakes",
  },
  {
    id: "gal2",
    src: "https://placehold.co/600x600.png",
    alt: "Birthday Cupcakes",
    category: "Cupcakes",
  },
  {
    id: "gal3",
    src: "https://placehold.co/600x600.png",
    alt: "Artisan Cookies",
    category: "Cookies",
  },
  {
    id: "gal4",
    src: "https://placehold.co/600x600.png",
    alt: "Handmade Chocolates",
    category: "Chocolates",
  },
  {
    id: "gal5",
    src: "https://placehold.co/600x600.png",
    alt: "Custom Cake Design",
    category: "Cakes",
  },
  {
    id: "gal6",
    src: "https://placehold.co/600x600.png",
    alt: "Cupcake Assortment",
    category: "Cupcakes",
  },
];
