export interface IOrderResponse {
  name: string;
  success: boolean;
  order: {
    number: number;
  };
}
