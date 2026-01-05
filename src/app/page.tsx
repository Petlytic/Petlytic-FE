// src/app/page.tsx
import { Header } from "@/components/common/Header";
import { ProductCard } from "@/components/features/Products/ProductCard";
import { ProductFilters } from "@/components/features/Products/ProductFilters";
import { Product } from "@/types/common.types";

// Dữ liệu giả lập (Sau này bạn sẽ fetch từ API trong useEffect hoặc Server Component)
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Premium Dog Food - Chicken Flavor",
    price: 45.99,
    description: "High-quality nutrition for adult dogs with real chicken.",
    image:
      "https://images.unsplash.com/photo-1589924691195-41432c84c161?q=80&w=1000",
    category: "Food & Nutrition",
    rating: 4.8,
    inStock: true,
  },
  {
    id: "2",
    name: "Interactive Cat Toy Laser",
    price: 12.5,
    description: "Automatic laser toy to keep your cat entertained for hours.",
    image:
      "https://images.unsplash.com/photo-1545249390-6bdfa2aeb03d?q=80&w=1000",
    category: "Toys",
    rating: 4.5,
    inStock: true,
  },
  {
    id: "3",
    name: "Ergonomic Pet Bed",
    price: 89.0,
    description: "Orthopedic memory foam bed for maximum comfort.",
    image:
      "https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&w=1000",
    category: "Accessories",
    rating: 4.9,
    inStock: false,
  },
  {
    id: "4",
    name: "Organic Dog Shampoo",
    price: 18.0,
    description: "Gentle formula suitable for sensitive skin.",
    image:
      "https://images.unsplash.com/photo-1585846416120-3a7354ed7d65?q=80&w=1000",
    category: "Grooming",
    rating: 4.3,
    inStock: true,
  },
  {
    id: "5",
    name: "Heavy Duty Leash",
    price: 24.99,
    description: "Durable nylon leash with reflective stitching.",
    image:
      "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000",
    category: "Accessories",
    rating: 4.6,
    inStock: true,
  },
  {
    id: "6",
    name: "Cat Scratching Post",
    price: 35.0,
    description: "Sisal-covered post to satisfy natural scratching instincts.",
    image:
      "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1000",
    category: "Toys",
    rating: 4.7,
    inStock: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <ProductFilters />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold tracking-tight">
                Featured Products
              </h1>
              <span className="text-muted-foreground">
                {MOCK_PRODUCTS.length} results
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {MOCK_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
