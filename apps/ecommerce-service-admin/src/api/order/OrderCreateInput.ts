import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  user?: UserWhereUniqueInput | null;
  totalAmount?: number | null;
  status?: string | null;
};
