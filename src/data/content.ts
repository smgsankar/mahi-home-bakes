export const whatsappNumber = "+919342638257";
export const emailAddress = "mahihomebakes@gmail.com";

export const instagramLink = "https://instagram.com/mahihomebakes";
export const whatsappLink = `https://wa.me/${whatsappNumber.replace(
  /\D/g,
  ""
)}`;

export type ProductTag = "Cakes" | "Muffins" | "Cookies" | "Chocolates" | "All";

export interface Product {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  category: ProductTag[];
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Themed Celebration Cake",
    description:
      "Special themed cakes customized to cheer up your celebrations.",
    imageSrc: "/catalog/product-themed-cake.webp",
    imageAlt: "Spiderman themed birthday cake",
    category: ["Cakes", "All"],
  },
  {
    id: 2,
    name: "Red Velvet Muffins",
    description: "Moist red velvet muffins with a tangy cream cheese frosting.",
    imageSrc: "/catalog/product-red-velvet-muffins.webp",
    imageAlt: "Red Velvet Muffins",
    category: ["Muffins", "All"],
  },
  {
    id: 3,
    name: "Chocolate Chip Cookies",
    description:
      "Crispy on the outside, chewy on the inside, packed with chocolate chips.",
    imageSrc: "/catalog/product-choco-cookies.webp",
    imageAlt: "Chocolate Chip Cookies",
    category: ["Cookies", "All"],
  },
  {
    id: 4,
    name: "Assorted Luxury Chocolates",
    description:
      "A fine selection of handcrafted dark, milk, and white chocolates.",
    imageSrc: "/catalog/product-choco.webp",
    imageAlt: "Assorted Luxury Chocolates",
    category: ["Chocolates", "All"],
  },
  {
    id: 5,
    name: "Honey and Jam Cake",
    description:
      "Honey sponge layered with sweet jam and coconut — a soft, fruity delight in every slice.",
    imageSrc: "/catalog/product-honey-jam-cakes.webp",
    imageAlt: "Strawberry Celebration Cake",
    category: ["Cakes", "All"],
  },
  {
    id: 6,
    name: "Chocolate Muffins",
    description:
      "Soft chocolate muffins loaded with rich choco chips, a melt-in-mouth treat for every chocolate lover.",
    imageSrc: "/catalog/product-choco-muffins.webp",
    imageAlt: "Lemon Zest Cupcakes",
    category: ["Muffins", "All"],
  },
  {
    id: 7,
    name: "Chocolate Dream Cake",
    description:
      "A rich chocolate cake layered with velvety chocolate ganache, perfect for chocolate lovers.",
    imageSrc: "/catalog/product-dream-cake.webp",
    imageAlt: "Chocolate Dream Cake",
    category: ["Cakes"],
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
