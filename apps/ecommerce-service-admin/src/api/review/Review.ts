import { Product } from "../product/Product";
import { User } from "../user/User";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number | null;
  comment: string | null;
  product?: Product | null;
  user?: User | null;
};
