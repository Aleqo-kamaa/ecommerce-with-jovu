import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  user?: UserWhereUniqueInput | null;
  totalAmount?: number | null;
  status?: string | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  trackingNumber?: string | null;
  shippingAddress?: string | null;
};
