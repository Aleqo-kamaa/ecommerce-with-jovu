import { Category } from "../category/Category";
import { Review } from "../review/Review";
import { Inventory } from "../inventory/Inventory";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  description: string | null;
  stock: number | null;
  name: string | null;
  category?: Category | null;
  reviews?: Array<Review>;
  inventories?: Array<Inventory>;
};
