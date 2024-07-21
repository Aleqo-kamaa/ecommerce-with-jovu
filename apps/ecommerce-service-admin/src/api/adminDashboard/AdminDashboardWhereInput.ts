import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AdminDashboardWhereInput = {
  id?: StringFilter;
  activity?: StringNullableFilter;
  adminName?: StringNullableFilter;
  email?: StringNullableFilter;
  salesReports?: StringNullableFilter;
  productAnalytics?: StringNullableFilter;
};
