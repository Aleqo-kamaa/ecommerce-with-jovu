import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  price?: SortOrder;
  description?: SortOrder;
  stock?: SortOrder;
  name?: SortOrder;
  categoryId?: SortOrder;
};
