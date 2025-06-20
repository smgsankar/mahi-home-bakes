export interface Product {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  category: 'Cakes' | 'Cupcakes' | 'Cookies' | 'Chocolates';
  dataAiHint: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  avatarSrc?: string;
  dataAiHint?: string;
}

export interface GalleryImage {
  id:string;
  src: string;
  alt: string;
  category: string;
  dataAiHint: string;
}

export const products: Product[] = [
  {
    id: 'prod1',
    name: 'Vanilla Dream Cake',
    description: 'Classic vanilla sponge with rich buttercream frosting, perfect for any celebration.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Vanilla Dream Cake',
    category: 'Cakes',
    dataAiHint: 'vanilla cake'
  },
  {
    id: 'prod2',
    name: 'Red Velvet Cupcakes',
    description: 'Moist red velvet cupcakes with a tangy cream cheese frosting.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Red Velvet Cupcakes',
    category: 'Cupcakes',
    dataAiHint: 'red cupcake'
  },
  {
    id: 'prod3',
    name: 'Chocolate Chip Cookies',
    description: 'Crispy on the outside, chewy on the inside, packed with chocolate chips.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Chocolate Chip Cookies',
    category: 'Cookies',
    dataAiHint: 'chocolate cookies'
  },
  {
    id: 'prod4',
    name: 'Assorted Luxury Chocolates',
    description: 'A fine selection of handcrafted dark, milk, and white chocolates.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Assorted Luxury Chocolates',
    category: 'Chocolates',
    dataAiHint: 'luxury chocolates'
  },
  {
    id: 'prod5',
    name: 'Strawberry Celebration Cake',
    description: 'Layers of fresh strawberries and light cream, a fruity delight.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Strawberry Celebration Cake',
    category: 'Cakes',
    dataAiHint: 'strawberry cake'
  },
  {
    id: 'prod6',
    name: 'Lemon Zest Cupcakes',
    description: 'Bright and refreshing lemon cupcakes with a sweet citrus glaze.',
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Lemon Zest Cupcakes',
    category: 'Cupcakes',
    dataAiHint: 'lemon cupcake'
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'test1',
    quote: "Mahi's cake was the highlight of our party! Absolutely delicious and beautifully decorated.",
    author: 'Sarah L.',
    avatarSrc: 'https://placehold.co/100x100.png',
    dataAiHint: 'happy person'
  },
  {
    id: 'test2',
    quote: 'The cupcakes were a huge hit at the office. Everyone loved them!',
    author: 'John B.',
    avatarSrc: 'https://placehold.co/100x100.png',
    dataAiHint: 'smiling face'
  },
  {
    id: 'test3',
    quote: 'Best cookies I have ever had! Will definitely order again.',
    author: 'Emily K.',
    dataAiHint: 'satisfied customer'
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 'gal1', src: 'https://placehold.co/600x600.png', alt: 'Wedding Cake', category: 'Cakes', dataAiHint: 'wedding cake' },
  { id: 'gal2', src: 'https://placehold.co/600x600.png', alt: 'Birthday Cupcakes', category: 'Cupcakes', dataAiHint: 'birthday cupcakes' },
  { id: 'gal3', src: 'https://placehold.co/600x600.png', alt: 'Artisan Cookies', category: 'Cookies', dataAiHint: 'artisan cookies' },
  { id: 'gal4', src: 'https://placehold.co/600x600.png', alt: 'Handmade Chocolates', category: 'Chocolates', dataAiHint: 'handmade chocolates' },
  { id: 'gal5', src: 'https://placehold.co/600x600.png', alt: 'Custom Cake Design', category: 'Cakes', dataAiHint: 'custom cake' },
  { id: 'gal6', src: 'https://placehold.co/600x600.png', alt: 'Cupcake Assortment', category: 'Cupcakes', dataAiHint: 'cupcake assortment' },
];
