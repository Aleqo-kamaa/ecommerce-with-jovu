import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantity?: SortOrder;
  warehouseLocation?: SortOrder;
  productId?: SortOrder;
};
