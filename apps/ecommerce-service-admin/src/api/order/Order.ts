import { User } from "../user/User";
import { Payment } from "../payment/Payment";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  totalAmount: number | null;
  status: string | null;
  payments?: Array<Payment>;
  trackingNumber: string | null;
  shippingAddress: string | null;
};
