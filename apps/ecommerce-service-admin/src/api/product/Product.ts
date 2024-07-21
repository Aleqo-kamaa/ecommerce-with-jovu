import { Category } from "../category/Category";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  description: string | null;
  stock: number | null;
  name: string | null;
  category?: Category | null;
};
