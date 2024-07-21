import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  user?: UserWhereUniqueInput | null;
  totalAmount?: number | null;
  status?: string | null;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  trackingNumber?: string | null;
  shippingAddress?: string | null;
};
