import { Order } from "../order/Order";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: string | null;
  amount: number | null;
  paymentMethod: string | null;
  order?: Order | null;
};
