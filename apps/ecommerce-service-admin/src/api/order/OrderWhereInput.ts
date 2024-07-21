import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  totalAmount?: FloatNullableFilter;
  status?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  trackingNumber?: StringNullableFilter;
  shippingAddress?: StringNullableFilter;
};
