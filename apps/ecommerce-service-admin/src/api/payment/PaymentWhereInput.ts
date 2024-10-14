import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  amount?: FloatNullableFilter;
  paymentMethod?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
};
