export interface IOrderResponse {
  name: string;
  success: boolean;
  order: {
    number: number;
  };
}

export type TOrderStatus = "done" | "pending" | "created";

export interface IWsOrder {
  _id: string;
  status: TOrderStatus;
  ingredients: Array<string>;
  number: number;
  createdAt: string;
  updatedAt: string;
  name: string;
}

export interface IWsOrders {
  success: boolean;
  orders: Array<IWsOrder>;
  total: number;
  totalToday: number;
}
