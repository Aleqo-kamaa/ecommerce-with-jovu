import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewUpdateManyWithoutProductsInput } from "./ReviewUpdateManyWithoutProductsInput";
import { InventoryUpdateManyWithoutProductsInput } from "./InventoryUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  price?: number | null;
  description?: string | null;
  stock?: number | null;
  name?: string | null;
  category?: CategoryWhereUniqueInput | null;
  reviews?: ReviewUpdateManyWithoutProductsInput;
  inventories?: InventoryUpdateManyWithoutProductsInput;
};
