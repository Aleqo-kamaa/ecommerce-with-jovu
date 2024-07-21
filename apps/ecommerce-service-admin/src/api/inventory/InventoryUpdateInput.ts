import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryUpdateInput = {
  quantity?: number | null;
  warehouseLocation?: string | null;
  product?: ProductWhereUniqueInput | null;
};
