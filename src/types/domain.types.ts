// Domain Types
// TODO: Define domain-specific types for business logic
export interface Cart {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface ProductShowcaseItem {
  id: string;
  name: string;
  price: string;
  image: string;
  reviews: ReviewItem[];
}
