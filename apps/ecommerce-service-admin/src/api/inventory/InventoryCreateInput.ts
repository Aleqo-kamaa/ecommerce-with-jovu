import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryCreateInput = {
  quantity?: number | null;
  warehouseLocation?: string | null;
  product?: ProductWhereUniqueInput | null;
};
