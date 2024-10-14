import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentUpdateInput = {
  status?: string | null;
  amount?: number | null;
  paymentMethod?: string | null;
  order?: OrderWhereUniqueInput | null;
};
