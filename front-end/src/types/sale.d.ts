import { UUID } from "crypto";

type Sale = {
  id: number;
  totalPrice: number;
  createdAt: Date;
  customerId: UUID;
};

type SaleProduct = {
  id: number;
  saleId: number;
  productCustomId: string;
  amount: number;
};
