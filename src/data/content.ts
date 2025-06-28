export const whatsappNumber = "+919342638257";
export const emailAddress = "mahihomebakes@gmail.com";

export const instagramLink = "https://instagram.com/mahihomebakes";
export const whatsappLink = `https://wa.me/${whatsappNumber.replace(
  /\D/g,
  ""
)}`;

export interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  category: "Cakes" | "Cupcakes" | "Cookies" | "Chocolates";
}

export interface GalleryImage {
  src: string;
  alt: string;
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

export const testimonials: string[] = [
  "It's fantastic to have so many healthy cake and muffin options without having to compromise your taste buds",
  "Very friendly approach and very much attentive to details we give for customisation.",
  "I would highly recommend Mahi home bakes if you're looking for a guilt free indulgence!",
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/gallery1.jpg",
    alt: "Tower themed birthday cake with special pops and muffins",
  },
  {
    src: "/gallery/gallery2.jpg",
    alt: "Rasamalai celebration cake",
  },
  {
    src: "/gallery/gallery3.jpg",
    alt: "Minion themed birthday cake",
  },
  {
    src: "/gallery/gallery4.jpg",
    alt: "Rose themed birthday cake",
  },
  {
    src: "/gallery/gallery5.jpg",
    alt: "Butterfly themed birthday cake",
  },
  {
    src: "/gallery/gallery6.jpg",
    alt: "Dark chocolate birthday cake",
  },
];
