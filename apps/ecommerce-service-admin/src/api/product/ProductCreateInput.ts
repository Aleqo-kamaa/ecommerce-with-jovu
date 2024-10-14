import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewCreateNestedManyWithoutProductsInput } from "./ReviewCreateNestedManyWithoutProductsInput";
import { InventoryCreateNestedManyWithoutProductsInput } from "./InventoryCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  price?: number | null;
  description?: string | null;
  stock?: number | null;
  name?: string | null;
  category?: CategoryWhereUniqueInput | null;
  reviews?: ReviewCreateNestedManyWithoutProductsInput;
  inventories?: InventoryCreateNestedManyWithoutProductsInput;
};
