import { User } from "../user/User";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  totalAmount: number | null;
  status: string | null;
};
