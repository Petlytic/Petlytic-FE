// src/types/common.types.ts
export interface Authority {
  authority: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  role: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  phoneNumber: string;
  active: boolean;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  enabled: boolean;
  accountNonLocked: boolean;
  authorities: Authority[];
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}
