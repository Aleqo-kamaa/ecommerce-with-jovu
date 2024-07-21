import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ProductUpdateInput = {
  price?: number | null;
  description?: string | null;
  stock?: number | null;
  name?: string | null;
  category?: CategoryWhereUniqueInput | null;
};
