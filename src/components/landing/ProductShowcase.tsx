"use client";

import { Star } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import type { ProductShowcaseItem } from "@/types/domain.types";
import { useTranslations } from "next-intl";

type ProductReview = {
  id: string;
  author: string;
  rating: number;
  comment: string;
  avatar: string;
};

const SHOWCASE_PRODUCTS: ProductShowcaseItem[] = [
  {
    id: "1",
    name: "Toy Name",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=400",
    reviews: [
      {
        id: "r1",
        author: "Review A",
        rating: 5,
        comment:
          "My pet loves itmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm!",
        avatar: "👩",
      },
      {
        id: "r2",
        author: "Review B",
        rating: 5,
        comment:
          "Great quality!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
        avatar: "👨",
      },
    ],
  },
  {
    id: "2",
    name: "Toy Name",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=400",
    reviews: [
      {
        id: "r3",
        author: "Review C",
        rating: 5,
        comment: "Highly recommended",
        avatar: "👩‍🦰",
      },
      {
        id: "r4",
        author: "Review D",
        rating: 5,
        comment: "Perfect for my cat",
        avatar: "👨‍🦱",
      },
    ],
  },
  {
    id: "3",
    name: "Toy Name",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=400",
    reviews: [
      {
        id: "r5",
        author: "Review E",
        rating: 5,
        comment: "Worth every penny",
        avatar: "👵",
      },
      {
        id: "r6",
        author: "Review F",
        rating: 5,
        comment: "Durable and fun",
        avatar: "👴",
      },
    ],
  },
  {
    id: "4",
    name: "Toy Name",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=400",
    reviews: [
      {
        id: "r7",
        author: "Review G",
        rating: 5,
        comment: "Best purchase ever",
        avatar: "🧑",
      },
    ],
  },
  {
    id: "5",
    name: "Toy Name",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=400",
    reviews: [
      {
        id: "r5",
        author: "Review E",
        rating: 5,
        comment: "Worth every penny",
        avatar: "👵",
      },
      {
        id: "r6",
        author: "Review F",
        rating: 5,
        comment: "Durable and fun",
        avatar: "👴",
      },
    ],
  },
  {
    id: "6",
    name: "Toy Name",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=400",
    reviews: [
      {
        id: "r1",
        author: "Review A",
        rating: 5,
        comment: "My pet loves it!",
        avatar: "👩",
      },
      {
        id: "r2",
        author: "Review B",
        rating: 5,
        comment: "Great quality",
        avatar: "👨",
      },
    ],
  },
  {
    id: "7",
    name: "Toy Name",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=400",
    reviews: [
      {
        id: "r3",
        author: "Review C",
        rating: 5,
        comment: "Highly recommended",
        avatar: "👩‍🦰",
      },
      {
        id: "r4",
        author: "Review D",
        rating: 5,
        comment: "Perfect for my cat",
        avatar: "👨‍🦱",
      },
    ],
  },
  {
    id: "8",
    name: "Toy Name",
    price: "20$",
    image:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=400",
    reviews: [
      {
        id: "r7",
        author: "Review G",
        rating: 5,
        comment: "Best purchase ever",
        avatar: "🧑",
      },
    ],
  },
];

const ReviewBubble = ({
  review,
  positionClass,
}: {
  review: ProductReview;
  positionClass: string;
}) => (
  <div
    className={`absolute ${positionClass} z-0 w-48 bg-white border-2 border-pink-200 rounded-2xl p-3 shadow-sm transition-transform duration-300 group-hover:scale-105`}
    style={{
      boxShadow: "4px 4px 0px 0px rgba(249, 168, 212, 0.5)",
    }}
  >
    <div className="flex items-center gap-2 mb-1">
      <span className="text-lg bg-pink-100 rounded-full w-8 h-8 flex items-center justify-center border border-pink-300 z-10 relative">
        {review.avatar}
      </span>
      <span className="font-bold text-gray-800 text-xs">{review.author}</span>
    </div>
    <p className="text-gray-700 text-xs italic relative z-10 text-wrap break-words line-clamp-5">
      &quot;{review.comment}&quot;
    </p>
  </div>
);

export const ProductShowcase = () => {
  const t = useTranslations("LandingPage.ProductShowcase");
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t("title")}</h2>
        </div>
        <Carousel className="w-full overflow-visible" opts={{ align: "start" }}>
          <CarouselContent className="-ml-4 overflow-visible">
            {SHOWCASE_PRODUCTS.map((product, index) => {
              const isEven = index % 2 === 0;

              const pos1 = isEven
                ? "-bottom-32 -left-8 rotate-[-2deg]"
                : "-bottom-40 -left-4 rotate-[-1deg]";
              const pos2 = isEven
                ? "-bottom-48 -right-4 rotate-[2deg]"
                : "-bottom-36 -right-8 rotate-[3deg]";

              return (
                <CarouselItem
                  key={product.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 pt-10 pb-56 overflow-visible"
                >
                  <div className="relative group h-full w-full">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      {product.reviews[0] && (
                        <ReviewBubble
                          review={product.reviews[0]}
                          positionClass={pos1}
                        />
                      )}
                      {product.reviews[1] && (
                        <ReviewBubble
                          review={product.reviews[1]}
                          positionClass={pos2}
                        />
                      )}
                    </div>

                    <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full transform group-hover:-translate-y-2">
                      <div className="h-80 bg-gray-200 overflow-hidden relative rounded-t-2xl">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="p-6 text-center">
                        <h3 className="font-bold text-xl text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                          {product.price}
                        </p>
                        <div className="flex justify-center gap-1 mt-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-20 h-16 w-16 bg-white hover:bg-pink-50 border-2 border-pink-200 text-pink-700 shadow-xl top-[240px] -translate-y-1/2"></CarouselPrevious>

          <CarouselNext className="hidden sm:flex -right-20 h-16 w-16 bg-white hover:bg-pink-50 border-2 border-pink-200 text-pink-700 shadow-xl top-[240px] -translate-y-1/2"></CarouselNext>
        </Carousel>
        <div className="flex justify-center w-full">
          {" "}
          <Link href="/products">
            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-pink-300 bg-background hover:bg-pink-50 hover:text-accent-foreground h-10 px-4 py-2 text-pink-600">
              {t("viewAll")}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
