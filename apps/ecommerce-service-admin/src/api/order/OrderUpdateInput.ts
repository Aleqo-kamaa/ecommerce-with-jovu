import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  user?: UserWhereUniqueInput | null;
  totalAmount?: number | null;
  status?: string | null;
};
