// =============================================================
// HEAVENLY FRUITS — PRODUCT DATA
// =============================================================
// This is the ONLY file you need to edit to manage products.
//
// To add a new product: copy an existing object in `products`
// and change the values.
//
// Prices are stored here for your own reference but are NOT shown
// anywhere on the website right now — customers see "Contact for
// Price" and order via WhatsApp/checkout instead. If you want to
// show prices again later, set SHOW_PRICES to true in this file.
//
// To change an image: put your image in /public/images/ and
// update the `image` field below (e.g. "/images/my-photo.jpg").
// To hide a product: set `available: false`.
// To feature a product on the homepage: set `featured: true`.
// =============================================================

export const SHOW_PRICES = false;

export type ProductVariant = {
  label: string; // e.g. "500g" or "1kg"
  price: number; // price in INR — for your reference only while SHOW_PRICES is false
};

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  shortDescription: string;
  fullDescription: string;
  whyChoose: string[];
  image: string;
  gallery?: string[];
  variants: ProductVariant[];
  available: boolean;
  seasonal?: boolean;
  featured?: boolean;
};

export type CategorySlug =
  | "butter-fruits"
  | "mountain-honey"
  | "homemade-chocolates"
  | "passion-fruits"
  | "kodaikanal-fruits"
  | "hill-vegetables";

export const categories: {
  slug: CategorySlug;
  name: string;
  emoji: string;
  description: string;
}[] = [
  {
    slug: "butter-fruits",
    name: "Butter Fruits",
    emoji: "🥑",
    description: "Fresh Kodaikanal Butter Fruits / Avocados",
  },
  {
    slug: "mountain-honey",
    name: "Mountain Honey",
    emoji: "🍯",
    description: "Pure natural honey sourced from the hills",
  },
  {
    slug: "homemade-chocolates",
    name: "Homemade Chocolates",
    emoji: "🍫",
    description: "Freshly prepared Kodaikanal homemade chocolates",
  },
  {
    slug: "passion-fruits",
    name: "Passion Fruits",
    emoji: "🟣",
    description: "Fresh Kodaikanal passion fruits",
  },
  {
    slug: "kodaikanal-fruits",
    name: "Kodaikanal Fruits",
    emoji: "🍎",
    description: "Seasonal fruits grown/sourced from Kodaikanal",
  },
  {
    slug: "hill-vegetables",
    name: "Hill Vegetables",
    emoji: "🥬",
    description: "Fresh vegetables from Kodaikanal farms",
  },
];

export const products: Product[] = [
  // ---------------- BUTTER FRUITS ----------------
  {
    slug: "kodaikanal-butter-fruit",
    name: "Kodaikanal Butter Fruit",
    category: "butter-fruits",
    shortDescription: "Creamy, farm-fresh butter fruit from the Kodaikanal hills.",
    fullDescription:
      "Our butter fruits (avocados) are handpicked from farms around Kodaikanal. Rich, creamy and naturally ripened, they're perfect for spreads, salads, smoothies or simply enjoyed on their own.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/butter-fruit.jpg",
    variants: [
      { label: "1 kg", price: 249 },
      { label: "2 kg", price: 469 },
      { label: "3 kg (Basket)", price: 679 },
    ],
    available: true,
    featured: true,
  },

  // ---------------- MOUNTAIN HONEY ----------------
  {
    slug: "pure-kodaikanal-mountain-honey",
    name: "Pure Kodaikanal Mountain Honey",
    category: "mountain-honey",
    shortDescription: "Naturally sourced honey from the hills of Kodaikanal.",
    fullDescription:
      "Naturally sourced honey from the beautiful hills of Kodaikanal, carefully packed to preserve its natural goodness. Collected from local hives and minimally processed to retain its authentic flavour and texture.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/mountain-honey.jpg",
    variants: [
      { label: "250g", price: 219 },
      { label: "500g", price: 399 },
      { label: "1kg", price: 749 },
    ],
    available: true,
    featured: true,
  },

  // ---------------- HOMEMADE CHOCOLATES ----------------
  {
    slug: "homemade-milk-chocolate",
    name: "Homemade Milk Chocolate",
    category: "homemade-chocolates",
    shortDescription: "Smooth, creamy milk chocolate made in small batches.",
    fullDescription:
      "Made fresh in small batches using quality ingredients, our homemade milk chocolate has a smooth, creamy finish. A comforting treat for chocolate lovers of all ages.",
    whyChoose: ["Homemade in small batches", "No preservatives added", "Kodaikanal made", "Freshly packed"],
    image: "/images/homemade-chocolate.jpg",
    variants: [
      { label: "100g", price: 149 },
      { label: "250g", price: 339 },
    ],
    available: true,
    featured: true,
  },
  {
    slug: "homemade-dark-chocolate",
    name: "Homemade Dark Chocolate",
    category: "homemade-chocolates",
    shortDescription: "Rich, intense dark chocolate for the true connoisseur.",
    fullDescription:
      "A rich and intense dark chocolate, handcrafted in small batches. Perfect for those who enjoy a deeper, less sweet chocolate experience.",
    whyChoose: ["Homemade in small batches", "No preservatives added", "Kodaikanal made", "Freshly packed"],
    image: "/images/homemade-chocolate.jpg",
    variants: [
      { label: "100g", price: 159 },
      { label: "250g", price: 359 },
    ],
    available: true,
  },
  {
    slug: "homemade-almond-chocolate",
    name: "Homemade Almond Chocolate",
    category: "homemade-chocolates",
    shortDescription: "Crunchy roasted almonds folded into creamy chocolate.",
    fullDescription:
      "Crunchy roasted almonds folded into our signature homemade chocolate. A satisfying bite in every piece.",
    whyChoose: ["Homemade in small batches", "Real roasted almonds", "Kodaikanal made", "Freshly packed"],
    image: "/images/homemade-chocolate.jpg",
    variants: [
      { label: "100g", price: 169 },
      { label: "250g", price: 379 },
    ],
    available: true,
  },
  {
    slug: "homemade-cashew-chocolate",
    name: "Homemade Cashew Chocolate",
    category: "homemade-chocolates",
    shortDescription: "Buttery cashews folded into rich homemade chocolate.",
    fullDescription:
      "Buttery, roasted cashews combined with our rich homemade chocolate for a delightful textured treat.",
    whyChoose: ["Homemade in small batches", "Real roasted cashews", "Kodaikanal made", "Freshly packed"],
    image: "/images/homemade-chocolate.jpg",
    variants: [
      { label: "100g", price: 169 },
      { label: "250g", price: 379 },
    ],
    available: true,
  },
  {
    slug: "homemade-fruit-nut-chocolate",
    name: "Homemade Fruit & Nut Chocolate",
    category: "homemade-chocolates",
    shortDescription: "A classic combination of dried fruit and crunchy nuts.",
    fullDescription:
      "A classic combination of dried fruits and crunchy nuts folded into our homemade chocolate. A little bit of everything in every bite.",
    whyChoose: ["Homemade in small batches", "Real fruit & nuts", "Kodaikanal made", "Freshly packed"],
    image: "/images/homemade-chocolate.jpg",
    variants: [
      { label: "100g", price: 179 },
      { label: "250g", price: 399 },
    ],
    available: true,
  },
  {
    slug: "homemade-chocolate-gift-box",
    name: "Homemade Chocolate Gift Box",
    category: "homemade-chocolates",
    shortDescription: "An assorted box of our homemade chocolates — perfect for gifting.",
    fullDescription:
      "A beautifully packed assortment of our homemade chocolates, perfect for gifting to friends and family. Each box includes a mix of our most loved flavours.",
    whyChoose: ["Homemade in small batches", "Gift-ready packaging", "Kodaikanal made", "Freshly packed"],
    image: "/images/homemade-chocolate.jpg",
    variants: [
      { label: "6-piece box", price: 349 },
      { label: "12-piece box", price: 649 },
    ],
    available: true,
    featured: true,
  },

  // ---------------- PASSION FRUITS ----------------
  {
    slug: "kodaikanal-passion-fruit",
    name: "Kodaikanal Passion Fruit",
    category: "passion-fruits",
    shortDescription: "Tangy, aromatic passion fruit fresh from the hills.",
    fullDescription:
      "Fresh, tangy passion fruit sourced from Kodaikanal farms. Bursting with flavour, they're great for juices, desserts or eating fresh. Availability may vary by season.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/passion-fruit.jpg",
    variants: [
      { label: "500g", price: 179 },
      { label: "1 kg", price: 329 },
    ],
    available: true,
    seasonal: true,
    featured: true,
  },

  // ---------------- KODAIKANAL FRUITS ----------------
  {
    slug: "kodaikanal-apples",
    name: "Kodaikanal Apples",
    category: "kodaikanal-fruits",
    shortDescription: "Crisp, juicy apples from the Kodaikanal hills.",
    fullDescription:
      "Crisp and juicy apples sourced from farms around Kodaikanal. Availability may vary by season.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/kodaikanal-fruits.jpg",
    variants: [
      { label: "1 kg", price: 199 },
      { label: "2 kg", price: 379 },
    ],
    available: true,
    seasonal: true,
  },
  {
    slug: "kodaikanal-pears",
    name: "Kodaikanal Pears",
    category: "kodaikanal-fruits",
    shortDescription: "Sweet, juicy pears fresh from the hills.",
    fullDescription:
      "Sweet and juicy pears grown in the Kodaikanal region. Availability may vary by season.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/kodaikanal-fruits.jpg",
    variants: [{ label: "1 kg", price: 219 }],
    available: true,
    seasonal: true,
  },
  {
    slug: "kodaikanal-plums",
    name: "Kodaikanal Plums",
    category: "kodaikanal-fruits",
    shortDescription: "Sweet-tart plums from the Kodaikanal hills.",
    fullDescription:
      "Sweet-tart plums, freshly sourced from Kodaikanal farms. Availability may vary by season.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/kodaikanal-fruits.jpg",
    variants: [{ label: "1 kg", price: 229 }],
    available: true,
    seasonal: true,
  },
  {
    slug: "kodaikanal-peaches",
    name: "Kodaikanal Peaches",
    category: "kodaikanal-fruits",
    shortDescription: "Soft, fragrant peaches fresh from the hills.",
    fullDescription:
      "Soft and fragrant peaches sourced from Kodaikanal farms. Availability may vary by season.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/kodaikanal-fruits.jpg",
    variants: [{ label: "1 kg", price: 249 }],
    available: true,
    seasonal: true,
  },
  {
    slug: "kodaikanal-strawberries",
    name: "Kodaikanal Strawberries",
    category: "kodaikanal-fruits",
    shortDescription: "Sweet, fragrant strawberries from the hills.",
    fullDescription:
      "Sweet, fragrant strawberries sourced from farms around Kodaikanal. Availability may vary by season.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/kodaikanal-fruits.jpg",
    variants: [{ label: "250g", price: 149 }],
    available: true,
    seasonal: true,
    featured: true,
  },
  {
    slug: "kodaikanal-mulberries",
    name: "Kodaikanal Mulberries",
    category: "kodaikanal-fruits",
    shortDescription: "Deep-coloured, sweet mulberries from the hills.",
    fullDescription:
      "Sweet, deep-coloured mulberries sourced from Kodaikanal farms. Availability may vary by season.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/kodaikanal-fruits.jpg",
    variants: [{ label: "250g", price: 129 }],
    available: true,
    seasonal: true,
  },

  // ---------------- HILL VEGETABLES ----------------
  {
    slug: "kodaikanal-carrot",
    name: "Kodaikanal Carrot",
    category: "hill-vegetables",
    shortDescription: "Fresh, crunchy carrots from the hill farms.",
    fullDescription: "Fresh, crunchy carrots sourced from farms around Kodaikanal. Availability may vary by season.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/kodaikanal-vegetables.jpg",
    variants: [{ label: "1 kg", price: 79 }],
    available: true,
    seasonal: true,
  },
  {
    slug: "kodaikanal-beans",
    name: "Kodaikanal Beans",
    category: "hill-vegetables",
    shortDescription: "Fresh green beans from the hill farms.",
    fullDescription: "Fresh green beans sourced from Kodaikanal farms. Availability may vary by season.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/kodaikanal-vegetables.jpg",
    variants: [{ label: "1 kg", price: 89 }],
    available: true,
    seasonal: true,
  },
  {
    slug: "kodaikanal-beetroot",
    name: "Kodaikanal Beetroot",
    category: "hill-vegetables",
    shortDescription: "Fresh beetroot from the Kodaikanal hills.",
    fullDescription: "Fresh beetroot sourced from farms around Kodaikanal. Availability may vary by season.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/kodaikanal-vegetables.jpg",
    variants: [{ label: "1 kg", price: 69 }],
    available: true,
    seasonal: true,
  },
  {
    slug: "kodaikanal-cabbage",
    name: "Kodaikanal Cabbage",
    category: "hill-vegetables",
    shortDescription: "Fresh cabbage from the hill farms.",
    fullDescription: "Fresh cabbage sourced from farms around Kodaikanal. Availability may vary by season.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/kodaikanal-vegetables.jpg",
    variants: [{ label: "1 pc (approx 1kg)", price: 49 }],
    available: true,
    seasonal: true,
  },
  {
    slug: "kodaikanal-broccoli",
    name: "Kodaikanal Broccoli",
    category: "hill-vegetables",
    shortDescription: "Fresh broccoli from the hill farms.",
    fullDescription: "Fresh broccoli sourced from farms around Kodaikanal. Availability may vary by season.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/kodaikanal-vegetables.jpg",
    variants: [{ label: "500g", price: 89 }],
    available: true,
    seasonal: true,
  },
  {
    slug: "kodaikanal-fresh-greens",
    name: "Kodaikanal Fresh Greens",
    category: "hill-vegetables",
    shortDescription: "A mix of fresh leafy greens from the hill farms.",
    fullDescription:
      "A fresh mix of leafy greens sourced from Kodaikanal farms. Availability may vary by season.",
    whyChoose: ["Natural product", "Carefully packed", "Kodaikanal sourced", "Freshly packed"],
    image: "/images/kodaikanal-vegetables.jpg",
    variants: [{ label: "500g", price: 59 }],
    available: true,
    seasonal: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategorySlug): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
