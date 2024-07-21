import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ProductWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  description?: StringNullableFilter;
  stock?: IntNullableFilter;
  name?: StringNullableFilter;
  category?: CategoryWhereUniqueInput;
};
