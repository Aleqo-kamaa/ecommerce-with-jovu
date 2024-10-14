import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  amount?: SortOrder;
  paymentMethod?: SortOrder;
  orderId?: SortOrder;
};
