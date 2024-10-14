import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "status";

export const PaymentTitle = (record: TPayment): string => {
  return record.status?.toString() || String(record.id);
};
