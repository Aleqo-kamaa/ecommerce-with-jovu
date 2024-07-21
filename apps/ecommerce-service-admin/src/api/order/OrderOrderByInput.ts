import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  totalAmount?: SortOrder;
  status?: SortOrder;
  trackingNumber?: SortOrder;
  shippingAddress?: SortOrder;
};
